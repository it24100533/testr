"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="relative flex items-center justify-center h-[1.2rem] w-[1.2rem]">
        <Sun
          strokeWidth={1.5}
          className="absolute h-full w-full text-neutral-800 dark:text-neutral-200 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:-rotate-90 dark:scale-0 dark:opacity-0"
        />
        <Moon
          strokeWidth={1.5}
          className="absolute h-full w-full text-neutral-800 dark:text-neutral-200 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100"
        />
      </div>
    </Button>
  );
}
