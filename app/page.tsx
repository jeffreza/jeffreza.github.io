import Image from "next/image";

const capabilities = [
  ["01", "Performance Marketing", "Meta Ads and Google Ads campaigns across B2B and B2C, built to turn media spend into qualified leads, booked appointments, and revenue.", "Meta Ads · Google Ads · B2B & B2C"],
  ["02", "CRM & Automation", "GoHighLevel funnels and SAP Cloud workflows for nurturing, follow-ups, appointment reminders, and pipeline movement that run without manual chasing.", "GoHighLevel · SAP Cloud · Pipelines"],
  ["03", "AI-Powered Marketing", "LLMs, AI agents, and personalisation applied to lead response, qualification, engagement, and retention at campaign scale.", "LLMs · AI agents · Personalisation"],
  ["04", "Analytics & KPIs", "CTR, CPC, CPL, conversion rate, appointment rate, and ROAS tracked end to end—so every decision to scale or cut is grounded in data.", "CPL · CVR · Appointment rate · ROAS"],
];

const growth = [
  ["Paid media", "Meta Ads & Google Ads", "B2B and B2C campaigns structured around qualified lead volume and cost efficiency—including dental and healthcare lead-generation workflows.", "Meta · Google · Search & social"],
  ["Lead generation", "Pipeline that fills itself", "Campaigns engineered to produce qualified leads and booked appointments, with lead quality judged on what converts—not on form fills.", "Leads · Appointments · Lead quality"],
  ["Funnel management", "Conversion optimisation", "Landing pages, offers, and messaging tested one hypothesis at a time to lift conversion rate at every stage of the customer journey.", "Funnels · Offers · CRO"],
  ["Lifecycle automation", "Nurture that never sleeps", "GoHighLevel email and SMS sequences, reminder logic, and re-engagement workflows that keep every enquiry moving toward a booking.", "Email · SMS · Reminders"],
  ["Performance intelligence", "KPIs that explain", "CTR, CPC, CPL, conversion rate, appointment rate, and ROAS tracked end to end to improve media efficiency, revenue, and customer-base growth.", "CTR · CPC · CPL · ROAS"],
];

const skillGroups = [
  ["Performance Marketing", ["Meta Ads", "Google Ads", "B2B & B2C campaigns", "Lead generation", "Appointment setting", "Revenue growth", "Funnel optimisation", "Conversion optimisation"]],
  ["CRM & Automation", ["GoHighLevel", "SAP Cloud", "CRM pipelines", "Lead nurturing", "Email & SMS workflows", "Marketing automation"]],
  ["Analytics & KPIs", ["CTR", "CPC", "CPL", "Conversion rate", "ROAS", "Lead quality", "Appointment rate", "Revenue & funnel performance"]],
  ["AI & Technical", ["LLMs", "AI agents", "Python", "JavaScript", "Node.js", "APIs", "PostgreSQL", "Machine learning", "Data analytics", "Agile project management"]],
] as const;

