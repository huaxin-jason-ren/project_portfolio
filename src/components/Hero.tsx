import { ArrowDownRight, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";

export function Hero() {
  return (
    <Section as="div" className="pt-32 pb-8 md:pt-40 md:pb-12">
      <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-16">
        <div className="space-y-8">
          <p className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-wider text-surface-muted">
            Open to opportunities
          </p>
          <div className="space-y-4">
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {site.name}
              <span className="block text-surface-muted md:mt-1">{site.role}</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{site.tagline}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent/90"
            >
              View work
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-foreground bg-transparent px-6 py-3.5 text-base font-semibold text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background"
            >
              Contact
              <ArrowDownRight className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
        <div className="relative h-[280px] lg:h-[320px]" aria-hidden>
          <div className="absolute inset-0 rounded-3xl bg-surface shadow-lg transition-shadow duration-300 hover:shadow-xl" />
          <div className="absolute left-6 top-6 h-24 w-[45%] rounded-2xl bg-accent transition-transform duration-300 ease-out lg:hover:-translate-y-0.5" />
          <div className="absolute bottom-8 right-8 h-20 w-[55%] rounded-2xl bg-surface-muted transition-transform duration-300 ease-out lg:hover:translate-y-0.5" />
          <div className="absolute left-1/3 top-1/3 h-16 w-[40%] rounded-xl border-2 border-foreground/15 bg-foreground/5" />
        </div>
      </div>
    </Section>
  );
}
