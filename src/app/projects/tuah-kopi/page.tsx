import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Smartphone,
  Monitor,
  Database,
} from "lucide-react";

export default function TuahKopiCaseStudy() {
  return (
    <>
      <Navbar />

      <main className="case-study-page">

        {/* HERO */}
        <section className="case-hero">
          <div className="case-container">

            <Link
              href="/projects"
              className="case-back"
            >
              <ArrowLeft size={15} />
              Back to Projects
            </Link>

            <div className="case-eyebrow">
              <span>01</span>
              <span>/</span>
              <span>FEATURED CASE STUDY</span>
            </div>

            <div className="case-hero-heading">

              <div>
                <h1>
                  Tuah
                  <br />
                  <span>Kopi.</span>
                </h1>
              </div>

              <div className="case-hero-summary">
                <span>BUSINESS OPERATIONS SYSTEM</span>

                <p>
                  A connected mobile and web system designed
                  to manage multi-outlet coffee shop operations
                  from daily transactions to centralized owner
                  monitoring.
                </p>

                <div className="case-hero-platforms">

                  <div>
                    <Smartphone size={17} />
                    Mobile App
                  </div>

                  <div>
                    <Monitor size={17} />
                    Owner Web
                  </div>

                  <div>
                    <Database size={17} />
                    Cloud Backend
                  </div>

                </div>
              </div>

            </div>

            {/* HERO VISUAL */}
            <div className="case-hero-visual">

              <div className="case-hero-visual-copy">
                <span>CONNECTED OPERATIONS</span>

                <strong>
                  From outlet
                  <br />
                  to owner.
                </strong>

                <p>
                  One operational ecosystem connecting
                  everyday outlet activity with centralized
                  business control.
                </p>
              </div>

              <div className="case-hero-system">

                <div className="case-system-node">
                  <span>01</span>
                  <Smartphone size={22} />
                  <strong>OUTLET APP</strong>
                  <small>Daily Operations</small>
                </div>

                <div className="case-system-connector">
                  <i />
                  <span>REAL-TIME DATA</span>
                  <i />
                </div>

                <div className="case-system-node case-system-node-main">
                  <span>02</span>
                  <Database size={22} />
                  <strong>FIREBASE</strong>
                  <small>Cloud Infrastructure</small>
                </div>

                <div className="case-system-connector">
                  <i />
                  <span>SYNC</span>
                  <i />
                </div>

                <div className="case-system-node">
                  <span>03</span>
                  <Monitor size={22} />
                  <strong>OWNER WEB</strong>
                  <small>Centralized Control</small>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* PROJECT OVERVIEW */}
        <section className="case-overview">
          <div className="case-container">

            <div className="case-section-label">
              <span>01</span>
              <span>/</span>
              <span>PROJECT OVERVIEW</span>
            </div>

            <div className="case-overview-grid">

              <div className="case-overview-title">
                <h2>
                  Built around
                  <br />
                  <span>real operations.</span>
                </h2>
              </div>

              <div className="case-overview-content">

                <p className="case-overview-lead">
                  Tuah Kopi is a custom operational system
                  designed to connect activities across multiple
                  coffee shop outlets with a centralized platform
                  for business owners.
                </p>

                <p>
                  The system combines a mobile application used
                  at outlet level with an owner web dashboard.
                  Operational data is stored and synchronized
                  through Firebase, allowing each outlet to work
                  independently while keeping information
                  accessible from one centralized system.
                </p>

                <div className="case-project-meta">

                  <div>
                    <span>ROLE</span>
                    <strong>Full-Stack Developer</strong>
                  </div>

                  <div>
                    <span>PLATFORMS</span>
                    <strong>Mobile + Web</strong>
                  </div>

                  <div>
                    <span>YEAR</span>
                    <strong>2026</strong>
                  </div>

                  <div>
                    <span>STATUS</span>
                    <strong>Active Development</strong>
                  </div>

                </div>

                <Link
                  href="#problem"
                  className="case-next-section"
                >
                  Explore the system
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </div>

          </div>
        </section>
        {/* THE PROBLEM */}
<section className="case-problem" id="problem">
  <div className="case-container">

    <div className="case-section-label">
      <span>02</span>
      <span>/</span>
      <span>THE PROBLEM</span>
    </div>

    <div className="case-problem-grid">

      <div className="case-problem-heading">
        <h2>
          Operations grow.
          <br />
          Complexity <span>follows.</span>
        </h2>

        <p>
          Managing multiple outlets creates more than just
          additional transactions. It creates disconnected
          information, repetitive reporting, and less visibility
          for the business owner.
        </p>
      </div>

      <div className="case-problem-list">

        <article>
          <span>01</span>

          <div>
            <h3>Disconnected outlet data</h3>

            <p>
              Sales, expenses, stock, and other operational
              activities need to remain separated by outlet
              while still being accessible centrally.
            </p>
          </div>
        </article>

        <article>
          <span>02</span>

          <div>
            <h3>Limited operational visibility</h3>

            <p>
              Without a centralized system, understanding
              performance across outlets requires information
              to be collected and compared manually.
            </p>
          </div>
        </article>

        <article>
          <span>03</span>

          <div>
            <h3>Growing workflow complexity</h3>

            <p>
              Transactions, inventory, expenses, purchase
              orders, and reporting become increasingly
              difficult to manage as operations expand.
            </p>
          </div>
        </article>

      </div>

    </div>

  </div>
</section>


{/* THE SOLUTION */}
<section className="case-solution">
  <div className="case-container">

    <div className="case-section-label">
      <span>03</span>
      <span>/</span>
      <span>THE SOLUTION</span>
    </div>

    <div className="case-solution-heading">

      <h2>
        One connected
        <br />
        <span>operational system.</span>
      </h2>

      <p>
        Instead of treating each operational need as a separate
        tool, the system connects outlet activities, shared data,
        and owner-level management through one architecture.
      </p>

    </div>

    <div className="case-solution-flow">

      <article>
        <div className="case-solution-number">01</div>

        <div className="case-solution-icon">
          <Smartphone size={23} />
        </div>

        <span>OUTLET LEVEL</span>

        <h3>Mobile Operations</h3>

        <p>
          Employees use the mobile application for daily
          operational activities including sales, expenses,
          inventory, and purchase-order workflows.
        </p>
      </article>

      <div className="case-solution-arrow">
        →
      </div>

      <article>
        <div className="case-solution-number">02</div>

        <div className="case-solution-icon">
          <Database size={23} />
        </div>

        <span>DATA LAYER</span>

        <h3>Centralized Backend</h3>

        <p>
          Firebase Authentication and Firestore connect the
          system while keeping operational data associated
          with the correct outlet.
        </p>
      </article>

      <div className="case-solution-arrow">
        →
      </div>

      <article>
        <div className="case-solution-number">03</div>

        <div className="case-solution-icon">
          <Monitor size={23} />
        </div>

        <span>OWNER LEVEL</span>

        <h3>Centralized Control</h3>

        <p>
          The owner dashboard brings outlet information into
          one place for monitoring, analysis, purchase orders,
          and business-level management.
        </p>
      </article>

    </div>

  </div>
</section>
{/* SYSTEM ARCHITECTURE */}
<section className="case-architecture" id="architecture">
  <div className="case-container">

    <div className="case-section-label">
      <span>04</span>
      <span>/</span>
      <span>SYSTEM ARCHITECTURE</span>
    </div>

    <div className="case-architecture-heading">

      <h2>
        One backend.
        <br />
        Multiple <span>touchpoints.</span>
      </h2>

      <p>
        The system is designed around a shared cloud infrastructure.
        Outlet applications and the owner dashboard access the same
        operational ecosystem while outlet-specific data remains
        separated through outlet identity.
      </p>

    </div>


    <div className="architecture-board">

      {/* TOP */}
      <div className="architecture-top">

        <div className="architecture-client">
          <div className="architecture-client-icon">
            <Smartphone size={24} />
          </div>

          <span>OUTLET CLIENT</span>

          <h3>Flutter App</h3>

          <p>
            Daily operational interface used independently
            by each outlet.
          </p>

          <div className="architecture-mini-tags">
            <span>Sales</span>
            <span>Stock</span>
            <span>Expenses</span>
            <span>PO</span>
          </div>
        </div>


        <div className="architecture-center">

          <div className="architecture-auth">
            <span>IDENTITY LAYER</span>

            <strong>
              Firebase Authentication
            </strong>

            <small>
              User authentication + outlet identity
            </small>
          </div>


          <div className="architecture-line architecture-line-top">
            <i />
            <span>AUTHENTICATED ACCESS</span>
            <i />
          </div>


          <div className="architecture-database">

            <div className="architecture-database-icon">
              <Database size={27} />
            </div>

            <span>CLOUD DATA LAYER</span>

            <h3>Cloud Firestore</h3>

            <p>
              Central operational database shared by the
              mobile application and owner web dashboard.
            </p>

            <div className="architecture-collections">
              <span>transactions</span>
              <span>expenses</span>
              <span>inventory</span>
              <span>purchaseOrders</span>
              <span>outlets</span>
            </div>

          </div>

        </div>


        <div className="architecture-client">
          <div className="architecture-client-icon">
            <Monitor size={24} />
          </div>

          <span>OWNER CLIENT</span>

          <h3>Next.js Web</h3>

          <p>
            Centralized dashboard for monitoring and
            managing business operations.
          </p>

          <div className="architecture-mini-tags">
            <span>Analytics</span>
            <span>Outlets</span>
            <span>PO</span>
            <span>Control</span>
          </div>
        </div>

      </div>


      {/* DATA FLOW */}
      <div className="architecture-flow">

        <div>
          <span>01</span>
          <strong>Outlet Activity</strong>
          <small>
            Operational data is created from the outlet app.
          </small>
        </div>

        <div className="architecture-flow-arrow">
          →
        </div>

        <div>
          <span>02</span>
          <strong>Cloud Sync</strong>
          <small>
            Data is stored and synchronized through Firestore.
          </small>
        </div>

        <div className="architecture-flow-arrow">
          →
        </div>

        <div>
          <span>03</span>
          <strong>Owner Visibility</strong>
          <small>
            Centralized data becomes available to the owner web.
          </small>
        </div>

      </div>


      {/* OUTLET ISOLATION */}
      <div className="architecture-isolation">

        <div>
          <span>MULTI-OUTLET DATA MODEL</span>

          <strong>
            Dynamic outlet isolation
            through <em>outletId</em>.
          </strong>
        </div>

        <p>
          Each operational record is associated with an outlet,
          allowing the same system architecture to support multiple
          locations without building separate application logic for
          every outlet.
        </p>

        <div className="architecture-outlets">
          <span>OUTLET A</span>
          <i />
          <span>OUTLET B</span>
          <i />
          <span>OUTLET N</span>
        </div>

      </div>

    </div>

  </div>
</section>
{/* SALES WORKFLOW */}
<section className="case-sales" id="sales">
  <div className="case-container">

    <div className="case-section-label">
      <span>05</span>
      <span>/</span>
      <span>SALES WORKFLOW</span>
    </div>

    <div className="sales-heading">
      <div>
        <span className="sales-kicker">OUTLET → OWNER</span>

        <h2>
          From every order
          <br />
          to <span>business insight.</span>
        </h2>
      </div>

      <p>
        Sales begin at outlet level. Each transaction recorded
        through the mobile application becomes part of the
        centralized data used by the owner dashboard for
        monitoring sales, revenue, products, and outlet performance.
      </p>
    </div>


    {/* =====================================================
        PHASE 01 — OUTLET APP
    ====================================================== */}

    <div className="sales-phase">

      <div className="sales-phase-header">
        <div className="sales-phase-number">01</div>

        <div>
          <span>OUTLET OPERATIONS</span>
          <h3>Sales begin on the mobile app.</h3>
        </div>

        <p>
          Staff access the outlet dashboard, select products,
          complete an order, and the resulting sales data becomes
          available in the outlet&apos;s transaction records.
        </p>
      </div>


      <div className="sales-mobile-showcase">

        <div className="sales-phone sales-phone-secondary">
          <div className="sales-phone-label">
            <span>01</span>
            Outlet Dashboard
          </div>

          <div className="sales-phone-frame">
            <Image
              src="/assets/projects/tuah-kopi/sales/01-app-dashboard.jpg"
              alt="Tuah Kopi outlet application dashboard"
              width={720}
              height={1520}
            />
          </div>
        </div>


        <div className="sales-phone sales-phone-main">
          <div className="sales-phone-label">
            <span>02</span>
            Product Selection
          </div>

          <div className="sales-phone-frame">
            <Image
              src="/assets/projects/tuah-kopi/sales/02-app-menu.jpg"
              alt="Tuah Kopi mobile application product menu"
              width={720}
              height={1520}
            />
          </div>
        </div>


        <div className="sales-phone sales-phone-secondary">
          <div className="sales-phone-label">
            <span>03</span>
            Sales Report
          </div>

          <div className="sales-phone-frame">
            <Image
              src="/assets/projects/tuah-kopi/sales/03-app-sales-report.jpg"
              alt="Tuah Kopi daily sales report"
              width={720}
              height={1520}
            />
          </div>
        </div>

      </div>

    </div>


    {/* =====================================================
        DATA TRANSITION
    ====================================================== */}

    <div className="sales-sync">

      <div className="sales-sync-line" />

      <div className="sales-sync-center">
        <div className="sales-sync-icon">
          <Database size={19} />
        </div>

        <div>
          <span>CENTRALIZED DATA</span>
          <strong>Sales synchronized through Firestore</strong>
        </div>
      </div>

      <div className="sales-sync-line" />

    </div>


    {/* =====================================================
        PHASE 02 — OWNER WEB
    ====================================================== */}

    <div className="sales-phase sales-owner-phase">

      <div className="sales-phase-header">
        <div className="sales-phase-number">02</div>

        <div>
          <span>OWNER VISIBILITY</span>
          <h3>One transaction. Multiple perspectives.</h3>
        </div>

        <p>
          The same operational data can be viewed at business,
          sales, and individual outlet level through the
          centralized owner dashboard.
        </p>
      </div>


      <div className="sales-web-showcase">

        <article className="sales-web-featured">
          <div className="sales-web-caption">
            <div>
              <span>04 / OWNER DASHBOARD</span>
              <strong>Business Overview</strong>
            </div>

            <p>
              Revenue, transactions, expenses, growth,
              and monthly performance in one view.
            </p>
          </div>

          <div className="sales-browser">
            <div className="sales-browser-bar">
              <div>
                <i />
                <i />
                <i />
              </div>

              <span>owner.tuahkopi / dashboard</span>
            </div>

            <Image
              src="/assets/projects/tuah-kopi/sales/04-owner-dashboard.png"
              alt="Tuah Kopi owner dashboard"
              width={1728}
              height={900}
            />
          </div>
        </article>


        <div className="sales-web-grid">

          <article>
            <div className="sales-web-caption">
              <div>
                <span>05 / SALES</span>
                <strong>Sales Performance</strong>
              </div>
            </div>

            <div className="sales-browser">
              <div className="sales-browser-bar">
                <div>
                  <i />
                  <i />
                  <i />
                </div>

                <span>owner.tuahkopi / sales</span>
              </div>

              <Image
                src="/assets/projects/tuah-kopi/sales/05-owner-sales.png"
                alt="Tuah Kopi owner sales analytics"
                width={1728}
                height={900}
              />
            </div>
          </article>


          <article>
            <div className="sales-web-caption">
              <div>
                <span>06 / OUTLET DETAIL</span>
                <strong>Outlet Performance</strong>
              </div>
            </div>

            <div className="sales-browser">
              <div className="sales-browser-bar">
                <div>
                  <i />
                  <i />
                  <i />
                </div>

                <span>owner.tuahkopi / outlets</span>
              </div>

              <Image
                src="/assets/projects/tuah-kopi/sales/06-owner-outlet.png"
                alt="Tuah Kopi individual outlet performance"
                width={1728}
                height={900}
              />
            </div>
          </article>

        </div>

      </div>

    </div>


    {/* =====================================================
        FLOW SUMMARY
    ====================================================== */}

    <div className="sales-flow-summary">

      <div>
        <span>01</span>
        <strong>Order Created</strong>
        <small>Outlet App</small>
      </div>

      <i>→</i>

      <div>
        <span>02</span>
        <strong>Transaction Stored</strong>
        <small>Firestore</small>
      </div>

      <i>→</i>

      <div>
        <span>03</span>
        <strong>Data Aggregated</strong>
        <small>Per Outlet</small>
      </div>

      <i>→</i>

      <div>
        <span>04</span>
        <strong>Owner Monitoring</strong>
        <small>Owner Web</small>
      </div>

    </div>

  </div>
</section>
{/* PURCHASE ORDER WORKFLOW */}
<section className="case-po" id="purchase-order">
  <div className="case-container">

    <div className="case-section-label">
      <span>06</span>
      <span>/</span>
      <span>PURCHASE ORDER WORKFLOW</span>
    </div>

    <div className="po-heading">
      <div>
        <span className="po-kicker">OUTLET ↔ OWNER</span>

        <h2>
          A complete PO journey,
          <br />
          <span>from request to invoice.</span>
        </h2>
      </div>

      <p>
        Purchase orders connect outlet requirements with centralized
        owner control. The workflow covers submission, processing,
        monitoring, status tracking, and final purchase documentation
        through one connected system.
      </p>
    </div>


    {/* =====================================================
        PHASE 01 — OUTLET APP
    ====================================================== */}

    <div className="po-stage">

      <div className="po-stage-heading">
        <div className="po-stage-number">01</div>

        <div>
          <span>OUTLET APP</span>
          <h3>Request & track purchase orders.</h3>
        </div>

        <p>
          The outlet starts the process from the mobile application,
          submits its requirements, and can continue monitoring the
          order as it moves through the PO workflow.
        </p>
      </div>


      <div className="po-mobile-journey">

        <article className="po-mobile-step">
          <div className="po-step-meta">
            <span>01</span>
            <div>
              <small>REQUEST</small>
              <strong>Pengajuan PO</strong>
            </div>
          </div>

          <div className="po-phone-frame">
            <Image
              src="/assets/projects/tuah-kopi/po/01-apk-pengajuan-po.jpg"
              alt="Tuah Kopi purchase order submission on outlet application"
              width={720}
              height={1520}
            />
          </div>
        </article>


        <div className="po-journey-arrow">
          <span>SUBMIT</span>
          <i>→</i>
        </div>


        <article className="po-mobile-step po-mobile-step-main">
          <div className="po-step-meta">
            <span>02</span>
            <div>
              <small>PROCESS</small>
              <strong>Proses PO</strong>
            </div>
          </div>

          <div className="po-phone-frame">
            <Image
              src="/assets/projects/tuah-kopi/po/02-apk-proses-po.jpg"
              alt="Tuah Kopi purchase order process on outlet application"
              width={720}
              height={1520}
            />
          </div>
        </article>


        <div className="po-journey-arrow">
          <span>TRACK</span>
          <i>→</i>
        </div>


        <article className="po-mobile-step">
          <div className="po-step-meta">
            <span>03</span>
            <div>
              <small>MONITOR</small>
              <strong>Pantau PO</strong>
            </div>
          </div>

          <div className="po-phone-frame">
            <Image
              src="/assets/projects/tuah-kopi/po/03-apk-pantau-po.jpg"
              alt="Tuah Kopi purchase order monitoring on outlet application"
              width={720}
              height={1520}
            />
          </div>
        </article>

      </div>

    </div>


    {/* =====================================================
        APP → OWNER TRANSITION
    ====================================================== */}

    <div className="po-transition">

      <div className="po-transition-side">
        <span>OUTLET APP</span>
        <strong>PO Request</strong>
      </div>

      <div className="po-transition-path">
        <i />
        <div>
          <Database size={18} />
        </div>
        <i />
      </div>

      <div className="po-transition-side po-transition-side-right">
        <span>OWNER WEB</span>
        <strong>Centralized Processing</strong>
      </div>

    </div>


    {/* =====================================================
        PHASE 02 — OWNER WEB
    ====================================================== */}

    <div className="po-stage po-owner-stage">

      <div className="po-stage-heading">
        <div className="po-stage-number">02</div>

        <div>
          <span>OWNER WEB</span>
          <h3>Monitor, track & complete the order.</h3>
        </div>

        <p>
          Submitted purchase orders become available on the owner
          platform, providing centralized visibility throughout
          processing and final documentation.
        </p>
      </div>


      <div className="po-owner-showcase">

        {/* OWNER MONITORING */}
        <article className="po-owner-featured">

          <div className="po-owner-copy">
            <span>04 / MONITORING</span>

            <h4>Central PO monitoring.</h4>

            <p>
              Incoming purchase orders can be monitored from the
              owner platform together with their current operational
              status.
            </p>
          </div>

          <div className="po-browser">
            <div className="po-browser-bar">
              <div>
                <i />
                <i />
                <i />
              </div>

              <span>owner.tuahkopi / purchase-orders</span>
            </div>

            <Image
              src="/assets/projects/tuah-kopi/po/04-owner-monitoring-po.png"
              alt="Tuah Kopi owner purchase order monitoring"
              width={1728}
              height={900}
            />
          </div>

        </article>


        {/* TRACKING + DOCUMENTATION — COMBINED FINAL PO STAGES */}
        <article className="po-final-pair">

          <div className="po-final-visual po-final-visual-tracking">
            <div className="po-browser po-final-browser">
              <div className="po-browser-bar">
                <div>
                  <i />
                  <i />
                  <i />
                </div>

                <span>owner.tuahkopi / purchase-orders / tracking</span>
              </div>

              <Image
                src="/assets/projects/tuah-kopi/po/05-owner-lacak-po.png"
                alt="Tuah Kopi owner purchase order tracking"
                width={1728}
                height={900}
              />
            </div>
          </div>


          <div className="po-final-copy">

            <div className="po-final-copy-item po-final-copy-tracking">
              <div className="po-final-meta po-final-meta-left">
                <span className="po-final-arrow">←</span>
                <span>05 / TRACKING</span>
              </div>

              <h4>Track every stage.</h4>

              <p>
                Order progress remains visible as the PO moves through
                its operational lifecycle, allowing both sides of the
                system to follow its current state.
              </p>
            </div>


            <div className="po-final-copy-item po-final-copy-documentation">
              <div className="po-final-meta po-final-meta-right">
                <span>06 / DOCUMENTATION</span>
                <span className="po-final-arrow">→</span>
              </div>

              <h4>Final purchase documentation.</h4>

              <p>
                The workflow concludes with structured purchase
                documentation, keeping the completed PO connected
                with its operational history.
              </p>
            </div>

          </div>


          <div className="po-final-visual po-final-visual-documentation">
            <div className="po-browser po-final-browser">
              <div className="po-browser-bar">
                <div>
                  <i />
                  <i />
                  <i />
                </div>

                <span>owner.tuahkopi / purchase-orders / invoice</span>
              </div>

              <Image
                src="/assets/projects/tuah-kopi/po/06-owner-invoice-po.png"
                alt="Tuah Kopi purchase order invoice"
                width={1728}
                height={900}
              />
            </div>
          </div>

        </article>

      </div>

    </div>


    {/* =====================================================
        PO LIFECYCLE
    ====================================================== */}

    <div className="po-lifecycle">

      <div className="po-lifecycle-heading">
        <span>PO LIFECYCLE</span>
        <strong>One request. One traceable process.</strong>
      </div>

      <div className="po-lifecycle-flow">

        <div>
          <span>01</span>
          <strong>Submitted</strong>
          <small>Outlet App</small>
        </div>

        <i>→</i>

        <div>
          <span>02</span>
          <strong>Waiting</strong>
          <small>Owner Review</small>
        </div>

        <i>→</i>

        <div>
          <span>03</span>
          <strong>Processed</strong>
          <small>Owner Web</small>
        </div>

        <i>→</i>

        <div>
          <span>04</span>
          <strong>Shipped</strong>
          <small>Order Progress</small>
        </div>

        <i>→</i>

        <div>
          <span>05</span>
          <strong>Completed</strong>
          <small>PO History</small>
        </div>

      </div>

      <div className="po-system-rule">
        <span>SYSTEM RULE</span>

        <p>
          Purchase orders that remain unprocessed for seven days
          are automatically cancelled by the system.
        </p>
      </div>

    </div>

  </div>
</section>
{/* STOCK & PRICING CONTROL */}
<section className="case-control" id="stock-pricing">
  <div className="case-container">

    <div className="case-section-label">
      <span>07</span>
      <span>/</span>
      <span>STOCK & PRICING CONTROL</span>
    </div>

    <div className="control-heading">

      <div>
        <span className="control-kicker">OPERATIONAL CONTROL</span>

        <h2>
          Monitor stock.
          <br />
          Control <span>pricing.</span>
        </h2>
      </div>

      <p>
        Beyond sales and purchase orders, the system connects
        operational stock information with centralized owner
        controls, giving the business visibility over materials
        while keeping product pricing manageable from the owner
        platform.
      </p>

    </div>


    {/* =====================================================
        STOCK FLOW
    ====================================================== */}

    <div className="control-stock">

      <div className="control-section-heading">

        <div className="control-section-number">
          01
        </div>

        <div>
          <span>STOCK VISIBILITY</span>
          <h3>From outlet stock to owner monitoring.</h3>
        </div>

        <p>
          Stock information recorded at outlet level becomes
          visible through the centralized owner platform,
          allowing material availability to be monitored
          without checking each outlet independently.
        </p>

      </div>


      <div className="control-stock-showcase">

        {/* APP */}

        <article className="control-app">

          <div className="control-image-label">
            <span>01 / OUTLET APP</span>
            <strong>Stock Status</strong>
          </div>

          <div className="control-phone-frame">
            <Image
              src="/assets/projects/tuah-kopi/control/01-apk-status-stok.jpg"
              alt="Tuah Kopi outlet stock status"
              width={720}
              height={1520}
            />
          </div>

        </article>


        {/* FLOW */}

        <div className="control-data-flow">

          <div className="control-flow-line" />

          <div className="control-flow-node">
            <Database size={18} />

            <span>
              STOCK
              <br />
              DATA
            </span>
          </div>

          <div className="control-flow-line" />

        </div>


        {/* OWNER */}

        <article className="control-owner-stock">

          <div className="control-image-label">
            <span>02 / OWNER WEB</span>
            <strong>Raw Material Monitoring</strong>
          </div>

          <div className="control-browser">

            <div className="control-browser-bar">

              <div>
                <i />
                <i />
                <i />
              </div>

              <span>
                owner.tuahkopi / inventory
              </span>

            </div>

            <Image
              src="/assets/projects/tuah-kopi/control/02-owner-status-bahan-baku.png"
              alt="Tuah Kopi owner raw material stock monitoring"
              width={1728}
              height={900}
            />

          </div>

        </article>

      </div>

    </div>


    {/* =====================================================
        PRICING CONTROL
    ====================================================== */}

    <div className="control-pricing">

      <div className="control-section-heading">

        <div className="control-section-number">
          02
        </div>

        <div>
          <span>CENTRALIZED MANAGEMENT</span>
          <h3>Product pricing from one place.</h3>
        </div>

        <p>
          Product pricing can be managed from the owner
          platform, providing a centralized control point
          for operational product configuration.
        </p>

      </div>


      <div className="control-pricing-showcase">

        <div className="control-pricing-copy">

  <span>DYNAMIC PRICING SYSTEM</span>

  <h4>
    One pricing system.
    <br />
    Two control modes.
  </h4>

  <p>
    Product pricing is synchronized between the owner platform
    and outlet application, while scheduled pricing rules can
    automatically apply event prices at predefined times.
  </p>

  <div className="control-pricing-points">

    <div>
      <span>01</span>

      <p>
        <strong>Owner-Controlled Pricing</strong>
        Prices changed from the owner web are automatically
        reflected in the outlet application.
      </p>
    </div>

    <div>
      <span>02</span>

      <p>
        <strong>Scheduled Event Pricing</strong>
        Predefined pricing rules automatically activate
        according to the configured event schedule.
      </p>
    </div>

    <div>
      <span>03</span>

      <p>
        <strong>Automatic App Update</strong>
        Outlet staff always work with the currently active
        product price without manually updating each device.
      </p>
    </div>

  </div>

</div>


        <div className="control-pricing-screen">

          <div className="control-image-label">
            <span>03 / OWNER WEB</span>
            <strong>Product Price Management</strong>
          </div>

          <div className="control-browser">

            <div className="control-browser-bar">

              <div>
                <i />
                <i />
                <i />
              </div>

              <span>
                owner.tuahkopi / product-pricing
              </span>

            </div>

            <Image
              src="/assets/projects/tuah-kopi/control/03-owner-kelola-harga-produk.png"
              alt="Tuah Kopi owner product price management"
              width={1728}
              height={900}
            />

          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        SUMMARY
    ====================================================== */}

    <div className="control-summary">

      <div>
        <span>OUTLET</span>
        <strong>Operational Stock</strong>
      </div>

      <i>→</i>

      <div>
        <span>CLOUD</span>
        <strong>Shared Data</strong>
      </div>

      <i>→</i>

      <div>
        <span>OWNER</span>
        <strong>Monitoring & Control</strong>
      </div>

    </div>

  </div>
