import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden scroll-mt-28 pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-atmosphere absolute inset-0" />
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="hero-blob absolute -right-24 top-0 h-[min(520px,90vw)] w-[min(520px,90vw)] rounded-full bg-accent/20 blur-[100px]" />
        <div className="hero-blob-delayed absolute -left-32 bottom-0 h-[min(420px,80vw)] w-[min(420px,80vw)] rounded-full bg-accent/10 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_min(380px,100%)] lg:gap-20">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted shadow-sm backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
              Open to opportunities
            </div>

            <div className="space-y-6">
              <h1 className="font-heading text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
                <span className="hero-gradient-text block">{site.name}</span>
                <span className="mt-3 block bg-gradient-to-r from-accent via-accent to-foreground/90 bg-clip-text text-transparent md:mt-4">
                  {site.role}
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
                {site.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#projects"
                className="focus-ring group inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-[transform,box-shadow] duration-200 ease-out hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/30 motion-reduce:transition-none motion-reduce:hover:transform-none sm:min-w-[180px]"
              >
                View work
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                  aria-hidden
                />
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-foreground/90 bg-background/50 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-colors duration-200 hover:bg-foreground hover:text-background"
              >
                Contact
                <ArrowDownRight className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:max-w-none" aria-hidden>
            <div className="relative aspect-square max-h-[380px] lg:max-h-[420px]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-surface via-surface to-surface-muted shadow-2xl ring-1 ring-foreground/10" />
              <div className="absolute inset-[10%] rounded-3xl bg-gradient-to-br from-accent/90 to-accent shadow-lg shadow-accent/40" />
              <div className="absolute bottom-[12%] left-[8%] right-[8%] top-auto h-[28%] rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-md" />
              <div className="absolute left-[12%] right-[12%] top-[14%] h-[18%] rounded-xl bg-foreground/5 ring-1 ring-inset ring-foreground/10" />
              <div className="absolute bottom-6 left-1/2 flex w-[72%] -translate-x-1/2 items-center justify-center gap-2 rounded-xl border border-foreground/10 bg-background/60 px-3 py-2 text-[10px] font-medium uppercase tracking-widest text-muted backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_color-mix(in_srgb,var(--accent)_65%,transparent)]" />
                Systems online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
