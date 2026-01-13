import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ravindu Danthanarayana",
  initials: "DV",
  url: "https://ravindudanthanarayana.me",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Helping machines learn & keeping servers steady.",
  summary:
    "I’m an enthusiastic IT student passionate about **DevOps**, **Cloud technologies** and **AI/ML**. Passionate about solving technical challenges and collaborating to build scalable, reliable systems that make an impact. Also interested in AI and Machine Learning using them to create smart solutions that simplify work and improve efficiency.",
  avatarUrl: "/mee.png",
  skills: [
    "Reactt",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++ddd",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@ravindudanthanarayana", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ravindudanthanarayana",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ravindudanthanarayana/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ravindu.danth@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      phone: {
        name: "Call",
        url: "tel:+94773431431",
        icon: Icons.phone,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "E media solutions pvt Ltd",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/emedia.png",
      start: "Jun 2024",
      end: "Dec 2024",
      description:
        "Worked on end to end web development projects, combining UI/UX design expertise with WordPress and MERN stack development. Designed intuitive and user friendly interfaces, implemented responsive layouts and developed full stack solutions that integrated frontend and backend functionality. Collaborated closely with clients to deliver high quality, scalable web applications tailored to their requirements.",
    },
    // {
    //   company: "Lashura Global",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Founder",
    //   logoUrl: "/lashura.png",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    
  ],
  education: [
    {
      school: "SLIIT",
      href: "https://www.sliit.lk/",
      degree: "BSc(Hons) in IT Specialising in Artificial Intelligence(UG)",
      logoUrl: "/sliit.svg",
      start: "2024",
      end: "2028",
    },
    // {
    //   school: "University of Moratuwa",
    //   href: "https://uom.lk/",
    //   degree: "Certificate Course for Python programming & Web design",
    //   logoUrl: "/uom.svg",
    //   start: "2023",
    //   end: "2024",
    // },
    // {
    //   school: "University of Kelaniya",
    //   href: "https://www.kln.ac.lk/",
    //   degree: "Certificate in ERP Basics with SAP",
    //   logoUrl: "/uok.svg",
    //   start: "2023",
    //   end: "2024",
    // },
    {
      school: "Dharmaraja College",
      href: "https://www.dharmaraja.lk/",
      degree: "GCE(A/L)",
      logoUrl: "/drck.svg",
      start: "2010",
      end: "2023",
    },
  ],
  certifications: [
    {
      name: "FinOps Certified Practitioner",
      issuer: "FinOps Foundation",
      date: "2025",
      logoUrl: "/finops.svg",
      link: "https://www.credly.com/badges/f0e735f3-781f-45c1-a61c-4a1336121fef"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2025",
      logoUrl: "/az900.svg",
      link: "https://learn.microsoft.com/en-us/users/ravindudanthanarayana-0163/credentials/a71bab7079e692a6?ref=https%3A%2F%2Fwww.credly.com%2F"
    },
    {
      name: "Oracle Cloud Infrastructure Certified Al Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      logoUrl: "/ora.svg",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D4F5BB1E1E59A5BA0167C8B748AE4E4C3D6A102DC023D0CC75E1C1B989D9B082"
    },
    {
      name: "LFS162: Introduction to DevOps and Site Reliability Engineering",
      issuer: "The Linux Foundation",
      date: "2025",
      logoUrl: "/devf.svg",
      link: "https://www.credly.com/badges/1ad25bbe-fd35-4d78-9668-05d137970156"
    },
    // {
    //   name: "LFS158: Introduction to Kubernetes",
    //   issuer: "The Linux Foundation",
    //   date: "2025",
    //   logoUrl: "/kuba.svg",
    //   link: "https://www.credly.com/badges/4d10da90-746c-40cc-861a-9fc40e0dadd5"
    // },
     {
      name: "GitHub Foundations",
      issuer: "Github",
      date: "2025",
      logoUrl: "/gitf.svg",
      link: "https://www.credly.com/badges/9c91a2c0-c126-4c94-8893-86ac1f3654dc/linked_in_profile"
    },

         {
      name: "AWS Well Architected Proficient",
      issuer: "AWS",
      date: "2025",
      logoUrl: "/awsse.svg",
      link: "https://www.credly.com/badges/fd7a5614-ecc7-4514-ae30-1a2e6b4aae91"
    },
  ],
  projects: [
    // {
    //   title: "Chat Collect",
    //   href: "https://chatcollect.com",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chatcollect.com",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },

    {
      title: "11MS",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "An end to end MLOps project delivering real time YouTube comment sentiment analysis through a simple Chrome extension.",
      technologies: [
        "MLflow",
        "DVC",
        "Flask",
        "AWS EC2",
        "AWS ECR",
        "AWS S3",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/SentiScope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/yttt.mov",
    },

    {
      title: "SentiScope",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "An end to end MLOps project delivering real time YouTube comment sentiment analysis through a simple Chrome extension.",
      technologies: [
        "MLflow",
        "DVC",
        "Flask",
        "AWS EC2",
        "AWS ECR",
        "AWS S3",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/SentiScope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/yttt.mov",
    },


    {
      title: "DevSecOps",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "An end to end MLOps project delivering real time YouTube comment sentiment analysis through a simple Chrome extension.",
      technologies: [
        "MLflow",
        "DVC",
        "Flask",
        "AWS EC2",
        "AWS ECR",
        "AWS S3",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/SentiScope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/yttt.mov",
    },



    {
      title: "AWS",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "An end to end MLOps project delivering real time YouTube comment sentiment analysis through a simple Chrome extension.",
      technologies: [
        "MLflow",
        "DVC",
        "Flask",
        "AWS EC2",
        "AWS ECR",
        "AWS S3",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/SentiScope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/yttt.mov",
    },



    {
      title: "11MS",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "An end to end MLOps project delivering real time YouTube comment sentiment analysis through a simple Chrome extension.",
      technologies: [
        "MLflow",
        "DVC",
        "Flask",
        "AWS EC2",
        "AWS ECR",
        "AWS S3",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/SentiScope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/yttt.mov",
    },




    {
      title: "Laundrify",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "An end to end MLOps project delivering real time YouTube comment sentiment analysis through a simple Chrome extension.",
      technologies: [
        "MLflow",
        "DVC",
        "Flask",
        "AWS EC2",
        "AWS ECR",
        "AWS S3",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/SentiScope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/yttt.mov",
    },



    


    {
      title: "EFK",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "An end to end MLOps project delivering real time YouTube comment sentiment analysis through a simple Chrome extension.",
      technologies: [
        "MLflow",
        "DVC",
        "Flask",
        "AWS EC2",
        "AWS ECR",
        "AWS S3",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/SentiScope",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/yttt.mov",
    },


    {
      title: "Portfolio Website",
      href: "#",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "My old portfolio website, where I showcased my full-stack (MERN) development and UI/UX design projects, skills, and contact information.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript(Vanilla) ",
        "GSAP",
        "AWS S3",
        "AWS CloudFront",
      ],
      links: [
        {
          type: "Website",
          href: "https://portfolio-0808old.s3.eu-north-1.amazonaws.com/index.html",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/portfolioweb0808",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/portfolio.MOV",
    },


    {
      title: "GPA Calculator",
      href: "#",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "A simple, student‑friendly GPA calculator built specifically for SLIIT students to help them quickly compute their semester and cumulative GPA accurately  ",
      technologies: [
        "Reactjs",
        "Vite",
        "Typescript",
        "ESLint",
        "npm",
        "TailwindCSS",
        "Shadcn UI",
        "Radix UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.lashuraglobal.live/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/lash",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/sliitgpa.mov",
    },


    {
      title: "Lashura Global",
      href: "#",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Startup",
      technologies: [
        "MLflow",
        "DVC",
        "Flask",
        "AWS EC2",
        "AWS ECR",
        "AWS S3",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.lashuraglobal.live/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ravindudanthanarayana/lash",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/lash.mov",
    },



//see more text

    // {
    //   title: "project 5",
    //   href: "https://automatic.chat",
    //   dates: "April 2024 - May 2024",
    //   active: true,
    //   description:
    //     "A simple, student‑friendly GPA calculator built specifically for SLIIT students to help them quickly compute their semester and cumulative GPA accurately  ",
    //   technologies: [
    //     "Reactjs",
    //     "Vite",
    //     "Typescript",
    //     "ESLint",
    //     "npm",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Radix UI",
    //     "Vercel",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://sliitgpa.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/ravindudanthanarayana/gpa",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "/sliitgpa.mov",
    // },
    // {
    //   title: "project 6",
    //   href: "https://automatic.chat",
    //   dates: "April 2024 - May 2024",
    //   active: true,
    //   description:
    //     "A simple, student‑friendly GPA calculator built specifically for SLIIT students to help them quickly compute their semester and cumulative GPA accurately  ",
    //   technologies: [
    //     "Reactjs",
    //     "Vite",
    //     "Typescript",
    //     "ESLint",
    //     "npm",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Radix UI",
    //     "Vercel",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://sliitgpa.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/ravindudanthanarayana/gpa",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "/sliitgpa.mov",
    // },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
