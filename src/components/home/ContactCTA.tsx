import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="contact-cta-glow contact-cta-glow-blue" />
      <div className="contact-cta-glow contact-cta-glow-green" />

      <div className="contact-cta-container">
        <div className="contact-cta-label">
          <span>03</span>
          <span>/</span>
          <span>LET&apos;S WORK TOGETHER</span>
        </div>

        <div className="contact-cta-content">
          <h2>
            Have an idea?
            <br />
            Let&apos;s build something <span>useful.</span>
          </h2>

          <p>
            Need a web application, mobile app, or custom business system?
            Let&apos;s talk about what you&apos;re building.
          </p>

          <a className="contact-cta-button" href="mailto:your@email.com">
            <Mail size={18} strokeWidth={1.8} />
            Start a Conversation
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>
        </div>

        <div className="contact-cta-status">
          <span className="contact-cta-status-dot" />
          AVAILABLE FOR FREELANCE &amp; PROJECT WORK
        </div>
      </div>
    </section>
  );
}