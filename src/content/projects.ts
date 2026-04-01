export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  repo: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "commerce-api",
    title: "Commerce checkout API",
    description:
      "Payment-ready checkout flows with idempotency, webhooks, and observability — cut failed orders by tightening validation and retries.",
    href: "https://example.com",
    repo: "https://github.com/yourusername/commerce-api",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    imageSrc: "/projects/card-abstract.svg",
    imageAlt:
      "Abstract block graphic representing the commerce API project preview",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics dashboard",
    description:
      "Role-aware dashboards with exportable reports and shared deep links so teams stop juggling spreadsheets.",
    href: "https://example.com",
    repo: "https://github.com/yourusername/analytics-dashboard",
    tags: ["Next.js", "React", "Tailwind CSS"],
    imageSrc: "/projects/card-abstract.svg",
    imageAlt:
      "Abstract block graphic representing the analytics dashboard project preview",
  },
  {
    id: "design-system",
    title: "Internal design system",
    description:
      "Documented components and tokens consumed by three product teams — faster builds and fewer one-off UI bugs.",
    href: "https://example.com",
    repo: "https://github.com/yourusername/design-system",
    tags: ["React", "Storybook", "a11y"],
    imageSrc: "/projects/card-abstract.svg",
    imageAlt:
      "Abstract block graphic representing the design system project preview",
  },
];
