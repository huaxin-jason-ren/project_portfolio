import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="pointer-events-none fixed top-4 left-4 right-4 z-50 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
      <div className="glass-card pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-border/60 px-4 py-3 shadow-[0_8px_48px_-16px_rgba(0,0,0,0.5),0_0_0_1px_rgba(217,119,6,0.08)] sm:gap-4 sm:px-6">
        {/* Logo */}
        <Link
          href="#top"
          className="focus-ring group flex items-center gap-2 rounded-lg font-heading text-lg font-bold tracking-tight text-foreground transition-colors duration-200 hover:text-accent"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground text-sm font-bold shadow-[0_0_16px_color-mix(in_srgb,var(--accent)_50%,transparent)]">
            {site.name.split(" ").map((w) => w[0]).join("")}
          </span>
          <span>
            {site.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </span>
        </Link>

        {/* Nav */}
        <nav
          aria-label="Primary"
          className="flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto sm:gap-1"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="focus-ring btn-glow inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_35%,transparent)] transition-[background-color,box-shadow] duration-200 hover:bg-accent-warm hover:shadow-[0_0_28px_color-mix(in_srgb,var(--accent)_55%,transparent)]"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
