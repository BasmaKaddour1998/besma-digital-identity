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
  { label: "Software Engineering", short: "Systems", detail: "Requirements, architecture, implementation, testing, debugging, deployment, and maintenance." },
  { label: "Full-Stack Development", short: "Product", detail: "Web applications, dashboards, services, APIs, data, authentication, and delivery." },
  { label: "Frontend", short: "Interface", detail: "Responsive interfaces, component architecture, API integration, and performance." },
  { label: "Backend", short: "Logic", detail: "Business logic, production APIs, integrations, authentication, and resilient services." },
  { label: "APIs", short: "Connect", detail: "REST APIs, third-party integrations, real-time systems, and connected products." },
  { label: "System Architecture", short: "Structure", detail: "Clear system boundaries, data flow, maintainable structure, and technical decisions." },
  { label: "Databases", short: "Data", detail: "PostgreSQL, MySQL, MongoDB, Firebase, data modeling, and query optimization." },
  { label: "Cloud & DevOps", short: "Delivery", detail: "Environment configuration, cloud services, production deployment, and maintenance." },
  { label: "Cybersecurity", short: "Trust", detail: "Authentication, security-conscious development, and systematic production debugging." },
  { label: "Automation", short: "Flow", detail: "AI-assisted engineering, repeatable workflows, testing, documentation, and development automation." },
  { label: "Mobile Development", short: "Touch", detail: "Flutter, React Native, Android, iOS integration, WebView architectures, and native bridges." },
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
  { en: "Financial market analysis", ar: "تحليل الأسواق المالية", detailEn: "Designing analytical workflows for price structure, volatility, liquidity, sessions, and macroeconomic context.", detailAr: "تصميم مسارات تحليلية لبنية الأسعار والتذبذب والسيولة والجلسات والسياق الاقتصادي الكلي." },
  { en: "Market systems engineering", ar: "هندسة أنظمة الأسواق", detailEn: "Building software systems for research, monitoring, visualization, reporting, and disciplined financial analysis.", detailAr: "بناء أنظمة برمجية للبحث والمراقبة والتصور وإعداد التقارير والتحليل المالي المنضبط." },
];

export const marketCoverage = ["Equities", "Fixed income", "Foreign exchange", "Commodities", "Major indices", "DXY", "US Treasury yields"];

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
