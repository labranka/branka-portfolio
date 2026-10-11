import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { Nav } from "@/components/Nav";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkGrid />
        <HowIWork />
        <About />
      </main>
      <Footer />
    </>
  );
}
