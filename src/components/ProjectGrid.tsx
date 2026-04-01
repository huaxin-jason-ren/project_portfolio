import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { IconGitHub } from "@/components/icons/SocialIcons";
import { projects } from "@/content/projects";
import { Section } from "@/components/Section";

export function ProjectGrid() {
  return (
    <Section id="projects" className="bg-background">
      <div className="mb-12 max-w-2xl space-y-4 md:mb-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Selected projects
        </h2>
        <p className="text-lg text-muted">
          Outcome-focused work — replace placeholder links in <code className="rounded bg-border/60 px-1.5 py-0.5 text-sm">src/content/projects.ts</code>{" "}
          with your deployments and repositories.
        </p>
      </div>
      <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-[box-shadow,border-color] duration-200 ease-out hover:border-surface-muted hover:shadow-md">
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
                    className="object-cover transition-opacity duration-200 ease-out group-hover:opacity-90"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </a>
              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-md text-foreground transition-colors duration-200 hover:text-accent cursor-pointer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-surface-muted">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl bg-surface px-4 py-2.5 text-sm font-semibold text-on-surface transition-colors duration-200 hover:bg-surface-muted"
                  >
                    Live demo
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
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
