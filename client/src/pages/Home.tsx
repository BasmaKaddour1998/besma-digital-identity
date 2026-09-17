import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  Moon,
  Plus,
  Sun,
  X,
} from "lucide-react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import {
  aiAreas,
  capabilityMap,
  contactLinks,
  contentModel,
  engineeringAreas,
  experience,
  financialTechnologyAreas,
  focusAreas,
  librarySections,
  marketCoverage,
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

function useScrollReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold, rootMargin: "0px 0px -8%" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const skillChart = [
  { en: "AI / ML", ar: "الذكاء الاصطناعي", ai: 94, engineering: 96 },
  { en: "Agents", ar: "الوكلاء", ai: 91, engineering: 88 },
  { en: "Architecture", ar: "المعمارية", ai: 90, engineering: 95 },
  { en: "Full-Stack", ar: "التطوير المتكامل", ai: 89, engineering: 97 },
  { en: "Systems", ar: "الأنظمة", ai: 87, engineering: 94 },
  { en: "Security", ar: "الأمن", ai: 82, engineering: 86 },
];

function SkillLab({ isArabic, tx }: { isArabic: boolean; tx: (en: string, ar: string) => string }) {
  const [active, setActive] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const labRef = useRef<HTMLDivElement>(null);
  const item = skillChart[active];
  const playSkillSound = () => {
    if (!soundEnabled) return;
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const audioContext = new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(520 + active * 35, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(760 + active * 28, audioContext.currentTime + 0.08);
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.14);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.15);
    window.setTimeout(() => void audioContext.close(), 220);
  };
  useEffect(() => {
    const node = labRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.24, rootMargin: "0px 0px -8%" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={labRef} className={`skill-lab-grid ${isVisible ? "is-visible" : "is-reveal"}`}>
      <div className="skill-lab-chart" role="img" aria-label={tx("Interactive comparison of AI and software engineering skills", "مقارنة تفاعلية بين مهارات الذكاء الاصطناعي وهندسة البرمجيات")}>
        <div className="chart-orbit chart-orbit-one" /><div className="chart-orbit chart-orbit-two" />
        <div className="chart-center"><span>0{active + 1}</span><strong>{isArabic ? item.ar : item.en}</strong></div>
        <div className="chart-bars">
          <div><span>{tx("AI / ML", "الذكاء الاصطناعي")}</span><i><b style={{ width: `${item.ai ?? 0}%` }} /></i><strong>{item.ai ?? "—"}</strong></div>
          <div><span>{tx("Software Engineering", "هندسة البرمجيات")}</span><i><b className="bar-engineering" style={{ width: `${item.engineering ?? 0}%` }} /></i><strong>{item.engineering ?? "—"}</strong></div>
        </div>
      </div>
      <div className="skill-lab-controls">
        <SkillRadar isArabic={isArabic} tx={tx} />
        <div className="lab-legend"><span><i className="legend-ai" /> {tx("AI / ML", "الذكاء الاصطناعي")}</span><span><i className="legend-engineering" /> {tx("Engineering", "الهندسة")}</span></div><div className="lab-note-row"><p className="lab-note">{tx("Self-assessed proficiency across six years of practice.", "نسب تقديرية ذاتية مبنية على ست سنوات من الخبرة العملية.")}</p><button type="button" className={`sound-toggle ${soundEnabled ? "is-on" : ""}`} onClick={() => setSoundEnabled((current) => !current)} aria-pressed={soundEnabled}>{soundEnabled ? tx("Sound on", "الصوت مفعّل") : tx("Sound off", "الصوت متوقف")}</button></div>
        {skillChart.map((skill, index) => <button type="button" key={skill.en} className={active === index ? "is-active" : ""} onClick={() => { setActive(index); playSkillSound(); }}><b>0{index + 1}</b><span>{isArabic ? skill.ar : skill.en}</span><small>{`${Math.max(skill.ai, skill.engineering)}%`}</small></button>)}
      </div>
    </div>
  );
}

