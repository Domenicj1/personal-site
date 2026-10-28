import Link from "next/link";
import Section from "@/components/Section";
import EntryCard from "@/components/EntryCard";
import { education, experience, profile, projects, research, skills } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6">
      <section id="about" className="py-16 sm:py-24">
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl leading-relaxed text-muted">{profile.headline}</p>
        <div className="mt-6 space-y-4 leading-relaxed">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a
            href={profile.resumePdf}
            className="rounded bg-accent px-4 py-2 font-medium text-bg hover:opacity-90"
          >
            Download resume
          </a>
          <Link
            href="/cv"
            className="rounded border border-border px-4 py-2 hover:border-accent hover:text-accent"
          >
            View full CV
          </Link>
          <a
            href="#contact"
            className="rounded border border-border px-4 py-2 hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </section>

      <Section id="education" title="Education">
        <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-serif text-lg font-semibold">{education.school}</h3>
          <span className="shrink-0 text-sm text-muted">{education.dates}</span>
        </div>
        <p className="mt-1">{education.degree}</p>
        <p className="text-muted">
          {education.minor} · GPA {education.gpa}
        </p>
        <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-muted">
          Selected coursework
        </h4>
        <ul className="mt-2 flex flex-wrap gap-2 text-sm">
          {education.coursework.map((c) => (
            <li key={c} className="rounded border border-border px-2.5 py-1">
              {c}
            </li>
          ))}
        </ul>
        <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted">Skills</h4>
        <dl className="mt-2 space-y-1 text-sm">
          {skills.map((s) => (
            <div key={s.label} className="sm:flex sm:gap-3">
              <dt className="w-24 shrink-0 font-medium">{s.label}</dt>
              <dd className="text-muted">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="experience" title="Experience">
        <div className="divide-y divide-border">
          {experience.map((e) => (
            <EntryCard key={e.title} entry={e} />
          ))}
        </div>
      </Section>

      <Section id="research" title="Research">
        <div className="divide-y divide-border">
          {research.map((e) => (
            <EntryCard key={e.title} entry={e} />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="divide-y divide-border">
          {projects.map((e) => (
            <EntryCard key={e.title} entry={e} />
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="leading-relaxed">
          I&apos;m looking for internships and research opportunities in machine learning and AI
          engineering. The best way to reach me is email.
        </p>
        <ul className="mt-5 space-y-2">
          <li>
            <span className="inline-block w-20 text-sm text-muted">Email</span>
            <a href={`mailto:${profile.email}`} className="text-accent underline underline-offset-2">
              {profile.email}
            </a>
          </li>
          <li>
            <span className="inline-block w-20 text-sm text-muted">GitHub</span>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
              github.com/Domenicj1
            </a>
          </li>
          <li>
            <span className="inline-block w-20 text-sm text-muted">LinkedIn</span>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
              linkedin.com/in/domenic-jernigan
            </a>
          </li>
          <li>
            <span className="inline-block w-20 text-sm text-muted">Location</span>
            {profile.location}
          </li>
        </ul>
      </Section>
    </main>
  );
}
