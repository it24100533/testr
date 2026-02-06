"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  images?: readonly string[];
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  images,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const hasExpandable = (description?.length ?? 0) > 0 || (images?.length ?? 0) > 0;

  const handleClick = () => {
    if (hasExpandable) {
      setIsExpanded(!isExpanded);
    } else if (href) {
      window.location.href = href;
    }
  };

  return (
    <div
      className="block cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {(description || (images && images.length > 0)) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 overflow-hidden"
            >
              {description && (
                <p className="text-xs sm:text-sm mb-3">{description}</p>
              )}
              {images && images.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {images.map((src, idx) => (
                    <a
                      key={idx}
                      href={src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-video rounded-lg border overflow-hidden hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <img
                        src={src}
                        alt={`${title} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
