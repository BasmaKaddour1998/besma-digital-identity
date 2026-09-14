export type Category = string;

export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  role: string;
  category: string;
  year: string;
  status: string;
  technologies: string[];
  featured?: boolean;
};

export type ExperienceEntry = {
  year: string;
  role: string;
  context: string;
  description: string;
  technologies: string[];
};

export type WritingEntry = {
  title: string;
  type: string;
  description: string;
  date: string;
  status: string;
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Engineering", href: "#engineering" },
  { label: "AI", href: "#ai" },
  { label: "FinTech", href: "#fintech" },
  { label: "Lab", href: "#lab" },
  { label: "Creative", href: "#creative" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const focusAreas = [
  { label: "Software Engineering", detail: "Building software systems with clarity, structure, and room to evolve." },
  { label: "AI & Machine Learning", detail: "Exploring intelligent systems, agents, data, and adaptive products." },
  { label: "Full-Stack Development", detail: "Working across interfaces, services, APIs, data, and delivery." },
  { label: "Software Architecture", detail: "Turning complexity into systems that remain understandable." },
  { label: "UI / UX", detail: "Designing experiences where the interface gets out of the way." },
  { label: "Digital Innovation", detail: "Connecting technology, product thinking, and creative direction." },
  { label: "Cybersecurity", detail: "An area reserved for future work, research, and documented practice." },
  { label: "Creative Thinking", detail: "Writing, poetry, philosophy, and the questions behind the systems." },
];

export const engineeringAreas = [
  { label: "Software Engineering", short: "Systems", detail: "A home for engineering principles, implementation notes, and future case studies." },
  { label: "Full-Stack Development", short: "Product", detail: "Interfaces, services, APIs, and the connective tissue between them." },
  { label: "Frontend", short: "Interface", detail: "A place for interaction design, responsive systems, and interface experiments." },
  { label: "Backend", short: "Logic", detail: "A place for service design, data flow, and resilient foundations." },
  { label: "APIs", short: "Connect", detail: "Documented integrations and reusable product capabilities can live here." },
  { label: "System Architecture", short: "Structure", detail: "A growing archive of diagrams, decisions, and architectural thinking." },
  { label: "Databases", short: "Data", detail: "Reserved for data models, storage choices, and system notes." },
  { label: "Cloud & DevOps", short: "Delivery", detail: "A future home for deployment patterns, automation, and operational notes." },
  { label: "Cybersecurity", short: "Trust", detail: "A future home for security-minded engineering practice." },
  { label: "Automation", short: "Flow", detail: "A place for repeatable systems, scripts, and intelligent workflows." },
  { label: "Mobile Development", short: "Touch", detail: "Reserved for mobile products and platform experiments." },
];

export const technologyCategories = [
  "Programming Languages",
  "Frameworks",
  "Libraries",
  "Databases",
  "Cloud & Infrastructure",
  "AI & ML",
  "Development Tools",
  "Platforms",
  "Design Tools",
];

export const technologyLibrary: Record<string, string[]> = {
  "Programming Languages": ["TypeScript", "JavaScript", "Python", "PHP", "Kotlin", "Java", "HTML5", "CSS3"],
  Frameworks: ["React", "Next.js", "Laravel", "Flutter", "React Native", "Capacitor"],
  Libraries: ["REST APIs", "WebView applications", "Native mobile integration", "Real-time systems"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  "Cloud & Infrastructure": ["Vercel", "Render", "Cloud services", "Environment configuration", "Production deployment"],
  "AI & ML": ["Claude Code", "OpenCode", "AI coding agents", "AI-powered applications", "Conversational interfaces"],
  "Development Tools": ["Git", "GitHub", "npm", "Gradle", "Android Studio", "Xcode", "Terminal workflows"],
  Platforms: ["Android", "iOS", "Telegram Mini Apps", "Third-party APIs", "Authentication systems"],
  "Design Tools": ["Responsive UI", "Dashboards", "Component architecture", "API-driven interfaces"],
};

export const aiAreas = [
  "AI Agents",
  "Machine Learning",
  "Intelligent Automation",
  "AI Applications",
  "Data Analysis",
  "Predictive Systems",
  "AI-assisted Development",
];

export const financialTechnologyAreas = [
  { en: "Market-data engineering", ar: "هندسة بيانات الأسواق", detailEn: "Processing external market data, technical signals, sessions, volatility, liquidity, and macro conditions.", detailAr: "معالجة بيانات الأسواق الخارجية والإشارات الفنية والجلسات والتذبذب والسيولة والظروف الاقتصادية الكلية." },
  { en: "Decision and execution engines", ar: "محركات القرار والتنفيذ", detailEn: "Connecting analysis to entry validation, pending orders, execution, and position management.", detailAr: "ربط التحليل بالتحقق من الدخول والأوامر المعلقة والتنفيذ وإدارة الصفقات." },
  { en: "Risk and capital protection", ar: "إدارة المخاطر وحماية رأس المال", detailEn: "Engineering logic for exposure, margin, drawdown, dynamic SL/TP, and profit protection.", detailAr: "هندسة منطق التعرض والهامش والسحب وإيقاف الخسارة والهدف الديناميكي وحماية الأرباح." },
];

export const marketCoverage = ["Forex", "Gold / XAUUSD", "Silver", "Major indices", "Cryptocurrencies", "DXY", "US Treasury yields"];

export const projects: Project[] = [
  {
    name: "SAMA",
    eyebrow: "AI ecosystem / AI-agent platform",
    description: "An important project space for the SAMA AI ecosystem. Product details, scope, technologies, links, and case-study material can be added here.",
    role: "Editable placeholder — role to be added",
    category: "AI",
    year: "Year to be added",
    status: "Details to be added",
    technologies: [],
    featured: true,
  },
];

export const experience: ExperienceEntry[] = [
  {
    year: "2024 — Present",
    role: "Software Engineer / Digital Identity",
    context: "6 years of experience",
    description: "A growing professional practice across software engineering, AI, architecture, digital products, and creative technology.",
    technologies: [],
  },
];

export const capabilityMap = [
  { label: "Engineering", detail: "Systems, implementation, and technical depth." },
  { label: "AI", detail: "Intelligence, agents, data, and adaptive software." },
  { label: "Architecture", detail: "Structure that makes complexity legible." },
  { label: "Development", detail: "From first interaction to shipped product." },
  { label: "Design", detail: "Interfaces, flows, and the language of a product." },
  { label: "Security", detail: "Trust as a property of the system." },
  { label: "Product", detail: "Useful software shaped by a clear point of view." },
  { label: "Problem Solving", detail: "Finding the simpler question inside the difficult one." },
];

export const writings: WritingEntry[] = [
  {
    title: "هل الحب حقيقة أم مجرد أوهام؟",
    type: "Book",
    description: "رحلة بين العقل والقلب والحقيقة والخيال.",
    date: "2025 / 2026",
    status: "Launching soon",
  },
];

export const librarySections = [
  { label: "Projects", count: "Add entries" },
  { label: "Articles", count: "Add entries" },
  { label: "Books", count: "Add entries" },
  { label: "Experiments", count: "Add entries" },
  { label: "Research", count: "Add entries" },
  { label: "Ideas", count: "Add entries" },
  { label: "Code", count: "Add entries" },
  { label: "Design", count: "Add entries" },
];

export const principles = [
  "Complexity should exist inside the system — not inside the experience.",
];

export const contactLinks = [
  { label: "WhatsApp", value: "+213 784 598 883", href: "https://wa.me/213784598883" },
  { label: "Email", value: "basmakaddour57@gmail.com", href: "mailto:basmakaddour57@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/beasma-kaddour-6b32312b8", href: "https://www.linkedin.com/in/beasma-kaddour-6b32312b8" },
  { label: "GitHub", value: "github.com/BasmaKaddour1998", href: "https://github.com/BasmaKaddour1998" },
];

export const contentModel = [
  "profile",
  "cv",
  "experience",
  "technologies",
  "expertise",
  "projects",
  "writing",
  "books",
  "research",
  "experiments",
  "documents",
  "links",
] as const;
