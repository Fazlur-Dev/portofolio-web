import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <a className="footer-brand" href="#top">
            <div className="footer-logo">FR</div>

            <div className="footer-brand-text">
              <strong>Fazlur Rahman</strong>
              <span>SOFTWARE DEVELOPER</span>
            </div>
          </a>

          <nav className="footer-nav">
            <a href="#top">Home</a>
            <a href="/projects">Projects</a>
            <a href="#services">Services</a>
            <a href="/about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-socials">
            <a
              href="#"
              aria-label="GitHub"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>

            <a className="footer-email" href="mailto:your@email.com">
              Email
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Fazlur Rahman</span>

          <span className="footer-built">
            DESIGNED &amp; BUILT WITH PURPOSE
          </span>

          <a href="#top">
            BACK TO TOP
            <ArrowUpRight size={13} />
          </a>
        </div>

      </div>
    </footer>
  );
}