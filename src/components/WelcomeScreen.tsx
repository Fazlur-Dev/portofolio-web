"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, Code2, Globe2 } from "lucide-react";
import { useLanguage, type Language } from "@/context/LanguageContext";

export default function WelcomeScreen() {
  const router = useRouter();
  const { setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const enterPortfolio = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    sessionStorage.setItem("portfolio-welcome-entered", "true");
    setMenuOpen(false);
    // push (bukan replace): tombol Back browser kembali ke /welcome.
    router.push("/");
  };

  return (
    <main className="welcome-page">
      <div className="welcome-glow welcome-glow-blue" />
      <div className="welcome-glow welcome-glow-green" />
      <div className="welcome-glow welcome-glow-bottom" />

      {/* TOP RIGHT */}
      <div className="welcome-topbar">
        <div className="welcome-profile-wrap">
          <button
            type="button"
            className="welcome-profile-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Open welcome menu"
          >
            <span>FR</span>
            <ChevronDown
              size={17}
              className={menuOpen ? "welcome-chevron-open" : ""}
            />
          </button>

          {menuOpen && (
            <div className="welcome-profile-menu">
              <strong>FAZLUR RAHMAN</strong>
              <span>SOFTWARE DEVELOPER</span>

              <div className="welcome-profile-divider" />

              <button
                type="button"
                onClick={() => enterPortfolio("id")}
              >
                Masuk dalam Bahasa Indonesia
              </button>

              <button
                type="button"
                onClick={() => enterPortfolio("en")}
              >
                Continue in English
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="welcome-content">
        <div className="welcome-code-icon">
          <Code2 size={44} strokeWidth={1.8} />
        </div>

        <div className="welcome-eyebrow">
          <span />
          <p>WELCOME</p>
          <span />
        </div>

        <h1 className="welcome-title">
          FAZLUR <span>RAHMAN</span>
        </h1>

        <p className="welcome-role">
          SOFTWARE DEVELOPER
        </p>

        <div className="welcome-accent-line" />

        <p className="welcome-description">
          Digital solutions built for real
          <br />
          business needs.
        </p>

        {/* LANGUAGE OPTIONS */}
        <div className="welcome-language-options">
          <button
            type="button"
            className="welcome-language-button welcome-language-id"
            onClick={() => enterPortfolio("id")}
          >
            <span className="welcome-language-icon">
              <svg
                viewBox="0 0 48 48"
                width="44"
                height="44"
                aria-hidden="true"
              >
                <defs>
                  <clipPath id="welcome-flag-circle">
                    <circle cx="24" cy="24" r="21" />
                  </clipPath>
                </defs>
                <g clipPath="url(#welcome-flag-circle)">
                  <rect
                    x="0"
                    y="0"
                    width="48"
                    height="24"
                    fill="#E82E42"
                  />
                  <rect
                    x="0"
                    y="24"
                    width="48"
                    height="24"
                    fill="#FFFFFF"
                  />
                </g>
              </svg>
            </span>

            <span className="welcome-language-name">
              INDONESIA
            </span>

            <ArrowRight
              className="welcome-language-arrow"
              size={29}
              strokeWidth={1.9}
            />
          </button>

          <button
            type="button"
            className="welcome-language-button welcome-language-en"
            onClick={() => enterPortfolio("en")}
          >
            <span className="welcome-language-icon">
              <Globe2 size={43} strokeWidth={1.7} />
            </span>

            <span className="welcome-language-name">
              ENGLISH
            </span>

            <ArrowRight
              className="welcome-language-arrow"
              size={29}
              strokeWidth={1.9}
            />
          </button>
        </div>

        <div className="welcome-entry-label">
          <span />
          <p>ENTER PORTFOLIO</p>
          <span />
        </div>
      </div>
    </main>
  );
}
