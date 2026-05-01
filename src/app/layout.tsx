import type { Metadata, Viewport } from "next";
import { inter, azeretMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Athilla Zaidan — AI Engineer & Fullstack Developer",
    template: "%s | Athilla Zaidan",
  },
  description:
    "Portfolio of Athilla Zaidan, AI Engineer and Fullstack Developer based in Indonesia. Building intelligent systems from models to deployment. Specializing in Python, Go, TypeScript, PyTorch, and Next.js.",
  keywords: [
    "Athilla Zaidan",
    "AI Engineer",
    "Fullstack Developer",
    "Machine Learning",
    "Python",
    "Go",
    "TypeScript",
    "Next.js",
    "PyTorch",
    "NLP",
    "Software Engineer",
    "Indonesia",
    "Institut Teknologi Bandung",
    "Portfolio",
  ],
  authors: [{ name: "Athilla Zaidan", url: "https://athilla.tech" }],
  creator: "Athilla Zaidan",
  publisher: "Athilla Zaidan",
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
  alternates: {
    canonical: "https://athilla.tech",
  },
  metadataBase: new URL("https://athilla.tech"),
  openGraph: {
    title: "Athilla Zaidan — AI Engineer & Fullstack Developer",
    description:
      "Portfolio of Athilla Zaidan, AI Engineer and Fullstack Developer. Building intelligent systems from models to deployment.",
    url: "https://athilla.tech",
    siteName: "Athilla Zaidan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athilla Zaidan — AI Engineer & Fullstack Developer",
    description:
      "Portfolio of Athilla Zaidan, AI Engineer and Fullstack Developer. Building intelligent systems from models to deployment.",
    creator: "@athillazaidan",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${azeretMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://skillicons.dev" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://skillicons.dev" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="font-sans antialiased bg-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://athilla.tech/#person",
                  name: "Athilla Zaidan",
                  givenName: "Athilla",
                  familyName: "Zaidan",
                  jobTitle: "AI Engineer & Fullstack Developer",
                  url: "https://athilla.tech",
                  sameAs: [
                    "https://github.com/athillazaidan",
                    "https://linkedin.com/in/athillazaidan",
                  ],
                  alumniOf: {
                    "@type": "CollegeOrUniversity",
                    name: "Institut Teknologi Bandung",
                  },
                  knowsAbout: [
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Fullstack Development",
                    "Python",
                    "Go",
                    "TypeScript",
                    "PyTorch",
                    "Next.js",
                  ],
                  image: "https://athilla.tech/portrait.jpg",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://athilla.tech/#website",
                  url: "https://athilla.tech",
                  name: "Athilla Zaidan — AI Engineer & Fullstack Developer",
                  publisher: { "@id": "https://athilla.tech/#person" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://athilla.tech/?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id": "https://athilla.tech/#webpage",
                  url: "https://athilla.tech",
                  name: "Athilla Zaidan — AI Engineer & Fullstack Developer",
                  isPartOf: { "@id": "https://athilla.tech/#website" },
                  about: { "@id": "https://athilla.tech/#person" },
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
