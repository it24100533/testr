import { ContactImages } from "@/components/contact-images";
import { VentureCard } from "@/components/venture-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectsGrid } from "@/components/projects-grid";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import AnimatedTooltipPreview from "@/components/ui/animated-tooltip-demo";

const BLUR_FADE_DELAY = 0.04;

export default function HomeBelowFold() {
  return (
    <>
      <section id="projects">
        <div className="space-y-6 sm:space-y-12 w-full py-6 sm:py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-[var(--radius)] bg-foreground text-background px-3 py-1 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Projects I built instead of sleeping. Powered by caffeine, fueled by curiosity, and debugged under the dim glow of midnight screens.
                </p>
              </div>
            </div>
          </BlurFade>
          <ProjectsGrid projects={[...DATA.projects]} initialVisibleCount={4} animationDelay={BLUR_FADE_DELAY} />
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                images={work.images}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                images={education.images}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12.5}>
            <h2 className="text-xl font-bold">Certifications</h2>
          </BlurFade>
          {DATA.certifications.map((cert, id) => (
            <BlurFade
              key={cert.name}
              delay={BLUR_FADE_DELAY * 12.6 + id * 0.05}
            >
              <ResumeCard
                key={cert.name}
                href={cert.link}
                logoUrl={cert.logoUrl}
                altText={cert.issuer}
                title={cert.name}
                subtitle={cert.issuer}
                period={cert.date}
              />
            </BlurFade>
          ))}
          <BlurFade delay={BLUR_FADE_DELAY * 12.6 + DATA.certifications.length * 0.05}>
            <div className="w-full flex justify-center">
              <Link
                href="https://www.credly.com/users/ravindudanthanarayana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                View more on Credly
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="ventures">
        <div className="space-y-6 sm:space-y-12 w-full py-6 sm:py-12 pb-0 sm:pb-4">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-[var(--radius)] bg-foreground text-background px-3 py-1 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                  Ventures
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I took part in{" "}
                  {DATA.ventures.length}+ ventures. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed">
              {DATA.ventures.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <VentureCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    images={project.images}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="recommendations" className="overflow-x-hidden -mt-2 sm:mt-0">
        <div className="grid items-center justify-center gap-3 sm:gap-4 px-4 text-center md:px-6 w-full max-w-full pt-2 pb-6 sm:py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tight">
                Recommendations
              </h2>
              <p className="text-muted-foreground">
                Trusted Recommendations from Mentors, Seniors & Collaborators.
              </p>
              {/* Keep the checklist handy for development: */}
              {/*
              - shadcn/ui project structure
              - Tailwind CSS v4.0 (current: 3.4.1)
              - TypeScript

              If any of these are missing, run `npx shadcn@latest init`,
              install Tailwind (`npm install -D tailwindcss@latest postcss autoprefixer`)
              and add typescript as a dev dependency.

              Default path for components is src/components/ui; create it if not
              present so the CLI and imports stay organised.
              */}
            </div>
          </BlurFade>
          <AnimatedTooltipPreview />
        </div>
      </section>

      <section id="contact" className="overflow-x-hidden -mt-2 sm:mt-0">
        <div className="grid items-center justify-center gap-3 sm:gap-4 px-4 text-center md:px-6 w-full max-w-full pt-2 pb-6 sm:py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <div className="inline-block rounded-[var(--radius)] bg-foreground text-background px-3 py-1 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hiring or collaboration in mind? Connect on {" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>
                .<br />
                Need a quick response? DM me on {" "}
                <Link
                  href="https://wa.me/94773431431"
                  className="text-green-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp.
                </Link>
              </p>
            </div>
          </BlurFade>
          <ContactImages />
        </div>
      </section>
    </>
  );
}
