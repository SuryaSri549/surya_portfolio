export default function Home() {
  const projects = [
    {
      title: "Sales & Customer Insights Web App",
      description:
        "Full-stack retail analytics platform built end-to-end. Covers sales forecasting (ARIMA/Prophet), customer segmentation (K-Means), inventory simulation, and marketing ROI analysis. Includes system documentation and user role management — built like a real business tool.",
      link: "https://saleswebapp-1hki.onrender.com/",
      tags: ["Flask", "Python", "ARIMA", "Prophet", "K-Means", "SQLite", "Power BI"],
      live: true,
    },
    {
      title: "Business Analysis — Process Documentation",
      description:
        "Requirements gathering, workflow documentation and user guide creation for the Sales App. Produced stakeholder-focused outputs including process maps, data dictionaries, and training materials — mirroring real BA deliverables.",
      link: "https://github.com/SuryaSri549/saleswebapp",
      tags: ["Requirements Gathering", "Process Mapping", "Documentation", "BA"],
      live: false,
    },
    {
      title: "Power BI Sales Dashboard",
      description:
        "Interactive BI dashboard built on retail sales data. Covers regional performance, discount impact analysis, top product rankings and forecast overlays. Designed for non-technical decision makers.",
      link: "https://github.com/SuryaSri549",
      tags: ["Power BI", "DAX", "Data Modelling", "BI Reporting"],
      live: false,
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
      status: "Completed",
    },
  ];

  const skillGroups = [
    {
      category: "Business Analysis",
      skills: [
        "Requirements Gathering",
        "Process Mapping",
        "Workflow Documentation",
        "Gap Analysis",
        "User Stories",
        "Stakeholder Communication",
        "UAT Support",
      ],
    },
    {
      category: "Data & Reporting",
      skills: [
        "Power BI",
        "DAX",
        "SQL",
        "Python",
        "Pandas",
        "Data Validation",
        "BI Dashboards",
        "Excel (Advanced)",
      ],
    },
    {
      category: "Tools & Tech",
      skills: ["Flask", "SQLite", "GitHub", "VS Code", "Microsoft Office Suite"],
    },
    {
      category: "Currently Learning",
      skills: ["QQI Level 5 Medical Terminology", "Jira", "Confluence"],
    },
  ];

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg text-white">
            Surya Sri Sundara
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#projects" className="text-slate-200 hover:text-amber-400 transition">Projects</a>
            <a href="#skills" className="text-slate-200 hover:text-amber-400 transition">Skills</a>
            <a href="#certifications" className="text-slate-200 hover:text-amber-400 transition">Certifications</a>
            <a href="#about" className="text-slate-200 hover:text-amber-400 transition">About</a>
            <a href="#contact" className="text-slate-200 hover:text-amber-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900">
              <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
                Business Analyst
              </span>
              <span className="block text-slate-700 text-xl md:text-2xl mt-2 font-medium">
                Data & BI
              </span>
              <span className="block text-amber-500 text-lg md:text-xl mt-3 font-medium">
                Postgraduate in Big Data Analytics — Dublin, Ireland
              </span>
            </h1>
            <p className="mt-6 text-slate-700 leading-relaxed">
              I bridge the gap between{" "}
              <span className="font-semibold text-slate-900">data and decisions</span>. I gather
              requirements, map processes, and build end-to-end analytics tools — from{" "}
              <span className="font-semibold text-amber-600">Power BI dashboards</span> to
              forecasting apps — that help teams act on what the numbers are telling them.
              Based in Dublin.{" "}
              <span className="font-semibold text-slate-900">
                Actively seeking junior BA and Data Analyst roles.
              </span>{" "}
              Full right to work in Ireland.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-2xl shadow bg-slate-900 text-white text-sm hover:bg-slate-700 transition"
              >
                View Projects
              </a>
              <a
                href="/Surya_Sri_Sundara_CV.pdf"
                className="px-5 py-2.5 rounded-2xl border border-slate-300 text-sm hover:border-amber-400 hover:text-amber-600 transition"
              >
                Download CV
              </a>
              <a
                href="https://linkedin.com/in/surya-sri-sundara-4ab45b331"
                className="px-5 py-2.5 rounded-2xl border border-slate-300 text-sm hover:border-amber-400 hover:text-amber-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>

            {/* Status badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm text-emerald-700 font-medium">
                Open to work — Junior BA · Data Analyst · BI Analyst
              </span>
            </div>
          </div>

          {/* Right side stats panel */}
          <div className="bg-slate-900 rounded-3xl shadow-lg p-6 border border-slate-700 text-white">
            <p className="text-xs text-slate-400 uppercase tracking-widest mb-4">At a glance</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-2xl font-bold text-amber-400">3+</p>
                <p className="text-xs text-slate-400 mt-1">Live Projects</p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-2xl font-bold text-amber-400">4</p>
                <p className="text-xs text-slate-400 mt-1">Certifications</p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-2xl font-bold text-amber-400">PG</p>
                <p className="text-xs text-slate-400 mt-1">Big Data Analytics</p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-4">
                <p className="text-2xl font-bold text-amber-400">IE</p>
                <p className="text-xs text-slate-400 mt-1">Right to Work ✓</p>
              </div>
            </div>
            <div className="mt-4 bg-slate-800 rounded-2xl p-4">
              <p className="text-xs text-slate-400 mb-2">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Power BI", "Python", "SQL", "Flask", "Process Mapping"].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 rounded-full bg-slate-700 text-amber-300 border border-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-slate-900">What I've Built</h2>
          <p className="text-slate-500 mt-2 text-sm">Built from scratch. Documented end-to-end.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                className="block group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 h-full hover:border-amber-400 hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold group-hover:text-amber-600 text-slate-900 transition">
                      {p.title}
                    </h3>
                    {p.live && (
                      <span className="ml-2 shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                        Live
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-1 rounded-full border border-slate-200 bg-slate-100 text-slate-700"
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
          <p className="text-slate-500 mt-2 text-sm mb-8">
            IIBA Ireland Chapter member — actively developing BA practice
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5"
              >
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-sm text-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-slate-900">Certifications</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">{c.name}</h3>
                    <p className="text-sm text-slate-600">
                      {c.issuer}
                      {c.instructor ? ` • Instructor: ${c.instructor}` : ""}
                    </p>
                    <p className="text-xs text-slate-500">
                      {c.month} {c.year}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    {c.badgeEarned && (
                      <span className="text-xs rounded-full px-2 py-1 bg-emerald-600 text-white">
                        Badge
                      </span>
                    )}
                    {c.verified && (
                      <span className="text-xs rounded-full px-2 py-1 bg-blue-600 text-white">
                        Verified
                      </span>
                    )}
                    {c.status && (
                      <span className="text-xs rounded-full px-2 py-1 bg-amber-500 text-white">
                        {c.status}
                      </span>
                    )}
                  </div>
                </div>
                {c.skills?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2 py-1 rounded-full border border-slate-200 bg-white text-slate-800"
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
                    className="inline-block mt-4 underline text-sm text-amber-600 hover:text-amber-800 transition"
                  >
                    View Certificate →
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-white">About</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-slate-300 leading-relaxed">
            <p>
              I&apos;m a Business Analyst based in Dublin with a Postgraduate Diploma in Big Data
              Management and Analytics from Griffith College Dublin.
            </p>
            <p>
              My focus is practical — I take complex data, make sense of it, and turn it into
              clear outputs that help people make better decisions. That means dashboards, process
              maps, documentation, and analytics tools that actually get used.
            </p>
            <p>
              I&apos;m an active member of the{" "}
              <span className="text-amber-400 font-medium">IIBA Ireland Chapter</span>, currently
              completing QQI Level 5 in Medical Terminology, and I&apos;m open to junior BA, Data
              Analyst, and Business Intelligence roles across any sector.
            </p>
            <p className="text-amber-400 font-medium">
              Full right to work in Ireland — Stamp 1G.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-slate-900">Contact</h2>
          <p className="text-slate-500 mt-2 mb-6 text-sm">
            Open to junior BA, Data Analyst, and BI Analyst roles — let&apos;s talk.
          </p>
          <div className="space-y-3">
            <p className="text-slate-700">
              Email:{" "}
              <a
                className="underline text-amber-600 hover:text-amber-800 transition"
                href="mailto:suryasrisundara549@gmail.com"
              >
                suryasrisundara549@gmail.com
              </a>
            </p>
            <p className="text-slate-700">
              LinkedIn:{" "}
              <a
                className="underline text-amber-600 hover:text-amber-800 transition"
                href="https://linkedin.com/in/surya-sri-sundara-4ab45b331"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/surya-sri-sundara-4ab45b331
              </a>
            </p>
            <p className="text-slate-700">
              GitHub:{" "}
              <a
                className="underline text-amber-600 hover:text-amber-800 transition"
                href="https://github.com/SuryaSri549"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/SuryaSri549
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-slate-500 py-10 border-t bg-white">
        © {new Date().getFullYear()} Surya Sri Sundara — Dublin, Ireland
      </footer>
    </main>
  );
}
