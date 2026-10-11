import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="mx-auto min-h-[70vh] max-w-6xl px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-wider text-plum">404 · Page not found</p>
        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-6xl">This page isn&apos;t here.</h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed">The link may have changed. You can find my recent projects in selected work.</p>
        <Link href="/#work" className="button-primary mt-8">Explore my work <span aria-hidden="true">→</span></Link>
      </main>
      <Footer />
    </>
  );
}
