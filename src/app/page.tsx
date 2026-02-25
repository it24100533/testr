import dynamic from "next/dynamic";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { Download } from "lucide-react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

const HomeBelowFold = dynamic(() => import("./HomeBelowFold"), { ssr: true });

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-6 sm:space-y-10 pb-20 sm:pb-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-5 sm:space-y-8">
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
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <Button asChild variant="outline" size="default" className="mt-4 gap-2 hover:translate-y-0 active:scale-100">
                  <a href={DATA.cvUrl} download>
                    <Download className="size-4" aria-hidden />
                    Download CV
                  </a>
                </Button>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={`${DATA.name} - Portfolio`}
                  src={DATA.avatarUrl}
                />
                <AvatarFallback aria-label={DATA.name}>{DATA.initials}</AvatarFallback>
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
              "Agile and DevOps workflows",
              "Terraform",
              "Ansible",
              "FinOps Concepts",
              "Azure",
              "AWS (EC2, S3, IAM)",
              "IaC",
              "ML lifecycle understanding",
              "MLflow",
              "NumPy",
              "Pandas",
              "Scikit learn",
              "REST APIs",
              "MySQL",
              "PostgreSQL",
              "Prometheus",
              "Grafana",
              "ELK Stack",
              "TCP/IP fundamentals",
              "Cloud security basics",
              "ClickUp",
              "Trello",
            ].map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <Badge key={skill} variant="blue">{skill}</Badge>
              </BlurFade>
            ))} 
          </div>
        </div>
      </section>
      <HomeBelowFold />
    </main>
  );
}
