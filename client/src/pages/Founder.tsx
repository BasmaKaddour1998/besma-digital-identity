import { ArrowLeft, ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useEffect } from "react";

const siteUrl = "https://sam-arab.com";
const officialLinks = [
  "https://github.com/BasmaKaddour1998",
  "https://www.linkedin.com/in/beasma-kaddour-6b32312b8",
];

const engineeringExperience = [
  "هندسة Full Stack والواجهات الأمامية والخلفية.",
  "تطبيقات ويب متجاوبة ولوحات معلومات وواجهات API ومنصات رقمية.",
  "تطوير تطبيقات الهاتف وأنظمة Android وiOS متعددة المنصات.",
  "معمارية قواعد البيانات ونمذجة البيانات وتحسين الاستعلامات وتكامل API.",
  "المصادقة والتطوير المراعي للأمن.",
  "النشر السحابي وإعداد البيئات والصيانة في الإنتاج.",
  "الاختبار الآلي واختبار التكامل والانحدار والتحقق من البناء.",
  "تصحيح منهجي لأخطاء الشبكة والمصادقة وقواعد البيانات والهاتف والإنتاج.",
  "إعادة هيكلة الكود والتحكم في الإصدارات والصيانة وتحسين الأداء.",
];

const professionalExperience = [
  "بناء وصيانة تطبيقات الويب والهاتف والأنظمة الخلفية ولوحات المعلومات وواجهات API والمنصات الرقمية.",
  "العمل عبر المتطلبات والمعمارية والتنفيذ والتكامل والاختبار وتصحيح الأخطاء والنشر والصيانة.",
  "تطوير تطبيقات مدعومة بالذكاء الاصطناعي وأساليب هندسية عملية بمساعدته.",
  "تصميم برمجيات لتحليل الأسواق ومنطق القرار والتنفيذ وإدارة المراكز وأنظمة إدارة المخاطر.",
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
  "أنظمة الأسواق المالية — مفاهيم برمجية للتحليل الفني والأساسي لـ Forex وبيانات الأسواق وتقنيات التداول.",
];

const technologyGroups = [
  { title: "لغات البرمجة", items: ["TypeScript", "JavaScript", "Python", "Java", "Kotlin", "PHP", "HTML5", "CSS3", "Arduino"] },
  { title: "تطوير الويب", items: ["React", "Next.js", "واجهات متجاوبة", "معمارية المكونات", "لوحات المعلومات", "تكامل API", "المصادقة", "الواجهات الفورية", "الأداء"] },
  { title: "تطوير البرمجيات والخلفية", items: ["Node.js", "Python", "PHP", "Laravel", "REST APIs", "المصادقة", "منطق الأعمال", "تكاملات API الخارجية", "الخدمات السحابية", "برامج الحاسوب"] },
  { title: "تطوير الهاتف", items: ["Flutter", "React Native", "Android", "Kotlin", "Java", "Capacitor", "تكامل iOS", "WebView", "الجسور الأصلية", "اتصال API"] },
  { title: "قواعد البيانات", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "معمارية قواعد البيانات", "نمذجة البيانات", "تحسين الاستعلامات"] },
  { title: "السحابة والأدوات", items: ["Git", "GitHub", "npm", "Gradle", "Android Studio", "Xcode", "Vercel", "Render", "إعداد البيئات", "النشر في الإنتاج"] },
];

function ProfileSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/about/founder#person`,
        name: "Besma Kaddour",
        alternateName: "قدور بسمة أم الخير",
        url: `${siteUrl}/about/founder`,
        image: { "@id": `${siteUrl}/about/founder#image` },
        jobTitle: "Full Stack Software Engineer · AI-assisted Software Engineering",
        description: "مهندسة برمجيات تعمل في تطبيقات الويب والهاتف والأنظمة الخلفية وتطبيقات الذكاء الاصطناعي وبرمجيات تحليل الأسواق المالية وأنظمة البيانات والبحث.",
        sameAs: officialLinks,
        knowsAbout: ["Full-stack software engineering", "AI-assisted software engineering", "Financial market analysis software", "Web and mobile applications", "Data systems"],
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/about/founder#image`,
        url: `${siteUrl}/Link.jpeg`,
        contentUrl: `${siteUrl}/Link.jpeg`,
        caption: "الصورة الرسمية للهوية المهنية لبسمة قدور",
        width: 1280,
        height: 720,
        encodingFormat: "image/jpeg",
        representativeOfPage: true,
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/about/founder#webpage`,
        url: `${siteUrl}/about/founder`,
        name: "Besma Kaddour — Professional Profile",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/about/founder#person` },
        primaryImageOfPage: { "@id": `${siteUrl}/about/founder#image` },
        inLanguage: "ar",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "BESMA KADDOUR", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Professional Profile", item: `${siteUrl}/about/founder` },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let node = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!node) { node = document.createElement("meta"); node.setAttribute(attribute, key); document.head.appendChild(node); }
  node.setAttribute("content", content);
}