function SkillRadar({ isArabic, tx }: { isArabic: boolean; tx: (en: string, ar: string) => string }) {
  const labels = isArabic ? ["الذكاء", "الوكلاء", "المعمارية", "التكامل", "الأنظمة", "الأمن"] : ["AI", "Agents", "Architecture", "Full-Stack", "Systems", "Security"];
  const aiPoints = "120,25 187,67 186,143 120,181 55,143 59,68";
  const engineeringPoints = "120,18 191,65 191,146 120,184 51,146 48,65";
  const gridPoints = ["120,46 160,77 159,131 120,151 81,131 80,77", "120,72 143,87 142,118 120,128 98,118 97,87", "120,96 126,102 126,108 120,112 114,108 114,102"];
  return <div className="skill-radar" role="img" aria-label={tx("Radar chart comparing AI and software engineering proficiency", "رسم راداري يقارن بين كفاءة الذكاء الاصطناعي وهندسة البرمجيات")}><div className="radar-heading"><span>{tx("Capability radar", "رادار القدرات")}</span><small>{tx("AI / Engineering", "الذكاء / الهندسة")}</small></div><svg viewBox="0 0 240 220" aria-hidden="true"><g className="radar-grid">{gridPoints.map((points) => <polygon key={points} points={points} />)}<line x1="120" y1="20" x2="120" y2="184" /><line x1="48" y1="65" x2="191" y2="146" /><line x1="191" y1="65" x2="51" y2="146" /></g><polygon className="radar-area radar-ai" points={aiPoints} /><polygon className="radar-area radar-engineering" points={engineeringPoints} />{labels.map((label, index) => <text key={label} x={[120, 211, 207, 120, 33, 29][index]} y={[12, 63, 162, 204, 162, 63][index]}>{label}</text>)}</svg><div className="radar-legend"><span><i className="legend-ai" />{tx("AI / ML", "الذكاء الاصطناعي")}</span><span><i className="legend-engineering" />{tx("Engineering", "الهندسة")}</span></div></div>;
}

