import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="projects-page">
        <section className="projects-hero">
          <div className="projects-container">

            <div className="projects-label">
              <span>PROJECTS</span>
              <span>/</span>
              <span>SELECTED WORK</span>
            </div>

            <div className="projects-heading">
              <h1>
                Systems built for
                <br />
                <span>real problems.</span>
              </h1>

              <p>
                A selection of applications and digital systems designed
                around real workflows, operations, and business needs.
              </p>
            </div>

          </div>
        </section>

        <section className="projects-list">
          <div className="projects-container">

            <article className="featured-project">

              <div className="featured-project-top">
                <div>
                  <span className="project-number">01 / FEATURED PROJECT</span>

                  <h2>Tuah Kopi</h2>

                  <p className="project-type">
                    BUSINESS OPERATIONS SYSTEM
                  </p>
                </div>

                <span className="project-year">2026</span>
              </div>

<div className="project-preview">

  {/* Background Project Identity */}
  <div className="project-preview-identity">
    <span>01 / BUSINESS SYSTEM</span>

    <h3>
      One system.
      <br />
      Every outlet.
    </h3>

    <p>
      Operations, sales, inventory, and owner control
      connected through one platform.
    </p>
  </div>

  {/* Owner Web Mockup */}
  <div className="project-web-mockup">

    <div className="project-web-browser">
      <div className="project-browser-dots">
        <i />
        <i />
        <i />
      </div>

      <span>Owner Dashboard</span>

      <div className="project-browser-status">
        LIVE
      </div>
    </div>

    <div className="project-web-body">

      <aside className="project-web-sidebar">
        <div className="project-web-logo">
          TK
        </div>

        <div className="project-web-menu active" />
        <div className="project-web-menu" />
        <div className="project-web-menu" />
        <div className="project-web-menu" />
        <div className="project-web-menu" />
      </aside>

      <div className="project-dashboard">

        <div className="project-dashboard-header">
          <div>
            <span>OVERVIEW</span>
            <strong>Business Dashboard</strong>
          </div>

          <div className="project-dashboard-period">
            October 2026
          </div>
        </div>

        <div className="project-dashboard-cards">

          <div className="project-dashboard-card">
            <span>MONTHLY REVENUE</span>
            <strong>Rp 84.2M</strong>
            <small>+12.4%</small>
          </div>

          <div className="project-dashboard-card">
            <span>TRANSACTIONS</span>
            <strong>4,280</strong>
            <small>8 OUTLETS</small>
          </div>

          <div className="project-dashboard-card">
            <span>PRODUCTS SOLD</span>
            <strong>6,942</strong>
            <small>THIS MONTH</small>
          </div>

        </div>

        <div className="project-dashboard-bottom">

          <div className="project-chart">
            <div className="project-chart-heading">
              <span>SALES PERFORMANCE</span>
              <small>Monthly</small>
            </div>

            <div className="project-chart-bars">
              <i style={{ height: "32%" }} />
              <i style={{ height: "48%" }} />
              <i style={{ height: "42%" }} />
              <i style={{ height: "64%" }} />
              <i style={{ height: "55%" }} />
              <i style={{ height: "78%" }} />
              <i style={{ height: "70%" }} />
              <i style={{ height: "91%" }} />
            </div>
          </div>

          <div className="project-activity">
            <span>OUTLET ACTIVITY</span>

            <div>
              <i />
              <p>
                <strong>Shelga</strong>
                <small>142 transactions</small>
              </p>
            </div>

            <div>
              <i />
              <p>
                <strong>Costal Area</strong>
                <small>118 transactions</small>
              </p>
            </div>

            <div>
              <i />
              <p>
                <strong>Central</strong>
                <small>96 transactions</small>
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>

  {/* Mobile App Mockup */}
  <div className="project-phone-mockup">

    <div className="project-phone-speaker" />

    <div className="project-phone-screen">

      <div className="project-phone-header">
        <div>
          <small>TUAH KOPI</small>
          <strong>Outlet Dashboard</strong>
        </div>

        <span>FR</span>
      </div>

      <div className="project-phone-summary">
        <small>TODAY&apos;S SALES</small>
        <strong>Rp 2.840.000</strong>
        <span>+8.2% today</span>
      </div>

      <div className="project-phone-grid">

        <div>
          <strong>124</strong>
          <small>Orders</small>
        </div>

        <div>
          <strong>186</strong>
          <small>Items</small>
        </div>

        <div>
          <strong>12</strong>
          <small>Stock</small>
        </div>

        <div>
          <strong>3</strong>
          <small>PO</small>
        </div>

      </div>

      <div className="project-phone-list">
        <span>RECENT ACTIVITY</span>

        <div>
          <i />
          <p>
            <strong>New transaction</strong>
            <small>Rp 45.000</small>
          </p>
        </div>

        <div>
          <i />
          <p>
            <strong>Stock updated</strong>
            <small>2 minutes ago</small>
          </p>
        </div>

        <div>
          <i />
          <p>
            <strong>PO submitted</strong>
            <small>5 minutes ago</small>
          </p>
        </div>
      </div>

    </div>

  </div>

  {/* Floating Labels */}
  <div className="project-device-label project-device-label-web">
    <span>OWNER WEB</span>
    Centralized Control
  </div>

  <div className="project-device-label project-device-label-mobile">
    <span>MOBILE APP</span>
    Outlet Operations
  </div>

</div>

              <div className="project-info">
                <p>
                  A multi-outlet operational system connecting daily outlet
                  activities with centralized owner monitoring and management.
                </p>

                <div className="project-tags">
                  <span>Flutter</span>
                  <span>Next.js</span>
                  <span>Firebase</span>
                  <span>Firestore</span>
                  <span>Multi-Outlet</span>
                </div>

                <a href="/projects/tuah-kopi">
                  View Case Study
                  <ArrowUpRight size={17} />
                </a>
              </div>

            </article>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}