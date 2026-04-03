import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { IconGitHub } from "@/components/icons/SocialIcons";
import { projects } from "@/content/projects";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/TiltCard";

export function ProjectGrid() {
  return (
    <Section id="projects" className="relative">
      {/* Section header */}
      <ScrollReveal className="mb-16 max-w-3xl space-y-5 md:mb-22">
        <div className="flex items-center gap-4">
          <span
            className="font-heading text-xs font-bold uppercase tracking-[0.38em]"
            style={{ color: "var(--accent)" }}
          >
            Portfolio
          </span>
          <span
            className="h-px flex-1 max-w-[120px]"
            style={{
              background: "linear-gradient(90deg, var(--accent), transparent)",
            }}
            aria-hidden
          />
        </div>
        <h2 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Selected Work
        </h2>
        <p className="text-lg leading-relaxed text-muted md:text-xl">
          Outcome-focused projects built with care for performance, maintainability, and user
          experience.
        </p>
      </ScrollReveal>

      {/* Grid */}
      <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.id}>
            <ScrollReveal delay={i * 120}>
              <TiltCard className="card-glow group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-surface shadow-[0_4px_32px_-12px_rgba(0,0,0,0.5)] transition-[border-color,box-shadow] duration-400 ease-out hover:border-accent/40 hover:shadow-[0_8px_48px_-12px_color-mix(in_srgb,var(--accent)_25%,transparent)]">
                {/* Top accent line */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--accent), transparent)",
                  }}
                  aria-hidden
                />

                {/* Image */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring relative block cursor-pointer outline-none"
                >
                  <div className="relative aspect-[8/5] overflow-hidden bg-surface-muted">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-[transform,opacity] duration-500 ease-out group-hover:scale-[1.05] group-hover:opacity-90 motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(to top, color-mix(in srgb, var(--background) 70%, transparent), transparent)",
                      }}
                      aria-hidden
                    />
                  </div>
                </a>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring rounded-md transition-colors duration-200 hover:text-accent"
                      >
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span
                          className="inline-block rounded-lg border px-3 py-1 text-xs font-semibold"
                          style={{
                            borderColor:
                              "color-mix(in srgb, var(--accent) 30%, transparent)",
                            background:
                              "color-mix(in srgb, var(--accent) 8%, transparent)",
                            color: "var(--accent-warm)",
                          }}
                        >
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold text-foreground transition-[border-color,background,color] duration-200 hover:border-accent hover:text-accent"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--border) 80%, transparent)",
                        background: "var(--surface-muted)",
                      }}
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border/60 bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-[border-color,color] duration-200 hover:border-accent/60 hover:text-accent"
                    >
                      <IconGitHub className="h-4 w-4 shrink-0" />
                      Repository
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
