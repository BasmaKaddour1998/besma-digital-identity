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
  const titleId = `${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;
  return (
    <div className="section-intro">
      <div className="section-index">{index}</div>
      <div>
        <div className="eyebrow">{label}</div>
        <h2 id={titleId}>{title}</h2>
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
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState<string | null>(null);
  const [activeEngineering, setActiveEngineering] = useState(0);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [notice, setNotice] = useState("");
  const isArabic = language === "ar";
  const tx = (en: string, ar: string) => isArabic ? ar : en;
  const navItems = isArabic ? ["عنّي", "الأعمال", "الهندسة", "الذكاء الاصطناعي", "الإبداع", "الخبرة", "تواصل"] : navigation.map((item) => item.label);
  const aboutItems = isArabic ? ["الخلفية", "الهندسة", "الذكاء الاصطناعي", "تطوير المنتجات", "العمل الإبداعي", "الفلسفة"] : ["Background", "Engineering", "AI", "Product Development", "Creative Work", "Philosophy"];
  const categories = isArabic ? ["الكل", "الذكاء الاصطناعي", "البرمجيات", "الويب", "الهاتف", "الأنظمة", "الإبداع"] : ["ALL", "AI", "SOFTWARE", "WEB", "MOBILE", "SYSTEMS", "CREATIVE"];

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 3400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic, language]);

  useEffect(() => {
    const existing = document.querySelector('link[rel="canonical"]');
    const canonical = existing || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", `${window.location.origin}/`);
    if (!existing) document.head.appendChild(canonical);
  }, []);

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeCategory === "ALL" || activeCategory === "الكل" || project.category.toUpperCase() === activeCategory),
    [activeCategory, isArabic],
  );

  const showPlaceholder = (label: string) => {
    setNotice(tx(`${label} is an editable placeholder — add the real detail in the content registry.`, `${label} عنصر قابل للتحرير — أضيفي التفاصيل الحقيقية في سجل المحتوى.`));
  };

  return (
    <div className={`site-shell ${isArabic ? "is-arabic" : ""}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "name": "Besma Kaddour",
            "jobTitle": "Software Engineer",
            "description": "Software Engineer working across full-stack development, AI, software architecture, digital innovation, cybersecurity, and creative technology.",
            "url": window.location.origin,
            "image": `${window.location.origin}/manus-storage/besma-portrait_2ec9064c.png`
          },
          {
            "@type": "WebSite",
            "name": "BESMA KADDOUR — Digital Identity",
            "url": window.location.origin,
            "description": "A digital identity across software engineering, AI, product creation, and creative work."
          }
        ]
      }) }} />
      <a className="skip-link" href="#main-content">{tx("Skip to main content", "تخطي إلى المحتوى الرئيسي")}</a>
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Besma Kaddour home">
          <span className="wordmark-mark">B</span>
          <span>BESMA KADDOUR</span>
        </a>
        <nav className="desktop-nav" aria-label={tx("Main navigation", "التنقل الرئيسي")}>
          {navItems.map((label, index) => (
            <a key={navigation[index].href} href={navigation[index].href}>{label}</a>
          ))}
        </nav>
        <button type="button" className="language-toggle" onClick={() => setLanguage(isArabic ? "en" : "ar")} aria-label={tx("Switch to Arabic", "التبديل إلى الإنجليزية")}>
          {isArabic ? "EN" : "ع"}
        </button>
        <button
          type="button"
          className="menu-trigger"
          aria-label={mobileOpen ? tx("Close menu", "إغلاق القائمة") : tx("Open menu", "فتح القائمة")}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.4} /> : <Menu size={20} strokeWidth={1.4} />}
        </button>
      </header>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label={tx("Mobile navigation", "التنقل على الهاتف")}>
          {navItems.map((label, index) => (
            <a key={navigation[index].href} href={navigation[index].href} onClick={() => setMobileOpen(false)}>
              <span>0{index + 1}</span>{label}
            </a>
          ))}
        </nav>
      )}

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <SignalField />
          <div className="hero-portrait-wrap">
            <div className="portrait-frame" aria-hidden="true" />
            <img className="hero-portrait" src="/manus-storage/besma-portrait_2ec9064c.png" alt={tx("Portrait of Besma Kaddour, Software Engineer", "صورة بسمة قدور، مهندسة برمجيات")} width="1145" height="1374" loading="eager" fetchPriority="high" decoding="async" />
            <img className="hero-signature" src="/manus-storage/besma-signature_88629231.png" alt={tx("Besma Kaddour signature", "توقيع بسمة قدور")} width="1774" height="887" loading="eager" decoding="async" />
            <span className="portrait-caption">BESMA / 01</span>
          </div>
          <div className="hero-content">
            <div className="hero-kicker">
              <span className="status-dot" />
              <span>{tx("Software Engineer / Digital Identity", "مهندسة برمجيات / هوية رقمية")}</span>
              <span className="hero-year">{tx("Est. — add year", "التأسيس — أضيفي السنة")}</span>
            </div>
            <p className="hero-name">BESMA<br className="mobile-break" /> KADDOUR</p>
            <p className="hero-role">{tx("Software Engineer", "مهندسة برمجيات")}</p>
            <h1 id="hero-title">{tx("BUILDING SOFTWARE.", "أبني البرمجيات.")}<br />{tx("EXPLORING INTELLIGENCE.", "أستكشف الذكاء.")}<br /><em>{tx("CREATING IDEAS.", "وأصنع الأفكار.")}</em></h1>
            <p className="hero-summary">{tx("Software Engineer working across Full-Stack Development, AI, Software Architecture, Digital Innovation, and creative technology.", "مهندسة برمجيات أعمل عبر التطوير المتكامل، والذكاء الاصطناعي، وهندسة البرمجيات، والابتكار الرقمي، والتقنية الإبداعية.")}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{tx("Explore", "استكشفي")} <ArrowDown size={15} aria-hidden="true" /></a>
              <a className="button button-quiet" href="#about">{tx("About", "عنّي")} <ArrowDown size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="hero-footer">
            <span>{tx("Scroll to explore", "مرّري للاستكشاف")}</span>
            <span className="hero-footer-line" />
            <span>01 / 12</span>
          </div>
        </section>

        <section className="section section-about" id="about" aria-labelledby="about-title">
          <SectionIntro index="01" label={tx("About", "عنّي")} title={tx("WHO I AM", "من أنا")}>
            <p className="intro-copy">{tx("A Software Engineer interested in building software systems, intelligent products, AI-driven experiences, and digital solutions.", "مهندسة برمجيات تهتم ببناء الأنظمة البرمجية، والمنتجات الذكية، والتجارب المدفوعة بالذكاء الاصطناعي، والحلول الرقمية.")}</p>
          </SectionIntro>
          <div className="about-detail-grid">
            <div className="about-statement">
              <p className="display-quote">{tx("A digital identity for the work between engineering, intelligence, and imagination.", "هوية رقمية للعمل الواقع بين الهندسة والذكاء والخيال.")}</p>
              <p className="muted-copy">{tx("The first layer stays quiet. The deeper layers are designed to hold the complete professional and creative picture — as it grows.", "تبقى الطبقة الأولى هادئة. أما الطبقات الأعمق فمصممة لتحتضن الصورة المهنية والإبداعية الكاملة وهي تنمو.")}</p>
            </div>
            <div className="disclosure-list" aria-label="About details">
              {aboutItems.map((item) => {
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
          <SectionIntro index="02" label={tx("Selected work", "أعمال مختارة")} title={tx("WORK", "الأعمال")}>
            <p className="intro-copy">{tx("A living archive of products, systems, applications, and experiments.", "أرشيف حي للمنتجات والأنظمة والتطبيقات والتجارب.")}</p>
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
              <div className="empty-state"><span className="empty-mark">—</span><div><strong>{tx(`No ${activeCategory.toLowerCase()} entries yet.`, `لا توجد إدخالات في ${activeCategory === "ALL" ? "المشاريع" : activeCategory} بعد.`)}</strong><p>{tx("Add projects to the editable content registry. The interface is ready for many entries.", "أضيفي المشاريع إلى سجل المحتوى القابل للتحرير. الواجهة جاهزة لاستيعاب العديد من الإدخالات.")}</p></div></div>
            )}
          </div>
          <div className="project-footer"><span>{tx("Archive structure / 01", "هيكل الأرشيف / 01")}</span><span>{tx("More projects can be added without changing the interface.", "يمكن إضافة المزيد من المشاريع دون تغيير الواجهة.")}</span></div>
        </section>

        <section className="section section-engineering" id="engineering" aria-labelledby="engineering-title">
          <SectionIntro index="03" label={tx("Systems thinking", "تفكير منظومي")} title={tx("ENGINEERING", "الهندسة")}>
            <p className="intro-copy">{tx("The areas of practice are arranged as a typographic map — select one to open its next layer.", "مجالات الممارسة مرتبة كخريطة طباعية — اختاري مجالًا لفتح طبقته التالية.")}</p>
          </SectionIntro>
          <div className="engineering-layout">
            <div className="engineering-list" role="tablist" aria-label="Engineering areas">
              {engineeringAreas.map((area, index) => (
                <button key={area.label} type="button" role="tab" aria-selected={activeEngineering === index} className={activeEngineering === index ? "is-active" : ""} onClick={() => setActiveEngineering(index)}>
                  <span className="engineering-number">0{index + 1}</span><span>{isArabic ? ["هندسة البرمجيات", "التطوير المتكامل", "الواجهة الأمامية", "الواجهة الخلفية", "واجهات البرمجة", "هندسة الأنظمة", "قواعد البيانات", "السحابة وDevOps", "الأمن السيبراني", "الأتمتة", "تطوير تطبيقات الهاتف"][index] : area.label}</span><span className="engineering-short">{isArabic ? ["الأنظمة", "المنتج", "الواجهة", "المنطق", "الاتصال", "البنية", "البيانات", "التسليم", "الثقة", "التدفق", "اللمس"][index] : area.short}</span>
                </button>
              ))}
            </div>
            <div className="engineering-detail" aria-live="polite">
              <span className="detail-kicker">{tx("Selected", "محدد")} / 0{activeEngineering + 1}</span>
              <h3>{isArabic ? ["هندسة البرمجيات", "التطوير المتكامل", "الواجهة الأمامية", "الواجهة الخلفية", "واجهات البرمجة", "هندسة الأنظمة", "قواعد البيانات", "السحابة وDevOps", "الأمن السيبراني", "الأتمتة", "تطوير تطبيقات الهاتف"][activeEngineering] : engineeringAreas[activeEngineering].label}</h3>
              <p>{isArabic ? "مساحة للمبادئ الهندسية وملاحظات التنفيذ ودراسات الحالة المستقبلية." : engineeringAreas[activeEngineering].detail}</p>
              <div className="detail-line" /><span className="detail-placeholder">{tx("Add notes / projects / tools", "أضيفي ملاحظات / مشاريع / أدوات")}</span>
            </div>
          </div>
        </section>

        <section className="section section-technology" id="technology" aria-labelledby="technology-title">
          <SectionIntro index="04" label={tx("Library", "المكتبة")} title={tx("TECHNOLOGY", "التقنيات")}>
            <p className="intro-copy">{tx("A blank, expandable library by design. Technologies appear here only when they are explicitly added.", "مكتبة قابلة للتوسع وفارغة عمدًا. تظهر التقنيات هنا فقط عند إضافتها صراحةً.")}</p>
          </SectionIntro>
          <div className="technology-layout">
            <div className="technology-note"><span className="signal-dot" /><p>{tx("Ready for 20+ languages, frameworks, tools, platforms, and design systems.", "جاهزة لأكثر من 20 لغة وإطار عمل وأداة ومنصة ونظام تصميم.")}</p></div>
            <div className="technology-categories">
              {technologyCategories.map((category, index) => {
                const items = technologyLibrary[category] || [];
                return <details key={category} className="tech-group" open={index === 0}>
                  <summary><span>0{index + 1}</span><strong>{isArabic ? ["لغات البرمجة", "أطر العمل", "المكتبات", "قواعد البيانات", "السحابة والبنية التحتية", "الذكاء الاصطناعي وتعلم الآلة", "أدوات التطوير", "المنصات", "أدوات التصميم"][index] : category}</strong><small>{items.length ? `${items.length} ${tx("entries", "إدخالات")}` : tx("Add entries", "أضيفي إدخالات")}</small><ChevronDown size={16} strokeWidth={1.3} /></summary>
                  <div className="tech-items">{items.length ? items.map((item) => <span key={item}>{item}</span>) : <em>{tx("Editable placeholder — add technologies here.", "عنصر قابل للتحرير — أضيفي التقنيات هنا.")}</em>}</div>
                </details>;
              })}
            </div>
          </div>
        </section>

        <section className="section section-ai" id="ai" aria-labelledby="ai-title">
          <div className="ai-orbit" aria-hidden="true"><div /><div /><div /><span>AI</span></div>
          <SectionIntro index="05" label={tx("Intelligence", "الذكاء")} title="AI">
            <p className="ai-headline">{tx("BUILDING SOFTWARE", "أبني برمجيات")}<br /><em>{tx("THAT THINKS, ADAPTS", "تفكر وتتكيّف")}<br />{tx("AND ACTS.", "وتتصرّف.")}</em></p>
          </SectionIntro>
          <div className="ai-bottom"><p className="muted-copy">{tx("AI is treated here as a practice and a field of questions — not a decoration. This space can hold agents, models, automations, applications, analysis, and research as they become real.", "يُتعامل مع الذكاء الاصطناعي هنا كممارسة ومجال من الأسئلة — لا كزينة. يمكن لهذا المكان أن يحتضن الوكلاء والنماذج والأتمتة والتطبيقات والتحليل والبحث.")}</p><div className="ai-areas">{aiAreas.map((area, index) => <span key={area}><b>0{index + 1}</b>{isArabic ? ["وكلاء الذكاء الاصطناعي", "تعلم الآلة", "الأتمتة الذكية", "تطبيقات الذكاء الاصطناعي", "تحليل البيانات", "الأنظمة التنبؤية", "التطوير المدعوم بالذكاء الاصطناعي"][index] : area}</span>)}</div></div>
        </section>

        <section className="section section-experience" id="experience" aria-labelledby="experience-title">
          <SectionIntro index="06" label={tx("Timeline", "الخط الزمني")} title={tx("EXPERIENCE", "الخبرة")}>
            <p className="intro-copy">{tx("A minimal timeline that expands as the record grows.", "خط زمني بسيط يتوسع مع نمو السجل المهني.")}</p>
          </SectionIntro>
          {experience.length ? <div className="experience-list">{experience.map((entry) => <details key={`${entry.year}-${entry.role}`}><summary><span>{entry.year}</span><strong>{entry.role}</strong><em>{entry.context}</em><ChevronDown size={16} /></summary><div><p>{entry.description}</p><small>{entry.technologies.join(" / ")}</small></div></details>)}</div> : <div className="empty-panel"><div className="empty-panel-top"><span>{tx("YEAR", "السنة")}</span><span>{tx("ROLE / PROJECT / COMPANY", "الدور / المشروع / الشركة")}</span><span>{tx("DESCRIPTION", "الوصف")}</span></div><p>{tx("Editable timeline placeholder — add experience entries without changing the layout.", "خط زمني قابل للتحرير — أضيفي الخبرات دون تغيير التخطيط.")}</p></div>}
        </section>

        <section className="section section-capabilities" id="skills" aria-labelledby="skills-title">
          <SectionIntro index="07" label={tx("Capability map", "خريطة القدرات")} title={tx("SKILLS", "المهارات")}>
            <p className="intro-copy">{tx("No percentages. No progress bars. Only the kinds of problems and practices this identity can hold.", "لا نسب مئوية ولا أشرطة تقدم. فقط أنواع المشكلات والممارسات التي يمكن لهذه الهوية أن تحتضنها.")}</p>
          </SectionIntro>
          <div className="capability-grid">{capabilityMap.map((capability, index) => <button type="button" key={capability.label} onClick={() => showPlaceholder(`${capability.label} capability detail`)}><span>0{index + 1}</span><strong>{isArabic ? ["الهندسة", "الذكاء الاصطناعي", "الهندسة المعمارية", "التطوير", "التصميم", "الأمن", "المنتج", "حل المشكلات"][index] : capability.label}</strong><small>{isArabic ? ["الأنظمة والتنفيذ والعمق التقني.", "الذكاء والوكلاء والبيانات والبرمجيات المتكيفة.", "هيكل يجعل التعقيد قابلًا للفهم.", "من التفاعل الأول إلى المنتج المشحون.", "الواجهات والتدفقات ولغة المنتج.", "الثقة كخاصية في النظام.", "برمجيات مفيدة تشكلها رؤية واضحة.", "العثور على السؤال الأبسط داخل المشكلة الصعبة."][index] : capability.detail}</small><ArrowUpRight size={16} strokeWidth={1.2} /></button>)}</div>
        </section>

        <section className="section section-creative" id="creative" aria-labelledby="creative-title">
          <SectionIntro index="08" label={tx("A different register", "مساحة مختلفة")} title={tx("CREATIVE", "الإبداع")}>
            <p className="creative-intro">{tx("Writing, poetry, philosophy, books, ideas, and visual experiments — the work that begins before it has a category.", "الكتابة والشعر والفلسفة والكتب والأفكار والتجارب البصرية — العمل الذي يبدأ قبل أن يحمل تصنيفًا.")}</p>
          </SectionIntro>
          <div className="creative-layout"><img className="section-watermark creative-watermark" src="/manus-storage/besma-signature_88629231.png" alt="" aria-hidden="true" /><div className="creative-quote"><span className="quote-mark">“</span><p>{tx("Some ideas arrive as systems.", "تأتي بعض الأفكار كأنظمة.")}<br /><em>{tx("Some arrive as sentences.", "وتأتي أخرى كجمل.")}</em></p><small>{tx("Creative archive / 01", "الأرشيف الإبداعي / 01")}</small></div><div className="writing-list">{writings.length ? writings.map((writing) => <button type="button" key={writing.title} onClick={() => showPlaceholder(writing.title)}><span>{writing.type}</span><strong>{writing.title}</strong><small>{writing.date}</small><ArrowUpRight size={16} /></button>) : <div className="writing-empty"><span>{tx("Writing archive", "أرشيف الكتابة")}</span><strong>{tx("Not yet populated.", "لم تتم إضافة محتوى بعد.")}</strong><p>{tx("Essays, poetry, books, notes, and philosophical texts can open here as quiet reading pages.", "يمكن أن تُفتح هنا المقالات والشعر والكتب والملاحظات والنصوص الفلسفية كصفحات قراءة هادئة.")}</p><AccentLink href="#library">{tx("Open library architecture", "افتحي بنية المكتبة")}</AccentLink></div>}</div></div>
        </section>

        <section className="section section-library" id="library" aria-labelledby="library-title">
          <SectionIntro index="09" label={tx("Digital archive", "الأرشيف الرقمي")} title={tx("LIBRARY", "المكتبة")}>
            <p className="intro-copy">{tx("A private-looking, public-facing structure for the work behind the work.", "هيكل يبدو خاصًا ومتاحًا للعامة، يحتضن العمل خلف العمل.")}</p>
          </SectionIntro>
          <div className="library-grid">{librarySections.map((item, index) => <button type="button" key={item.label} onClick={() => showPlaceholder(`${item.label} library`)}><span>0{index + 1}</span><strong>{isArabic ? ["المشاريع", "المقالات", "الكتب", "التجارب", "البحث", "الأفكار", "البرمجة", "التصميم"][index] : item.label}</strong><small>{isArabic ? "أضيفي إدخالات" : item.count}</small><ArrowUpRight size={15} /></button>)}</div>
          <div className="library-footnote"><span>{tx("Content model", "نموذج المحتوى")}</span><p>{contentModel.join(" / ")}</p></div>
        </section>

        <section className="section section-philosophy" id="philosophy" aria-labelledby="philosophy-title"><div className="philosophy-line" /><div className="philosophy-content"><span className="eyebrow">10 / {tx("Personal philosophy", "الفلسفة الشخصية")}</span><h2>{isArabic ? "يجب أن توجد التعقيدات داخل النظام — لا داخل التجربة." : principles[0]}</h2><button type="button" className="text-link" onClick={() => showPlaceholder("Additional principles")}>{tx("Add another principle", "أضيفي مبدأً آخر")} <Plus size={15} /></button></div></section>

        <section className="section section-cv" id="cv" aria-labelledby="cv-title">
          <SectionIntro index="11" label={tx("Professional profile", "الملف المهني")} title="CV">
            <p className="intro-copy">{tx("A dedicated, detailed layer for the conventional record — kept separate from the experience of the site.", "طبقة مخصصة ومفصلة للسجل المهني التقليدي — منفصلة عن تجربة الموقع.")}</p>
          </SectionIntro>
          <div className="cv-grid"><img className="section-watermark cv-watermark" src="/manus-storage/besma-signature_88629231.png" alt="" aria-hidden="true" /><div><p className="cv-profile">{tx("Profile, experience, education, skills, technologies, projects, languages, and achievements can be assembled here from the same editable source.", "يمكن تجميع الملف الشخصي والخبرة والتعليم والمهارات والتقنيات والمشاريع واللغات والإنجازات هنا من المصدر القابل للتحرير نفسه.")}</p><div className="cv-actions"><button type="button" className="button button-primary" onClick={() => showPlaceholder("CV document")}>{tx("View CV", "عرض السيرة")} <ArrowUpRight size={15} /></button><button type="button" className="button button-quiet" onClick={() => showPlaceholder("CV download")}>{tx("Download CV", "تحميل السيرة")} <Download size={15} /></button></div></div><div className="cv-index">{["Profile", "Experience", "Education", "Skills", "Technologies", "Projects", "Languages", "Achievements"].map((item, index) => <span key={item}><b>0{index + 1}</b>{isArabic ? ["الملف الشخصي", "الخبرة", "التعليم", "المهارات", "التقنيات", "المشاريع", "اللغات", "الإنجازات"][index] : item}</span>)}</div></div>
        </section>

        <section className="section section-contact" id="contact" aria-labelledby="contact-title"><div className="contact-top"><span className="eyebrow">12 / {tx("Closing chapter", "الفصل الختامي")}</span><span className="contact-status"><span className="status-dot" /> {tx("Open to meaningful work", "منفتحة على الأعمال الهادفة")}</span></div><h2 id="contact-title">{tx("LET'S BUILD", "لنبنِ")}<br /><em>{tx("SOMETHING", "شيئًا")}</em><br />{tx("MEANINGFUL.", "هادفًا.")}</h2><p className="contact-copy">{tx("For collaborations, conversations, and work that deserves a thoughtful system.", "للتعاون والمحادثات والعمل الذي يستحق نظامًا مدروسًا.")}</p><div className="contact-links">{contactLinks.map((link) => <a key={link.label} href={link.href} onClick={(event) => { if (link.href === "#contact") { event.preventDefault(); showPlaceholder(link.label); } }}><span>{isArabic ? { Email: "البريد", LinkedIn: "لينكدإن", GitHub: "جيت هب", Other: "أخرى" }[link.label] : link.label}</span><strong>{isArabic ? "عنصر قابل للتحرير — أضيفي الرابط" : link.value}</strong><ArrowUpRight size={17} strokeWidth={1.2} /></a>)}</div></section>
      </main>

      <footer className="site-footer"><span>{tx("© 2024–2026 BESMA KADDOUR — ALL RIGHTS RESERVED", "© 2024–2026 بسمة قدور — جميع الحقوق محفوظة")}</span><span>{tx("ALL CONTENT, DESIGN &amp; CODE BELONG TO BESMA KADDOUR", "جميع المحتويات والتصميم والبرمجة ملك لبسمة قدور")}</span><a href="#top">{tx("Back to top", "العودة إلى الأعلى")} <ArrowUpRight size={14} /></a></footer>
      {notice && <div className="notice" role="status">{notice}<button type="button" aria-label="Dismiss notification" onClick={() => setNotice("")}><X size={15} /></button></div>}
    </div>
  );
}

export default Home;
