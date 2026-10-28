import type { Metadata } from "next";
import { education, experience, profile, projects, research, skills } from "@/data/profile";
import type { Entry } from "@/data/profile";

export const metadata: Metadata = {
  title: "CV",
};

function CvEntries({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="mt-8">
      <h2 className="border-b border-border pb-1 font-serif text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-4">
        {entries.map((e) => (
          <div key={e.title}>
            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold">{e.title}</h3>
              <span className="shrink-0 text-sm text-muted">{e.dates}</span>
            </div>
            <p className="text-sm italic text-muted">
              {e.org}
              {e.location ? `, ${e.location}` : ""}
            </p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed">
              {e.summary && <li>{e.summary}</li>}
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CvPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <header className="text-center">
        <h1 className="font-serif text-3xl font-semibold">{profile.name}</h1>
        <p className="mt-2 text-sm text-muted">
          {profile.location} · {profile.email} · github.com/Domenicj1 ·
          linkedin.com/in/domenic-jernigan
        </p>
        <a
          href={profile.resumePdf}
          className="no-print mt-4 inline-block text-sm text-accent underline underline-offset-2"
        >
          Download the one-page resume (PDF)
        </a>
      </header>

      <section className="mt-8">
        <h2 className="border-b border-border pb-1 font-serif text-xl font-semibold">Education</h2>
        <div className="mt-3">
          <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-semibold">{education.school}</h3>
            <span className="shrink-0 text-sm text-muted">{education.dates}</span>
          </div>
          <p className="text-sm">{education.degree}</p>
          <p className="text-sm text-muted">
            {education.minor} · GPA {education.gpa}
          </p>
          <p className="mt-1 text-sm">
            <span className="font-medium">Coursework:</span> {education.coursework.join("; ")}
          </p>
        </div>
      </section>

      <CvEntries title="Research" entries={research} />
      <CvEntries title="Experience" entries={experience} />
      <CvEntries title="Projects" entries={projects} />

      <section className="mt-8">
        <h2 className="border-b border-border pb-1 font-serif text-xl font-semibold">Skills</h2>
        <dl className="mt-3 space-y-1 text-sm">
          {skills.map((s) => (
            <div key={s.label}>
              <dt className="inline font-medium">{s.label}: </dt>
              <dd className="inline">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
