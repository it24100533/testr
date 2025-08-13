import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/favicon.png?v=3",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico?v=3",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        url: "/favicon.png?v=3",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon.png?v=3",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.png?v=3",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon.png?v=3",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.png?v=3",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon.png?v=3",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/favicon.png?v=3",
  },
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
    card: "summary_large_image",
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
        <link rel="icon" href="/favicon.ico?v=3" type="image/x-icon" />
        <link rel="icon" href="/favicon.png?v=3" type="image/png" />
        <link rel="icon" href="/favicon.png?v=3" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon.png?v=3" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/favicon.png?v=3" />
        <meta name="msapplication-TileImage" content="/favicon.png?v=3" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-8 sm:py-16 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
