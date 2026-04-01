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
      <div className="glass-card pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-border/80 px-4 py-3 shadow-[0_8px_40px_-16px_rgba(0,0,0,0.18)] sm:gap-4 sm:px-6">
        <Link
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent focus-ring rounded-md cursor-pointer"
        >
          {site.name.split(" ")[0]}
          <span className="text-surface-muted">.</span>
        </Link>
        <nav
          aria-label="Primary"
          className="flex min-w-0 flex-1 items-center justify-center gap-0.5 overflow-x-auto sm:gap-1"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-surface-muted transition-colors duration-200 hover:text-foreground cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="focus-ring inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors duration-200 hover:bg-accent/90 cursor-pointer"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
