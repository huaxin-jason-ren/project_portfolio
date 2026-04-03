import { ArrowRight, ArrowDownRight } from "lucide-react";
import { site } from "@/content/site";

const particles = [
  { left: "12%",  top: "22%", delay: "0s",    dur: "3.4s" },
  { left: "28%",  top: "68%", delay: "0.6s",  dur: "4.1s" },
  { left: "45%",  top: "18%", delay: "1.2s",  dur: "3.8s" },
  { left: "62%",  top: "75%", delay: "0.3s",  dur: "4.5s" },
  { left: "78%",  top: "32%", delay: "0.9s",  dur: "3.2s" },
  { left: "88%",  top: "58%", delay: "1.5s",  dur: "4.8s" },
  { left: "20%",  top: "85%", delay: "0.4s",  dur: "3.6s" },
  { left: "55%",  top: "50%", delay: "1.8s",  dur: "5s"   },
];

const stats = [
  { value: "3+",         label: "Years Experience" },
  { value: "10+",        label: "Projects Shipped" },
  { value: "Full Stack", label: "Focus Area" },
];

export function Hero() {
  const nameWords = site.name.split(" ");
  const roleWords = site.role.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28 pb-20 scroll-mt-0"
      aria-label="Introduction"
    >
      {/* ── Background ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Ambient amber blobs */}
        <div
          className="bark-blob absolute -top-32 -right-32 h-[min(700px,100vw)] w-[min(700px,100vw)] rounded-full blur-[140px]"
          style={{ background: "color-mix(in srgb, var(--accent) 9%, transparent)" }}
        />
        <div
          className="bark-blob-delayed absolute -bottom-40 -left-40 h-[min(600px,90vw)] w-[min(600px,90vw)] rounded-full blur-[120px]"
          style={{ background: "color-mix(in srgb, var(--accent-warm) 6%, transparent)" }}
        />

        {/* Bark-grain diagonal lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -12deg,
              color-mix(in srgb, var(--accent) 3.5%, transparent) 0px,
              color-mix(in srgb, var(--accent) 3.5%, transparent) 1px,
              transparent 1px,
              transparent 64px
            )`,
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 78%)",
          }}
        />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{
              left: p.left,
              top: p.top,
              background: "var(--accent)",
              animation: `particle-float ${p.dur} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center lg:text-left">

          {/* Status badge */}
          <div
            className="hero-word mb-10 inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{
              animationDelay: "0s",
              borderColor: "color-mix(in srgb, var(--accent) 35%, transparent)",
              background: "color-mix(in srgb, var(--accent) 10%, transparent)",
              color: "var(--accent-warm)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full animate-pulse"
              style={{ background: "var(--accent)" }}
            />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="font-heading mb-4 leading-[0.92] tracking-tight">
            <span className="block text-[clamp(3rem,9vw,7rem)] font-bold">
              {nameWords.map((word, i) => (
                <span
                  key={i}
                  className="hero-word bark-gradient-text mr-[0.18em]"
                  style={{ animationDelay: `${0.15 + i * 0.13}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="block text-[clamp(1.8rem,5vw,4rem)] font-medium text-muted">
              {roleWords.map((word, i) => (
                <span
                  key={i}
                  className="hero-word mr-[0.2em]"
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          {/* Divider line */}
          <div
            className="hero-word mb-8 h-px max-w-[280px] mx-auto lg:mx-0"
            style={{
              animationDelay: "0.72s",
              background: "linear-gradient(90deg, var(--accent), transparent)",
            }}
          />

          {/* Tagline */}
          <p
            className="hero-word mb-12 max-w-2xl text-lg leading-relaxed text-muted md:text-xl mx-auto lg:mx-0"
            style={{ animationDelay: "0.84s" }}
          >
            {site.tagline}
          </p>

          {/* Stats */}
          <div
            className="hero-word mb-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-6"
            style={{ animationDelay: "1s" }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center lg:items-start">
                <span
                  className="font-heading text-3xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.value}
                </span>
                <span className="mt-1 text-xs uppercase tracking-widest text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="hero-word flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center justify-center lg:justify-start"
            style={{ animationDelay: "1.12s" }}
          >
            <a
              href="#projects"
              className="focus-ring btn-glow group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-2xl px-8 py-4 text-base font-bold text-accent-foreground shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_40%,transparent)] transition-[background,box-shadow] duration-300 hover:shadow-[0_0_40px_color-mix(in_srgb,var(--accent)_60%,transparent)] sm:min-w-[200px]"
              style={{ background: "var(--accent)" }}
            >
              View Work
              <ArrowRight
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#contact"
              className="focus-ring group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-2xl border-2 border-accent/50 bg-transparent px-8 py-4 text-base font-bold text-foreground backdrop-blur-sm transition-[background,color,border-color] duration-300 hover:bg-accent hover:border-accent hover:text-accent-foreground"
            >
              Let&apos;s Connect
              <ArrowDownRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div
        aria-hidden
        className="scroll-indicator absolute bottom-8 left-1/2 flex flex-col items-center gap-2"
        style={{ color: "color-mix(in srgb, var(--muted) 50%, transparent)" }}
      >
        <span className="text-[10px] uppercase tracking-[0.28em]">Scroll</span>
        <div
          className="h-10 w-px rounded-full"
          style={{
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </div>
    </section>
  );
}
