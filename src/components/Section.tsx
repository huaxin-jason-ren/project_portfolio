import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export function Section({ id, children, className = "", as: Tag = "section" }: SectionProps) {
  return (
    <Tag id={id} className={`scroll-mt-28 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </Tag>
  );
}
