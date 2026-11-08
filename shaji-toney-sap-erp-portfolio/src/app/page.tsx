import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Network,
  Phone,
  Workflow
} from "lucide-react";

const skills = [
  {
    title: "SAP & ERP",
    icon: Layers3,
    items: ["SAP S/4HANA", "SAP PP", "SAP MM", "SAP SD", "SAP FI", "SAP Fiori", "ABAP fundamentals", "SAP Retail"]
  },
  {
    title: "Retail applications",
    icon: MonitorCog,
    items: ["Diebold Nixdorf Vynamic", "ProBase", "JavaPOS", "OPOS", "Backstore", "TXCollector"]
  },
  {
    title: "Data & technical",
    icon: Database,
    items: ["Microsoft SQL Server", "T-SQL", "Application troubleshooting", "Technical analysis"]
  },
  {
    title: "IT operations",
    icon: Workflow,
    items: ["L2 application support", "Incident management", "Root Cause Analysis", "Jira", "Production support", "Application rollouts"]
  }
];

const experience = [
  {
    role: "POS Application Support Executive – L2",
    company: "LuLu Group India",
    period: "August 2023 – Present",
    location: "India",
    points: [
      "Provide L2 application support for enterprise retail POS environments across 12 stores and more than 800 POS terminals in India.",
      "Troubleshoot Diebold Nixdorf Vynamic POS and self-checkout applications, alongside ProBase, JavaPOS and OPOS components.",
      "Support Backstore and TXCollector applications and investigate POS-related issues involving SAP Retail integration.",
      "Use Microsoft SQL Server and T-SQL for technical investigation, supported by Jira-based incident tracking and Root Cause Analysis.",
      "Contribute to application rollouts and production support activities."
    ]
  }
];

