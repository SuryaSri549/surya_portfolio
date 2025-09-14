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
// inside Home component, add this new array
const certifications = [
  {
    name: "MySQL Installation and Configuration",
    issuer: "LinkedIn Learning",
    year: "2025",
    link: "https://www.linkedin.com/learning/certificates/9000ba864eb08c416ae5996bddfa1a0ee76c232d0b4cac2a785d751fd829bf68?u=2189292"
  }
];
  const skills = [
    "Python","SQL","Pandas","Flask","Spark","Tableau","Power BI","Machine Learning"
  ];

  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-lg">Surya Sri Sundara</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Data & BI Analyst
              <span className="block text-gray-600 text-xl md:text-2xl mt-3">
                MSc Big Data Management & Analytics — Dublin
              </span>
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed">
              I turn raw data into clear, actionable insights. I build end-to-end analytics apps,
              time-series forecasts, and interactive BI dashboards that help teams make smarter decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-2.5 rounded-2xl shadow bg-black text-white text-sm">View Projects</a>
              <a href="/Surya_Sri_Sundara_CV.pdf" className="px-5 py-2.5 rounded-2xl border text-sm">Download CV</a>
              <a href="https://linkedin.com/in/surya-sri-sundara-4ab45b331" className="px-5 py-2.5 rounded-2xl border text-sm">LinkedIn</a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow p-6 border">
            <div className="aspect-[16/10] rounded-xl border bg-gray-100 flex items-center justify-center">
              <span className="text-sm text-gray-500">Add a hero image or chart here</span>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Replace with a clean analytics screenshot (Tableau/Matplotlib).
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {projects.map((p) => (
              <a key={p.title} href={p.link} target="_blank" className="block group">
                <div className="rounded-2xl border bg-white shadow-sm p-5 h-full">
                  <h3 className="font-semibold group-hover:underline">{p.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-full border">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <li key={s} className="px-3 py-1.5 rounded-full border bg-white text-sm shadow-sm">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Scholarship recipient and top performer during the MSc at Griffith College. I focus on practical impact:
            forecasting sales, segmenting customers, and turning dashboards into decisions. Former board member of the
            university magazine <em>Key</em> and event manager for an international conference.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-gray-700">Email: <a className="underline" href="mailto:thimmanacharanajaykumar24@gmail.com">thimmanacharanajaykumar24@gmail.com</a></p>
          <p className="text-gray-700">LinkedIn: <a className="underline" href="https://linkedin.com/in/surya-sri-sundara-4ab45b331">linkedin.com/in/surya-sri-sundara-4ab45b331</a></p>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-500 py-10">
        © {new Date().getFullYear()} Surya Sri Sundara — Dublin
      </footer>
    </main>
  );
}
