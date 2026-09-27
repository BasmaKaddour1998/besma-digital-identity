import { ArrowLeft, ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useEffect } from "react";

const siteUrl = "https://sam-arab.com";

const experience = [
  "بناء وصيانة تطبيقات الويب والهاتف والأنظمة الخلفية ولوحات المعلومات وواجهات API والمنصات الرقمية.",
  "العمل عبر المتطلبات والمعمارية والتنفيذ والتكامل والاختبار وتصحيح الأخطاء والنشر والصيانة.",
  "تطوير تطبيقات مدعومة بالذكاء الاصطناعي وأساليب هندسية عملية.",
  "تصميم برمجيات لتحليل البيانات ومسارات دعم القرار والمراقبة وإعداد التقارير وأنظمة المعلومات الموثوقة.",
  "فحص قواعد الكود وتنفيذ التغييرات متعددة الملفات وإعادة هيكلة الأنظمة والتحقق من سلوك الإنتاج.",
];

const projects = [
  "المنزل الذكي — بحث وتطوير في مفاهيم المنزل المتصل والأتمتة.",
  "قفل باب ذكي — مشروع للتحكم في الدخول باستخدام بطاقة مغناطيسية.",
  "تطبيق Android — تطبيق Android منشور على Amazon.",
  "الفأرات الحديثة — مشروع متعلق بأجهزة إدخال الحاسوب.",
  "نظارات للمكفوفين — مشروع في التقنية المساعدة.",
  "تطبيقات Android وiOS — تطبيقان للهاتف لأنظمة Android وiOS.",
  "تطبيقات وبرامج حاسوب — تطوير تطبيقات وبرامج حاسوب.",
  "البحث في الفيزياء والإلكترونيات — بحث تقني وتطبيقات عملية في الإلكترونيات.",
];

const technologies = [
  "TypeScript", "JavaScript", "Python", "Java", "Kotlin", "PHP", "HTML5", "CSS3", "Arduino",
  "React", "Next.js", "Node.js", "Laravel", "Flutter", "React Native", "Capacitor",
  "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Git", "GitHub", "Vercel", "Render",
];

function ProfileSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/about/founder#person`,
        name: "Besma Kaddour",
        url: `${siteUrl}/about/founder`,
        image: `${siteUrl}/Link.jpeg`,
        jobTitle: "Full Stack Software Engineer · AI-assisted Software Engineering",
        description: "مهندسة برمجيات تعمل في تطبيقات الويب والهاتف والأنظمة الخلفية وتطبيقات الذكاء الاصطناعي وبرمجيات تحليل الأسواق المالية وأنظمة البيانات والبحث.",
        sameAs: [
          "https://github.com/BasmaKaddour1998",
          "https://www.linkedin.com/in/beasma-kaddour-6b32312b8",
        ],
        knowsAbout: ["Full-stack software engineering", "Artificial intelligence", "Web and mobile applications", "Data systems", "Research workflows"],
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/about/founder#webpage`,
        url: `${siteUrl}/about/founder`,
        name: "Besma Kaddour — Professional Profile",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/about/founder#person` },
        primaryImageOfPage: `${siteUrl}/Link.jpeg`,
        inLanguage: ["ar", "en"],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function Founder() {
  useEffect(() => {
    document.title = "Besma Kaddour — Professional Profile | Software & AI Engineer";
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    const description = "الملف المهني لبسمة قدور: مهندسة برمجيات Full Stack تعمل في تطبيقات الويب والهاتف وهندسة البرمجيات بمساعدة الذكاء الاصطناعي وتحليل الأسواق المالية.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", `${siteUrl}/about/founder`);
  }, []);

  return (
    <div className="profile-page is-arabic">
      <ProfileSchema />
      <header className="profile-header">
        <a className="wordmark" href="/" dir="ltr" aria-label="العودة إلى الصفحة الرئيسية"><span className="wordmark-mark">B</span><span>BESMA KADDOUR</span></a>
        <a className="profile-back" href="/"><ArrowLeft size={15} aria-hidden="true" /> العودة إلى الهوية الرقمية</a>
      </header>
      <main>
        <section className="profile-hero" aria-labelledby="profile-title">
          <div>
            <p className="eyebrow">الهوية المهنية / 01</p>
            <h1 id="profile-title">بسمة قدور</h1>
            <p className="profile-headline">مهندسة برمجيات Full Stack<br />هندسة برمجيات بمساعدة الذكاء الاصطناعي</p>
            <p className="profile-lede">تطبيقات الويب والهاتف · الأنظمة البرمجية · تحليل الأسواق المالية</p>
            <div className="profile-actions" dir="ltr">
              <a className="button button-primary" href="/cv-besma-ar.pdf" download>تحميل السيرة الذاتية <Download size={15} aria-hidden="true" /></a>
              <a className="button button-cv" href="mailto:basmakaddour57@gmail.com">تواصل <Mail size={15} aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="profile-brand-image"><img src="/Link.jpeg" alt="الصورة الرسمية للهوية المهنية لبسمة قدور" width="1280" height="720" /><figcaption>الصورة الرسمية للهوية المهنية</figcaption></figure>
        </section>

        <section className="profile-section" aria-labelledby="summary-title">
          <div className="profile-section-label">02 / الملخص</div>
          <div><h2 id="summary-title">الملف المهني</h2><p>مهندسة برمجيات تعمل في تطوير تطبيقات الويب والهاتف، والأنظمة الخلفية، ولوحات المعلومات، والمنصات الرقمية، وتطبيقات الذكاء الاصطناعي، والأتمتة، وبرمجيات تحليل الأسواق المالية. تشمل الخبرة المتطلبات والمعمارية وتنفيذ واجهات المستخدم والمصادقة والتكاملات والاختبار وتصحيح الأخطاء وتطوير الواجهات الأمامية والخلفية وتصميم قواعد البيانات وواجهات REST والنشر والصيانة وتحسين الأداء.</p><p>يُستخدم الذكاء الاصطناعي كأداة هندسية لتحليل قواعد الكود وتوليد الكود ومراجعته وتصحيح الأخطاء وإعادة الهيكلة والاختبار والتوثيق والتحقيق التقني وأتمتة التطوير، مع الحفاظ على المراجعة الهندسية والتحقق والدمج في الإنتاج.</p></div>
        </section>

        <section className="profile-section" aria-labelledby="experience-title">
          <div className="profile-section-label">03 / الخبرة</div>
          <div><h2 id="experience-title">مهندسة برمجيات / هوية رقمية</h2><p className="profile-meta">2024 — حتى الآن · ست سنوات من الخبرة كما وردت في الملف المقدم</p><p>ممارسة مهنية في هندسة البرمجيات Full Stack والتطوير في مجال الذكاء الاصطناعي ومعمارية البرمجيات والمنتجات الرقمية وتطبيقات الهاتف والويب والأتمتة والتقنية الإبداعية.</p><ul>{experience.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        <section className="profile-section" aria-labelledby="skills-title">
          <div className="profile-section-label">04 / المهارات</div>
          <div><h2 id="skills-title">التقنيات والممارسات</h2><div className="profile-tags">{technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><p className="profile-note">تشمل الممارسات أيضًا المصادقة، التطوير المراعي للأمن، REST APIs، الاختبار الآلي، اختبار التكامل والانحدار، النشر السحابي، تصحيح أخطاء الإنتاج، وتحسين الأداء.</p></div>
        </section>

        <section className="profile-section" aria-labelledby="projects-title">
          <div className="profile-section-label">05 / المشاريع</div>
          <div><h2 id="projects-title">المشاريع والخبرة التقنية</h2><ul className="profile-projects">{projects.map((project) => <li key={project}>{project}</li>)}</ul></div>
        </section>

        <section className="profile-section" aria-labelledby="credentials-title">
          <div className="profile-section-label">06 / التدريب والبحث</div>
          <div><h2 id="credentials-title">الشهادات والتعليم</h2><h3>NASA International Space Apps Challenge</h3><p><strong>GALACTIC PROBLEM SOLVER</strong> — شهادة مقدمة إلى <strong>basma Kaddour</strong> للمشاركة المتميزة في الجهود الرامية إلى معالجة التحديات التي تواجه الأرض والفضاء. التاريخ الظاهر في الشهادة: 5–6 أكتوبر 2024.</p><p>تشمل الدورات أو الشهادات المذكورة في الملف المقدم: Kotlin وPython وJava وArduino. كما يرد البحث في الفيزياء والإلكترونيات ضمن التعليم والبحث.</p></div>
        </section>

        <section className="profile-contact" aria-labelledby="contact-title">
          <p className="eyebrow">07 / الروابط المهنية</p><h2 id="contact-title">للتواصل والتعرّف أكثر</h2>
          <div className="profile-links" dir="ltr"><a href="https://www.linkedin.com/in/beasma-kaddour-6b32312b8" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/BasmaKaddour1998" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a><a href="mailto:basmakaddour57@gmail.com"><Mail size={16} /> Email <ArrowUpRight size={14} /></a><a href="https://wa.me/213784598883" rel="noreferrer"><MessageCircle size={16} /> WhatsApp <ArrowUpRight size={14} /></a></div>
        </section>
      </main>
      <footer className="profile-footer"><span>© 2024–2026 BESMA KADDOUR</span><a href="/">BESMA KADDOUR — Digital Identity</a></footer>
    </div>
  );
}
