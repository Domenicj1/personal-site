// Single source of truth for the site. Edit this file to update content;
// the home page and /cv both render from it.

export type Link = { label: string; href: string };

export type Entry = {
  title: string;
  org: string;
  location?: string;
  dates: string;
  tags?: string[];
  summary?: string;
  bullets: string[];
  links?: Link[];
};

export const profile = {
  name: "Domenic J. Jernigan",
  shortName: "Domenic Jernigan",
  headline:
    "Cognitive Science student at UC San Diego working on applied machine learning, AI tooling, and systems.",
  about: [
    "I'm an undergraduate at UC San Diego (Class of 2027) studying Cognitive Science with a specialization in Machine Learning & Neural Computation and a minor in Computer Science.",
    "My work sits between data science and engineering: I've led an ML research project on Bitcoin's behavior as a financial asset, helped teach COGS 108 (Data Science in Practice), and build tools that put large language models to practical use, like an agent that triages production logs.",
  ],
  location: "San Diego, CA",
  email: "jernigandomenic@gmail.com",
  links: {
    github: "https://github.com/Domenicj1",
    linkedin: "https://linkedin.com/in/domenic-jernigan",
  },
  resumePdf: "/resume.pdf",
};

export const education = {
  school: "University of California, San Diego",
  location: "La Jolla, CA",
  degree: "B.S. Cognitive Science, Specialization in Machine Learning & Neural Computation",
  minor: "Minor in Computer Science",
  dates: "Expected June 2027",
  gpa: "3.6",
  coursework: [
    "COGS 108: Data Science in Practice",
    "CSE 100: Advanced Data Structures",
  ],
};

export const experience: Entry[] = [
  {
    title: "Pedagogical Learning Apprentice",
    org: "UC San Diego — COGS 108: Data Science in Practice",
    location: "La Jolla, CA",
    dates: "Mar 2026 – Jun 2026",
    bullets: [
      "Competitively selected by course faculty to support instruction in applied machine learning and data science across weekly sections and project reviews.",
      "Mentored students through end-to-end Python pipelines using pandas and scikit-learn: regression, classification, time-series forecasting, and unsupervised clustering.",
      "Debugged student code, held office hours, and advised research-style group projects from problem scoping through model evaluation.",
      "Used the Anthropic API to build a Claude Skill that helps turn the professor's project ideas into course material, and converted class projects from Jupyter notebooks to Otter Grader.",
    ],
  },
  {
    title: "Data Operations Specialist",
    org: "UC San Diego, Office of Undergraduate Admissions",
    location: "La Jolla, CA",
    dates: "May 2025 – Present",
    bullets: [
      "Process high-volume applicant records (transcripts, test scores, correspondence) through scanning, indexing, and validation workflows in Slate CRM and OnBase.",
      "Maintain data integrity and FERPA compliance across Slate, OnBase, and Blade; reconcile discrepancies flagged during peak admissions cycles.",
      "Collaborate with Enrollment Management on workflow improvements for peak-cycle processing.",
    ],
  },
  {
    title: "VP of Finance & Operations",
    org: "Interfraternity Council, UC San Diego",
    location: "La Jolla, CA",
    dates: "Dec 2024 – Jan 2026",
    bullets: [
      "Managed budgets, fund allocation, and expense tracking for a council overseeing 15 fraternity chapters and hundreds of members.",
      "Built financial reports that made dues, reimbursements, and multi-event budgets transparent across the organization.",
      "Partnered with the executive board and chapter leaders on compliance reviews and quarterly financial strategy.",
    ],
  },
];

export const research: Entry[] = [
  {
    title: "Is Bitcoin a Financial Instrument? An ML Study of Crypto Market Behavior",
    org: "ML Research Project Lead — COGS 108, UC San Diego",
    dates: "Jan 2026 – Mar 2026",
    tags: ["Python", "scikit-learn", "Time series"],
    summary:
      "Led a peer team extending peer-reviewed literature on cryptocurrency markets by testing how Bitcoin behaves relative to traditional asset classes.",
    bullets: [
      "Found Bitcoin's correlation with the S&P 500 reached roughly 0.60–0.70 around the COVID era.",
      "Engineered features and trained regression, classification, and clustering models; used time-series forecasting to benchmark Bitcoin against equities, commodities, and currency indices.",
      "Owned scoping, delegation, and experiment design across the 10-week project; authored the final report and presentation (course grade: A).",
    ],
  },
  {
    title: "EMG Brain–Computer Interface Workshop",
    org: "Triton Neurotech, UC San Diego",
    dates: "2026",
    tags: ["Python", "Signal processing", "EMG", "BCI"],
    summary:
      "A hands-on workshop where participants control a game with their forearm muscles, using consumer EMG hardware and a real-time Python signal pipeline.",
    bullets: [
      "Reads muscle activity from a MindRove armband or OpenBCI Ganglion over LSL, UDP, or direct SDK connections, with keyboard and synthetic modes for testing without hardware.",
      "Removes DC offset, rectifies, and smooths the raw EMG signal, then calibrates a per-user threshold from rest and flex recordings to turn a flex into a real-time game trigger.",
    ],
    links: [
      { label: "Code", href: "https://github.com/Domenicj1/Triton-Neurotech-EMG-Workshop" },
    ],
  },
];

export const projects: Entry[] = [
  {
    title: "AI Log Triage Agent",
    org: "Personal project",
    dates: "Apr 2026 – Present",
    tags: ["Python", "Anthropic API", "LLM evals"],
    summary:
      "A command-line tool that uses Claude to summarize incidents in application logs and propose likely root causes.",
    bullets: [
      "A regex-based clustering layer collapses repeated log lines before they reach the model, cutting input tokens by 80–90% on synthetic logs.",
      "Validated against a 20-case hand-labeled eval set: 87% agreement on severity classification.",
      "About 150 lines of code; processes 10,000-line logs in under 8 seconds for about $0.005 per run.",
    ],
    links: [{ label: "Code", href: "https://github.com/Domenicj1/sentinel-triage" }],
  },
  {
    title: "Pioneer Shell",
    org: "Systems programming",
    dates: "Mar 2025",
    tags: ["C", "Unix"],
    bullets: [
      "A Unix-like shell supporting command execution, piping, and I/O redirection.",
    ],
  },
  {
    title: "Virtual Memory Allocator",
    org: "Systems programming",
    dates: "Feb 2025",
    tags: ["C"],
    bullets: [
      "A custom malloc/free implementation with explicit free-list management.",
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"] },
  {
    label: "ML & Data",
    items: ["pandas", "NumPy", "scikit-learn", "Jupyter", "Tableau", "SQL Workbench", "Excel"],
  },
  {
    label: "Tools",
    items: ["Git/GitHub", "GDB", "Valgrind", "Bash", "Vim", "React", "Next.js", "Vercel", "Anthropic API"],
  },
];