const experience = [
  {
    date: "APR 2024 — NOW",
    place: "Irvine, California, USA · Remote",
    role: "AI Marketing Leader",
    company: "3DEX",
    points: [
      "Lead B2B and B2C performance campaigns across Meta Ads and Google Ads, focused on qualified lead generation, customer acquisition, booked appointments, and revenue growth.",
      "Build and optimise GoHighLevel CRM funnels, lead nurturing, follow-ups, appointment reminders, and pipeline automation to move prospects from enquiry to booked appointment and conversion.",
      "Use AI-powered automation, personalisation, and data-driven workflows to improve lead response, engagement, conversion, and customer retention.",
      "Track and optimise CTR, CPC, CPL, conversion rate, appointment rate, and ROAS, using performance data to improve media efficiency, revenue, and customer-base growth.",
    ],
  },
  {
    date: "MAR 2021 — NOV 2023",
    place: "Islamabad, Pakistan",
    role: "Technical Marketing Manager",
    company: "Digital Warriors",
    points: [
      "Led cross-functional marketing and technical projects, coordinating campaign requirements, delivery teams, timelines, and client expectations.",
      "Managed B2B and B2C lead-generation campaigns, CRM processes, and marketing automation, with emphasis on qualified leads, appointment generation, and commercial outcomes.",
      "Partnered with marketing, sales, and technical teams to analyse campaign KPIs, improve lead quality and conversion performance, and strengthen customer acquisition.",
    ],
  },
  {
    date: "JAN 2020 — FEB 2021",
    place: "Islamabad, Pakistan",
    role: "Back End Developer",
    company: "MicroAgility Services (Pvt) Ltd.",
    points: [
      "Developed Node.js backend applications, APIs, and automation supporting customer-facing digital solutions and business workflows.",
    ],
  },
  {
    date: "NOV 2017 — JAN 2020",
    place: "Islamabad, Pakistan",
    role: "Back End Developer",
    company: "Digital Cervello",
    points: [
      "Built and maintained Node.js/JavaScript backend systems and supported AI-enabled automation and scalable digital products.",
    ],
  },
  {
    date: "AUG 2016 — SEP 2017",
    place: "Lahore, Pakistan",
    role: "Software Engineer",
    company: "TECHNOGENES",
    points: [
      "Developed software solutions and gained early hands-on experience in machine learning, AI, and data-driven applications.",
    ],
  },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Syed Jaffar Raza home">SJR<i /></a>
        <div className="nav-links">
          <a href="#capabilities">Capabilities</a><a href="#growth">Growth</a><a href="#skills">Skills</a><a href="#experience">Experience</a>
        </div>
        <a className="nav-cta" href="https://www.linkedin.com/in/jaffarrazasyed" target="_blank" rel="noreferrer">Let&apos;s connect ↗</a>
      </nav>

      <section className="hero" id="top">
        <div className="grid-bg" aria-hidden="true" /><div className="orb" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow reveal d1"><span className="status-dot" />Islamabad, Pakistan · Available for ambitious work</p>
          <h1 className="reveal d2">Marketing that converts.<br /><span>Systems that scale.</span></h1>
          <p className="intro reveal d3">I&apos;m <strong>Syed Jaffar Raza</strong>—an AI marketing leader and technical marketing manager with 9+ years across B2B and B2C growth, lead generation, appointment booking, campaign management, and CRM automation.</p>
          <div className="hero-actions reveal d4"><a className="button primary" href="#capabilities">Explore my work ↓</a><a className="button ghost" href="https://www.linkedin.com/in/jaffarrazasyed" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <aside className="portrait-wrap reveal d4" aria-label="Portrait and professional snapshot">
          <div className="portrait-ring" aria-hidden="true" />
          <div className="portrait-frame">
            <Image src={`${basePath}/syed-jaffar-raza.png`} alt="Portrait of Syed Jaffar Raza" width={1254} height={1254} priority unoptimized />
            <div className="portrait-shade" aria-hidden="true" />
            <p className="portrait-name"><small>AI MARKETING LEADER</small><strong>Syed Jaffar Raza</strong></p>
          </div>
          <div className="floating-badge badge-top"><span>9+</span><small>YEARS IN MARKETING<br />&amp; TECHNOLOGY</small></div>
          <div className="floating-badge badge-bottom"><i /><small>AVAILABLE FOR<br />COLLABORATION</small></div>
          <div className="focus-strip"><span>META ADS</span><span>GOOGLE ADS</span><span>GOHIGHLEVEL</span></div>
        </aside>
        <div className="hero-foot"><span>AI MARKETING LEADER</span><b>×</b><span>TECHNICAL MARKETING MANAGER</span><b>×</b><span>B2B &amp; B2C GROWTH</span></div>
      </section>

      <section className="section expertise" id="capabilities">
        <div className="section-head"><p className="index">01 / CORE CAPABILITIES</p><h2>From media spend to <em>booked revenue.</em></h2><p>AI-driven marketing and technology professional connecting paid media, CRM automation, and engineering rigour—turning spend into qualified leads, booked appointments, and a stronger customer base.</p></div>
        <div className="cards">{capabilities.map(([n,t,d,tags]) => <article className="card" key={n}><div className="card-num"><span>{n}</span><b>↗</b></div><h3>{t}</h3><p>{d}</p><small>{tags}</small></article>)}</div>
      </section>

      <section className="section paid" id="growth">
        <div className="section-head"><p className="index">02 / GROWTH & PERFORMANCE</p><h2>Demand generation with an <em>engineering mindset.</em></h2><p>Clean funnel structures, measurable hypotheses, and continuous KPI optimisation—decisions grounded in lead quality and conversion data, not guesswork.</p></div>
        <div className="media-list">{growth.map(([k,t,d,s], i) => <article className="media-row" key={t}><span className="media-num">0{i+1}</span><div><small>{k}</small><h3>{t}</h3></div><p>{d}</p><b>{s}</b></article>)}</div>
        <div className="metric-ribbon"><span>CTR</span><i /><span>CPC</span><i /><span>CPL</span><i /><span>CVR</span><i /><span>APPOINTMENT RATE</span><i /><span>ROAS</span></div>
      </section>

      <section className="section systems" id="skills">
        <p className="index">03 / CORE SKILLS</p>
        <div className="systems-grid">
          <h2>A full stack for <em>modern growth.</em></h2>
          <div className="stack-groups">{skillGroups.map(([label, items]) => <div className="stack-group" key={label}><small>{label}</small><div className="stack">{items.map(x => <span key={x}>{x}</span>)}</div></div>)}</div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-head compact"><p className="index">04 / EXPERIENCE</p><h2>Built through <em>progression.</em></h2></div>
        <div className="timeline">{experience.map((job, i) => (
          <article key={job.company}>
            <span>0{i+1}</span>
            <div className="tl-meta"><time>{job.date}</time><p>{job.place}</p></div>
            <div className="tl-body">
              <h3>{job.role}</h3>
              <p className="tl-company">{job.company}</p>
              <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
            </div>
          </article>
        ))}</div>
        <div className="education"><small>EDUCATION</small><div><h3>Bachelor&apos;s Degree, Computer Software Engineering</h3><p>Bahria University · 2012 — 2016</p></div><strong>BU</strong></div>
      </section>

      <section className="section publication" id="publication">
        <div className="section-head compact"><p className="index">05 / SELECTED PUBLICATION</p><h2>Research that <em>informs practice.</em></h2></div>
        <article className="paper">
          <div>
            <small>PEER-REVIEWED · 2025</small>
            <h3>A Multidimensional, Transformer-Based Framework for Predicting Physician Popularity on Online Health Platforms</h3>
            <p>Haya Saudi Journal of Life Sciences · 10(11), 773—790</p>
          </div>
          <a className="button ghost" href="https://doi.org/10.36348/sjls.2025.v10i11.009" target="_blank" rel="noreferrer">doi:10.36348/sjls.2025.v10i11.009 ↗</a>
        </article>
      </section>

      <footer><div><p className="index">LET&apos;S BUILD SOMETHING THAT GROWS</p><h2>Need more qualified leads?</h2></div><a href="https://www.linkedin.com/in/jaffarrazasyed" target="_blank" rel="noreferrer">Start a conversation ↗</a><p className="copyright">© 2026 Syed Jaffar Raza · Islamabad, Pakistan · jeffreza.github.io</p></footer>
    </main>
  );
}
