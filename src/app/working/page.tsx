import BlurFade from "@/components/magicui/blur-fade-fixed";
import BlurFadeText from "@/components/magicui/blur-fade-text-fixed";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function WorkingPage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋🏼`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {[
              "Linux administration",
              "Bash",
              "Python",
              "Git",
              "GitHub",
              "CI/CD",
              "Jenkins",
              "Docker",
              "Kubernetes",
              "Terraform",
              "Ansible",
              "AWS (EC2, S3, IAM)",
              "ML lifecycle understanding",
              "MLflow",
              "NumPy",
              "Pandas",
              "Scikit-learn",
              "REST APIs",
              "MySQL",
              "PostgreSQL",
              "Prometheus",
              "Grafana",
              "ELK Stack",
              "TCP/IP fundamentals",
              "cloud security basics",
              "ClickUp",
              "Trello",
              "Agile and DevOps workflows"
            ].map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <Badge key={skill} variant="blue">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="space-y-3">
              <div className="inline-block rounded-[var(--radius)] bg-foreground text-background px-3 py-1 text-sm shadow-[0_1px_2px_rgba(0,0,0,0.08)]">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a question? Drop me a DM on{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>
                , I&apos;ll get back to you faster than an automated test run!
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
