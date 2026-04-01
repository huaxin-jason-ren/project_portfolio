import { site } from "@/content/site";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div className="space-y-4">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            About
          </h2>
          <p className="text-lg font-medium text-foreground">{site.about.lead}</p>
          <p className="leading-relaxed text-muted">{site.about.body}</p>
          <p className="text-sm text-muted">
            <span className="font-medium text-foreground">Location:</span> {site.location}
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-surface-muted">
            Core skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {site.about.skills.map((skill) => (
              <li key={skill}>
                <span className="inline-flex rounded-xl border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-200">
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
