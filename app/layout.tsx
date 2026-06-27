import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "block",
  preload: true,
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "block",
  preload: true,
});

const siteUrl  = "https://geovanedd.me";
const siteName = "Geovane2dd";
const defaultTitle       = "Geovane2dd — Developer · Open-Source · Privacy-First";
const defaultDescription = "Geovane2dd is a web developer crafting open-source tools and self-hosted applications with TypeScript, React and Next.js. Projects built for privacy, performance and developer experience.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [{ color: "#040409" }],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:       { default: defaultTitle, template: `%s · ${siteName}` },
  description: defaultDescription,
  keywords: [
    "full-stack developer", "web developer", "open-source", "self-hosted",
    "TypeScript", "React", "Next.js", "Node.js", "privacy", "API", "portfolio", "Brazil",
  ],
  authors:   [{ name: "Geovane2dd", url: "https://github.com/geovane2dd" }],
  creator:   "Geovane2dd",
  publisher: "Geovane2dd",
  robots:    { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1 } },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website", locale: "en_US", url: siteUrl,
    siteName: `${siteName} Portfolio`,
    title: defaultTitle, description: defaultDescription,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: `${siteName} — Developer Portfolio` }],
  },
  twitter: {
    card: "summary_large_image", site: "@Geovane2dd", creator: "@Geovane2dd",
    title: defaultTitle, description: defaultDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  other: {
    "apple-mobile-web-app-capable":          "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title":            siteName,
  },
};

export const dynamic    = "force-static";
export const revalidate = 3600;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options"        content="DENY" />
        <meta httpEquiv="Referrer-Policy"        content="strict-origin-when-cross-origin" />
        <link rel="icon"             href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest"         href="/manifest.json" />
        <link rel="canonical"        href={siteUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Geovane2dd",
          "url": siteUrl,
          "sameAs": ["https://github.com/geovane2dd"],
          "jobTitle": "Full-Stack Web Developer",
          "knowsAbout": ["TypeScript", "React", "Next.js", "Node.js", "Open-Source", "Privacy"],
          "description": defaultDescription,
        })}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#040409] text-[#ddddf0] min-h-screen antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
