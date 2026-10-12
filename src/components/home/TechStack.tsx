"use client";

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
import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
  const { language } = useLanguage();

  const content = {
    en: {
      label: "TECHNOLOGY",
      titleLine1: "Tools behind",
      titleHighlight: "systems.",
      description:
        "Technologies I use to turn ideas into reliable web applications, mobile apps, and operational systems.",

      technologies: [
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
      ],

      bottom: {
        web: "WEB",
        mobile: "MOBILE",
        backend: "BACKEND",
        database: "DATABASE",
      },
    },

    id: {
      label: "TEKNOLOGI",
      titleLine1: "Teknologi di balik",
      titleHighlight: "sistem.",
      description:
        "Teknologi yang saya gunakan untuk mengubah ide menjadi aplikasi web, aplikasi mobile, dan sistem operasional yang andal.",

      technologies: [
        {
          name: "Next.js",
          category: "Pengembangan Web",
          icon: Code2,
        },
        {
          name: "Flutter",
          category: "Pengembangan Mobile",
          icon: Smartphone,
        },
        {
          name: "TypeScript",
          category: "Pengembangan",
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
          category: "Kontrol Versi",
          icon: GitBranch,
        },
        {
          name: "GitHub",
          category: "Repositori",
          icon: FaGithub,
        },
        {
          name: "VS Code",
          category: "Alat Pengembangan",
          icon: MonitorCog,
        },
      ],

      bottom: {
        web: "WEB",
        mobile: "MOBILE",
        backend: "BACKEND",
        database: "DATABASE",
      },
    },
  };

  const text = content[language];

  return (
    <section className="tech-stack" id="technology">
      <div className="tech-stack-container">

        <div className="tech-stack-heading">
          <div className="tech-stack-label">
            <span>02</span>
            <span>/</span>
            <span>{text.label}</span>
          </div>

          <div className="tech-stack-title-row">
            <h2>
              {text.titleLine1}
              <br />
              <span>{text.titleHighlight}</span>
            </h2>

            <p>
              {text.description}
            </p>
          </div>
        </div>

        <div className="tech-stack-grid">
          {text.technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <div
                className="tech-item"
                key={technology.name}
              >
                <div className="tech-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                  />
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
          <span>{text.bottom.web}</span>
          <i />
          <span>{text.bottom.mobile}</span>
          <i />
          <span>{text.bottom.backend}</span>
          <i />
          <span>{text.bottom.database}</span>
        </div>

      </div>
    </section>
  );
}