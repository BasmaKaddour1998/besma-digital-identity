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
  "Programming Languages": [],
  Frameworks: [],
  Libraries: [],
  Databases: [],
  "Cloud & Infrastructure": [],
  "AI & ML": [],
  "Development Tools": [],
  Platforms: [],
  "Design Tools": [],
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

export const experience: ExperienceEntry[] = [];

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

export const writings: WritingEntry[] = [];

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
  { label: "Email", value: "Placeholder — add email", href: "#contact" },
  { label: "LinkedIn", value: "linkedin.com/in/beasma-kaddour-6b32312b8", href: "https://www.linkedin.com/in/beasma-kaddour-6b32312b8" },
  { label: "GitHub", value: "Placeholder — add profile URL", href: "#contact" },
  { label: "Other", value: "Placeholder — add professional links", href: "#contact" },
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
