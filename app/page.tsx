import Image from "next/image";

const aiCapabilities = [
  ["01", "Production AI", "End-to-end AI delivery from data pipelines and model development through evaluation, monitoring, and deployment.", "LLM workflows · RAG · AI agents"],
  ["02", "Intelligent Retrieval", "Semantic systems built around robust ingestion, embeddings, vector databases, and relevance-focused search.", "Embeddings · Vector DBs · Search"],
  ["03", "Predictive Systems", "Machine-learning solutions for prediction and recommendation, designed for measurable product value.", "Prediction · Recommendation · Evaluation"],
  ["04", "Software Leadership", "Hands-on technical direction across engineering teams, Agile delivery, backend systems, and product execution.", "Leadership · Backend · Agile"],
];

const paidMedia = [
  ["Platform proficiency", "Facebook & Meta Ads", "Campaign architecture across awareness, consideration, conversion, retargeting, and lookalike audiences—with disciplined budget allocation and bidding.", "Campaigns · Audiences · Bidding"],
  ["Performance intelligence", "Analytics that explain", "Interpret CTR, CPC, CPA, ROAS, conversion rate, and attribution signals to diagnose performance drops and identify scalable winners.", "CTR · CPA · ROAS · Attribution"],
  ["Experimentation", "Structured A/B testing", "Methodical tests across creative, ad copy, audiences, offers, placements, and landing pages—one clear hypothesis at a time.", "Creative · Copy · Landing pages"],
  ["Cross-channel execution", "DSP & social strategy", "Audience targeting, campaign structures, pacing, frequency, and optimization across demand-side platforms and paid social networks.", "DSPs · Paid social · Targeting"],
];

const experience = [
  ["2024—NOW", "Machine Learning Engineer", "3DEX"],
  ["2021—2023", "Software Engineering Team Lead", "Digital Warriors"],
  ["2020—2021", "Back End Developer", "MicroAgility Services"],
  ["2017—2020", "Back End Developer", "Digital Cervello"],
  ["2016—2017", "Software Engineer", "TECHNOGENES"],
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Syed Jaffar Raza home">SJR<i /></a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a><a href="#paid-media">Paid media</a><a href="#experience">Experience</a>
        </div>
        <a className="nav-cta" href="https://www.linkedin.com/in/jaffarrazasyed" target="_blank" rel="noreferrer">Let&apos;s connect ↗</a>
      </nav>

      <section className="hero" id="top">
        <div className="grid-bg" aria-hidden="true" /><div className="orb" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow reveal d1"><span className="status-dot" />Islamabad · Available for ambitious work</p>
          <h1 className="reveal d2">Engineering intelligence.<br /><span>Scaling attention.</span></h1>
          <p className="intro reveal d3">I&apos;m <strong>Syed Jaffar Raza</strong>—an AI software engineer building production-grade intelligent systems and applying performance thinking across paid digital growth.</p>
          <div className="hero-actions reveal d4"><a className="button primary" href="#expertise">Explore my work ↓</a><a className="button ghost" href="https://www.linkedin.com/in/jaffarrazasyed" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <aside className="portrait-wrap reveal d4" aria-label="Portrait and professional snapshot">
          <div className="portrait-ring" aria-hidden="true" />
          <div className="portrait-frame">
            <Image src={`${basePath}/syed-jaffar-raza.png`} alt="Portrait of Syed Jaffar Raza" width={1254} height={1254} priority unoptimized />
            <div className="portrait-shade" aria-hidden="true" />
            <p className="portrait-name"><small>AI SOFTWARE ENGINEER</small><strong>Syed Jaffar Raza</strong></p>
          </div>
          <div className="floating-badge badge-top"><span>9+</span><small>YEARS IN<br />SOFTWARE</small></div>
          <div className="floating-badge badge-bottom"><i /><small>AVAILABLE FOR<br />COLLABORATION</small></div>
          <div className="focus-strip"><span>RAG</span><span>AI AGENTS</span><span>META ADS</span></div>
        </aside>
        <div className="hero-foot"><span>AI SOFTWARE ENGINEER</span><b>×</b><span>PERFORMANCE MARKETING</span><b>×</b><span>PRODUCT DELIVERY</span></div>
      </section>

      <section className="section expertise" id="expertise">
        <div className="section-head"><p className="index">01 / CORE EXPERTISE</p><h2>From model to <em>momentum.</em></h2><p>I connect rigorous engineering with real-world delivery—building systems that are useful, observable, and ready to scale.</p></div>
        <div className="cards">{aiCapabilities.map(([n,t,d,tags]) => <article className="card" key={n}><div className="card-num"><span>{n}</span><b>↗</b></div><h3>{t}</h3><p>{d}</p><small>{tags}</small></article>)}</div>
      </section>

      <section className="section paid" id="paid-media">
        <div className="section-head"><p className="index">02 / GROWTH & PERFORMANCE</p><h2>Paid media with an <em>engineering mindset.</em></h2><p>Clean campaign structures, measurable hypotheses, and decisions grounded in performance data—not guesswork.</p></div>
        <div className="media-list">{paidMedia.map(([k,t,d,s], i) => <article className="media-row" key={t}><span className="media-num">0{i+1}</span><div><small>{k}</small><h3>{t}</h3></div><p>{d}</p><b>{s}</b></article>)}</div>
        <div className="metric-ribbon"><span>CTR</span><i /><span>CPA</span><i /><span>ROAS</span><i /><span>CVR</span><i /><span>ATTRIBUTION</span><i /><span>FREQUENCY</span></div>
      </section>

      <section className="section systems"><p className="index">03 / TECHNOLOGY</p><div className="systems-grid"><h2>A versatile stack for <em>intelligent products.</em></h2><div className="stack">{["Python","Node.js","JavaScript","React.js","PostgreSQL","LLMs","RAG","Vector databases","Semantic search","Prompt engineering","Machine learning","AI APIs"].map((x,i)=><span className={i<5?"hot":""} key={x}>{x}</span>)}</div></div></section>

      <section className="section experience" id="experience">
        <div className="section-head compact"><p className="index">04 / EXPERIENCE</p><h2>Built through <em>progression.</em></h2></div>
        <div className="timeline">{experience.map(([date,role,company],i)=><article key={company}><span>0{i+1}</span><time>{date}</time><h3>{role}</h3><p>{company}</p></article>)}</div>
        <div className="education"><small>EDUCATION</small><div><h3>Bachelor&apos;s in Computer Software Engineering</h3><p>Bahria University · 2012—2016</p></div><strong>BU</strong></div>
      </section>

      <footer><div><p className="index">LET&apos;S BUILD SOMETHING USEFUL</p><h2>Have a hard problem?</h2></div><a href="https://www.linkedin.com/in/jaffarrazasyed" target="_blank" rel="noreferrer">Start a conversation ↗</a><p className="copyright">© 2026 Syed Jaffar Raza · Islamabad, Pakistan</p></footer>
    </main>
  );
}
