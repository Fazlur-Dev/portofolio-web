"use client";

import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Workflow,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { language } = useLanguage();

  const content = {
    en: {
      label: "WHAT I BUILD",
      titleLine1: "Digital solutions",
      titleLine2: "built around",
      titleHighlight: "real needs.",
      description:
        "I design and develop systems that help businesses manage operations, data, and everyday workflows.",

      services: [
        {
          number: "01",
          icon: Code2,
          title: "Web Applications",
          description:
            "Modern web applications and dashboards designed for real business workflows.",
          tech: "Next.js",
        },
        {
          number: "02",
          icon: Smartphone,
          title: "Mobile Applications",
          description:
            "Responsive mobile applications built for practical, everyday operations.",
          tech: "Flutter",
        },
        {
          number: "03",
          icon: Workflow,
          title: "Business Systems",
          description:
            "Operational systems that connect data, workflows, and business processes.",
          tech: "Firebase",
        },
      ],
    },

    id: {
      label: "YANG SAYA BANGUN",
      titleLine1: "Solusi digital",
      titleLine2: "yang dibangun untuk",
      titleHighlight: "kebutuhan nyata.",
      description:
        "Saya merancang dan mengembangkan sistem yang membantu bisnis mengelola operasional, data, dan alur kerja sehari-hari.",

      services: [
        {
          number: "01",
          icon: Code2,
          title: "Aplikasi Web",
          description:
            "Aplikasi web modern dan dashboard yang dirancang untuk mendukung alur kerja bisnis nyata.",
          tech: "Next.js",
        },
        {
          number: "02",
          icon: Smartphone,
          title: "Aplikasi Mobile",
          description:
            "Aplikasi mobile responsif yang dibangun untuk mendukung operasional sehari-hari secara praktis.",
          tech: "Flutter",
        },
        {
          number: "03",
          icon: Workflow,
          title: "Sistem Bisnis",
          description:
            "Sistem operasional yang menghubungkan data, alur kerja, dan proses bisnis dalam satu sistem.",
          tech: "Firebase",
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-heading">
          <div className="services-label">
            <span>01</span>
            <span>/</span>
            <span>{text.label}</span>
          </div>

          <div className="services-title-row">
            <h2>
              {text.titleLine1}
              <br />
              {text.titleLine2}{" "}
              <span>{text.titleHighlight}</span>
            </h2>

            <p>
              {text.description}
            </p>
          </div>
        </div>

        <div className="services-grid">
          {text.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.number}
              >
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon
                      size={24}
                      strokeWidth={1.7}
                    />
                  </div>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-card-footer">
                  <span>{service.tech}</span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                  />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}