</section>
{/* EXPENSE WORKFLOW */}
<section className="case-expenses" id="expenses">
  <div className="case-container">

    <div className="case-section-label">
      <span>08</span>
      <span>/</span>
      <span>EXPENSE WORKFLOW</span>
    </div>

    <div className="expenses-heading">

      <div>
        <span className="expenses-kicker">OUTLET → OWNER</span>

        <h2>
          Record locally.
          <br />
          Monitor <span>centrally.</span>
        </h2>
      </div>

      <p>
        Outlet expenses are recorded directly through the mobile
        application and connected to the corresponding outlet.
        The same data becomes available to the owner for centralized
        operational monitoring.
      </p>

    </div>


    {/* =====================================================
        EXPENSE FLOW
    ====================================================== */}

    <div className="expenses-showcase">

      {/* APP */}

      <article className="expenses-app">

        <div className="expenses-screen-label">
          <span>01 / OUTLET APP</span>
          <strong>Expense Recording</strong>
        </div>

        <div className="expenses-phone-frame">
          <Image
            src="/assets/projects/tuah-kopi/expenses/01-apk-pengeluaran.jpg"
            alt="Tuah Kopi outlet expense recording"
            width={720}
            height={1520}
          />
        </div>

      </article>


      {/* FLOW */}

      <div className="expenses-flow">

        <div className="expenses-flow-line" />

        <div className="expenses-flow-center">

          <div className="expenses-flow-icon">
            <Database size={19} />
          </div>

          <span>EXPENSE DATA</span>

          <strong>
            Firestore
          </strong>

          <small>
            Linked by outletId
          </small>

        </div>

        <div className="expenses-flow-line" />

      </div>


      {/* OWNER */}

      <article className="expenses-owner">

        <div className="expenses-screen-label">
          <span>02 / OWNER WEB</span>
          <strong>Outlet Expense Monitoring</strong>
        </div>

        <div className="expenses-browser">

          <div className="expenses-browser-bar">

            <div>
              <i />
              <i />
              <i />
            </div>

            <span>
              owner.tuahkopi / outlets
            </span>

          </div>

          <Image
            src="/assets/projects/tuah-kopi/expenses/02-owner-pengeluaran.png"
            alt="Tuah Kopi owner expense monitoring"
            width={1728}
            height={900}
          />

        </div>

      </article>

    </div>


    {/* =====================================================
        SUMMARY
    ====================================================== */}

    <div className="expenses-summary">

      <div>
        <span>01</span>

        <div>
          <strong>Expense Recorded</strong>
          <small>Outlet Application</small>
        </div>
      </div>

      <i>→</i>

      <div>
        <span>02</span>

        <div>
          <strong>Outlet Identified</strong>
          <small>outletId</small>
        </div>
      </div>

      <i>→</i>

      <div>
        <span>03</span>

        <div>
          <strong>Data Stored</strong>
          <small>Cloud Firestore</small>
        </div>
      </div>

      <i>→</i>

      <div>
        <span>04</span>

        <div>
          <strong>Owner Monitoring</strong>
          <small>Owner Web</small>
        </div>
      </div>

    </div>

  </div>
