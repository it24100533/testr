import { DATA } from "@/data/resume";

export default function SimplePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm {DATA.name.split(" ")[0]} 👋🏼
              </h1>
              <p className="max-w-[600px] md:text-xl">
                {DATA.description}
              </p>
            </div>
            <div className="size-28 border border-[var(--glass-border)] rounded-full bg-[var(--glass-bg)] flex items-center justify-center shadow-[var(--glass-shadow)]">
              <span className="text-2xl font-bold">{DATA.initials}</span>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about">
        <h2 className="text-xl font-bold">About</h2>
        <p className="text-sm text-muted-foreground">
          {DATA.summary}
        </p>
      </section>
      
      <section id="skills">
        <h2 className="text-xl font-bold">Skills</h2>
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
          ].map((skill) => (
            <span key={skill} className="px-2 py-1 bg-blue-500/95 text-white rounded-[var(--radius)] text-sm shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
              {skill}
            </span>
          ))} 
        </div>
      </section>
    </main>
  );
}
