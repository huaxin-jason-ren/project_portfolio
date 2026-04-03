import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-col bg-background">
      {/* Ambient page background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 page-bg" />
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectGrid />
        <About />
      </main>
      <Footer />
    </div>
  );
}
