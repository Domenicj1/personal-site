import Link from "next/link";
import { profile } from "@/data/profile";

const sections = [
  { href: "/#education", label: "Education" },
  { href: "/#experience", label: "Experience" },
  { href: "/#research", label: "Research" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-10 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 sm:px-6 py-3">
        <Link href="/" className="font-serif text-lg font-semibold">
          {profile.shortName}
        </Link>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          {sections.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="hover:text-accent">
                {s.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/cv" className="hover:text-accent">
              CV
            </Link>
          </li>
          <li>
            <a
              href={profile.resumePdf}
              className="rounded border border-accent px-2.5 py-1 text-accent hover:bg-accent-soft"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
