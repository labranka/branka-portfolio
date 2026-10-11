import { About } from "@/components/About";
import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { Marquee } from "@/components/Marquee";
import { MoreWork } from "@/components/MoreWork";
import { Nav } from "@/components/Nav";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WorkGrid />
        <HowIWork />
        <MoreWork />
        <About />
      </main>
      <Footer />
    </>
  );
}
