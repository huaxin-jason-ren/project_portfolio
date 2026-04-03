import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function About() {
  return (
    <Section id="about" className="border-t border-border/60">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">

        {/* Left — bio card */}
        <ScrollReveal>
          <div
            className="relative overflow-hidden rounded-3xl border p-8 md:p-10"
            style={{
              borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
              background:
                "linear-gradient(135deg, color-mix(in srgb, var(--surface) 90%, transparent), var(--background))",
              boxShadow: "0 4px 48px -16px rgba(0,0,0,0.4), inset 0 1px 0 color-mix(in srgb, var(--accent) 15%, transparent)",
            }}
          >
            {/* Glow accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
              style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-8 bottom-0 h-40 w-40 rounded-full blur-3xl"
              style={{ background: "color-mix(in srgb, var(--accent-warm) 8%, transparent)" }}
            />

            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <span
                  className="font-heading text-xs font-bold uppercase tracking-[0.38em]"
                  style={{ color: "var(--accent)" }}
                >
                  Profile
                </span>
                <span
                  className="h-px flex-1 max-w-[80px]"
                  style={{
                    background: "linear-gradient(90deg, var(--accent), transparent)",
                  }}
                  aria-hidden
                />
              </div>

              <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                About Me
              </h2>

              <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl">
                {site.about.lead}
              </p>

              <p className="leading-relaxed text-muted md:text-lg">
                {site.about.body}
              </p>

              <div
                className="flex items-center gap-3 rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: "color-mix(in srgb, var(--accent) 25%, transparent)",
                  background: "color-mix(in srgb, var(--accent) 8%, transparent)",
                }}
              >
                <span
                  className="h-2 w-2 flex-shrink-0 rounded-full animate-pulse"
                  style={{ background: "var(--accent)" }}
                />
                <span className="font-medium text-muted">
                  <span className="font-semibold text-foreground">Location:</span>{" "}
                  {site.location}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — skills */}
        <div className="lg:pt-4">
          <ScrollReveal>
            <h3
              className="mb-8 font-heading text-sm font-bold uppercase tracking-[0.32em]"
              style={{ color: "var(--muted)" }}
            >
              Core Skills
            </h3>
          </ScrollReveal>

          <ul className="flex flex-wrap gap-3">
            {site.about.skills.map((skill, i) => (
              <li key={skill}>
                <ScrollReveal delay={i * 70}>
                  <span
                    className="inline-flex cursor-default rounded-2xl border border-accent/25 bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-[transform,box-shadow,border-color,background,color] duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/10 hover:text-accent-warm hover:shadow-[0_4px_20px_color-mix(in_srgb,var(--accent)_25%,transparent)] motion-reduce:hover:translate-y-0"
                  >
                    {skill}
                  </span>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
