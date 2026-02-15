import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, memo } from "react";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCardComponent({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Ensure mobile autoplay compatibility
    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "");
    el.setAttribute("muted", "");

    const tryPlay = () => {
      const p = el.play();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // ignore autoplay rejection
        });
      }
    };

    // Load and autoplay when visible (lazy loading)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load video source when it becomes visible
            if (el.readyState === 0) {
              el.load();
            }
            tryPlay();
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(el);

    // Fallbacks: attempt play on first user interaction and visibility changes
    const onFirstInteract = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirstInteract);
      window.removeEventListener("scroll", onFirstInteract);
      window.removeEventListener("click", onFirstInteract);
    };
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    window.addEventListener("touchstart", onFirstInteract, { once: true });
    window.addEventListener("scroll", onFirstInteract, { once: true });
    window.addEventListener("click", onFirstInteract, { once: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("touchstart", onFirstInteract);
      window.removeEventListener("scroll", onFirstInteract);
      window.removeEventListener("click", onFirstInteract);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [video]);
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border h-full"
      }
    >
      <div className={cn("block aspect-video w-full overflow-hidden", className)}>
        {video && (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            crossOrigin="anonymous"
            controls={false}
            controlsList="nodownload nofullscreen noplaybackrate"
            disablePictureInPicture
            className="pointer-events-none mx-auto h-full w-full object-cover object-top"
            onLoadedMetadata={() => {
              const el = videoRef.current;
              if (el) {
                try {
                  el.play().catch(() => {});
                } catch {}
              }
            }}
            onLoadedData={() => {
              const el = videoRef.current;
              if (el) {
                try {
                  el.play().catch(() => {});
                } catch {}
              }
            }}
            onCanPlay={() => {
              const el = videoRef.current;
              if (el) {
                try {
                  el.play().catch(() => {});
                } catch {}
              }
            }}
          />
        )}
        {image && (
          <Image
            src={image}
            alt={`${title} project showcase image`}
            width={500}
            height={281}
            loading="lazy"
            className="h-full w-full overflow-hidden object-cover object-top"
            quality={85}
            sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

export const ProjectCard = memo(ProjectCardComponent);
