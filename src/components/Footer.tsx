import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { IconGitHub, IconLinkedIn } from "@/components/icons/SocialIcons";

const iconClass = "h-5 w-5 shrink-0";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-background pb-12 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl space-y-3">
          <p className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            {site.name}
          </p>
          <p className="text-muted">
            Available for full-time or contract work. Prefer async-first teams that value documentation
            and code review.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <Mail className={iconClass} aria-hidden />
              Email
            </a>
          </li>
          <li>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <IconGitHub className={iconClass} />
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <IconLinkedIn className={iconClass} />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-4 text-center text-xs text-muted sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {site.name}. Built with Next.js.
      </p>
    </footer>
  );
}