</section>
{/* ENGINEERING HIGHLIGHTS */}
<section className="case-engineering" id="engineering">
  <div className="case-container">

    <div className="case-section-label">
      <span>09</span>
      <span>/</span>
      <span>ENGINEERING HIGHLIGHTS</span>
    </div>

    <div className="engineering-heading">

      <div>
        <span className="engineering-kicker">BEYOND THE INTERFACE</span>

        <h2>
          Built as a system,
          <br />
          not just <span>screens.</span>
        </h2>
      </div>

      <p>
        Behind the mobile application and owner dashboard is an
        architecture designed to keep outlet data separated,
        synchronized, and manageable as the system grows.
      </p>

    </div>


    <div className="engineering-grid">

      {/* 01 */}
      <article className="engineering-card engineering-card-featured">

        <div className="engineering-card-top">
          <span>01</span>
          <small>MULTI-OUTLET ARCHITECTURE</small>
        </div>

        <h3>
          One system.
          <br />
          Multiple outlets.
        </h3>

        <p>
          Operational data is associated with an outlet identity,
          allowing transactions, expenses, stock, and other records
          to remain separated while still being accessible through
          the centralized owner platform.
        </p>

        <div className="engineering-visual outlets-visual">

          <div className="engineering-owner-node">
            <span>OWNER</span>
          </div>

          <div className="engineering-node-lines">
            <i />
            <i />
            <i />
          </div>

          <div className="engineering-outlet-nodes">
            <span>OUTLET 01</span>
            <span>OUTLET 02</span>
            <span>OUTLET N</span>
          </div>

        </div>

      </article>


      {/* 02 */}
      <article className="engineering-card">

        <div className="engineering-card-top">
          <span>02</span>
          <small>REAL-TIME DATA</small>
        </div>

        <h3>Connected data flow.</h3>

        <p>
          Firebase Firestore connects outlet operations with the
          owner platform, allowing operational information to move
          through a shared cloud data layer.
        </p>

        <div className="engineering-mini-flow">
          <span>APP</span>
          <i>→</i>
          <strong>FIRESTORE</strong>
          <i>→</i>
          <span>WEB</span>
        </div>

      </article>


      {/* 03 */}
      <article className="engineering-card">

        <div className="engineering-card-top">
          <span>03</span>
          <small>AUTHENTICATION</small>
        </div>

        <h3>Outlet-level access.</h3>

        <p>
          Firebase Authentication provides authenticated access,
          while each outlet account is associated with its own
          operational identity inside the system.
        </p>

        <div className="engineering-code-line">
          <span>AUTH</span>
          <code>user → outletId → data</code>
        </div>

      </article>


      {/* 04 */}
      <article className="engineering-card">

        <div className="engineering-card-top">
          <span>04</span>
          <small>DYNAMIC CONFIGURATION</small>
        </div>

        <h3>Outlets without hardcoding.</h3>

        <p>
          Outlet information is loaded from a centralized master
          collection, allowing the platform to support additional
          outlets without maintaining separate outlet lists across
          individual pages.
        </p>

        <div className="engineering-code-line">
          <span>DATA</span>
          <code>outlets / {"{outletId}"}</code>
        </div>

      </article>


      {/* 05 */}
      <article className="engineering-card">

        <div className="engineering-card-top">
          <span>05</span>
          <small>DYNAMIC PRICING</small>
        </div>

        <h3>Manual + automated rules.</h3>

        <p>
          Product prices can be changed centrally by the owner or
          activated automatically through scheduled event rules,
          with active pricing reflected in the outlet application.
        </p>

        <div className="engineering-pricing-flow">
          <div>
            <small>OWNER</small>
            <strong>Manual Price</strong>
          </div>

          <span>+</span>

          <div>
            <small>EVENT</small>
            <strong>Scheduled Rule</strong>
          </div>

          <i>→</i>

          <div>
            <small>ACTIVE</small>
            <strong>App Price</strong>
          </div>
        </div>

      </article>


      {/* 06 */}
      <article className="engineering-card engineering-card-wide">

        <div className="engineering-card-top">
          <span>06</span>
          <small>RESPONSIVE SYSTEM</small>
        </div>

        <div className="engineering-wide-content">

          <div>
            <h3>
              Designed across
              <br />
              different screens.
            </h3>

            <p>
              The outlet application adapts across Android phones
              and tablets, while the owner platform is designed as
              a responsive web dashboard for operational monitoring.
            </p>
          </div>

          <div className="engineering-device-types">

            <div>
              <span>PHONE</span>
              <i />
            </div>

            <div>
              <span>TABLET</span>
              <i />
            </div>

            <div>
              <span>DESKTOP</span>
              <i />
            </div>

          </div>

        </div>

      </article>

    </div>

  </div>
