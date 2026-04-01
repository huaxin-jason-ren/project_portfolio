import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { IconGitHub } from "@/components/icons/SocialIcons";
import { projects } from "@/content/projects";
import { Section } from "@/components/Section";

export function ProjectGrid() {
  return (
    <Section id="projects" className="relative bg-background">
      <div className="mb-14 max-w-3xl space-y-5 md:mb-20">
        <div className="flex items-center gap-4">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-accent">
            Portfolio
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-accent/60 to-transparent" aria-hidden />
        </div>
        <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Selected work
        </h2>
        <p className="text-lg leading-relaxed text-muted md:text-xl">
          Outcome-focused projects — swap placeholder links in{" "}
          <code className="rounded-lg border border-border bg-foreground/[0.04] px-2 py-1 font-mono text-sm text-foreground">
            src/content/projects.ts
          </code>{" "}
          for your live demos and repositories.
        </p>
      </div>
      <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/90 bg-background shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] transition-[box-shadow,transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_24px_48px_-24px_rgba(37,99,235,0.25)] motion-reduce:transition-shadow motion-reduce:hover:translate-y-0">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring relative block cursor-pointer outline-none"
              >
                <div className="relative aspect-[8/5] overflow-hidden bg-surface">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-[transform,opacity] duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-95 motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
                    aria-hidden
                  />
                </div>
              </a>
              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-md transition-colors duration-200 hover:text-accent"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted sm:text-[15px]">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block rounded-lg border border-border/80 bg-foreground/[0.03] px-3 py-1 text-xs font-medium text-surface-muted">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl bg-surface px-5 py-2.5 text-sm font-semibold text-on-surface shadow-sm transition-[background-color,box-shadow] duration-200 hover:bg-surface-muted hover:shadow-md"
                  >
                    Live demo
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                  >
                    <IconGitHub className="h-4 w-4 shrink-0" />
                    Repository
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
