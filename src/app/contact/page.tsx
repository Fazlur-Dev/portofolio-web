import {
  ArrowLeft,
  ArrowUpRight,
  Link,
  Mail,
  MessageCircle,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="contact-page">
        <div className="contact-page-glow contact-page-glow-blue" />
        <div className="contact-page-glow contact-page-glow-green" />

        <div className="contact-page-container">

          {/* =====================================================
              TOP NAVIGATION
          ====================================================== */}

          <div className="contact-page-top">
            <Link href="/" className="contact-page-back">
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <span>AVAILABLE FOR PROJECTS</span>
          </div>


          {/* =====================================================
              HERO
          ====================================================== */}

          <section className="contact-page-hero">
            <div className="contact-page-label">
              <span>01</span>
              <span>/</span>
              <span>CONTACT</span>
            </div>

            <div className="contact-page-title-row">
              <h1>
                Let&apos;s build something
                <br />
                <span>that actually works.</span>
              </h1>

              <p>
                Have a project, business problem, or system you want to
                discuss? Tell me what you&apos;re trying to solve and
                let&apos;s see what we can build.
              </p>
            </div>
          </section>


          {/* =====================================================
              CONTACT CONTENT
          ====================================================== */}

          <section className="contact-page-content">

            {/* LEFT SIDE */}

            <div className="contact-page-conversation">
              <div className="contact-page-section-label">
                <span>START A CONVERSATION</span>
              </div>

              <h2>
                The easiest way to start
                <br />
                is simply to say hello.
              </h2>

              <p className="contact-page-conversation-copy">
                You don&apos;t need a complete technical plan. Tell me
                about your idea, workflow, or problem and we can figure
                out the right direction from there.
              </p>


              {/* WhatsApp */}

              <a
                href="https://wa.me/6281374291718?text=Hi%20Fazlur%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method contact-method-primary"
                aria-label="Contact Fazlur via WhatsApp"
              >
                <div className="contact-method-icon">
                  <MessageCircle size={21} />
                </div>

                <div className="contact-method-copy">
                  <span>WHATSAPP</span>
                  <strong>Start a conversation</strong>
                </div>

                <ArrowUpRight
                  className="contact-method-arrow"
                  size={19}
                />
              </a>


              {/* Email */}

              <a
                href="mailto:rfazlur270@gmail.com?subject=Project%20Inquiry%20-%20Fazlur%20Rahman"
                className="contact-method"
                aria-label="Send an email to Fazlur"
              >
                <div className="contact-method-icon">
                  <Mail size={21} />
                </div>

                <div className="contact-method-copy">
                  <span>EMAIL</span>
                  <strong>rfazlur270@gmail.com</strong>
                </div>

                <ArrowUpRight
                  className="contact-method-arrow"
                  size={19}
                />
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/fazlur-rahman-026187247"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                aria-label="View Fazlur Rahman on LinkedIn"
              >
                <div className="contact-method-icon">
                  <FaLinkedin size={21} />
                </div>

                <div className="contact-method-copy">
                  <span>LINKEDIN</span>
                  <strong>Connect professionally</strong>
                </div>

                <ArrowUpRight
                  className="contact-method-arrow"
                  size={19}
                />
              </a>


              {/* GitHub */}

              <a
                href="https://github.com/Fazlur-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
                aria-label="View Fazlur-Dev on GitHub"
              >
                <div className="contact-method-icon">
                  <FaGithub size={21} />
                </div>

                <div className="contact-method-copy">
                  <span>GITHUB</span>
                  <strong>Explore my code</strong>
                </div>

                <ArrowUpRight
                  className="contact-method-arrow"
                  size={19}
                />
              </a>
            </div>


            {/* RIGHT SIDE */}

            <div className="contact-page-project">
              <div className="contact-page-section-label">
                <span>PROJECT DETAILS</span>
              </div>

              <h2>
                What are you looking
                <br />
                to build?
              </h2>

              <p className="contact-page-project-copy">
                I work on digital systems designed around real
                operational needs—from customer-facing products to
                internal business tools.
              </p>

              <div className="contact-project-types">

                <div className="contact-project-type">
                  <span>01</span>

                  <div>
                    <strong>Web Application</strong>
                    <p>
                      Dashboards, management systems, and responsive
                      web applications.
                    </p>
                  </div>
                </div>

                <div className="contact-project-type">
                  <span>02</span>

                  <div>
                    <strong>Mobile Application</strong>
                    <p>
                      Mobile tools and operational applications built
                      around real workflows.
                    </p>
                  </div>
                </div>

                <div className="contact-project-type">
                  <span>03</span>

                  <div>
                    <strong>Business System</strong>
                    <p>
                      Connected systems for transactions, operations,
                      reporting, inventory, and business processes.
                    </p>
                  </div>
                </div>

              </div>


              {/* CTA */}

              <a
                href="https://wa.me/6281374291718?text=Hi%20Fazlur%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-project-cta"
              >
                <div>
                  <span>HAVE SOMETHING ELSE IN MIND?</span>
                  <strong>Tell me about your project</strong>
                </div>

                <ArrowUpRight size={20} />
              </a>
            </div>

          </section>


          {/* =====================================================
              BOTTOM NOTE
          ====================================================== */}

          <div className="contact-page-bottom">
            <span />

            <p>
              Every project starts with understanding the problem
              before deciding what needs to be built.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}