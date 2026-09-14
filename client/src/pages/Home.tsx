import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Download,
  Menu,
  Plus,
  X,
} from "lucide-react";
import {
  aiAreas,
  capabilityMap,
  contactLinks,
  contentModel,
  engineeringAreas,
  experience,
  focusAreas,
  librarySections,
  navigation,
  principles,
  projects,
  technologyCategories,
  technologyLibrary,
  writings,
} from "@/lib/content";

type AccentLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function AccentLink({ href, children, onClick }: AccentLinkProps) {
  return (
    <a className="accent-link" href={href} onClick={onClick}>
      <span>{children}</span>
      <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}

function SectionIntro({ index, label, title, children }: { index: string; label: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="section-intro">
      <div className="section-index">{index}</div>
      <div>
        <div className="eyebrow">{label}</div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

function SignalField() {
  return (
    <div className="signal-field" aria-hidden="true">
      <div className="signal-ring signal-ring-one" />
      <div className="signal-ring signal-ring-two" />
      <div className="signal-line signal-line-one" />
      <div className="signal-line signal-line-two" />
      <div className="signal-pulse signal-pulse-one" />
      <div className="signal-pulse signal-pulse-two" />
      <span className="signal-coord">30.8125° N / 6.0570° E</span>
    </div>
  );
}

function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState<string | null>(null);
  const [activeEngineering, setActiveEngineering] = useState(0);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 3400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const categories = ["ALL", "AI", "SOFTWARE", "WEB", "MOBILE", "SYSTEMS", "CREATIVE"];
  const filteredProjects = useMemo(
    () => projects.filter((project) => activeCategory === "ALL" || project.category.toUpperCase() === activeCategory),
    [activeCategory],
  );

  const showPlaceholder = (label: string) => {
    setNotice(`${label} is an editable placeholder — add the real detail in the content registry.`);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Besma Kaddour home">
          <span className="wordmark-mark">B</span>
          <span>BESMA KADDOUR</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-trigger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.4} /> : <Menu size={20} strokeWidth={1.4} />}
        </button>
      </header>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
        </nav>
      )}

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <SignalField />
          <div className="hero-content">
            <div className="hero-kicker">
              <span className="status-dot" />
              <span>Software Engineer / Digital Identity</span>
              <span className="hero-year">Est. — add year</span>
            </div>
            <p className="hero-name">BESMA<br className="mobile-break" /> KADDOUR</p>
            <p className="hero-role">Software Engineer</p>
            <h1 id="hero-title">BUILDING SOFTWARE.<br />EXPLORING INTELLIGENCE.<br /><em>CREATING IDEAS.</em></h1>
            <p className="hero-summary">Software Engineer working across Full-Stack Development, AI, Software Architecture, Digital Innovation, and creative technology.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore <ArrowDown size={15} aria-hidden="true" /></a>
              <a className="button button-quiet" href="#about">About <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-footer">
            <span>Scroll to explore</span>
            <span className="hero-footer-line" />
            <span>01 / 12</span>
          </div>
        </section>

        <section className="section section-about" id="about" aria-labelledby="about-title">
          <SectionIntro index="01" label="About" title="WHO I AM">
            <p className="intro-copy">A Software Engineer interested in building software systems, intelligent products, AI-driven experiences, and digital solutions.</p>
          </SectionIntro>
          <div className="about-detail-grid">
            <div className="about-statement">
              <p className="display-quote">A digital identity for the work between engineering, intelligence, and imagination.</p>
              <p className="muted-copy">The first layer stays quiet. The deeper layers are designed to hold the complete professional and creative picture — as it grows.</p>
            </div>
            <div className="disclosure-list" aria-label="About details">
              {["Background", "Engineering", "AI", "Product Development", "Creative Work", "Philosophy"].map((item) => {
                const isOpen = openAbout === item;
                return (
                  <div className={`disclosure-item ${isOpen ? "is-open" : ""}`} key={item}>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpenAbout(isOpen ? null : item)}>
                      <span>{item}</span>
                      <Plus size={17} strokeWidth={1.3} aria-hidden="true" />
                    </button>
                    {isOpen && <p>Editable chapter placeholder — add Besma&apos;s {item.toLowerCase()} notes, links, and supporting material here.</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-work" id="work" aria-labelledby="work-title">
          <SectionIntro index="02" label="Selected work" title="WORK">
            <p className="intro-copy">A living archive of products, systems, applications, and experiments.</p>
          </SectionIntro>
          <div className="filter-bar" role="tablist" aria-label="Project categories">
            {categories.map((category) => (
              <button key={category} className={activeCategory === category ? "is-active" : ""} type="button" role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>
            ))}
          </div>
          <div className="project-list">
            {filteredProjects.length > 0 ? filteredProjects.map((project) => (
              <article className={`project-row ${project.featured ? "project-featured" : ""}`} key={project.name}>
                <div className="project-index">01</div>
                <div className="project-main">
                  <div className="project-eyebrow">{project.eyebrow}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
                <button className="round-arrow" type="button" aria-label={`Open ${project.name} details`} onClick={() => showPlaceholder(`${project.name} details`)}><ArrowUpRight size={19} strokeWidth={1.2} /></button>
              </article>
            )) : (
              <div className="empty-state"><span className="empty-mark">—</span><div><strong>No {activeCategory.toLowerCase()} entries yet.</strong><p>Add projects to the editable content registry. The interface is ready for many entries.</p></div></div>
            )}
          </div>
          <div className="project-footer"><span>Archive structure / 01</span><span>More projects can be added without changing the interface.</span></div>
        </section>

        <section className="section section-engineering" id="engineering" aria-labelledby="engineering-title">
          <SectionIntro index="03" label="Systems thinking" title="ENGINEERING">
            <p className="intro-copy">The areas of practice are arranged as a typographic map — select one to open its next layer.</p>
          </SectionIntro>
          <div className="engineering-layout">
            <div className="engineering-list" role="tablist" aria-label="Engineering areas">
              {engineeringAreas.map((area, index) => (
                <button key={area.label} type="button" role="tab" aria-selected={activeEngineering === index} className={activeEngineering === index ? "is-active" : ""} onClick={() => setActiveEngineering(index)}>
                  <span className="engineering-number">0{index + 1}</span><span>{area.label}</span><span className="engineering-short">{area.short}</span>
                </button>
              ))}
            </div>
            <div className="engineering-detail" aria-live="polite">
              <span className="detail-kicker">Selected / 0{activeEngineering + 1}</span>
              <h3>{engineeringAreas[activeEngineering].label}</h3>
              <p>{engineeringAreas[activeEngineering].detail}</p>
              <div className="detail-line" /><span className="detail-placeholder">Add notes / projects / tools</span>
            </div>
          </div>
        </section>

        <section className="section section-technology" id="technology" aria-labelledby="technology-title">
          <SectionIntro index="04" label="Library" title="TECHNOLOGY">
            <p className="intro-copy">A blank, expandable library by design. Technologies appear here only when they are explicitly added.</p>
          </SectionIntro>
          <div className="technology-layout">
            <div className="technology-note"><span className="signal-dot" /><p>Ready for 20+ languages, frameworks, tools, platforms, and design systems.</p></div>
            <div className="technology-categories">
              {technologyCategories.map((category, index) => {
                const items = technologyLibrary[category] || [];
                return <details key={category} className="tech-group" open={index === 0}>
                  <summary><span>0{index + 1}</span><strong>{category}</strong><small>{items.length ? `${items.length} entries` : "Add entries"}</small><ChevronDown size={16} strokeWidth={1.3} /></summary>
                  <div className="tech-items">{items.length ? items.map((item) => <span key={item}>{item}</span>) : <em>Editable placeholder — add technologies here.</em>}</div>
                </details>;
              })}
            </div>
          </div>
        </section>

        <section className="section section-ai" id="ai" aria-labelledby="ai-title">
          <div className="ai-orbit" aria-hidden="true"><div /><div /><div /><span>AI</span></div>
          <SectionIntro index="05" label="Intelligence" title="AI">
            <p className="ai-headline">BUILDING SOFTWARE<br /><em>THAT THINKS, ADAPTS<br />AND ACTS.</em></p>
          </SectionIntro>
          <div className="ai-bottom"><p className="muted-copy">AI is treated here as a practice and a field of questions — not a decoration. This space can hold agents, models, automations, applications, analysis, and research as they become real.</p><div className="ai-areas">{aiAreas.map((area, index) => <span key={area}><b>0{index + 1}</b>{area}</span>)}</div></div>
        </section>

        <section className="section section-experience" id="experience" aria-labelledby="experience-title">
          <SectionIntro index="06" label="Timeline" title="EXPERIENCE">
            <p className="intro-copy">A minimal timeline that expands as the record grows.</p>
          </SectionIntro>
          {experience.length ? <div className="experience-list">{experience.map((entry) => <details key={`${entry.year}-${entry.role}`}><summary><span>{entry.year}</span><strong>{entry.role}</strong><em>{entry.context}</em><ChevronDown size={16} /></summary><div><p>{entry.description}</p><small>{entry.technologies.join(" / ")}</small></div></details>)}</div> : <div className="empty-panel"><div className="empty-panel-top"><span>YEAR</span><span>ROLE / PROJECT / COMPANY</span><span>DESCRIPTION</span></div><p>Editable timeline placeholder — add experience entries without changing the layout.</p></div>}
        </section>

        <section className="section section-capabilities" id="skills" aria-labelledby="skills-title">
          <SectionIntro index="07" label="Capability map" title="SKILLS">
            <p className="intro-copy">No percentages. No progress bars. Only the kinds of problems and practices this identity can hold.</p>
          </SectionIntro>
          <div className="capability-grid">{capabilityMap.map((capability, index) => <button type="button" key={capability.label} onClick={() => showPlaceholder(`${capability.label} capability detail`)}><span>0{index + 1}</span><strong>{capability.label}</strong><small>{capability.detail}</small><ArrowUpRight size={16} strokeWidth={1.2} /></button>)}</div>
        </section>

        <section className="section section-creative" id="creative" aria-labelledby="creative-title">
          <SectionIntro index="08" label="A different register" title="CREATIVE">
            <p className="creative-intro">Writing, poetry, philosophy, books, ideas, and visual experiments — the work that begins before it has a category.</p>
          </SectionIntro>
          <div className="creative-layout"><div className="creative-quote"><span className="quote-mark">“</span><p>Some ideas arrive as systems.<br /><em>Some arrive as sentences.</em></p><small>Creative archive / 01</small></div><div className="writing-list">{writings.length ? writings.map((writing) => <button type="button" key={writing.title} onClick={() => showPlaceholder(writing.title)}><span>{writing.type}</span><strong>{writing.title}</strong><small>{writing.date}</small><ArrowUpRight size={16} /></button>) : <div className="writing-empty"><span>Writing archive</span><strong>Not yet populated.</strong><p>Essays, poetry, books, notes, and philosophical texts can open here as quiet reading pages.</p><AccentLink href="#library">Open library architecture</AccentLink></div>}</div></div>
        </section>

        <section className="section section-library" id="library" aria-labelledby="library-title">
          <SectionIntro index="09" label="Digital archive" title="LIBRARY">
            <p className="intro-copy">A private-looking, public-facing structure for the work behind the work.</p>
          </SectionIntro>
          <div className="library-grid">{librarySections.map((item, index) => <button type="button" key={item.label} onClick={() => showPlaceholder(`${item.label} library`)}><span>0{index + 1}</span><strong>{item.label}</strong><small>{item.count}</small><ArrowUpRight size={15} /></button>)}</div>
          <div className="library-footnote"><span>Content model</span><p>{contentModel.join(" / ")}</p></div>
        </section>

        <section className="section section-philosophy" id="philosophy" aria-labelledby="philosophy-title"><div className="philosophy-line" /><div className="philosophy-content"><span className="eyebrow">10 / Personal philosophy</span><h2>{principles[0]}</h2><button type="button" className="text-link" onClick={() => showPlaceholder("Additional principles")}>Add another principle <Plus size={15} /></button></div></section>

        <section className="section section-cv" id="cv" aria-labelledby="cv-title">
          <SectionIntro index="11" label="Professional profile" title="CV">
            <p className="intro-copy">A dedicated, detailed layer for the conventional record — kept separate from the experience of the site.</p>
          </SectionIntro>
          <div className="cv-grid"><div><p className="cv-profile">Profile, experience, education, skills, technologies, projects, languages, and achievements can be assembled here from the same editable source.</p><div className="cv-actions"><button type="button" className="button button-primary" onClick={() => showPlaceholder("CV document")}>View CV <ArrowUpRight size={15} /></button><button type="button" className="button button-quiet" onClick={() => showPlaceholder("CV download")}>Download CV <Download size={15} /></button></div></div><div className="cv-index">{["Profile", "Experience", "Education", "Skills", "Technologies", "Projects", "Languages", "Achievements"].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div>
        </section>

        <section className="section section-contact" id="contact" aria-labelledby="contact-title"><div className="contact-top"><span className="eyebrow">12 / Closing chapter</span><span className="contact-status"><span className="status-dot" /> Open to meaningful work</span></div><h2 id="contact-title">LET&apos;S BUILD<br /><em>SOMETHING</em><br />MEANINGFUL.</h2><p className="contact-copy">For collaborations, conversations, and work that deserves a thoughtful system.</p><div className="contact-links">{contactLinks.map((link) => <a key={link.label} href={link.href} onClick={(event) => { if (link.href === "#contact") { event.preventDefault(); showPlaceholder(link.label); } }}><span>{link.label}</span><strong>{link.value}</strong><ArrowUpRight size={17} strokeWidth={1.2} /></a>)}</div></section>
      </main>

      <footer className="site-footer"><span>BESMA KADDOUR</span><span>A DIGITAL IDENTITY / 2026</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>
      {notice && <div className="notice" role="status">{notice}<button type="button" aria-label="Dismiss notification" onClick={() => setNotice("")}><X size={15} /></button></div>}
    </div>
  );
}

export default Home;
