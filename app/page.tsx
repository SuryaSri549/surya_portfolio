export default function Home() {
  const projects = [
    {
      title: "Sales & Customer Insights Web App",
      description:
        "Live retail analytics platform with forecasting (ARIMA/Prophet), customer segmentation (K-Means), ROI and inventory tools.",
      link: "https://saleswebapp-1hki.onrender.com/",
      tags: ["Flask", "Python", "ARIMA", "Prophet", "K-Means", "SQLite", "Bootstrap"],
    },
    {
      title: "Emotion Detection (Speech + Face)",
      description:
        "Dual-modal ML: GRU for speech + CNN for facial expressions. Inference pipeline with preprocessing.",
      link: "#",
      tags: ["Python", "Deep Learning", "GRU", "CNN"],
    },
    {
      title: "Tableau Superstore Dashboard",
      description:
        "Interactive BI dashboard (regional performance, discount impact, top products, forecast overlays).",
      link: "#",
      tags: ["Tableau", "Analytics", "BI"],
    },
  ];

  const certifications = [
    {
      name: "MySQL Installation and Configuration",
      issuer: "LinkedIn Learning",
      instructor: "Bill Weinman",
      year: "2025",
      month: "September",
      skills: ["MySQL", "Database Administration", "Server Configuration"],
      link: "https://www.linkedin.com/learning/certificates/9000ba864eb08c416ae5996bddfa1a0ee76c232d0b4cac2a785d751fd829bf68?u=2189292",
      verified: true,
      badgeEarned: false,
      status: "Completed",
    },
    {
      name: "MySQL Essential Training",
      issuer: "LinkedIn Learning",
      instructor: "Bill Weinman",
      year: "2025",
      month: "September",
      skills: ["MySQL", "SQL Queries", "Database Design", "Data Management"],
      link: "https://www.linkedin.com/learning/mysql-essential-training-23484714/thank-you?u=2189292",
      verified: true,
      badgeEarned: false,
      status: "Completed",
    },
    {
      name: "Introduction to Transact-SQL",
      issuer: "Microsoft Learn",
      year: "2025",
      month: "September",
      skills: ["T-SQL", "SQL Server", "Database Queries", "Data Analysis"],
      link: "https://learn.microsoft.com/en-us/training/modules/introduction-to-transact-sql/",
      verified: true,
      badgeEarned: true,
      status: "Completed",
    },
    {
      name: "Sort and Filter Results in T-SQL",
      issuer: "Microsoft Learn",
      year: "2025",
      month: "September",
      skills: ["T-SQL", "Data Filtering", "Query Optimization", "SQL Server"],
      link: "https://learn.microsoft.com/en-us/training/modules/sort-filter-queries/",
      verified: true,
      badgeEarned: true,
      status: "In Progress",
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "Pandas",
    "Flask",
    "Spark",
    "Tableau",
    "Power BI",
    "Machine Learning",
  ];

  return (
    <main>
      {/* Header */}
     <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">
            Surya Sri Sundara
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#projects" className="hover:opacity-70">
              Projects
            </a>
            <a href="#skills" className="hover:opacity-70">
              Skills
            </a>
            <a href="#certifications" className="hover:opacity-70">
              Certifications
            </a>
            <a href="#about" className="hover:opacity-70">
              About
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
  <section id="home" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
        Data &amp; BI Analyst
        <span className="block text-slate-600 text-xl md:text-2xl mt-3">
          MSc Big Data Management &amp; Analytics — Dublin
        </span>
      </h1>
      <p className="mt-6 text-slate-700 leading-relaxed">
        I turn raw data into clear, actionable insights. I build end-to-end analytics apps,
        time-series forecasts, and interactive BI dashboards that help teams make smarter decisions.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="px-5 py-2.5 rounded-2xl shadow bg-slate-900 text-white text-sm">
          View Projects
        </a>
        <a href="/Surya_Sri_Sundara_CV.pdf" className="px-5 py-2.5 rounded-2xl border border-slate-300 text-sm">
          Download CV
        </a>
        <a
          href="https://linkedin.com/in/surya-sri-sundara-4ab45b331"
          className="px-5 py-2.5 rounded-2xl border border-slate-300 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>

    <div className="bg-white rounded-3xl shadow p-6 border border-slate-200">
      <div className="aspect-[16/10] rounded-xl border border-slate-200 bg-slate-100 flex items-center justify-center">
        <span className="text-sm text-slate-500">Add a hero image or chart here</span>
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Tip: replace this with a clean analytics screenshot (Tableau/Matplotlib) for instant credibility.
      </p>
    </div>
  </div>
</section>

{/* Projects */}
<section id="projects" className="bg-white border-t">
  <div className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-semibold text-slate-900">Selected Projects</h2>
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.link}
          className="block group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 h-full">
            <h3 className="font-semibold group-hover:underline text-slate-900">{p.title}</h3>
            <p className="text-sm text-slate-700 mt-2">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-1 rounded-full border border-slate-200 bg-slate-100 text-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

{/* Skills */}
<section id="skills" className="border-t bg-slate-50">
  <div className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-semibold text-slate-900">Skills</h2>
    <ul className="mt-6 flex flex-wrap gap-3">
      {skills.map((s) => (
        <li
          key={s}
          className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm text-slate-900 shadow-sm"
        >
          {s}
        </li>
      ))}
    </ul>
  </div>
</section>

{/* Certifications */}
<section id="certifications" className="border-t bg-white">
  <div className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-semibold text-slate-900">Certifications</h2>
    <ul className="mt-6 grid gap-4 md:grid-cols-2">
      {certifications.map((c) => (
        <li key={c.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-slate-900">{c.name}</h3>
              <p className="text-sm text-slate-700">
                {c.issuer}
                {c.instructor ? ` • Instructor: ${c.instructor}` : ""}
              </p>
              <p className="text-xs text-slate-600">
                {c.month} {c.year}
              </p>
            </div>
            <div className="flex gap-2">
              {c.badgeEarned && (
                <span className="text-xs rounded-full px-2 py-1 bg-emerald-600 text-white">Badge</span>
              )}
              {c.verified && (
                <span className="text-xs rounded-full px-2 py-1 bg-blue-600 text-white">Verified</span>
              )}
              {c.status && (
                <span className="text-xs rounded-full px-2 py-1 bg-amber-500 text-white">{c.status}</span>
              )}
            </div>
          </div>
          {c.skills?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {c.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] px-2 py-1 rounded-full border border-slate-200 bg-white text-slate-900"
                >
                  {skill}
                </span>
              ))}
            </div>
          ) : null}
          {c.link && (
            <a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 underline text-sm text-slate-900"
            >
              View Certificate
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
</section>

{/* About */}
<section id="about" className="bg-white border-t">
  <div className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-semibold text-slate-900">About</h2>
    <p className="mt-4 text-slate-700 max-w-3xl">
      Scholarship recipient and top performer during the MSc at Griffith College. I focus on practical impact:
      forecasting sales, segmenting customers, and turning dashboards into decisions. Former board member of the
      university magazine <em>Key</em> and event manager for an international conference.
    </p>
  </div>
</section>

{/* Contact */}
<section id="contact" className="border-t bg-slate-50">
  <div className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-semibold text-slate-900">Contact</h2>
    <p className="mt-4 text-slate-700">
      Email:{" "}
      <a className="underline" href="mailto:suryasrisundara549@gmail.com">
        suryasrisundara549@gmail.com
      </a>
    </p>
    <p className="text-slate-700">
      LinkedIn:{" "}
      <a
        className="underline"
        href="https://linkedin.com/in/surya-sri-sundara-4ab45b331"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/surya-sri-sundara-4ab45b331
      </a>
    </p>
  </div>
</section>

<footer className="text-center text-xs text-slate-600 py-10">
  © {new Date().getFullYear()} Surya Sri Sundara — Dublin
</footer>

    </main>
  );
}
