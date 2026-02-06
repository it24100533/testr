"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

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
  const hasImages = images && images.length > 0;

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
          className={`inline-flex items-center gap-1.5 font-semibold leading-none text-left -ml-1 rounded px-1 ${
            hasImages
              ? "cursor-pointer hover:bg-muted/50 focus:outline-none"
              : ""
          }`}
          aria-expanded={showImages}
          aria-controls={`${title}-images`}
        >
          {title}
          {hasImages && (
            <motion.span
              animate={{ rotate: showImages ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="inline-flex text-muted-foreground"
            >
              <ChevronDown className="size-4" />
            </motion.span>
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
                <motion.a
                  key={idx}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block aspect-video rounded-lg border overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <img
                    src={src}
                    alt={`${title} showcase ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.a>
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
