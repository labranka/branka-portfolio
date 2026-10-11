import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { siteDescription, siteTitle, siteUrl } from "@/content/site";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s · Branka Lakićević" },
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: { title: siteTitle, description: siteDescription, url: "/", siteName: "Branka Lakićević", type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription, images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={fraunces.variable + " " + inter.variable + " " + jetbrains.variable}>
      <body id="top" className="font-sans antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
