import type { Entry } from "@/data/profile";

export default function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="py-5 first:pt-0">
      <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-serif text-lg font-semibold leading-snug">{entry.title}</h3>
        <span className="shrink-0 text-sm text-muted">{entry.dates}</span>
      </div>
      <p className="text-sm text-muted">
        {entry.org}
        {entry.location ? ` · ${entry.location}` : ""}
      </p>
      {entry.summary && <p className="mt-2 leading-relaxed">{entry.summary}</p>}
      <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed marker:text-muted">
        {entry.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {(entry.tags || entry.links) && (
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          {entry.tags?.map((t) => (
            <span key={t} className="rounded bg-accent-soft px-2 py-0.5 text-accent">
              {t}
            </span>
          ))}
          {entry.links?.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-medium text-accent underline underline-offset-2"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
