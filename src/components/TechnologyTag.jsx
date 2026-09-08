import { BriefcaseBusiness, Code2, Database, GitBranch, MousePointer2, Network, Palette, PencilRuler, Workflow } from "lucide-react";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const technologyIcons = {
  JavaScript: `${DEVICON_BASE}/javascript/javascript-original.svg`,
  Python: `${DEVICON_BASE}/python/python-original.svg`,
  Java: `${DEVICON_BASE}/java/java-original.svg`,
  HTML: `${DEVICON_BASE}/html5/html5-original.svg`,
  CSS: `${DEVICON_BASE}/css3/css3-original.svg`,
  React: `${DEVICON_BASE}/react/react-original.svg`,
  "Next.js": `${DEVICON_BASE}/nextjs/nextjs-original.svg`,
  "Node.js": `${DEVICON_BASE}/nodejs/nodejs-original.svg`,
  "Tailwind CSS": `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg`,
  MySQL: `${DEVICON_BASE}/mysql/mysql-original.svg`,
  MongoDB: `${DEVICON_BASE}/mongodb/mongodb-original.svg`,
  Figma: `${DEVICON_BASE}/figma/figma-original.svg`,
  Git: `${DEVICON_BASE}/git/git-original.svg`,
  Docker: `${DEVICON_BASE}/docker/docker-original.svg`,
  "C#": `${DEVICON_BASE}/csharp/csharp-original.svg`,
  ".NET": `${DEVICON_BASE}/dot-net/dot-net-original.svg`,
};

const conceptualIcons = {
  "UX/UI": Palette,
  "Full Stack": Code2,
  Developer: BriefcaseBusiness,
  "RESTful APIs": Network,
  SQL: Database,
  Wireframing: PencilRuler,
  "Interactive Prototyping": MousePointer2,
  "User Flow": Workflow,
  "CI/CD Pipelines": GitBranch,
};

/** Shared visual for technologies, scaled for compact tags or inventory cards. */
export function TechnologyIcon({ name, variant = "tag" }) {
  const Logo = conceptualIcons[name];
  const logoUrl = technologyIcons[name];

  if (logoUrl) {
    return <img className={`technology-icon technology-icon--${variant}`} src={logoUrl} alt="" aria-hidden="true" onError={(event) => { event.currentTarget.style.display = "none"; }} />;
  }

  return Logo ? <Logo className={`technology-icon technology-icon--${variant}`} strokeWidth={variant === "card" ? 1.65 : 1.9} aria-hidden="true" /> : null;
}

/** A compact, reusable label for technologies shown throughout the portfolio. */
export default function TechnologyTag({ name }) {
  return (
    <span className="technology-tag">
      <TechnologyIcon name={name} />
      <span>{name}</span>
    </span>
  );
}