</section>
{/* TECHNOLOGY STACK */}
<section className="case-technology" id="technology">
  <div className="case-container">

    <div className="case-section-label">
      <span>10</span>
      <span>/</span>
      <span>TECHNOLOGY STACK</span>
    </div>

    <div className="technology-heading">

      <div>
        <span className="technology-kicker">BUILT WITH</span>

        <h2>
          The technology
          <br />
          behind the <span>system.</span>
        </h2>
      </div>

      <p>
        The platform combines mobile, web, authentication,
        cloud database, and development tools into one
        connected operational system.
      </p>

    </div>


    <div className="technology-system">

      {/* MOBILE */}
      <article className="technology-platform">

        <div className="technology-platform-number">01</div>

        <span className="technology-platform-label">
          OUTLET APPLICATION
        </span>

        <h3>Mobile</h3>

        <div className="technology-items">
          <div>
            <strong>Flutter</strong>
            <small>Application Framework</small>
          </div>

          <div>
            <strong>Dart</strong>
            <small>Programming Language</small>
          </div>
        </div>

      </article>


      <div className="technology-connection">
        <i />
        <span>SYNC</span>
        <i />
      </div>


      {/* BACKEND */}
      <article className="technology-platform technology-platform-main">

        <div className="technology-platform-number">02</div>

        <span className="technology-platform-label">
          CLOUD INFRASTRUCTURE
        </span>

        <h3>Firebase</h3>

        <div className="technology-items">
          <div>
            <strong>Cloud Firestore</strong>
            <small>Operational Database</small>
          </div>

          <div>
            <strong>Firebase Auth</strong>
            <small>Authentication</small>
          </div>
        </div>

      </article>


      <div className="technology-connection">
        <i />
        <span>SYNC</span>
        <i />
      </div>


      {/* WEB */}
      <article className="technology-platform">

        <div className="technology-platform-number">03</div>

        <span className="technology-platform-label">
          OWNER PLATFORM
        </span>

        <h3>Web</h3>

        <div className="technology-items">
          <div>
            <strong>Next.js</strong>
            <small>Web Framework</small>
          </div>

          <div>
            <strong>TypeScript</strong>
            <small>Application Language</small>
          </div>
        </div>

      </article>

    </div>


    {/* DEVELOPMENT TOOLING */}

    <div className="technology-tooling">

      <div className="technology-tooling-title">
        <span>DEVELOPMENT WORKFLOW</span>

        <strong>
          Tools used to build and maintain the system.
        </strong>
      </div>

      <div className="technology-tooling-items">

        <div>
          <span>01</span>
          <strong>Git</strong>
          <small>Version Control</small>
        </div>

        <div>
          <span>02</span>
          <strong>GitHub</strong>
          <small>Source Repository</small>
        </div>

        <div>
          <span>03</span>
          <strong>VS Code</strong>
          <small>Development Environment</small>
        </div>

      </div>

    </div>

  </div>