export default function Founder() {
  useEffect(() => {
    document.title = "Besma Kaddour — Professional Profile | Full Stack Software Engineer";
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    const description = "الملف المهني لبسمة قدور أم الخير: مهندسة برمجيات Full Stack وهندسة برمجيات بمساعدة الذكاء الاصطناعي تعمل في الويب والهاتف وتحليل الأسواق المالية.";
    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("property", "og:title", "Besma Kaddour — الملف المهني لمهندسة البرمجيات");
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "profile");
    setMeta("property", "og:url", `${siteUrl}/about/founder`);
    setMeta("property", "og:site_name", "BESMA KADDOUR — Digital Identity");
    setMeta("property", "og:image", `${siteUrl}/Link.jpeg`);
    setMeta("property", "og:image:secure_url", `${siteUrl}/Link.jpeg`);
    setMeta("property", "og:image:alt", "الصورة الرسمية للهوية المهنية لبسمة قدور");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", "Besma Kaddour — Professional Profile");
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", `${siteUrl}/Link.jpeg`);
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
            <div className="profile-actions" dir="ltr"><a className="button button-primary" href="/cv-besma-ar.pdf" download>تحميل CV المرفق <Download size={15} aria-hidden="true" /></a><a className="button button-cv" href="mailto:basmakaddour57@gmail.com">تواصل <Mail size={15} aria-hidden="true" /></a></div>
          </div>
          <figure className="profile-brand-image"><img src="/Link.jpeg" alt="الصورة الرسمية الأصلية للهوية المهنية لبسمة قدور" title="Besma Kaddour — official professional identity image" width="1280" height="720" fetchPriority="high" /><figcaption>الصورة الرسمية الأصلية للهوية المهنية</figcaption></figure>
        </section>

        <section className="profile-section" aria-labelledby="summary-title"><div className="profile-section-label">02 / الملخص</div><div><h2 id="summary-title">الملف المهني</h2><p>مهندسة برمجيات تعمل في تطوير تطبيقات الويب والهاتف، والأنظمة الخلفية، ولوحات المعلومات، والمنصات الرقمية، وتطبيقات الذكاء الاصطناعي، والأتمتة، وبرمجيات تحليل الأسواق المالية. تشمل الخبرة المتطلبات والمعمارية وتنفيذ واجهات المستخدم والمصادقة والتكاملات والاختبار وتصحيح الأخطاء وتطوير الواجهات الأمامية والخلفية وتصميم قواعد البيانات وواجهات REST والنشر والصيانة وتحسين الأداء.</p><p>يُستخدم الذكاء الاصطناعي كأداة هندسية لتحليل قواعد الكود وتوليد الكود ومراجعته وتصحيح الأخطاء وإعادة الهيكلة والاختبار والتوثيق والتحقيق التقني وأتمتة التطوير، مع الحفاظ على المراجعة الهندسية والتحقق والدمج في الإنتاج.</p></div></section>

        <section className="profile-section" aria-labelledby="engineering-title"><div className="profile-section-label">03 / الخبرة الهندسية</div><div><h2 id="engineering-title">الخبرة الهندسية الأساسية</h2><ul>{engineeringExperience.map((item) => <li key={item}>{item}</li>)}</ul></div></section>

        <section className="profile-section" aria-labelledby="ai-title"><div className="profile-section-label">04 / AI وML</div><div><h2 id="ai-title">الذكاء الاصطناعي والوكالات والأتمتة</h2><p>هندسة برمجيات بمساعدة الذكاء الاصطناعي لتحليل المعمارية وتوليد الكود ومراجعته وتصحيح الأخطاء وإعادة الهيكلة والاختبار والتوثيق وحل المشكلات والتعديلات متعددة الملفات وأتمتة التطوير. تشمل المجالات تطبيقات الذكاء الاصطناعي والواجهات الحوارية والوكلاء والأتمتة الذكية، وتشمل الأدوات وأنماط العمل Claude Code وOpenCode ووكلاء البرمجة بالذكاء الاصطناعي والمراجعة والتحقق والدمج في الإنتاج.</p></div></section>

        <section className="profile-section" aria-labelledby="markets-title"><div className="profile-section-label">05 / الأسواق المالية</div><div><h2 id="markets-title">الأسواق المالية وتقنيات التداول</h2><p>هندسة برمجيات مرتبطة بتحليل الأسواق المالية وأنظمة بيانات الأسواق، وتشمل Forex والذهب والفضة والمؤشرات وXAUUSD وDXY والتحليل الفني والأساسي وحركة السعر وبنية السوق والجلسات والتذبذب والسيولة والأخبار الاقتصادية والظروف الاقتصادية الكلية وبيانات الأسواق الخارجية وتحليل الإشارات متعددة العوامل.</p><p>تشمل معمارية تقنيات التداول معالجة بيانات الأسواق ومسارات التحليل ومنطق القرار والتنفيذ والأوامر المعلقة والتحقق من الدخول ومكونات إدارة المخاطر ومنطق Stop Loss وTake Profit وإدارة الهامش والتعرض وحماية الأرباح ومراقبة المراكز وفلترة الأخبار وتحليل جلسات السوق.</p></div></section>

        <section className="profile-section" aria-labelledby="experience-title"><div className="profile-section-label">06 / الخبرة المهنية</div><div><h2 id="experience-title">مهندسة برمجيات / هوية رقمية</h2><p className="profile-meta">2024 — حتى الآن · ست سنوات من الخبرة كما وردت في الملف المقدم</p><p>ممارسة مهنية في هندسة البرمجيات Full Stack والتطوير بمساعدة الذكاء الاصطناعي ومعمارية البرمجيات والمنتجات الرقمية وتطبيقات الهاتف والويب والتقنية المالية والأتمتة والتقنية الإبداعية.</p><ul>{professionalExperience.map((item) => <li key={item}>{item}</li>)}</ul></div></section>

        <section className="profile-section" aria-labelledby="projects-title"><div className="profile-section-label">07 / المشاريع</div><div><h2 id="projects-title">المشاريع والخبرة التقنية</h2><p className="profile-note">أُدرجت المشاريع التالية من المعلومات المقدمة فقط، دون إضافة أسماء عملاء أو تواريخ أو روابط أو نتائج غير موثقة.</p><ul className="profile-projects">{projects.map((project) => <li key={project}>{project}</li>)}</ul></div></section>

        <section className="profile-section" aria-labelledby="technologies-title"><div className="profile-section-label">08 / التقنيات</div><div><h2 id="technologies-title">المهارات والتقنيات</h2><div className="profile-technology-groups">{technologyGroups.map((group) => <div className="profile-technology-group" key={group.title}><h3>{group.title}</h3><div className="profile-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

        <section className="profile-section" aria-labelledby="validation-title"><div className="profile-section-label">09 / التحقق</div><div><h2 id="validation-title">الاختبار وتصحيح الأخطاء</h2><p>الاختبار الآلي واختبار API والتكامل والانحدار وتصحيح مشكلات الإنتاج والبناء والشبكات والمصادقة وقواعد البيانات والهاتف والتحقق من النشر قبل الدمج في الإنتاج.</p></div></section>

        <section className="profile-section" aria-labelledby="credentials-title"><div className="profile-section-label">10 / الشهادات</div><div><h2 id="credentials-title">الشهادات والتدريب والتعليم</h2><h3>NASA International Space Apps Challenge</h3><p><strong>GALACTIC PROBLEM SOLVER</strong> — شهادة مقدمة إلى <strong>basma Kaddour</strong> للمشاركة المتميزة في الجهود الرامية إلى معالجة التحديات التي تواجه الأرض والفضاء. التاريخ الظاهر في الشهادة: 5–6 أكتوبر 2024.</p><p>تشمل الدورات أو الشهادات المذكورة في الملف المقدم: Kotlin وPython وJava وArduino. لم تتم إضافة أسماء مؤسسات أو عناوين شهادات أو تواريخ غير متوفرة.</p><h3>التعليم والبحث</h3><p>البحث في الفيزياء والإلكترونيات مذكور ضمن المعلومات المقدمة. لم تتم إضافة جامعة أو مؤسسة أو درجة أو تواريخ غير مؤكدة.</p><p><strong>اللغات:</strong> العربية والإنجليزية.</p></div></section>

        <section className="profile-section" aria-labelledby="sama-title"><div className="profile-section-label">11 / فصل الهوية</div><div><h2 id="sama-title">Besma وSAMA</h2><p><strong>Besma Kaddour</strong> هي الشخص والهوية المهنية المعروضة في هذه الصفحة. <strong>SAMA</strong> هو اسم مساحة المنتج/المنصة الظاهرة في الموقع، وتبقى هويته منفصلة عن الهوية الشخصية. لا تعرض هذه الصفحة ادعاءات عن SAMA غير موثقة في المحتوى المنشور.</p></div></section>

        <section className="profile-contact" aria-labelledby="contact-title"><p className="eyebrow">12 / الروابط المهنية</p><h2 id="contact-title">للتواصل والتعرّف أكثر</h2><div className="profile-links" dir="ltr"><a href="https://www.linkedin.com/in/beasma-kaddour-6b32312b8" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/BasmaKaddour1998" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a><a href="mailto:basmakaddour57@gmail.com"><Mail size={16} /> Email <ArrowUpRight size={14} /></a><a href="https://wa.me/213784598883" rel="noreferrer"><MessageCircle size={16} /> WhatsApp <ArrowUpRight size={14} /></a></div></section>
      </main>
      <footer className="profile-footer"><span>© 2024–2026 BESMA KADDOUR</span><a href="/">BESMA KADDOUR — Digital Identity</a></footer>
    </div>
  );
}
