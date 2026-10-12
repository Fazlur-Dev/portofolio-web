"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import DeviceMockup from "./DeviceMockup";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      status: "AVAILABLE FOR PROJECTS",
      eyebrow: "SOFTWARE DEVELOPER",
      titleLine1: "I build digital",
      titleLine2: "systems that",
      titleHighlight: "move businesses.",
      description:
        "Designing and developing web applications, mobile apps, dashboards, and operational systems built around real business needs.",
      projects: "View Projects",
      contact: "Let's Talk",
    },

    id: {
      status: "TERSEDIA UNTUK PROYEK",
      eyebrow: "SOFTWARE DEVELOPER",
      titleLine1: "Saya membangun",
      titleLine2: "sistem digital yang",
      titleHighlight: "menggerakkan bisnis.",
      description:
        "Merancang dan mengembangkan aplikasi web, aplikasi mobile, dashboard, serta sistem operasional yang dibangun berdasarkan kebutuhan nyata bisnis.",
      projects: "Lihat Proyek",
      contact: "Mari Bicara",
    },
  };

  const text = content[language];

  return (
    <section className="hero">
      <div className="hero-glow hero-glow-blue" />
      <div className="hero-glow hero-glow-green" />

      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-content">
          <div className="hero-status">
            <span className="hero-status-dot" />
            {text.status}
          </div>

          <p className="hero-eyebrow">
            {text.eyebrow}
          </p>

          <h1 className="hero-title">
            {text.titleLine1}
            <br />
            {text.titleLine2}
            <br />
            <span>{text.titleHighlight}</span>
          </h1>

          <p className="hero-description">
            {text.description}
          </p>

          <div className="hero-actions">
            <a
              href="/projects"
              className="hero-primary"
            >
              {text.projects}
              <ArrowUpRight size={18} />
            </a>

            <a
              href="/contact"
              className="hero-secondary"
            >
              {text.contact}
            </a>
          </div>

          <div className="hero-bottom">
            <div className="hero-socials">
              <a
                href="https://github.com/Fazlur-Dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/fazlur-rahman-026187247"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={17} />
              </a>
            </div>

            <div className="hero-tech">
              NEXT.JS <span>/</span> FLUTTER <span>/</span> FIREBASE
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          <DeviceMockup />
        </div>
      </div>
    </section>
  );
}