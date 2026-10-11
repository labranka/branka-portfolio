import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { MoreWork } from "@/components/MoreWork";
import { Nav } from "@/components/Nav";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <WorkGrid />
        <HowIWork />
        <About />
        <MoreWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
