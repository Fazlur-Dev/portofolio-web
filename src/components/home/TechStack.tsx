import {
  Code2,
  Database,
  Flame,
  GitBranch,
  MonitorCog,
  Smartphone,
  TerminalSquare,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const technologies = [
  {
    name: "Next.js",
    category: "Web Development",
    icon: Code2,
  },
  {
    name: "Flutter",
    category: "Mobile Development",
    icon: Smartphone,
  },
  {
    name: "TypeScript",
    category: "Development",
    icon: TerminalSquare,
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: Flame,
  },
  {
    name: "Firestore",
    category: "Database",
    icon: Database,
  },
  {
    name: "Git",
    category: "Version Control",
    icon: GitBranch,
  },
  {
    name: "GitHub",
    category: "Repository",
    icon: FaGithub,
  },
  {
    name: "VS Code",
    category: "Development Tool",
    icon: MonitorCog,
  },
];

export default function TechStack() {
  return (
    <section className="tech-stack" id="technology">
      <div className="tech-stack-container">

        <div className="tech-stack-heading">
          <div className="tech-stack-label">
            <span>02</span>
            <span>/</span>
            <span>TECHNOLOGY</span>
          </div>

          <div className="tech-stack-title-row">
            <h2>
              Tools behind
              <br />
              the <span>systems.</span>
            </h2>

            <p>
              Technologies I use to turn ideas into reliable web applications,
              mobile apps, and operational systems.
            </p>
          </div>
        </div>

        <div className="tech-stack-grid">
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div className="tech-item" key={technology.name}>
                <div className="tech-icon">
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <div className="tech-info">
                  <strong>{technology.name}</strong>
                  <span>{technology.category}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="tech-stack-bottom">
          <span>WEB</span>
          <i />
          <span>MOBILE</span>
          <i />
          <span>BACKEND</span>
          <i />
          <span>DATABASE</span>
        </div>

      </div>
    </section>
  );
}