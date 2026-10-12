"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactCTA() {
  const { language } = useLanguage();

  const content = {
    en: {
      label: "LET'S WORK TOGETHER",
      titleLine1: "Have an idea?",
      titleLine2: "Let's build something",
      titleHighlight: "useful.",
      description:
        "Need a web application, mobile app, or custom business system? Let's talk about what you're building.",
      button: "Start a Conversation",
      status: "AVAILABLE FOR FREELANCE & PROJECT WORK",
    },

    id: {
      label: "MARI BEKERJA SAMA",
      titleLine1: "Punya sebuah ide?",
      titleLine2: "Mari bangun sesuatu yang",
      titleHighlight: "bermanfaat.",
      description:
        "Butuh aplikasi web, aplikasi mobile, atau sistem bisnis khusus? Mari diskusikan apa yang ingin Anda bangun.",
      button: "Mulai Percakapan",
      status: "TERSEDIA UNTUK FREELANCE & PROYEK",
    },
  };

  const text = content[language];

  return (
    <section className="contact-cta" id="contact">
      <div className="contact-cta-glow contact-cta-glow-blue" />
      <div className="contact-cta-glow contact-cta-glow-green" />

      <div className="contact-cta-container">
        <div className="contact-cta-label">
          <span>03</span>
          <span>/</span>
          <span>{text.label}</span>
        </div>

        <div className="contact-cta-content">
          <h2>
            {text.titleLine1}
            <br />
            {text.titleLine2}{" "}
            <span>{text.titleHighlight}</span>
          </h2>

          <p>
            {text.description}
          </p>

          <a
            className="contact-cta-button"
            href="mailto:rfazlur270@gmail.com?subject=Project%20Inquiry%20-%20Fazlur%20Rahman"
          >
            <Mail size={18} strokeWidth={1.8} />
            {text.button}
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>
        </div>

        <div className="contact-cta-status">
          <span className="contact-cta-status-dot" />
          {text.status}
        </div>
      </div>
    </section>
  );
}