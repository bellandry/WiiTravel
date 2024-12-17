import { CursorGlow } from "@/components/animations/cursor-glow";
import { FloatingElements } from "@/components/animations/floating-elements";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WiiTravel - Réservez vos billets de bus au Cameroun",
  description:
    "WiiTravel facilite vos voyages au Cameroun : comparez les prix, choisissez vos trajets et réservez vos billets de bus en toute simplicité.",
  keywords: [
    "voyage au Cameroun",
    "billets de bus Cameroun",
    "réservation bus Cameroun",
    "agences de voyage Cameroun",
    "trajets en bus Cameroun",
    "bus Cameroun en ligne",
    "Cameroon travel",
    "bus booking Cameroon",
    "Wiidev",
    "Wiitravel",
    "wii travel",
  ],
  authors: [{ name: "WiiDev", url: "https://wiidev.fr" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://wiitravel.wiidev.fr",
    languages: {
      en: "https://wiitravel.wiidev.fr/en",
      fr: "https://wiitravel.wiidev.fr/fr",
    },
  },
  openGraph: {
    title: "WiiTravel - Simplifiez vos voyages en bus au Cameroun",
    description:
      "Réservez vos billets de bus rapidement et facilement avec WiiTravel. Comparez les agences locales, les prix et les trajets en un seul endroit.",
    url: "https://wiitravel.wiidev.fr",
    siteName: "WiiTravel",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voyages en bus au Cameroun avec WiiTravel",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WiiTravel - Simplifiez vos voyages en bus au Cameroun",
    description:
      "Réservez vos billets de bus facilement avec WiiTravel : trajets, prix et agences au Cameroun.",
    site: "@WiiTravel",
    creator: "@WiiTravel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" prefix="og: http://ogp.me/ns#">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/icon-192x192.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "WiiTravel",
              url: "https://wiitravel.wiidev.fr",
              logo: "https://wiitravel.wiidev.fr/assets/logo.png",
              sameAs: [
                "https://www.facebook.com/WiiTravel",
                "https://www.instagram.com/WiiTravel",
              ],
              description:
                "WiiTravel simplifie vos voyages en bus au Cameroun. Réservez vos billets en ligne facilement.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CM",
              },
            }),
          }}
        />
      </head>
      <body className={cn(inter.className, "antialiased")}>
        <Providers>
          <ScrollProgress />
          <CursorGlow />
          <FloatingElements />
          {children}
        </Providers>
      </body>
    </html>
  );
}
