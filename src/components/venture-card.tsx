"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  images?: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function VentureCard({
  title,
  description,
  dates,
  location,
  image,
  images,
  links,
}: Props) {
  const [showImages, setShowImages] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const hasImages = images && images.length > 0;

  const handleImageError = (src: string) => {
    setFailedImages(prev => new Set(prev).add(src));
  };

  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <button
          type="button"
          onClick={() => hasImages && setShowImages((prev) => !prev)}
          className={`inline-flex items-center gap-1.5 font-semibold leading-none text-left -ml-1 rounded px-1 group ${
            hasImages
              ? "cursor-pointer focus:outline-none"
              : ""
          }`}
          aria-expanded={showImages}
          aria-controls={`${title}-images`}
        >
          {title}
          {hasImages && (
            <ChevronRight
              className={cn(
                "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                showImages ? "rotate-90" : "rotate-0"
              )}
            />
          )}
        </button>
        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      <AnimatePresence initial={false}>
        {hasImages && showImages && (
          <motion.div
            id={`${title}-images`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {images!.map((src, idx) => (
                !failedImages.has(src) && (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block aspect-video rounded-lg border overflow-hidden bg-muted"
                  >
                    <img
                      src={src}
                      alt={`${title} showcase ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={() => handleImageError(src)}
                    />
                  </motion.div>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
