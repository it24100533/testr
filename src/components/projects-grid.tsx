"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";

interface ProjectLink {
  readonly type: string;
  readonly href: string;
  readonly icon: React.ReactNode;
}

interface ProjectItem {
  readonly title: string;
  readonly href: string;
  readonly dates: string;
  readonly active: boolean;
  readonly description: string;
  readonly technologies: ReadonlyArray<string>;
  readonly links: ReadonlyArray<ProjectLink>;
  readonly image: string;
  readonly video: string;
}

interface ProjectsGridProps {
  projects: ReadonlyArray<ProjectItem>;
  initialVisibleCount?: number;
  animationDelay?: number;
}

export function ProjectsGrid({
  projects,
  initialVisibleCount = 4,
  animationDelay = 0.04,
}: ProjectsGridProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, initialVisibleCount);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-[800px] mx-auto">
        {visibleProjects.map((project, id) => (
          <BlurFade key={project.title} delay={animationDelay * 8 + id * 0.05}>
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
      {!showAll && projects.length > initialVisibleCount ? (
        <BlurFade delay={animationDelay * 8 + visibleProjects.length * 0.05}>
          <div className="w-full flex justify-center">
            <button
              type="button"
              className="text-sm text-blue-500 hover:underline rounded-[var(--radius)] px-3 py-1.5 transition-colors duration-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              onClick={() => setShowAll(true)}
            >
              See more projects
            </button>
          </div>
        </BlurFade>
      ) : null}
    </div>
  );
}


