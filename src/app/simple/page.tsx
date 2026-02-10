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
            <div className="size-28 border rounded-full bg-gray-200 flex items-center justify-center">
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
          {["Linux", "Docker", "Kubernetes", "Git/GitHub", "Jenkins", "AWS", "Azure", "GCP", "TensorFlow", "Python", "Java", "SQL", "scikit-learn", "Jira", "Openstack", "Openshift"].map((skill) => (
            <span key={skill} className="px-2 py-1 bg-blue-500 text-white rounded text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