const project = {
  name: "SAP S/4HANA PP Implementation for a Bicycle Manufacturing Company",
  type: "Academic project · Production Planning System Development",
  summary:
    "An academic SAP production-planning project focused on modelling manufacturing processes for a bicycle company. The project explores how core planning data and production processes fit together in an SAP S/4HANA environment.",
  areas: ["Material master", "Bill of Materials (BOM)", "Work centers", "Routings / task lists", "Material Requirements Planning (MRP)", "Production planning"],
  note: "Academic project. Configuration, development tasks and outcomes should be updated to reflect the work actually completed."
};

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title.split("<br />").map((part, index) => <span key={index}>{index > 0 && <br />}{part}</span>)}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Shaji Toney home">
          <span className="brand-mark">ST</span>
          <span>SHAJI TONEY<span className="brand-dot">.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-contact">Contact <ArrowUpRight size={14} /></a>
        </nav>
        <a className="mobile-contact" href="#contact"><Mail size={17} /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> KYOTO, JAPAN <span className="availability-line" /> OPEN TO INTERNATIONAL OPPORTUNITIES</div>
            <p className="hero-kicker">SAP / ERP · ENTERPRISE APPLICATION SUPPORT</p>
            <h1>Shaji<br /><span>Toney.</span></h1>
            <p className="hero-lead">
              Connecting enterprise retail technology with SAP-driven business processes.
            </p>
            <p className="hero-description">
              Postgraduate ERP student at KCGI, Japan, bringing hands-on experience supporting enterprise POS applications and retail technology environments.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><GraduationCap size={16} /> KCGI · ERP</span>
              <span><MapPin size={16} /> Kyoto, Japan</span>
              <span><BriefcaseBusiness size={16} /> Retail IT Support</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Enterprise systems visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-core">
              <div className="core-top"><span className="core-indicator" /> ENTERPRISE SYSTEMS</div>
              <div className="core-symbol"><Network size={58} strokeWidth={1.2} /></div>
              <div className="core-label">BUSINESS <span>×</span> TECHNOLOGY</div>
            </div>
            <div className="floating-card card-sap"><span className="mini-icon"><Layers3 size={16} /></span><span><b>SAP / ERP</b><small>Business processes</small></span></div>
            <div className="floating-card card-pos"><span className="mini-icon"><MonitorCog size={16} /></span><span><b>RETAIL IT</b><small>Application support</small></span></div>
            <div className="visual-caption">01 / PROFESSIONAL PROFILE</div>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip">
        <div><span className="strip-label">FOCUS</span><strong>SAP & ERP</strong></div>
        <div><span className="strip-label">EXPERIENCE</span><strong>Enterprise POS Support</strong></div>
        <div><span className="strip-label">EDUCATION</span><strong>KCGI, Japan</strong></div>
        <div><span className="strip-label">GRADUATION</span><strong>March 2027 (expected)</strong></div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-layout">
          <SectionHeading eyebrow="01 / ABOUT" title="Business systems.<br />Real-world support." />
          <div className="about-content">
            <p className="about-statement">
              I work at the intersection of <span>enterprise applications</span>, retail operations and ERP.
            </p>
            <p>
              My professional background is in L2 POS application support at LuLu Group India, where I support retail technology used across a multi-store environment. My work has involved POS application troubleshooting, self-checkout systems, database investigation, incident handling and SAP Retail integration-related support.
            </p>
            <p>
              Alongside my professional experience, I am pursuing postgraduate studies in Enterprise Resource Planning at the Kyoto College of Graduate Studies for Informatics (KCGI), Japan. My academic focus includes SAP S/4HANA and enterprise business processes, with a particular interest in production planning and integrated business systems.
            </p>
            <p>
              I am building my next career chapter in SAP, ERP and enterprise application support, bringing together practical retail systems experience and structured ERP education.
            </p>
            <div className="about-footnote"><CheckCircle2 size={17} /> Practical application support experience + postgraduate ERP studies</div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <SectionHeading eyebrow="02 / EXPERIENCE" title="Supporting systems<br />that keep business moving." intro="Professional experience in enterprise retail application support and production environments." />
        <div className="experience-card">
          <div className="experience-side">
            <div className="company-icon"><Building2 size={24} /></div>
            <p className="experience-period">AUG 2023 — PRESENT</p>
            <p className="experience-location"><MapPin size={14} /> India</p>
          </div>
          <div className="experience-main">
            <div className="experience-title-row">
              <div>
                <h3>{experience[0].role}</h3>
                <p className="company-name">{experience[0].company}</p>
              </div>
              <Pill>Professional experience</Pill>
            </div>
            <ul className="experience-list">
              {experience[0].points.map((point) => <li key={point}><span className="list-marker" />{point}</li>)}
            </ul>
            <div className="experience-tags">
              {["POS Support", "Vynamic", "SAP Retail", "SQL Server", "RCA", "Jira"].map((item) => <Pill key={item}>{item}</Pill>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="projects-top">
          <SectionHeading eyebrow="03 / SELECTED PROJECT" title="Applying ERP thinking<br />to business processes." intro="Academic work exploring how enterprise systems support planning, materials and operations." />
          <span className="project-count">01 <i>/ FEATURED</i></span>
        </div>
        <article className="project-card">
          <div className="project-visual">
            <div className="project-visual-grid" />
            <div className="project-flow">
              <div className="flow-node"><span>01</span><b>MASTER DATA</b><small>Materials · BOM</small></div>
              <div className="flow-connector"><ArrowRight size={19} /></div>
              <div className="flow-node"><span>02</span><b>PLANNING</b><small>MRP · Work centers</small></div>
              <div className="flow-connector"><ArrowRight size={19} /></div>
              <div className="flow-node"><span>03</span><b>PRODUCTION</b><small>Routings · Orders</small></div>
            </div>
            <div className="project-visual-label">SAP S/4HANA · PP</div>
          </div>
          <div className="project-details">
            <div className="project-type">{project.type}</div>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <div className="project-areas">
              {project.areas.map((area) => <Pill key={area}>{area}</Pill>)}
            </div>
            <p className="project-note"><span>PROJECT SCOPE</span>{project.note}</p>
          </div>
        </article>
        <p className="project-disclaimer">Additional academic projects can be added after their scope and deliverables are confirmed.</p>
      </section>

      <section className="section skills-section" id="skills">
        <SectionHeading eyebrow="04 / TECHNICAL TOOLKIT" title="A practical mix of<br />systems and support." intro="Technologies and capabilities connected to my professional experience and ERP studies." />
        <div className="skills-grid">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-number">0{index + 1}</span></div>
                <h3>{group.title}</h3>
                <div className="skill-pills">{group.items.map((item) => <Pill key={item}>{item}</Pill>)}</div>
              </article>
            );
          })}
        </div>
        <p className="skills-note">Skill labels reflect areas of exposure and study; proficiency levels are not represented as certifications or expert claims.</p>
      </section>

      <section className="section education-section" id="education">
        <SectionHeading eyebrow="05 / EDUCATION" title="Learning with an<br />enterprise perspective." />
        <div className="education-list">
          <div className="education-item">
            <div className="education-icon"><GraduationCap size={23} /></div>
            <div className="education-detail">
              <span className="education-date">POSTGRADUATE STUDIES · EXPECTED MARCH 2027</span>
              <h3>Kyoto College of Graduate Studies for Informatics (KCGI)</h3>
              <p>Enterprise Resource Planning (ERP) · Kyoto, Japan</p>
              <span className="education-description">Current academic focus: ERP systems, SAP S/4HANA and enterprise business processes.</span>
            </div>
          </div>
          <div className="education-item">
            <div className="education-icon"><Code2 size={22} /></div>
            <div className="education-detail">
              <span className="education-date">UNDERGRADUATE</span>
              <h3>Bachelor of Vocation in Software Development</h3>
              <p>St. Michael’s College, Cherthala · University of Kerala</p>
            </div>
          </div>
        </div>
      </section>

      <section className="career-band">
        <div>
          <p className="eyebrow">CAREER DIRECTION</p>
          <h2>Building toward a future<br />in SAP & enterprise ERP.</h2>
          <p>Interested in suitable international opportunities across SAP, ERP and enterprise application support.</p>
        </div>
        <div className="career-roles">
          {["SAP / ERP Consultant", "SAP Application Support Analyst", "Junior SAP Functional Consultant", "Enterprise Application Support"].map((role) => <div key={role}><ArrowUpRight size={16} />{role}</div>)}
          <p>UAE & GCC · Japan · Singapore · International</p>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-main">
          <SectionHeading eyebrow="06 / CONTACT" title="Let’s connect." intro="For professional opportunities, networking or conversations about SAP, ERP and enterprise technology." />
          <a className="email-link" href="mailto:shajitoney@gmail.com">shajitoney@gmail.com <ArrowUpRight size={21} /></a>
        </div>
        <div className="contact-details">
          <a href="mailto:shajitoney@gmail.com"><Mail size={18} /><span><small>EMAIL</small>shajitoney@gmail.com</span><ArrowUpRight size={16} /></a>
          <a href="https://linkedin.com/in/toneyshaji" target="_blank" rel="noreferrer"><Network size={18} /><span><small>LINKEDIN</small>linkedin.com/in/toneyshaji</span><ArrowUpRight size={16} /></a>
          <div><MapPin size={18} /><span><small>LOCATION</small>Kyoto, Japan</span></div>
          <a href="tel:+817083302053"><Phone size={18} /><span><small>PHONE</small>+81 70-8330-2053</span><ArrowUpRight size={16} /></a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">ST</span><span>SHAJI TONEY<span className="brand-dot">.</span></span></a>
        <p>SAP / ERP · ENTERPRISE APPLICATION SUPPORT · KYOTO, JAPAN</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} SHAJI TONEY</span>
      </footer>
    </main>
  );
}
