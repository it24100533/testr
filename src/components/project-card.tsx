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
import { useEffect, useRef } from "react";
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

export function ProjectCard({
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

    // Autoplay when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    // Kick off initial attempts
    tryPlay();

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
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            controls={false}
            controlsList="nodownload nofullscreen noplaybackrate"
            disablePictureInPicture
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
            onLoadedMetadata={() => {
              const el = videoRef.current;
              if (el) {
                try {
                  el.play();
                } catch {}
              }
            }}
            onLoadedData={() => {
              const el = videoRef.current;
              if (el) {
                try {
                  el.play();
                } catch {}
              }
            }}
            onCanPlay={() => {
              const el = videoRef.current;
              if (el) {
                try {
                  el.play();
                } catch {}
              }
            }}
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
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