function QrIdentity({ isArabic, tx }: { isArabic: boolean; tx: (en: string, ar: string) => string }) {
  const [url] = useState(() => window.location.origin + "/");
  const downloadQr = (format: "png" | "svg") => {
    if (format === "png") {
      const canvas = document.querySelector("#besma-qr canvas") as HTMLCanvasElement | null;
      if (!canvas) return;
      const link = document.createElement("a"); link.download = "besma-kaddour-qr.png"; link.href = canvas.toDataURL("image/png"); link.click();
      return;
    }
    const svg = document.querySelector("#besma-qr svg") as SVGElement | null;
    if (!svg) return;
    const blob = new Blob([new XMLSerializer().serializeToString(svg)], { type: "image/svg+xml;charset=utf-8" });
    const link = document.createElement("a"); link.download = "besma-kaddour-qr.svg"; link.href = URL.createObjectURL(blob); link.click(); URL.revokeObjectURL(link.href);
  };
  return (
    <section className="section qr-section scroll-section" id="qr" aria-labelledby="qr-title">
      <div className="qr-copy"><span className="eyebrow">13 / {tx("Share", "مشاركة")}</span><h2 id="qr-title">{tx("SCAN THE\nPROFILE.", "امسحي\nالملف.")}</h2><p>{tx("Scan to open Besma Kaddour's digital identity.", "امسحي لفتح الهوية الرقمية لبسمة قدور.")}</p></div>
      <div className="qr-card" id="besma-qr"><div className="qr-frame"><QRCodeCanvas value={url} size={250} level="H" bgColor="#f2f0ea" fgColor="#0a0a09" includeMargin /><QRCodeSVG value={url} size={250} level="H" bgColor="#f2f0ea" fgColor="#0a0a09" includeMargin className="qr-svg-source" /><img src="/assets/besma-portrait.png" alt={tx("Besma Kaddour profile image", "صورة ملف بسمة قدور")} /><span className="qr-corner qr-corner-tl" /><span className="qr-corner qr-corner-br" /></div><div className="qr-url">{tx("QR / PROFILE", "QR / الملف")}<span>{url.replace(/^https?:\/\//, "")}</span></div><div className="qr-actions"><button type="button" className="button button-quiet" onClick={() => downloadQr("png")}>{tx("PNG", "PNG")} <Download size={14} /></button><button type="button" className="button button-quiet" onClick={() => downloadQr("svg")}>{tx("SVG", "SVG")} <Download size={14} /></button></div></div>
    </section>
  );
}

function Home() {
  const [language, setLanguage] = useState<"en" | "ar" | "fr">(() => {
    const saved = window.localStorage.getItem("besma-language");
    if (saved === "ar" || saved === "en" || saved === "fr") return saved;
    if (window.navigator.language.toLowerCase().startsWith("fr")) return "fr";
    return window.navigator.language.toLowerCase().startsWith("ar") ? "ar" : "en";
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState<string | null>(null);
  const [activeEngineering, setActiveEngineering] = useState(0);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [notice, setNotice] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">(() => window.localStorage.getItem("besma-theme") === "light" ? "light" : "dark");
  const isArabic = language === "ar";
  const isFrench = language === "fr";
  const isLight = theme === "light";
  const tx = (en: string, ar: string, fr = en) => isArabic ? ar : isFrench ? fr : en;
  const experienceReveal = useScrollReveal<HTMLElement>(0.18);
  const bookReveal = useScrollReveal<HTMLElement>(0.18);
  const switchLanguage = () => {
    const nextLanguage = language === "en" ? "ar" : language === "ar" ? "fr" : "en";
    const update = () => {
      setLanguage(nextLanguage);
      setOpenAbout(null);
      setActiveCategory((current) => current === "ALL" || current === "الكل" || current === "TOUT" ? (nextLanguage === "ar" ? "الكل" : nextLanguage === "fr" ? "TOUT" : "ALL") : current);
    };
    const documentWithTransition = document as Document & { startViewTransition?: (callback: () => void) => void };
    if (documentWithTransition.startViewTransition) documentWithTransition.startViewTransition(update);
    else update();
  };
  const switchTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");
  const navItems = isArabic ? ["عنّي", "الأعمال", "الهندسة", "الذكاء الاصطناعي", "التقنية المالية", "المختبر", "الإبداع", "الخبرة", "تواصل"] : isFrench ? ["À PROPOS", "PROJETS", "INGÉNIERIE", "IA", "FINTECH", "LABORATOIRE", "CRÉATIF", "EXPÉRIENCE", "CONTACT"] : navigation.map((item) => item.label);
  const aboutItems = isArabic ? ["الخلفية", "الهندسة", "الذكاء الاصطناعي", "تطوير المنتجات", "العمل الإبداعي", "الفلسفة"] : ["Background", "Engineering", "AI", "Product Development", "Creative Work", "Philosophy"];
  const categories = isArabic ? ["الكل", "الذكاء الاصطناعي", "البرمجيات", "الويب", "الهاتف", "الأنظمة", "الإبداع"] : isFrench ? ["TOUT", "IA", "LOGICIEL", "WEB", "MOBILE", "SYSTÈMES", "CRÉATIF"] : ["ALL", "AI", "SOFTWARE", "WEB", "MOBILE", "SYSTEMS", "CREATIVE"];

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(""), 3400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    window.localStorage.setItem("besma-language", language);
  }, [isArabic, language]);

  useEffect(() => {
    window.localStorage.setItem("besma-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".scroll-section"));
    document.documentElement.classList.add("has-scroll-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("has-scroll-reveal");
    };
  }, [language]);

  useEffect(() => {
    const existing = document.querySelector('link[rel="canonical"]');
    const canonical = existing || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", `${window.location.origin}/`);
    if (!existing) document.head.appendChild(canonical);
  }, []);

  const filteredProjects = useMemo(() => {
    const categoryIndex = categories.indexOf(activeCategory);
    const normalizedCategory = isArabic
      ? ["ALL", "AI", "SOFTWARE", "WEB", "MOBILE", "SYSTEMS", "CREATIVE"][categoryIndex]
      : isFrench
        ? ["ALL", "AI", "SOFTWARE", "WEB", "MOBILE", "SYSTEMS", "CREATIVE"][categoryIndex]
        : activeCategory;
    return projects.filter((project) => normalizedCategory === "ALL" || project.category.toUpperCase() === normalizedCategory);
  }, [activeCategory, categories, isArabic, isFrench]);

  const showPlaceholder = (label: string) => {
    setNotice(tx(`${label} is an editable placeholder — add the real detail in the content registry.`, `${label} عنصر قابل للتحرير — أضيفي التفاصيل الحقيقية في سجل المحتوى.`));
  };

  return (
    <div className={`site-shell ${isArabic ? "is-arabic" : ""} ${isFrench ? "is-french" : ""} ${isLight ? "theme-light" : ""}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "name": "Besma Kaddour",
            "jobTitle": "Software Engineer",
            "description": "Software Engineer working across full-stack development, AI, software architecture, digital innovation, cybersecurity, and creative technology.",
            "url": window.location.origin,
            "image": `${window.location.origin}/assets/besma-portrait.png`
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
        <button type="button" className="language-toggle" onClick={switchLanguage} aria-label={tx("Switch to Arabic", "التبديل إلى الفرنسية", "Passer à l’anglais")}>
          {isArabic ? "FR" : isFrench ? "EN" : "ع"}
        </button>
        <button type="button" className="theme-toggle" onClick={switchTheme} aria-label={isLight ? tx("Switch to dark mode", "التبديل إلى الوضع الداكن") : tx("Switch to light mode", "التبديل إلى الوضع الفاتح")}>
          {isLight ? <Moon size={15} aria-hidden="true" /> : <Sun size={15} aria-hidden="true" />}
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
          <video className="hero-neural-video" autoPlay loop muted playsInline preload="metadata" aria-hidden="true">
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663961505897/pTXgsMEJAOjrFngH.mp4" type="video/mp4" />
          </video>
          <SignalField />
          <div className="hero-portrait-wrap">
            <div className="portrait-frame" aria-hidden="true" />
            <img className="hero-portrait" src="/assets/besma-portrait.png" alt={tx("Portrait of Besma Kaddour, Software Engineer", "صورة بسمة قدور، مهندسة برمجيات")} width="1145" height="1374" loading="eager" fetchPriority="high" decoding="async" />
            <img className="hero-signature" src="/assets/besma-signature.png" alt={tx("Besma Kaddour signature", "توقيع بسمة قدور")} width="1774" height="887" loading="eager" decoding="async" />
            <span className="portrait-caption">BESMA / 01</span>
          </div>
          <div className="hero-content">
            <div className="hero-kicker">
              <span className="status-dot" />
              <span>{tx("Software Engineer / Digital Identity", "مهندسة برمجيات / هوية رقمية", "Ingénieure logicielle / Identité numérique")}</span>
              <span className="hero-year">{tx("Est. 2024 · 6 years experience", "التأسيس 2024 · خبرة 6 سنوات", "Depuis 2024 · 6 ans d’expérience")}</span>
            </div>
            <p className="hero-name">BESMA<br className="mobile-break" /> KADDOUR</p>
            <p className="hero-role">{tx("Software Engineer", "مهندسة برمجيات", "Ingénieure logicielle")}</p>
            <h1 id="hero-title">{tx("BUILDING SOFTWARE.", "أبني البرمجيات.", "JE CONÇOIS DES LOGICIELS.")}<br />{tx("EXPLORING INTELLIGENCE.", "أستكشف الذكاء.", "J’EXPLORE L’INTELLIGENCE.")}<br /><em>{tx("CREATING IDEAS.", "وأصنع الأفكار.", "JE DONNE VIE AUX IDÉES.")}</em></h1>
            <p className="hero-summary">{tx("Software Engineer working across Full-Stack Development, AI, Software Architecture, Digital Innovation, and creative technology.", "مهندسة برمجيات أعمل عبر التطوير المتكامل، والذكاء الاصطناعي، وهندسة البرمجيات، والابتكار الرقمي، والتقنية الإبداعية.", "Ingénieure logicielle spécialisée en développement Full-Stack, IA, architecture logicielle, innovation numérique et technologie créative.")}</p>
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

        <section className="section section-about scroll-section" id="about" aria-labelledby="about-title">
          <SectionIntro index="01" label={tx("About", "عنّي")} title={tx("WHO I AM", "من أنا")}>
            <p className="intro-copy">{tx("A Software Engineer interested in building software systems, intelligent products, AI-driven experiences, and digital solutions.", "مهندسة برمجيات تهتم ببناء الأنظمة البرمجية، والمنتجات الذكية، والتجارب المدفوعة بالذكاء الاصطناعي، والحلول الرقمية.")}</p>
          </SectionIntro>
          <div className="about-detail-grid">
            <div className="about-statement">
              <p className="display-quote">{tx("A digital identity for the work between engineering, intelligence, and imagination.", "هوية رقمية للعمل الواقع بين الهندسة والذكاء والخيال.")}</p>
              <p className="muted-copy">{tx("The first layer stays quiet. The deeper layers are designed to hold the complete professional and creative picture — as it grows.", "تبقى الطبقة الأولى هادئة. أما الطبقات الأعمق فمصممة لتحتضن الصورة المهنية والإبداعية الكاملة وهي تنمو.")}</p>
            </div>
            <div className="disclosure-list" aria-label={tx("About details", "تفاصيل عنّي")}>
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

        <section className="section section-work scroll-section" id="work" aria-labelledby="work-title">
          <SectionIntro index="02" label={tx("Selected work", "أعمال مختارة")} title={tx("WORK", "الأعمال")}>
            <p className="intro-copy">{tx("A living archive of products, systems, applications, and experiments.", "أرشيف حي للمنتجات والأنظمة والتطبيقات والتجارب.")}</p>
          </SectionIntro>
          <div className="filter-bar" role="tablist" aria-label={tx("Project categories", "تصنيفات المشاريع")}>
            {categories.map((category) => (
              <button key={category} className={activeCategory === category ? "is-active" : ""} type="button" role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>
            ))}
          </div>
          <div className="project-list">
            {filteredProjects.length > 0 ? filteredProjects.map((project) => (
              <article className={`project-row ${project.featured ? "project-featured" : ""}`} key={project.name}>
                <div className="project-index">01</div>
                <div className="project-main">
                  <div className="project-eyebrow">{isArabic ? "منظومة ذكاء اصطناعي / منصة وكلاء" : project.eyebrow}</div>
                  <h3>{project.name}</h3>
                  <p>{isArabic ? "مساحة لمشروع منظومة SAMA للذكاء الاصطناعي. يمكن إضافة تفاصيل المنتج والنطاق والتقنيات ودراسة الحالة هنا." : project.description}</p>
                </div>
                <div className="project-meta"><span>{isArabic ? "الذكاء الاصطناعي" : project.category}</span><span>{isArabic ? "ستضاف التفاصيل" : project.status}</span></div>
                <button className="round-arrow" type="button" aria-label={tx(`Open ${project.name} details`, `فتح تفاصيل ${project.name}`)} onClick={() => showPlaceholder(`${project.name} details`)}><ArrowUpRight size={19} strokeWidth={1.2} /></button>
              </article>
            )) : (
              <div className="empty-state"><span className="empty-mark">—</span><div><strong>{tx(`No ${activeCategory.toLowerCase()} entries yet.`, `لا توجد إدخالات في ${activeCategory === "ALL" ? "المشاريع" : activeCategory} بعد.`)}</strong><p>{tx("Add projects to the editable content registry. The interface is ready for many entries.", "أضيفي المشاريع إلى سجل المحتوى القابل للتحرير. الواجهة جاهزة لاستيعاب العديد من الإدخالات.")}</p></div></div>
            )}
          </div>
          <div className="project-footer"><span>{tx("Archive structure / 01", "هيكل الأرشيف / 01")}</span><span>{tx("More projects can be added without changing the interface.", "يمكن إضافة المزيد من المشاريع دون تغيير الواجهة.")}</span></div>
        </section>

        <section className="section section-engineering scroll-section" id="engineering" aria-labelledby="engineering-title">
          <SectionIntro index="03" label={tx("Systems thinking", "تفكير منظومي")} title={tx("ENGINEERING", "الهندسة")}>
            <p className="intro-copy">{tx("The areas of practice are arranged as a typographic map — select one to open its next layer.", "مجالات الممارسة مرتبة كخريطة طباعية — اختاري مجالًا لفتح طبقته التالية.")}</p>
          </SectionIntro>
          <div className="engineering-layout">
            <div className="engineering-list" role="tablist" aria-label={tx("Engineering areas", "مجالات الهندسة")}>
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

        <section className="section section-technology scroll-section" id="technology" aria-labelledby="technology-title">
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

        <section className="section section-ai scroll-section" id="ai" aria-labelledby="ai-title">
          <div className="ai-orbit" aria-hidden="true"><div /><div /><div /><span>AI</span></div>
          <SectionIntro index="05" label={tx("Intelligence", "الذكاء")} title="AI">
            <p className="ai-headline">{tx("BUILDING SOFTWARE", "أبني برمجيات")}<br /><em>{tx("THAT THINKS, ADAPTS", "تفكر وتتكيّف")}<br />{tx("AND ACTS.", "وتتصرّف.")}</em></p>
          </SectionIntro>
          <div className="ai-bottom"><p className="muted-copy">{tx("AI is treated here as a practice and a field of questions — not a decoration. This space can hold agents, models, automations, applications, analysis, and research as they become real.", "يُتعامل مع الذكاء الاصطناعي هنا كممارسة ومجال من الأسئلة — لا كزينة. يمكن لهذا المكان أن يحتضن الوكلاء والنماذج والأتمتة والتطبيقات والتحليل والبحث.")}</p><div className="ai-areas">{aiAreas.map((area, index) => <span key={area}><b>0{index + 1}</b>{isArabic ? ["وكلاء الذكاء الاصطناعي", "تعلم الآلة", "الأتمتة الذكية", "تطبيقات الذكاء الاصطناعي", "تحليل البيانات", "الأنظمة التنبؤية", "التطوير المدعوم بالذكاء الاصطناعي"][index] : area}</span>)}</div></div>
        </section>

        <section className="section section-fintech scroll-section" id="fintech" aria-labelledby="fintech-title">
          <SectionIntro index="06" label={tx("Financial technology", "التقنية المالية")} title={tx("MARKET SYSTEMS", "أنظمة الأسواق")}>
            <p className="intro-copy">{tx("Software engineering for financial market analysis, monitoring, visualization, and research systems.", "هندسة برمجيات لتحليل الأسواق المالية ومراقبتها وتصوير بياناتها وبناء أنظمة البحث.")}</p>
          </SectionIntro>
          <div className="fintech-layout">
            <div className="market-coverage"><span className="eyebrow">{tx("Market coverage", "نطاق الأسواق")}</span><div>{marketCoverage.map((market, index) => <span key={market}>{isArabic ? ["الأسهم", "الدخل الثابت", "أسواق الصرف", "السلع", "المؤشرات الرئيسية", "مؤشر الدولار DXY"][index] : market}</span>)}</div><p>{tx("Software systems for market-data analysis, monitoring, visualization, and research.", "أنظمة برمجية لتحليل بيانات الأسواق ومراقبتها وتصويرها والبحث فيها.")}</p></div>
            <div className="fintech-cards">{financialTechnologyAreas.map((area, index) => <article key={area.en}><span>0{index + 1}</span><h3>{isArabic ? area.ar : area.en}</h3><p>{isArabic ? area.detailAr : area.detailEn}</p></article>)}</div>
          </div>
        </section>

        <section className="section section-lab scroll-section" id="lab" aria-labelledby="lab-title">
          <SectionIntro index="06" label={tx("Interactive laboratory", "مختبر تفاعلي")} title={tx("SKILL SIGNAL", "إشارة المهارات")}>
            <p className="intro-copy">{tx("Explore the relationship between artificial intelligence and software engineering through a living visual index.", "استكشفي العلاقة بين الذكاء الاصطناعي وهندسة البرمجيات عبر مؤشر بصري حي.")}</p>
          </SectionIntro>
          <SkillLab isArabic={isArabic} tx={tx} />
        </section>

        <section ref={experienceReveal.ref} className={`section section-experience section-reveal ${experienceReveal.visible ? "is-visible" : "is-reveal"}`} id="experience" aria-labelledby="experience-title">
          <SectionIntro index="06" label={tx("Timeline", "الخط الزمني")} title={tx("EXPERIENCE", "الخبرة")}>
            <p className="intro-copy">{tx("A minimal timeline that expands as the record grows.", "خط زمني بسيط يتوسع مع نمو السجل المهني.")}</p>
          </SectionIntro>
          {experience.length ? <div className="experience-list">{experience.map((entry) => <details key={`${entry.year}-${entry.role}`}><summary><span>{isArabic ? "2024 — الآن" : entry.year}</span><strong>{isArabic ? "مهندسة برمجيات / هوية رقمية" : entry.role}</strong><em>{isArabic ? "6 سنوات من الخبرة" : entry.context}</em><ChevronDown size={16} /></summary><div><p>{isArabic ? "ممارسة مهنية متنامية عبر هندسة البرمجيات والذكاء الاصطناعي والمعمارية والمنتجات الرقمية والتقنية الإبداعية." : entry.description}</p><small>{entry.technologies.join(" / ")}</small></div></details>)}</div> : <div className="empty-panel"><div className="empty-panel-top"><span>{tx("YEAR", "السنة")}</span><span>{tx("ROLE / PROJECT / COMPANY", "الدور / المشروع / الشركة")}</span><span>{tx("DESCRIPTION", "الوصف")}</span></div><p>{tx("Editable timeline placeholder — add experience entries without changing the layout.", "خط زمني قابل للتحرير — أضيفي الخبرات دون تغيير التخطيط.")}</p></div>}
        </section>

        <section className="section section-capabilities scroll-section" id="skills" aria-labelledby="skills-title">
          <SectionIntro index="07" label={tx("Capability map", "خريطة القدرات")} title={tx("SKILLS", "المهارات")}>
            <p className="intro-copy">{tx("No percentages. No progress bars. Only the kinds of problems and practices this identity can hold.", "لا نسب مئوية ولا أشرطة تقدم. فقط أنواع المشكلات والممارسات التي يمكن لهذه الهوية أن تحتضنها.")}</p>
          </SectionIntro>
          <div className="capability-grid">{capabilityMap.map((capability, index) => <button type="button" key={capability.label} onClick={() => showPlaceholder(`${capability.label} capability detail`)}><span>0{index + 1}</span><strong>{isArabic ? ["الهندسة", "الذكاء الاصطناعي", "الهندسة المعمارية", "التطوير", "التصميم", "الأمن", "المنتج", "حل المشكلات"][index] : capability.label}</strong><small>{isArabic ? ["الأنظمة والتنفيذ والعمق التقني.", "الذكاء والوكلاء والبيانات والبرمجيات المتكيفة.", "هيكل يجعل التعقيد قابلًا للفهم.", "من التفاعل الأول إلى المنتج المشحون.", "الواجهات والتدفقات ولغة المنتج.", "الثقة كخاصية في النظام.", "برمجيات مفيدة تشكلها رؤية واضحة.", "العثور على السؤال الأبسط داخل المشكلة الصعبة."][index] : capability.detail}</small><ArrowUpRight size={16} strokeWidth={1.2} /></button>)}</div>
        </section>

        <section ref={bookReveal.ref} className={`section section-creative section-reveal ${bookReveal.visible ? "is-visible" : "is-reveal"}`} id="creative" aria-labelledby="creative-title">
          <SectionIntro index="08" label={tx("A different register", "مساحة مختلفة")} title={tx("CREATIVE", "الإبداع")}>
            <p className="creative-intro">{tx("Writing, poetry, philosophy, books, ideas, and visual experiments — the work that begins before it has a category.", "الكتابة والشعر والفلسفة والكتب والأفكار والتجارب البصرية — العمل الذي يبدأ قبل أن يحمل تصنيفًا.")}</p>
          </SectionIntro>
          <div className="creative-layout"><img className="section-watermark creative-watermark" src="/assets/besma-signature.png" alt="" aria-hidden="true" /><div className="creative-quote"><span className="quote-mark">“</span><p>{tx("Some ideas arrive as systems.", "تأتي بعض الأفكار كأنظمة.")}<br /><em>{tx("Some arrive as sentences.", "وتأتي أخرى كجمل.")}</em></p><small>{tx("Creative archive / 01", "الأرشيف الإبداعي / 01")}</small></div><div className="writing-list"><div className="book-feature"><img src="/assets/book.jpeg" alt={tx("Book cover for هل الحب حقيقة أم مجرد أوهام؟", "غلاف كتاب هل الحب حقيقة أم مجرد أوهام؟")} /><div><span>{tx("Upcoming book", "كتاب قريباً")}</span><strong>{tx("Is Love Real or Just Illusions?", "هل الحب حقيقة أم مجرد أوهام؟")}</strong><p>{tx("A philosophical book exploring the distance between the heart, reason, truth, and imagination.", "كتاب فلسفي يستكشف المسافة بين القلب والعقل والحقيقة والخيال.")}</p><small>{tx("Launching soon · 2025 / 2026", "قريباً · 2025 / 2026")}</small></div></div>{writings.map((writing) => <button type="button" key={writing.title} onClick={() => showPlaceholder(writing.title)}><span>{isArabic ? "كتاب" : writing.type}</span><strong>{isArabic ? writing.title : "Is Love Real or Just Illusions?"}</strong><small>{writing.date} · {tx("Launching soon", "قريباً")}</small><ArrowUpRight size={16} /></button>)}</div></div>
        </section>

        <section className="section section-library scroll-section" id="library" aria-labelledby="library-title">
          <SectionIntro index="09" label={tx("Digital archive", "الأرشيف الرقمي")} title={tx("LIBRARY", "المكتبة")}>
            <p className="intro-copy">{tx("A private-looking, public-facing structure for the work behind the work.", "هيكل يبدو خاصًا ومتاحًا للعامة، يحتضن العمل خلف العمل.")}</p>
          </SectionIntro>
          <div className="library-grid">{librarySections.map((item, index) => <button type="button" key={item.label} onClick={() => showPlaceholder(`${item.label} library`)}><span>0{index + 1}</span><strong>{isArabic ? ["المشاريع", "المقالات", "الكتب", "التجارب", "البحث", "الأفكار", "البرمجة", "التصميم"][index] : item.label}</strong><small>{isArabic ? "أضيفي إدخالات" : item.count}</small><ArrowUpRight size={15} /></button>)}</div>
          <div className="library-footnote"><span>{tx("Content model", "نموذج المحتوى")}</span><p>{isArabic ? "الملف الشخصي / السيرة الذاتية / الخبرة / التقنيات / الخبرة العملية / المشاريع / الكتابة / الكتب / البحث / التجارب / المستندات / الروابط" : contentModel.join(" / ")}</p></div>
        </section>

        <section className="section section-philosophy scroll-section" id="philosophy" aria-labelledby="philosophy-title"><div className="philosophy-line" /><div className="philosophy-content"><span className="eyebrow">10 / {tx("Personal philosophy", "الفلسفة الشخصية")}</span><h2>{isArabic ? "يجب أن توجد التعقيدات داخل النظام — لا داخل التجربة." : principles[0]}</h2><button type="button" className="text-link" onClick={() => showPlaceholder("Additional principles")}>{tx("Add another principle", "أضيفي مبدأً آخر")} <Plus size={15} /></button></div></section>

        <section className="section section-cv scroll-section" id="cv" aria-labelledby="cv-title">
          <SectionIntro index="11" label={tx("Professional profile", "الملف المهني")} title="CV">
            <p className="intro-copy">{tx("A dedicated, detailed layer for the conventional record — kept separate from the experience of the site.", "طبقة مخصصة ومفصلة للسجل المهني التقليدي — منفصلة عن تجربة الموقع.")}</p>
          </SectionIntro>
          <div className="cv-grid"><img className="section-watermark cv-watermark" src="/assets/besma-signature.png" alt="" aria-hidden="true" /><div><p className="cv-profile">{tx("Professional profile and experience — choose a language to download.", "الملف المهني والخبرة — اختاري اللغة للتحميل.")}</p><div className="cv-actions"><a className="button button-primary" href="/cv-besma-en.pdf" download="Besma-Kaddour-CV-English.pdf">{tx("CV · EN", "السيرة · EN")} <Download size={15} /></a><a className="button button-quiet" href="/cv-besma-ar.pdf" download="Besma-Kaddour-CV-Arabic.pdf">{tx("CV · AR", "السيرة · AR")} <Download size={15} /></a><a className="button button-quiet" href="/cv-besma-fr.pdf" download="Besma-Kaddour-CV-French.pdf">{tx("CV · FR", "السيرة · FR", "CV · FR")} <Download size={15} /></a></div></div><div className="cv-index">{["Profile", "Experience", "Education", "Skills", "Technologies", "Projects", "Languages", "Achievements"].map((item, index) => <span key={item}><b>0{index + 1}</b>{isArabic ? ["الملف الشخصي", "الخبرة", "التعليم", "المهارات", "التقنيات", "المشاريع", "اللغات", "الإنجازات"][index] : item}</span>)}</div></div>
        </section>

        <QrIdentity isArabic={isArabic} tx={tx} />

        <section className="section section-contact scroll-section" id="contact" aria-labelledby="contact-title"><div className="contact-top"><span className="eyebrow">12 / {tx("Closing chapter", "الفصل الختامي")}</span><span className="contact-status"><span className="status-dot" /> {tx("Open to meaningful work", "منفتحة على الأعمال الهادفة")}</span></div><h2 id="contact-title">{tx("LET'S BUILD", "لنبنِ")}<br /><em>{tx("SOMETHING", "شيئًا")}</em><br />{tx("MEANINGFUL.", "هادفًا.")}</h2><p className="contact-copy">{tx("For collaborations, conversations, and work that deserves a thoughtful system.", "للتعاون والمحادثات والعمل الذي يستحق نظامًا مدروسًا.")}</p><div className="contact-links">{contactLinks.map((link) => <a key={link.label} className={`contact-link contact-${link.label.toLowerCase()}`} href={link.href}><span className="contact-label">{link.label === "WhatsApp" ? <MessageCircle size={15} /> : link.label === "Email" ? <Mail size={15} /> : link.label === "LinkedIn" ? <Linkedin size={15} strokeWidth={1.8} /> : <Github size={15} />}<b>{isArabic ? { WhatsApp: "واتساب", Email: "البريد الإلكتروني", LinkedIn: "لينكدإن", GitHub: "جيت هب" }[link.label] : link.label}</b></span><strong className="contact-destination" aria-hidden="true">{isArabic ? { WhatsApp: "واتساب", Email: "البريد الإلكتروني", LinkedIn: "لينكدإن", GitHub: "جيت هب" }[link.label] : link.label}</strong><ArrowUpRight size={17} strokeWidth={1.2} /></a>)}</div></section>
      </main>

      <footer className="site-footer"><span>{tx("© 2024–2026 BESMA KADDOUR — ALL RIGHTS RESERVED", "© 2024–2026 بسمة قدور — جميع الحقوق محفوظة")}</span><span>{tx("ALL CONTENT, DESIGN &amp; CODE BELONG TO BESMA KADDOUR", "جميع المحتويات والتصميم والبرمجة ملك لبسمة قدور")}</span><a href="#top">{tx("Back to top", "العودة إلى الأعلى")} <ArrowUpRight size={14} /></a></footer>
      <a className="floating-whatsapp" href="https://wa.me/213784598883" aria-label={tx("Message Besma on WhatsApp", "مراسلة بسمة عبر واتساب")}><MessageCircle size={22} /></a>
      {notice && <div className="notice" role="status">{notice}<button type="button" aria-label="Dismiss notification" onClick={() => setNotice("")}><X size={15} /></button></div>}
    </div>
  );
}

export default Home;
