import { site } from "@/content/site";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" className="border-t border-border/80">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-foreground/[0.03] via-background to-background p-8 shadow-[0_4px_40px_-20px_rgba(0,0,0,0.15)] md:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            aria-hidden
          />
          <div className="relative space-y-5">
            <div className="flex items-center gap-3">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-accent">
                Profile
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-accent/50 to-transparent" aria-hidden />
            </div>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              About
            </h2>
            <p className="text-lg font-medium leading-relaxed text-foreground md:text-xl">{site.about.lead}</p>
            <p className="leading-relaxed text-muted md:text-lg">{site.about.body}</p>
            <p className="text-sm text-muted">
              <span className="font-semibold text-foreground">Location:</span> {site.location}
            </p>
          </div>
        </div>
        <div className="lg:pt-4">
          <h3 className="mb-6 font-heading text-sm font-bold uppercase tracking-[0.3em] text-surface-muted">
            Core skills
          </h3>
          <ul className="flex flex-wrap gap-3">
            {site.about.skills.map((skill) => (
              <li key={skill}>
                <span className="inline-flex rounded-2xl border border-border/90 bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md motion-reduce:hover:translate-y-0">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