</section>
{/* PROJECT OUTCOME */}
<section className="case-outcome" id="outcome">
  <div className="case-container">

    <div className="case-section-label">
      <span>11</span>
      <span>/</span>
      <span>PROJECT OUTCOME</span>
    </div>

    <div className="outcome-heading">

      <div>
        <span className="outcome-kicker">THE RESULT</span>

        <h2>
          From separate tasks
          <br />
          to one <span>connected system.</span>
        </h2>
      </div>

      <p>
        Tuah Kopi brings core outlet operations and owner-level
        monitoring into a shared digital ecosystem, connecting
        day-to-day activities with centralized business control.
      </p>

    </div>


    <div className="outcome-grid">

      <article className="outcome-card">
        <span>01</span>

        <div>
          <small>CENTRALIZED VISIBILITY</small>
          <h3>One place to monitor the business.</h3>

          <p>
            Sales, transactions, expenses, outlet performance,
            purchase orders, and operational information can be
            viewed through the owner platform.
          </p>
        </div>
      </article>


      <article className="outcome-card">
        <span>02</span>

        <div>
          <small>CONNECTED OPERATIONS</small>
          <h3>Outlet activity flows into the same ecosystem.</h3>

          <p>
            The mobile application handles day-to-day outlet
            operations while relevant data is synchronized with
            the centralized web platform.
          </p>
        </div>
      </article>


      <article className="outcome-card">
        <span>03</span>

        <div>
          <small>MULTI-OUTLET FOUNDATION</small>
          <h3>Designed to grow beyond a single outlet.</h3>

          <p>
            Outlet-based data architecture and a centralized
            outlet master allow the system to support additional
            locations without rebuilding individual pages around
            hardcoded outlet lists.
          </p>
        </div>
      </article>


      <article className="outcome-card">
        <span>04</span>

        <div>
          <small>AUTOMATED BUSINESS RULES</small>
          <h3>Less manual operational configuration.</h3>

          <p>
            Centralized pricing synchronization and scheduled
            event pricing allow active product prices to update
            automatically across the outlet application.
          </p>
        </div>
      </article>

    </div>


    <div className="outcome-statement">

      <span>PROJECT SUMMARY</span>

      <p>
        The result is not simply an outlet application
        and an admin dashboard.
        <strong>
          It is a connected operational system built around
          how the business actually works.
        </strong>
      </p>

    </div>

  </div>
</section>
{/* CASE STUDY CLOSING */}
<section className="case-closing">
  <div className="case-container">

    <div className="case-closing-inner">

      <div className="case-closing-label">
        <span>END OF CASE STUDY</span>
        <i />
        <span>TUAH KOPI / 2026</span>
      </div>

      <div className="case-closing-content">

        <h2>
          Have a system
          <br />
          <span>in mind?</span>
        </h2>

        <div className="case-closing-right">

          <p>
            I&apos;m interested in building practical digital
            systems that solve real operational problems.
          </p>

          <div className="case-closing-actions">

            <Link
              href="/projects"
              className="case-closing-secondary"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            <Link
              href="/#contact"
              className="case-closing-primary"
            >
              Let&apos;s Talk
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </div>

      <div className="case-closing-signature">
        <span>DESIGNED & DEVELOPED BY</span>
        <strong>Fazlur Rahman</strong>
      </div>

    </div>

  </div>
</section>

      </main>

      <Footer />
    </>
  );
}