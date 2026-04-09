import Navbar from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name + " – DevOps, Cloud & AI/ML Engineer",
    template: `%s | ${DATA.name} – DevOps/Cloud/AI-ML`,
  },
  description: DATA.description,
  keywords: [
    "Ravindu Danthanarayana",
    "Ravindu Cloud",
    "DevOps Engineer Portfolio",
    "Cloud Engineer Portfolio",
    "MLOps Engineer portfolio",
    "Kubernetes Expert",
    "AWS Certified Professional",
    "Azure Fundamentals",
    "Infrastructure as Code",
    "Terraform",
    "CI/CD Automation",
    "GitOps ArgoCD",
    "Site Reliability Engineering",
  ],
  authors: [{ name: DATA.name }],
  creator: DATA.name,
  publisher: DATA.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "favicon.png",
  },
  icons: {
    icon: {
      url: "favicon.png",
      type: "image/png",
    },
    shortcut: "favicon.png",
    apple: "favicon.png",
  },
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DATA.avatarUrl,
        width: 400,
        height: 400,
        alt: `${DATA.name} profile photo`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    description: DATA.description,
    card: "summary_large_image",
    images: [DATA.avatarUrl],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Core SEO meta tags are mostly handled via Next.js metadata above */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={DATA.url} />
        <meta name="robots" content="index,follow" />
        <meta name="language" content="en" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="favicon.png" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <link rel="preload" href={DATA.avatarUrl} as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Caching/compression hints: configure server to enable gzip/ brotli and set cache-control headers for static assets. */}
        {/* Defer non-critical scripts and async wherever possible (e.g., analytics). */}
        {/* Preload critical font assets (above preconnects) if added in future. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme-preference');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = theme === 'dark' || (theme === null && prefersDark);
                  
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Structured data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "name": "Ravindu Danthanarayana",
                "alternateName": "Ravindu Cloud",
                "jobTitle": "DevOps, Cloud & AI/ML Engineer",
                "url": "https://ravindu.cloud",
                "image": "https://ravindu.cloud" + DATA.avatarUrl,
                "sameAs": [
                  DATA.contact.social.LinkedIn.url,
                  DATA.contact.social.GitHub.url,
                  "https://www.credly.com/users/ravindudanthanarayana"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kandy",
                  "addressCountry": "Sri Lanka"
                },
                "email": "ravindu.danth@gmail.com",
                "description": "DevOps, Cloud Infrastructure, and MLOps specialist focusing on Kubernetes, AWS, and Azure.",
                "knowsAbout": [
                  "DevOps", "Cloud Computing", "AI", "Machine Learning", "MLOps", "LLMOps", "Kubernetes", "Docker", "CI/CD", "AWS", "Azure", "Terraform", "GitOps", "ArgoCD", "", "Observability", "FinOps"
                ],
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "SLIIT"
                },
                "hasCredential": DATA.certifications.map(cert => ({
                  "@type": "EducationalOccupationalCredential",
                  "name": cert.name,
                  "issuer": {
                    "@type": "Organization",
                    "name": cert.issuer
                  }
                }))
              },
              {
                "@type": "WebSite",
                "url": "https://ravindu.cloud",
                "name": "Ravindu Danthanarayana | DevOps & Cloud Engineer",
                "description": "Portfolio of Ravindu Danthanarayana specializing in DevOps, Cloud Infrastructure, and MLOps."
              },
              {
                "@type": "WebPage",
                "url": "https://ravindu.cloud",
                "name": "Ravindu Danthanarayana Portfolio",
                "description": "DevOps, Cloud & AI/ML Engineer portfolio showcasing projects and certifications."
              }
            ]
          }, null, 2)
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme-preference');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = theme === 'dark' || (theme === null && prefersDark);
                  
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (typeof window === 'undefined') return;
                  const isMobile = window.matchMedia('(max-width: 768px)').matches;
                  if (!isMobile) return;
                  
                  let navbarElement = null;
                  let lastViewportHeight = window.visualViewport?.height ?? window.innerHeight;
                  
                  const stabilizeNavbar = () => {
                    try {
                      if (!navbarElement) {
                        navbarElement = document.querySelector('.navbar-mobile-fixed');
                        if (!navbarElement) return;
                      }
                      
                      const currentHeight = window.visualViewport?.height ?? window.innerHeight;
                      const heightChanged = currentHeight !== lastViewportHeight;
                      
                      if (heightChanged) {
                        lastViewportHeight = currentHeight;
                        // temporarily trigger GPU layer without wiping translateY offset
                        navbarElement.style.transform = 'translateY(-1rem) translateZ(0)';
                        requestAnimationFrame(() => {
                          navbarElement.style.transform = 'translateY(-1rem)';
                        });
                      }
                    } catch (e) {}
                  };
                  
                  if (window.visualViewport) {
                    window.visualViewport.addEventListener('resize', stabilizeNavbar, { passive: true });
                    window.visualViewport.addEventListener('scroll', stabilizeNavbar, { passive: true });
                  }
                  
                  window.addEventListener('resize', stabilizeNavbar, { passive: true });
                  window.addEventListener('orientationchange', stabilizeNavbar, { passive: true });
                  
                  document.addEventListener('DOMContentLoaded', () => {
                    navbarElement = document.querySelector('.navbar-mobile-fixed');
                    stabilizeNavbar();
                  }, { once: true });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pt-4 sm:pt-8 pb-5 sm:pb-16 px-4 sm:px-6"
        suppressHydrationWarning
      >
        <header className="sr-only" aria-label="Site header">
          <h1>Ravindu Danthanarayana</h1>
        </header>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={0}>
            <SmoothScroll />
            {children}
            <footer aria-label="Site footer">
              <Navbar />
            </footer>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
