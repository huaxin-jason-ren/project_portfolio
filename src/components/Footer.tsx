import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { IconGitHub, IconLinkedIn } from "@/components/icons/SocialIcons";
import { ScrollReveal } from "@/components/ScrollReveal";

const iconClass = "h-5 w-5 shrink-0";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t pb-16 pt-28"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: 0.6,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full blur-[100px]"
        style={{
          background:
            "color-mix(in srgb, var(--accent) 8%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 max-w-xl space-y-4">
            <p
              className="font-heading text-sm font-bold uppercase tracking-[0.38em]"
              style={{ color: "var(--accent)" }}
            >
              Get in touch
            </p>
            <p className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Let&apos;s build something{" "}
              <span className="bark-gradient-text">remarkable.</span>
            </p>
            <p className="leading-relaxed text-muted md:text-lg">
              Available for full-time or contract work. I prefer async-first teams that value
              documentation, code review, and thoughtful architecture.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <ul className="flex flex-wrap gap-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="focus-ring btn-glow inline-flex cursor-pointer items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-bold text-accent-foreground shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_35%,transparent)] transition-[background,box-shadow] duration-300 hover:shadow-[0_0_36px_color-mix(in_srgb,var(--accent)_55%,transparent)]"
                style={{ background: "var(--accent)" }}
              >
                <Mail className={iconClass} aria-hidden />
                Email me
              </a>
            </li>
            <li>
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex cursor-pointer items-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-semibold text-foreground transition-[border-color,background,color] duration-200 hover:border-accent/60 hover:text-accent"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
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
                className="focus-ring inline-flex cursor-pointer items-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-semibold text-foreground transition-[border-color,background,color] duration-200 hover:border-accent/60 hover:text-accent"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <IconLinkedIn className={iconClass} />
                LinkedIn
              </a>
            </li>
          </ul>
        </ScrollReveal>

        {/* Bottom bar */}
        <div
          className="mt-20 flex flex-col items-center gap-4 border-t pt-8 sm:flex-row sm:justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs text-muted">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">{site.name}</span>
            {" "}— Built with Next.js &amp; Tailwind CSS
          </p>
          <p className="text-xs text-muted/60">
            Crafted with care for the details
          </p>
        </div>
      </div>
    </footer>
  );
}
