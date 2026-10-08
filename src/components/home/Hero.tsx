"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import DeviceMockup from "./DeviceMockup";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-blue" />
      <div className="hero-glow hero-glow-green" />

      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-content">
          <div className="hero-status">
            <span className="hero-status-dot" />
            AVAILABLE FOR PROJECTS
          </div>

          <p className="hero-eyebrow">SOFTWARE DEVELOPER</p>

          <h1 className="hero-title">
            I build digital
            <br />
            systems that
            <br />
            <span>move businesses.</span>
          </h1>

          <p className="hero-description">
            Designing and developing web applications, mobile apps,
            dashboards, and operational systems built around real business
            needs.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="hero-primary">
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a href="/contact" className="hero-secondary">
              Let&apos;s Talk
            </a>
          </div>

          <div className="hero-bottom">
            <div className="hero-socials">
              <a href="#" aria-label="GitHub">
                <FaGithub size={17} />
              </a>

              <a href="#" aria-label="LinkedIn">
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