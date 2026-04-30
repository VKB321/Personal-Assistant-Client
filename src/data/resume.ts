export interface ExperienceItem {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  highlights: string[];
  tech: string[];
}

export interface ProjectItem {
  name: string;
  context: string;
  tech: string[];
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  score?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  links: {
    linkedin: string;
    github: string;
    website?: string;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  highlights: string[];
}

export const resume: ResumeData = {
  name: "Vijay Kumar Bhukya",
  title: "Software Engineer II",
  tagline: "Full-stack engineer building React + Node.js products and AI-driven workflows.",
  summary:
    "Software Engineer with 3+ years of experience specializing in React.js, Node.js, and full-stack development. Experienced in building scalable applications, automation platforms, and AI-powered solutions. Currently working on a personal AI assistant that automates daily tasks and extends into advanced AI-based workflow automation, market analysis, and recruiting workflows.",
  location: "Tamil Nadu, India",
  email: "vijaybhukya009@gmail.com",
  phone: "+91 6300377849",
  links: {
    linkedin: "https://www.linkedin.com/in/vijaykumar-bhukya/",
    github: "https://github.com/VKB321",
  },
  skills: [
    {
      name: "Frontend",
      items: ["React.js", "JavaScript", "TypeScript", "Next.js", "Redux", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      name: "Backend",
      items: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs", "JWT", "Microservices", "LLM integration"],
    },
    {
      name: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      name: "Tools & Platforms",
      items: ["Git", "Postman", "Swagger", "Jest", "AWS (EC2, S3, Amplify)", "Vercel", "OpenRouter"],
    },
  ],
  experience: [
    {
      company: "Datazoic",
      role: "Software Engineer II",
      start: "Oct 2022",
      end: "Present",
      location: "Tamil Nadu, India",
      highlights: [
        "Owned three flagship products: Consumption Hub (report generation/customization), Prism Enrich (data verification & analytics), and prismGPT (AI-based multipage chat).",
        "Reduced report generation time by 60% via a modular filter and rule-based framework on Consumption Hub.",
        "Eliminated manual report distribution by automating delivery through cron scheduling and SFTP integration.",
        "Improved dataset accuracy by 30% on Prism Enrich by validating employment/attribute changes from third-party sources.",
        "Integrated LLM APIs into a Node.js backend for prismGPT, enabling conversational CRUD on database records and performance tracking (revenue growth, competitor comparison).",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "MySQL", "TypeScript", "Tailwind CSS", "Bootstrap", "PM2", "Jest", "Swagger"],
    },
  ],
  projects: [
    {
      name: "Consumption Hub",
      context: "Datazoic — Report generation and customization tool",
      tech: ["React.js", "Node.js", "MongoDB", "Bootstrap", "PM2", "Jest", "Swagger", "TypeScript"],
      highlights: [
        "Modular filter & rule-based framework for highly customizable reports — 60% faster generation.",
        "Dynamic columns, header rename, and structure definition by end users.",
        "Auto-update field values via custom rules, removing manual data corrections.",
        "Automated delivery via cron + SFTP, eliminating 100% of manual distribution.",
        "Jest unit tests and Swagger-documented REST APIs for onboarding.",
      ],
    },
    {
      name: "Prism Enrich",
      context: "Datazoic — Data verification & analytics",
      tech: ["React.js", "Node.js", "PostgreSQL", "Redux", "Bootstrap"],
      highlights: [
        "Validates employment and attribute changes from third-party sources — improved dataset accuracy by 30%.",
        "AG Grid with dynamic custom cell rendering and SFTP for secure data handling.",
        "Reusable React components and custom hooks; Redux for scalable state.",
        "Role-based permission control; Agile delivery with JIRA.",
      ],
    },
    {
      name: "prismGPT",
      context: "Datazoic — AI-based multipage chat application",
      tech: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "Bootstrap"],
      highlights: [
        "Integrated LLM APIs in Node.js backend with structured prompts for conversational DB ops.",
        "Two modules: CRUD on records, and performance tracking (revenue growth, competitor comparison).",
        "Search, like/dislike feedback, suggestion history.",
        "Context API for session tracking and chat performance.",
      ],
    },
    {
      name: "Contact Manager",
      context: "Pre-employment full-stack project",
      tech: ["React.js", "Node.js", "MongoDB", "Bootstrap"],
      highlights: [
        "Auth, search, filters, and bulk operations for contact information.",
        "CSV import/export for seamless data management.",
      ],
    },
    {
      name: "Photo Sharing Application",
      context: "Pre-employment full-stack project",
      tech: ["React.js", "Node.js", "MongoDB", "Bootstrap"],
      highlights: [
        "Upload, display, and engage with images.",
        "Likes and user feedback features.",
      ],
    },
  ],
  education: [
    {
      institution: "National Institute of Technology Calicut",
      degree: "B.Tech, Mechanical Engineering",
      start: "",
      end: "2020",
      location: "Kerala, India",
      score: "60.6%",
    },
    {
      institution: "10X Academy",
      degree: "Full-Stack Web Development Bootcamp",
      start: "",
      end: "",
      score: "Career switch from Mechanical Engineering to Software Development",
    },
    {
      institution: "Sri Gayatri Junior College",
      degree: "Intermediate (12th)",
      start: "",
      end: "",
      location: "Hyderabad",
      score: "93.1%",
    },
    {
      institution: "Gouthami Vidyanikethan",
      degree: "SSC (10th)",
      start: "",
      end: "",
      location: "Nekkonda, Warangal",
      score: "9.2 GPA",
    },
  ],
  highlights: [
    "3+ years building production React + Node.js applications at Datazoic",
    "Shipped LLM integration in prismGPT — conversational DB ops and analytics",
    "NIT Calicut B.Tech graduate (2020)",
    "Currently building this AI assistant + stock analysis + job tracker stack",
  ],
};
