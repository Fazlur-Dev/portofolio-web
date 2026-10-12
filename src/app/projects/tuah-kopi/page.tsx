"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  ArrowUpRight,
  Smartphone,
  Monitor,
  Database,
} from "lucide-react";

export default function TuahKopiCaseStudy() {
    const { language } = useLanguage();
      const text = {
    en: {
      backToProjects: "Back to Projects",
      featuredCaseStudy: "FEATURED CASE STUDY",

      businessOperationsSystem: "BUSINESS OPERATIONS SYSTEM",
      heroDescription:
        "A connected mobile and web system designed to manage multi-outlet coffee shop operations from daily transactions to centralized owner monitoring.",

      mobileApp: "Mobile App",
      ownerWeb: "Owner Web",
      cloudBackend: "Cloud Backend",

      connectedOperations: "CONNECTED OPERATIONS",
      heroVisualTitle1: "From outlet",
      heroVisualTitle2: "to owner.",
      heroVisualDescription:
        "One operational ecosystem connecting everyday outlet activity with centralized business control.",

      outletApp: "OUTLET APP",
      dailyOperations: "Daily Operations",
      realTimeData: "REAL-TIME DATA",
      cloudInfrastructure: "Cloud Infrastructure",
      sync: "SYNC",
      centralizedControl: "Centralized Control",

      projectOverview: "PROJECT OVERVIEW",
      overviewTitle1: "Built around",
      overviewTitle2: "real operations.",

      overviewLead:
        "Tuah Kopi is a custom operational system designed to connect activities across multiple coffee shop outlets with a centralized platform for business owners.",

      overviewDescription:
        "The system combines a mobile application used at outlet level with an owner web dashboard. Operational data is stored and synchronized through Firebase, allowing each outlet to work independently while keeping information accessible from one centralized system.",

      role: "ROLE",
      roleValue: "Full-Stack Developer",
      platforms: "PLATFORMS",
      platformsValue: "Mobile + Web",
      year: "YEAR",
      status: "STATUS",
      statusValue: "Active Development",

      exploreSystem: "Explore the system",
            // 02 — THE PROBLEM
      problemLabel: "THE PROBLEM",
      problemTitle1: "Operations grow.",
      problemTitle2: "Complexity",
      problemTitleHighlight: "follows.",
      problemDescription:
        "Managing multiple outlets creates more than just additional transactions. It creates disconnected information, repetitive reporting, and less visibility for the business owner.",

      problem1Title: "Disconnected outlet data",
      problem1Description:
        "Sales, expenses, stock, and other operational activities need to remain separated by outlet while still being accessible centrally.",

      problem2Title: "Limited operational visibility",
      problem2Description:
        "Without a centralized system, understanding performance across outlets requires information to be collected and compared manually.",

      problem3Title: "Growing workflow complexity",
      problem3Description:
        "Transactions, inventory, expenses, purchase orders, and reporting become increasingly difficult to manage as operations expand.",

      // 03 — THE SOLUTION
      solutionLabel: "THE SOLUTION",
      solutionTitle1: "One connected",
      solutionTitle2: "operational system.",
      solutionDescription:
        "Instead of treating each operational need as a separate tool, the system connects outlet activities, shared data, and owner-level management through one architecture.",

      outletLevel: "OUTLET LEVEL",
      mobileOperations: "Mobile Operations",
      mobileOperationsDescription:
        "Employees use the mobile application for daily operational activities including sales, expenses, inventory, and purchase-order workflows.",

      dataLayer: "DATA LAYER",
      centralizedBackend: "Centralized Backend",
      centralizedBackendDescription:
        "Firebase Authentication and Firestore connect the system while keeping operational data associated with the correct outlet.",

      ownerLevel: "OWNER LEVEL",
      ownerCentralizedControl: "Centralized Control",
      ownerCentralizedControlDescription:
        "The owner dashboard brings outlet information into one place for monitoring, analysis, purchase orders, and business-level management.",
              // 04 — SYSTEM ARCHITECTURE
      architectureLabel: "SYSTEM ARCHITECTURE",
      architectureTitle1: "One backend.",
      architectureTitle2: "Multiple",
      architectureTitleHighlight: "touchpoints.",
      architectureDescription:
        "The system is designed around a shared cloud infrastructure. Outlet applications and the owner dashboard access the same operational ecosystem while outlet-specific data remains separated through outlet identity.",

      outletClient: "OUTLET CLIENT",
      outletClientDescription:
        "Daily operational interface used independently by each outlet.",
      sales: "Sales",
      stock: "Stock",
      expenses: "Expenses",

      identityLayer: "IDENTITY LAYER",
      authenticationDescription:
        "User authentication + outlet identity",
      authenticatedAccess: "AUTHENTICATED ACCESS",

      cloudDataLayer: "CLOUD DATA LAYER",
      firestoreDescription:
        "Central operational database shared by the mobile application and owner web dashboard.",

      ownerClient: "OWNER CLIENT",
      ownerClientDescription:
        "Centralized dashboard for monitoring and managing business operations.",
      analytics: "Analytics",
      outletsTag: "Outlets",
      control: "Control",

      outletActivity: "Outlet Activity",
      outletActivityDescription:
        "Operational data is created from the outlet app.",

      cloudSync: "Cloud Sync",
      cloudSyncDescription:
        "Data is stored and synchronized through Firestore.",

      ownerVisibility: "Owner Visibility",
      ownerVisibilityDescription:
        "Centralized data becomes available to the owner web.",

      multiOutletDataModel: "MULTI-OUTLET DATA MODEL",
      dynamicOutletIsolation: "Dynamic outlet isolation",
      through: "through",
      isolationDescription:
        "Each operational record is associated with an outlet, allowing the same system architecture to support multiple locations without building separate application logic for every outlet.",

      outletA: "OUTLET A",
      outletB: "OUTLET B",
      outletN: "OUTLET N",
            // 05 — SALES WORKFLOW
      salesWorkflowLabel: "SALES WORKFLOW",
      outletToOwner: "OUTLET → OWNER",
      salesWorkflowTitle1: "From every order",
      salesWorkflowTitle2: "business insight.",
      salesWorkflowDescription:
        "Every transaction starts at the outlet and becomes part of the centralized business data available to the owner.",

      outletOperations: "OUTLET OPERATIONS",
      salesBeginTitle: "Sales begin on the mobile app.",
      salesBeginDescription:
        "Outlet staff record customer orders directly through the mobile application, from product selection to transaction completion.",

      outletDashboard: "Outlet Dashboard",
      productSelection: "Product Selection",
      salesReport: "Sales Report",

      centralizedData: "CENTRALIZED DATA",
      salesSynchronized: "Sales synchronized through Firestore",

      ownerVisibilityPhase: "OWNER VISIBILITY",
      transactionPerspectiveTitle1: "One transaction.",
      transactionPerspectiveTitle2: "Multiple perspectives.",
      transactionPerspectiveDescription:
        "Once synchronized, sales data becomes available across the owner dashboard for business-wide monitoring and outlet-level analysis.",

      businessOverview: "Business Overview",
      businessOverviewDescription:
        "A centralized overview of sales performance and operational activity across the business.",

      salesPerformance: "Sales Performance",
      outletPerformance: "Outlet Performance",

      orderCreated: "Order Created",
      outletAppFlow: "Outlet App",

      transactionStored: "Transaction Stored",
      firestoreFlow: "Firestore",

      dataAggregated: "Data Aggregated",
      perOutlet: "Per Outlet",

      ownerMonitoring: "Owner Monitoring",
      ownerWebFlow: "Owner Web",
    },

    id: {
      backToProjects: "Kembali ke Proyek",
      featuredCaseStudy: "STUDI KASUS UNGGULAN",

      businessOperationsSystem: "SISTEM OPERASIONAL BISNIS",
      heroDescription:
        "Sistem mobile dan web yang saling terhubung untuk mengelola operasional kedai kopi multi-outlet, mulai dari transaksi harian hingga pemantauan terpusat oleh owner.",

      mobileApp: "Aplikasi Mobile",
      ownerWeb: "Web Owner",
      cloudBackend: "Backend Cloud",

      connectedOperations: "OPERASIONAL TERHUBUNG",
      heroVisualTitle1: "Dari outlet",
      heroVisualTitle2: "ke owner.",
      heroVisualDescription:
        "Satu ekosistem operasional yang menghubungkan aktivitas harian outlet dengan kontrol bisnis terpusat.",

      outletApp: "APLIKASI OUTLET",
      dailyOperations: "Operasional Harian",
      realTimeData: "DATA REAL-TIME",
      cloudInfrastructure: "Infrastruktur Cloud",
      sync: "SINKRONISASI",
      centralizedControl: "Kontrol Terpusat",

      projectOverview: "GAMBARAN PROYEK",
      overviewTitle1: "Dibangun berdasarkan",
      overviewTitle2: "operasional nyata.",

      overviewLead:
        "Tuah Kopi adalah sistem operasional khusus yang dirancang untuk menghubungkan aktivitas di berbagai outlet kedai kopi dengan satu platform terpusat untuk owner.",

      overviewDescription:
        "Sistem ini menggabungkan aplikasi mobile yang digunakan di tingkat outlet dengan dashboard web owner. Data operasional disimpan dan disinkronkan melalui Firebase, sehingga setiap outlet dapat bekerja secara independen sementara seluruh informasi tetap dapat diakses melalui satu sistem terpusat.",

      role: "PERAN",
      roleValue: "Full-Stack Developer",
      platforms: "PLATFORM",
      platformsValue: "Mobile + Web",
      year: "TAHUN",
      status: "STATUS",
      statusValue: "Dalam Pengembangan Aktif",

      exploreSystem: "Jelajahi sistem",
            // 02 — THE PROBLEM
      problemLabel: "PERMASALAHAN",
      problemTitle1: "Operasional berkembang.",
      problemTitle2: "Kompleksitas",
      problemTitleHighlight: "ikut meningkat.",
      problemDescription:
        "Mengelola banyak outlet bukan hanya menambah jumlah transaksi. Hal ini juga menciptakan informasi yang terpisah, pelaporan berulang, dan visibilitas yang lebih terbatas bagi owner.",

      problem1Title: "Data outlet yang terpisah",
      problem1Description:
        "Penjualan, pengeluaran, stok, dan aktivitas operasional lainnya harus tetap terpisah berdasarkan outlet, tetapi tetap dapat diakses secara terpusat.",

      problem2Title: "Visibilitas operasional terbatas",
      problem2Description:
        "Tanpa sistem terpusat, memahami performa antar-outlet mengharuskan informasi dikumpulkan dan dibandingkan secara manual.",

      problem3Title: "Alur kerja semakin kompleks",
      problem3Description:
        "Transaksi, stok, pengeluaran, purchase order, dan pelaporan menjadi semakin sulit dikelola ketika operasional terus berkembang.",

      // 03 — THE SOLUTION
      solutionLabel: "SOLUSI",
      solutionTitle1: "Satu sistem",
      solutionTitle2: "operasional terhubung.",
      solutionDescription:
        "Alih-alih menggunakan alat terpisah untuk setiap kebutuhan operasional, sistem ini menghubungkan aktivitas outlet, data bersama, dan pengelolaan oleh owner melalui satu arsitektur.",

      outletLevel: "TINGKAT OUTLET",
      mobileOperations: "Operasional Mobile",
      mobileOperationsDescription:
        "Karyawan menggunakan aplikasi mobile untuk aktivitas operasional harian, termasuk penjualan, pengeluaran, stok, dan alur purchase order.",

      dataLayer: "LAPISAN DATA",
      centralizedBackend: "Backend Terpusat",
      centralizedBackendDescription:
        "Firebase Authentication dan Firestore menghubungkan sistem sekaligus menjaga agar data operasional tetap terkait dengan outlet yang benar.",

      ownerLevel: "TINGKAT OWNER",
      ownerCentralizedControl: "Kontrol Terpusat",
      ownerCentralizedControlDescription:
        "Dashboard owner menyatukan informasi outlet dalam satu tempat untuk pemantauan, analisis, purchase order, dan pengelolaan bisnis.",
              // 04 — SYSTEM ARCHITECTURE
      architectureLabel: "ARSITEKTUR SISTEM",
      architectureTitle1: "Satu backend.",
      architectureTitle2: "Berbagai",
      architectureTitleHighlight: "titik akses.",
      architectureDescription:
        "Sistem ini dirancang menggunakan infrastruktur cloud bersama. Aplikasi outlet dan dashboard owner mengakses ekosistem operasional yang sama, sementara data setiap outlet tetap dipisahkan berdasarkan identitas outlet.",

      outletClient: "KLIEN OUTLET",
      outletClientDescription:
        "Antarmuka operasional harian yang digunakan secara independen oleh setiap outlet.",
      sales: "Penjualan",
      stock: "Stok",
      expenses: "Pengeluaran",

      identityLayer: "LAPISAN IDENTITAS",
      authenticationDescription:
        "Autentikasi pengguna + identitas outlet",
      authenticatedAccess: "AKSES TERAUTENTIKASI",

      cloudDataLayer: "LAPISAN DATA CLOUD",
      firestoreDescription:
        "Database operasional terpusat yang digunakan bersama oleh aplikasi mobile dan dashboard web owner.",

      ownerClient: "KLIEN OWNER",
      ownerClientDescription:
        "Dashboard terpusat untuk memantau dan mengelola operasional bisnis.",
      analytics: "Analitik",
      outletsTag: "Outlet",
      control: "Kontrol",

      outletActivity: "Aktivitas Outlet",
      outletActivityDescription:
        "Data operasional dibuat melalui aplikasi outlet.",

      cloudSync: "Sinkronisasi Cloud",
      cloudSyncDescription:
        "Data disimpan dan disinkronkan melalui Firestore.",

      ownerVisibility: "Visibilitas Owner",
      ownerVisibilityDescription:
        "Data terpusat tersedia untuk diakses melalui web owner.",

      multiOutletDataModel: "MODEL DATA MULTI-OUTLET",
      dynamicOutletIsolation: "Isolasi outlet dinamis",
      through: "melalui",
      isolationDescription:
        "Setiap data operasional dikaitkan dengan sebuah outlet, sehingga arsitektur sistem yang sama dapat mendukung banyak lokasi tanpa membangun logika aplikasi terpisah untuk setiap outlet.",

      outletA: "OUTLET A",
      outletB: "OUTLET B",
      outletN: "OUTLET N",
            // 05 — SALES WORKFLOW
      salesWorkflowLabel: "ALUR PENJUALAN",
      outletToOwner: "OUTLET → OWNER",
      salesWorkflowTitle1: "Dari setiap pesanan",
      salesWorkflowTitle2: "insight bisnis.",
      salesWorkflowDescription:
        "Setiap transaksi dimulai dari outlet dan menjadi bagian dari data bisnis terpusat yang dapat diakses oleh owner.",

      outletOperations: "OPERASIONAL OUTLET",
      salesBeginTitle: "Penjualan dimulai dari aplikasi mobile.",
      salesBeginDescription:
        "Staf outlet mencatat pesanan pelanggan langsung melalui aplikasi mobile, mulai dari pemilihan produk hingga transaksi selesai.",

      outletDashboard: "Dashboard Outlet",
      productSelection: "Pemilihan Produk",
      salesReport: "Laporan Penjualan",

      centralizedData: "DATA TERPUSAT",
      salesSynchronized: "Penjualan disinkronkan melalui Firestore",

      ownerVisibilityPhase: "VISIBILITAS OWNER",
      transactionPerspectiveTitle1: "Satu transaksi.",
      transactionPerspectiveTitle2: "Berbagai perspektif.",
      transactionPerspectiveDescription:
        "Setelah disinkronkan, data penjualan tersedia di dashboard owner untuk pemantauan bisnis secara menyeluruh dan analisis setiap outlet.",

      businessOverview: "Gambaran Bisnis",
      businessOverviewDescription:
        "Gambaran terpusat mengenai performa penjualan dan aktivitas operasional di seluruh bisnis.",

      salesPerformance: "Performa Penjualan",
      outletPerformance: "Performa Outlet",

      orderCreated: "Pesanan Dibuat",
      outletAppFlow: "Aplikasi Outlet",

      transactionStored: "Transaksi Disimpan",
      firestoreFlow: "Firestore",

      dataAggregated: "Data Diolah",
      perOutlet: "Per Outlet",

      ownerMonitoring: "Pemantauan Owner",
      ownerWebFlow: "Web Owner",
    },
  }[language];

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
              {text.backToProjects}
            </Link>

            <div className="case-eyebrow">
              <span>01</span>
              <span>/</span>
              <span>{text.featuredCaseStudy}</span>
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
                <span>{text.businessOperationsSystem}</span>

                <p>
                  {text.heroDescription}
                </p>

                <div className="case-hero-platforms">

                  <div>
                    <Smartphone size={17} />
                    {text.mobileApp}
                  </div>

                  <div>
                    <Monitor size={17} />
                    {text.ownerWeb}
                  </div>

                  <div>
                    <Database size={17} />
                    {text.cloudBackend}
                  </div>

                </div>
              </div>

            </div>

            {/* HERO VISUAL */}
            <div className="case-hero-visual">

              <div className="case-hero-visual-copy">
                <span>{text.connectedOperations}</span>

                <strong>
                  {text.heroVisualTitle1}
                  <br />
                  {text.heroVisualTitle2}
                </strong>

                <p>
                  {text.heroVisualDescription}
                </p>
              </div>

              <div className="case-hero-system">

                <div className="case-system-node">
                  <span>01</span>
                  <Smartphone size={22} />
                  <strong>{text.outletApp}</strong>
                  <small>{text.dailyOperations}</small>
                </div>

                <div className="case-system-connector">
                  <i />
                  <span>{text.realTimeData}</span>
                  <i />
                </div>

                <div className="case-system-node case-system-node-main">
                  <span>02</span>
                  <Database size={22} />
                  <strong>FIREBASE</strong>
                  <small>{text.cloudInfrastructure}</small>
                </div>

                <div className="case-system-connector">
                  <i />
                  <span>{text.sync}</span>
                  <i />
                </div>

                <div className="case-system-node">
                  <span>03</span>
                  <Monitor size={22} />
                  <strong>{text.ownerWeb.toUpperCase()}</strong>
                  <small>{text.centralizedControl}</small>
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
              <span>{text.projectOverview}</span>
            </div>

            <div className="case-overview-grid">

              <div className="case-overview-title">
                <h2>
                  {text.overviewTitle1}
                  <br />
                  <span>{text.overviewTitle2}</span>
                </h2>
              </div>

              <div className="case-overview-content">

                <p className="case-overview-lead">
                  {text.overviewLead}
                </p>

                <p>
                  {text.overviewDescription}
                </p>

                <div className="case-project-meta">

                  <div>
                    <span>{text.role}</span>
                    <strong>{text.roleValue}</strong>
                  </div>

                  <div>
                    <span>{text.platforms}</span>
                    <strong>{text.platformsValue}</strong>
                  </div>

                  <div>
                    <span>{text.year}</span>
                    <strong>2026</strong>
                  </div>

                  <div>
                    <span>{text.status}</span>
                    <strong>{text.statusValue}</strong>
                  </div>

                </div>

                <Link
                  href="#problem"
                  className="case-next-section"
                >
                  {text.exploreSystem}
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
              <span>{text.problemLabel}</span>
            </div>

            <div className="case-problem-grid">

              <div className="case-problem-heading">
                <h2>
                  {text.problemTitle1}
                  <br />
                  {text.problemTitle2}{" "}
                  <span>{text.problemTitleHighlight}</span>
                </h2>

                <p>
                  {text.problemDescription}
                </p>
              </div>

              <div className="case-problem-list">

                <article>
                  <span>01</span>

                  <div>
                    <h3>{text.problem1Title}</h3>

                    <p>
                      {text.problem1Description}
                    </p>
                  </div>
                </article>

                <article>
                  <span>02</span>

                  <div>
                    <h3>{text.problem2Title}</h3>

                    <p>
                      {text.problem2Description}
                    </p>
                  </div>
                </article>

                <article>
                  <span>03</span>

                  <div>
                    <h3>{text.problem3Title}</h3>

                    <p>
                      {text.problem3Description}
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
              <span>{text.solutionLabel}</span>
            </div>

            <div className="case-solution-heading">

              <h2>
                {text.solutionTitle1}
                <br />
                <span>{text.solutionTitle2}</span>
              </h2>

              <p>
                {text.solutionDescription}
              </p>

            </div>

            <div className="case-solution-flow">

              <article>
                <div className="case-solution-number">01</div>

                <div className="case-solution-icon">
                  <Smartphone size={23} />
                </div>

                <span>{text.outletLevel}</span>

                <h3>{text.mobileOperations}</h3>

                <p>
                  {text.mobileOperationsDescription}
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

                <span>{text.dataLayer}</span>

                <h3>{text.centralizedBackend}</h3>

                <p>
                  {text.centralizedBackendDescription}
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

                <span>{text.ownerLevel}</span>

                <h3>{text.ownerCentralizedControl}</h3>

                <p>
                  {text.ownerCentralizedControlDescription}
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
              <span>{text.architectureLabel}</span>
            </div>

            <div className="case-architecture-heading">

              <h2>
                {text.architectureTitle1}
                <br />
                {text.architectureTitle2}{" "}
                <span>{text.architectureTitleHighlight}</span>
              </h2>

              <p>
                {text.architectureDescription}
              </p>

            </div>


            <div className="architecture-board">

              {/* TOP */}
              <div className="architecture-top">

                <div className="architecture-client">
                  <div className="architecture-client-icon">
                    <Smartphone size={24} />
                  </div>

                  <span>{text.outletClient}</span>

                  <h3>Flutter App</h3>

                  <p>
                    {text.outletClientDescription}
                  </p>

                  <div className="architecture-mini-tags">
                    <span>{text.sales}</span>
                    <span>{text.stock}</span>
                    <span>{text.expenses}</span>
                    <span>PO</span>
                  </div>
                </div>


                <div className="architecture-center">

                  <div className="architecture-auth">
                    <span>{text.identityLayer}</span>

                    <strong>
                      Firebase Authentication
                    </strong>

                    <small>
                      {text.authenticationDescription}
                    </small>
                  </div>


                  <div className="architecture-line architecture-line-top">
                    <i />
                    <span>{text.authenticatedAccess}</span>
                    <i />
                  </div>


                  <div className="architecture-database">

                    <div className="architecture-database-icon">
                      <Database size={27} />
                    </div>

                    <span>{text.cloudDataLayer}</span>

                    <h3>Cloud Firestore</h3>

                    <p>
                      {text.firestoreDescription}
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

                  <span>{text.ownerClient}</span>

                  <h3>Next.js Web</h3>

                  <p>
                    {text.ownerClientDescription}
                  </p>

                  <div className="architecture-mini-tags">
                    <span>{text.analytics}</span>
                    <span>{text.outletsTag}</span>
                    <span>PO</span>
                    <span>{text.control}</span>
                  </div>
                </div>

              </div>


              {/* DATA FLOW */}
              <div className="architecture-flow">

                <div>
                  <span>01</span>
                  <strong>{text.outletActivity}</strong>
                  <small>
                    {text.outletActivityDescription}
                  </small>
                </div>

                <div className="architecture-flow-arrow">
                  →
                </div>

                <div>
                  <span>02</span>
                  <strong>{text.cloudSync}</strong>
                  <small>
                    {text.cloudSyncDescription}
                  </small>
                </div>

                <div className="architecture-flow-arrow">
                  →
                </div>

                <div>
                  <span>03</span>
                  <strong>{text.ownerVisibility}</strong>
                  <small>
                    {text.ownerVisibilityDescription}
                  </small>
                </div>

              </div>


              {/* OUTLET ISOLATION */}
              <div className="architecture-isolation">

                <div>
                  <span>{text.multiOutletDataModel}</span>

                  <strong>
                    {text.dynamicOutletIsolation}
                    <br />
                    {text.through} <em>outletId</em>.
                  </strong>
                </div>

                <p>
                  {text.isolationDescription}
                </p>

                <div className="architecture-outlets">
                  <span>{text.outletA}</span>
                  <i />
                  <span>{text.outletB}</span>
                  <i />
                  <span>{text.outletN}</span>
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
      <span>{text.salesWorkflowLabel}</span>
    </div>

    <div className="sales-heading">
      <div>
        <span className="sales-kicker">{text.outletToOwner}</span>

        <h2>
  {text.salesWorkflowTitle1}
  <br />
  <span>{text.salesWorkflowTitle2}</span>
    {language === "en" ? "to " : "menjadi "}
  <span>{text.salesWorkflowTitle2}</span>
</h2>
      </div>
<p>
  {text.salesWorkflowDescription}
</p>
    </div>

    {/* =====================================================
        PHASE 01 — OUTLET APP
    ====================================================== */}

    <div className="sales-phase">

      <div className="sales-phase-header">
        <div className="sales-phase-number">01</div>

        <div>
          <span>{text.outletOperations}</span>
          <h3>{text.salesBeginTitle}</h3>
        </div>

<p>
  {text.salesBeginDescription}
</p>
      </div>

      <div className="sales-mobile-showcase">

        <div className="sales-phone sales-phone-secondary">
<div className="sales-phone-label">
  <span>01</span>
  {text.outletDashboard}
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
  {text.productSelection}
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
  {text.salesReport}
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
          <span>{text.centralizedData}</span>
          <strong>{text.salesSynchronized}</strong>
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
          <span>{text.ownerVisibilityPhase}</span>
          <h3>
  {text.transactionPerspectiveTitle1}{" "}
  {text.transactionPerspectiveTitle2}
</h3>
        </div>

<p>
  {text.transactionPerspectiveDescription}
</p>
      </div>


      <div className="sales-web-showcase">

        <article className="sales-web-featured">
          <div className="sales-web-caption">
            <div>
              <span>
  04 / {language === "en" ? "OWNER DASHBOARD" : "DASHBOARD OWNER"}
</span>
              <strong>{text.businessOverview}</strong>
            </div>
<p>
  {text.businessOverviewDescription}
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
                <span>
  05 / {language === "en" ? "SALES" : "PENJUALAN"}
</span>
                <strong>{text.salesPerformance}</strong>
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
                <span>
  06 / {language === "en" ? "OUTLET DETAIL" : "DETAIL OUTLET"}
</span>
                <strong>{text.outletPerformance}</strong>
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
        <strong>{text.orderCreated}</strong>
        <small>{text.outletAppFlow}</small>
      </div>

      <i>→</i>

      <div>
        <span>02</span>
        <strong>{text.transactionStored}</strong>
        <small>{text.firestoreFlow}</small>
      </div>

      <i>→</i>

      <div>
        <span>03</span>
        <strong>{text.dataAggregated}</strong>
        <small>{text.perOutlet}</small>
      </div>

      <i>→</i>

      <div>
        <span>04</span>
        <strong>{text.ownerMonitoring}</strong>
        <small>{text.ownerWebFlow}s</small>
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
      <span>
  {language === "en" ? "PURCHASE ORDER WORKFLOW" : "ALUR PURCHASE ORDER"}
</span>
    </div>

    <div className="po-heading">
      <div>
        <span className="po-kicker">
  {language === "en" ? "OUTLET ↔ OWNER" : "OUTLET ↔ OWNER"}
</span>

        <h2>
          {language === "en" ? "A complete PO journey," : "Perjalanan PO yang lengkap,"}
          <br />
          <span>
  {language === "en" ? "from request to invoice." : "dari pengajuan hingga invoice."}
</span>
        </h2>
      </div>

<p>
  {language === "en"
    ? "Purchase orders connect outlet requirements with centralized owner control. The workflow covers submission, processing, monitoring, status tracking, and final purchase documentation through one connected system."
    : "Purchase order menghubungkan kebutuhan outlet dengan kontrol terpusat oleh owner. Alurnya mencakup pengajuan, pemrosesan, pemantauan, pelacakan status, hingga dokumentasi pembelian akhir dalam satu sistem yang terhubung."}
</p>
    </div>


    {/* =====================================================
        PHASE 01 — OUTLET APP
    ====================================================== */}

    <div className="po-stage">

      <div className="po-stage-heading">
        <div className="po-stage-number">01</div>

        <div>
          <span>
  {language === "en" ? "OUTLET APP" : "APLIKASI OUTLET"}
</span>
          <h3>
  {language === "en"
    ? "Request & track purchase orders."
    : "Ajukan & pantau purchase order."}
</h3>
        </div>

<p>
  {language === "en"
    ? "The outlet starts the process from the mobile application, submits its requirements, and can continue monitoring the order as it moves through the PO workflow."
    : "Outlet memulai proses melalui aplikasi mobile, mengajukan kebutuhannya, dan dapat terus memantau pesanan selama berjalan melalui alur PO."}
</p>
      </div>


      <div className="po-mobile-journey">

        <article className="po-mobile-step">
          <div className="po-step-meta">
            <span>01</span>
            <div>
              <small>
  {language === "en" ? "REQUEST" : "PENGAJUAN"}
</small>
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
          <span>
  {language === "en" ? "SUBMIT" : "KIRIM"}
</span>
          <i>→</i>
        </div>


        <article className="po-mobile-step po-mobile-step-main">
          <div className="po-step-meta">
            <span>02</span>
            <div>
              <small>
  {language === "en" ? "PROCESS" : "PROSES"}
</small>
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
          <span>
  {language === "en" ? "TRACK" : "LACAK"}
</span>
          <i>→</i>
        </div>


        <article className="po-mobile-step">
          <div className="po-step-meta">
            <span>03</span>
            <div>
              <small>
  {language === "en" ? "MONITOR" : "PANTAU"}
</small>
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
        <span>
  {language === "en" ? "OUTLET APP" : "APLIKASI OUTLET"}
</span>
        <strong>
  {language === "en" ? "PO Request" : "Pengajuan PO"}
</strong>
      </div>

      <div className="po-transition-path">
        <i />
        <div>
          <Database size={18} />
        </div>
        <i />
      </div>

      <div className="po-transition-side po-transition-side-right">
        <span>
  {language === "en" ? "OWNER WEB" : "WEB OWNER"}
</span>
        <strong>
  {language === "en" ? "Centralized Processing" : "Pemrosesan Terpusat"}
</strong>
      </div>

    </div>


    {/* =====================================================
        PHASE 02 — OWNER WEB
    ====================================================== */}

    <div className="po-stage po-owner-stage">

      <div className="po-stage-heading">
        <div className="po-stage-number">02</div>

        <div>
          <span>
  {language === "en" ? "OWNER WEB" : "WEB OWNER"}
</span>
          <h3>
  {language === "en" ? "Monitor, track & complete the order." : "Pantau, lacak & selesaikan pesanan."}
</h3>
        </div>

<p>
  {language === "en"
    ? "Submitted purchase orders become available on the owner platform, providing centralized visibility throughout processing and final documentation."
    : "Purchase order yang telah diajukan akan tersedia di platform owner, memberikan visibilitas terpusat selama proses berlangsung hingga dokumentasi akhir."}
</p>
      </div>


      <div className="po-owner-showcase">

        {/* OWNER MONITORING */}
        <article className="po-owner-featured">

          <div className="po-owner-copy">
            <span>
  04 / {language === "en" ? "MONITORING" : "PEMANTAUAN"}
</span>

            <h4>
  {language === "en"
    ? "Central PO monitoring."
    : "Pemantauan PO terpusat."}
</h4>

<p>
  {language === "en"
    ? "Incoming purchase orders can be monitored from the owner platform together with their current operational status."
    : "Purchase order yang masuk dapat dipantau melalui platform owner beserta status operasionalnya saat ini."}
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
                <span>
  05 / {language === "en" ? "TRACKING" : "PELACAKAN"}
</span>
              </div>

              <h4>
  {language === "en"
    ? "Track every stage."
    : "Lacak setiap tahap."}
</h4>

<p>
  {language === "en"
    ? "Order progress remains visible as the PO moves through its operational lifecycle, allowing both sides of the system to follow its current state."
    : "Perkembangan pesanan tetap dapat dipantau selama PO melalui setiap tahap operasionalnya, sehingga kedua sisi sistem dapat mengetahui status terkininya."}
</p>
            </div>


            <div className="po-final-copy-item po-final-copy-documentation">
              <div className="po-final-meta po-final-meta-right">
                <span>
  06 / {language === "en" ? "DOCUMENTATION" : "DOKUMENTASI"}
</span>
                <span className="po-final-arrow">→</span>
              </div>

              <h4>
  {language === "en"
    ? "Final purchase documentation."
    : "Dokumentasi pembelian akhir."}
</h4>

              <p>
                {language === "en"
                  ? "The workflow concludes with structured purchase documentation, keeping the completed PO connected with its operational history."
                  : "Alur kerja diakhiri dengan dokumentasi pembelian yang terstruktur, menjaga PO yang selesai terhubung dengan riwayat operasionalnya."}
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
        <span>
  {language === "en" ? "PO LIFECYCLE" : "SIKLUS PO"}
</span>
        <strong>
  {language === "en"
    ? "One request. One traceable process."
    : "Satu pengajuan. Satu proses yang dapat dilacak."}
</strong>
      </div>

      <div className="po-lifecycle-flow">

        <div>
          <span>01</span>
          <strong>
  {language === "en" ? "Submitted" : "Diajukan"}
</strong>
<small>
  {language === "en" ? "Outlet App" : "Aplikasi Outlet"}
</small>
        </div>

        <i>→</i>

        <div>
          <span>02</span>
<strong>
  {language === "en" ? "Waiting" : "Menunggu"}
</strong>
<small>
  {language === "en" ? "Owner Review" : "Review Owner"}
</small>
        </div>

        <i>→</i>

        <div>
          <span>03</span>
<strong>
  {language === "en" ? "Processed" : "Diproses"}
</strong>
<small>
  {language === "en" ? "Owner Web" : "Web Owner"}
</small>
        </div>

        <i>→</i>

        <div>
          <span>04</span>
<strong>
  {language === "en" ? "Shipped" : "Dikirim"}
</strong>
<small>
  {language === "en" ? "Order Progress" : "Progres Pesanan"}
</small>
        </div>

        <i>→</i>

        <div>
          <span>05</span>
          <strong>
  {language === "en" ? "Completed" : "Selesai"}
</strong>
          <small>
  {language === "en" ? "PO History" : "Riwayat PO"}
</small>
        </div>

      </div>

      <div className="po-system-rule">
        <span>
  {language === "en" ? "SYSTEM RULE" : "ATURAN SISTEM"}
</span>

<p>
  {language === "en"
    ? "Purchase orders that remain unprocessed for seven days are automatically cancelled by the system."
    : "Purchase order yang tidak diproses selama tujuh hari akan dibatalkan secara otomatis oleh sistem."}
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
      <span>
  {language === "en"
    ? "STOCK & PRICING CONTROL"
    : "KONTROL STOK & HARGA"}
</span>
    </div>

    <div className="control-heading">

      <div>
        <span className="control-kicker">
  {language === "en"
    ? "OPERATIONAL CONTROL"
    : "KONTROL OPERASIONAL"}
</span>

<h2>
  {language === "en" ? "Monitor stock." : "Pantau stok."}
  <br />
  {language === "en" ? "Control " : "Kelola "}
  <span>
    {language === "en" ? "pricing." : "harga."}
  </span>
</h2>
      </div>

<p>
  {language === "en"
    ? "Beyond sales and purchase orders, the system connects operational stock information with centralized owner controls, giving the business visibility over materials while keeping product pricing manageable from the owner platform."
    : "Selain penjualan dan purchase order, sistem menghubungkan informasi stok operasional dengan kontrol terpusat oleh owner, memberikan visibilitas terhadap persediaan sekaligus memungkinkan harga produk dikelola melalui platform owner."}
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
          <span>
  {language === "en" ? "STOCK VISIBILITY" : "VISIBILITAS STOK"}
</span>
          <h3>
  {language === "en" ? "From outlet stock to owner monitoring." : "Dari stok outlet hingga pemantauan owner."}
</h3>
        </div>

<p>
  {language === "en"
    ? "Stock information recorded by the outlet becomes part of the shared operational data, allowing the owner to monitor material availability across the system."
    : "Informasi stok yang dicatat oleh outlet menjadi bagian dari data operasional bersama, sehingga owner dapat memantau ketersediaan bahan melalui sistem."}
</p>

      </div>


      <div className="control-stock-showcase">

        {/* APP */}

        <article className="control-app">

          <div className="control-image-label">
            <span>
  01 / {language === "en" ? "OUTLET APP" : "APLIKASI OUTLET"}
</span>
            <strong>
  {language === "en" ? "Stock Status" : "Status Stok"}
</strong>
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
  {language === "en" ? "STOCK" : "DATA"}
  <br />
  {language === "en" ? "DATA" : "STOK"}
</span>
          </div>

          <div className="control-flow-line" />

        </div>


        {/* OWNER */}

        <article className="control-owner-stock">

          <div className="control-image-label">
            <span>
  02 / {language === "en" ? "OWNER WEB" : "WEB OWNER"}
</span>
            <strong>
  {language === "en" ? "Raw Material Monitoring" : "Pemantauan Bahan Baku"}
</strong>
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
          <span>
  {language === "en"
    ? "CENTRALIZED MANAGEMENT"
    : "MANAJEMEN TERPUSAT"}
</span>
          <h3>
  {language === "en" ? "Product pricing from one place." : "Kelola harga produk dari satu tempat."}
</h3>
        </div>

<p>
  {language === "en"
    ? "Product pricing can be managed from the owner platform, providing a centralized control point for operational product configuration."
    : "Harga produk dapat dikelola melalui platform owner, sehingga konfigurasi produk operasional dapat dikontrol secara terpusat."}
</p>

      </div>


      <div className="control-pricing-showcase">

        <div className="control-pricing-copy">

<span>
  {language === "en"
    ? "DYNAMIC PRICING SYSTEM"
    : "SISTEM HARGA DINAMIS"}
</span>

<h4>
  {language === "en" ? "One pricing system." : "Satu sistem harga."}
  <br />
  {language === "en" ? "Two control modes." : "Dua mode kontrol."}
</h4>

<p>
  {language === "en"
    ? "Product pricing is synchronized between the owner platform and outlet application, while scheduled pricing rules can automatically apply event prices at predefined times."
    : "Harga produk disinkronkan antara platform owner dan aplikasi outlet, sementara aturan harga terjadwal dapat menerapkan harga event secara otomatis pada waktu yang telah ditentukan."}
</p>

  <div className="control-pricing-points">

    <div>
      <span>01</span>

      <p>
<strong>
  {language === "en"
    ? "Owner-Controlled Pricing"
    : "Harga Terkontrol oleh Owner"}
</strong>
{" "}
{language === "en"
  ? "Prices changed from the owner web are automatically reflected in the outlet application."
  : "Perubahan harga dari web owner secara otomatis diterapkan pada aplikasi outlet."}
      </p>
    </div>

    <div>
      <span>02</span>

      <p>
        <strong>
          {language === "en"
            ? "Scheduled Event Pricing"
            : "Harga Event Terjadwal"}
        </strong>
        {language === "en"
          ? " Predefined pricing rules automatically activate according to the configured event schedule."
          : " Aturan harga terjadwal secara otomatis diaktifkan sesuai dengan jadwal event yang telah dikonfigurasi."}
      </p>
    </div>

    <div>
      <span>03</span>

<p>
  <strong>
    {language === "en"
      ? "Automatic App Update"
      : "Pembaruan Aplikasi Otomatis"}
  </strong>
  {" "}
  {language === "en"
    ? "Outlet staff always work with the currently active product price without manually updating each device."
    : "Staf outlet selalu menggunakan harga produk yang sedang aktif tanpa perlu memperbarui setiap perangkat secara manual."}
</p>
    </div>

  </div>

</div>


        <div className="control-pricing-screen">

          <div className="control-image-label">
            <span>
  03 / {language === "en" ? "OWNER WEB" : "WEB OWNER"}
</span>
            <strong>
              {language === "en"
                ? "Product Price Management"
                : "Manajemen Harga Produk"}
            </strong>
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
        <strong>
  {language === "en" ? "Operational Stock" : "Stok Operasional"}
</strong>
      </div>

      <i>→</i>

      <div>
        <span>CLOUD</span>
        <strong>
  {language === "en" ? "Shared Data" : "Data Bersama"}
</strong>
      </div>

      <i>→</i>

      <div>
        <span>OWNER</span>
        <strong>
  {language === "en"
    ? "Monitoring & Control"
    : "Pemantauan & Kontrol"}
</strong>
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
      <span>
  {language === "en" ? "EXPENSE WORKFLOW" : "ALUR PENGELUARAN"}
</span>
    </div>

    <div className="expenses-heading">

      <div>
        <span className="expenses-kicker">OUTLET → OWNER</span>

        <h2>
          {language === "en"
            ? "Record locally."
            : "Catat secara lokal."}
          <br />
  {language === "en" ? "Monitor " : "Pantau "}
  <span>
    {language === "en" ? "centrally." : "secara terpusat."}
  </span>
        </h2>
      </div>

<p>
  {language === "en"
    ? "Outlet expenses are recorded directly through the mobile application and connected to the corresponding outlet. The same data becomes available to the owner for centralized operational monitoring."
    : "Pengeluaran outlet dicatat langsung melalui aplikasi mobile dan terhubung dengan outlet terkait. Data yang sama kemudian tersedia bagi owner untuk pemantauan operasional secara terpusat."}
</p>

    </div>


    {/* =====================================================
        EXPENSE FLOW
    ====================================================== */}

    <div className="expenses-showcase">

      {/* APP */}

      <article className="expenses-app">

        <div className="expenses-screen-label">
          <span>
  01 / {language === "en" ? "OUTLET APP" : "APLIKASI OUTLET"}
</span>
          <strong>
  {language === "en"
    ? "Expense Recording"
    : "Pencatatan Pengeluaran"}
</strong>
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

          <span>
  {language === "en" ? "EXPENSE DATA" : "DATA PENGELUARAN"}
</span>

          <strong>
            Firestore
          </strong>

<small>
  {language === "en"
    ? "Linked by outletId"
    : "Terhubung melalui outletId"}
</small>

        </div>

        <div className="expenses-flow-line" />

      </div>


      {/* OWNER */}

      <article className="expenses-owner">

        <div className="expenses-screen-label">
          <span>
  02 / {language === "en" ? "OWNER WEB" : "WEB OWNER"}
</span>
          <strong>
  {language === "en"
    ? "Outlet Expense Monitoring"
    : "Pemantauan Pengeluaran Outlet"}
</strong>
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
<strong>
  {language === "en" ? "Expense Recorded" : "Pengeluaran Dicatat"}
</strong>
<small>
  {language === "en" ? "Outlet Application" : "Aplikasi Outlet"}
</small>
        </div>
      </div>

      <i>→</i>

      <div>
        <span>02</span>

        <div>
<strong>
  {language === "en" ? "Outlet Identified" : "Outlet Teridentifikasi"}
</strong>
<small>outletId</small>
        </div>
      </div>

      <i>→</i>

      <div>
        <span>03</span>

        <div>
<strong>
  {language === "en" ? "Data Stored" : "Data Tersimpan"}
</strong>
<small>
  {language === "en" ? "Cloud Firestore" : "Firestore Cloud"}
</small>
        </div>
      </div>

      <i>→</i>

      <div>
        <span>04</span>

        <div>
<strong>
  {language === "en" ? "Owner Monitoring" : "Pemantauan Owner"}
</strong>
<small>
  {language === "en" ? "Owner Web" : "Web Owner"}
</small>
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
      <span>
  {language === "en"
    ? "ENGINEERING HIGHLIGHTS"
    : "SOROTAN ENGINEERING"}
</span>
    </div>

    <div className="engineering-heading">

      <div>
        <span className="engineering-kicker">
  {language === "en"
    ? "BEYOND THE INTERFACE"
    : "LEBIH DARI SEKADAR INTERFACE"}
</span>

<h2>
  {language === "en" ? "Built as a system," : "Dibangun sebagai sistem,"}
  <br />
  {language === "en" ? "not just " : "bukan sekadar "}
  <span>{language === "en" ? "screens." : "tampilan."}</span>
</h2>
      </div>

<p>
  {language === "en"
    ? "Behind the mobile application and owner dashboard is an architecture designed to keep outlet data separated, synchronized, and manageable as the system grows."
    : "Di balik aplikasi mobile dan dashboard owner terdapat arsitektur yang dirancang untuk menjaga data setiap outlet tetap terpisah, tersinkronisasi, dan mudah dikelola seiring berkembangnya sistem."}
</p>

    </div>


    <div className="engineering-grid">

      {/* 01 */}
      <article className="engineering-card engineering-card-featured">

        <div className="engineering-card-top">
          <span>01</span>
          <small>
  {language === "en"
    ? "MULTI-OUTLET ARCHITECTURE"
    : "ARSITEKTUR MULTI-OUTLET"}
</small>
        </div>

<h3>
  {language === "en" ? "One system." : "Satu sistem."}
  <br />
  {language === "en" ? "Multiple outlets." : "Banyak outlet."}
</h3>

<p>
  {language === "en"
    ? "Operational data is associated with an outlet identity, allowing transactions, expenses, stock, and other records to remain separated while still being accessible through the centralized owner platform."
    : "Data operasional dikaitkan dengan identitas masing-masing outlet, sehingga transaksi, pengeluaran, stok, dan data lainnya tetap terpisah namun tetap dapat diakses melalui platform owner yang terpusat."}
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
          <small>
  {language === "en" ? "REAL-TIME DATA" : "DATA REAL-TIME"}
</small>
        </div>

       <h3>
  {language === "en"
    ? "Connected data flow."
    : "Alur data yang terhubung."}
</h3>

<p>
  {language === "en"
    ? "Firebase Firestore connects outlet operations with the owner platform, allowing operational information to move through a shared cloud data layer."
    : "Firebase Firestore menghubungkan operasional outlet dengan platform owner, sehingga informasi operasional dapat mengalir melalui lapisan data cloud yang digunakan bersama."}
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
          <small>
  {language === "en" ? "AUTHENTICATION" : "AUTENTIKASI"}
</small>
        </div>

        <h3>
  {language === "en" ? "Outlet-level access." : "Akses khusus per outlet."}
</h3>

<p>
  {language === "en"
    ? "Firebase Authentication provides authenticated access, while each outlet account is associated with its own operational identity inside the system."
    : "Firebase Authentication menyediakan akses yang terautentikasi, sementara setiap akun outlet terhubung dengan identitas operasionalnya masing-masing di dalam sistem."}
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
          <small>
  {language === "en"
    ? "DYNAMIC CONFIGURATION"
    : "KONFIGURASI DINAMIS"}
</small>
        </div>

        <h3>
  {language === "en"
    ? "Outlets without hardcoding."
    : "Outlet tanpa hardcoding."}
</h3>

<p>
  {language === "en"
    ? "Outlet information is loaded from a centralized master collection, allowing the platform to support additional outlets without maintaining separate outlet lists across individual pages."
    : "Informasi outlet dimuat dari master collection yang terpusat, sehingga platform dapat mendukung penambahan outlet tanpa perlu mengelola daftar outlet secara terpisah di setiap halaman."}
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
          <small>
  {language === "en"
    ? "DYNAMIC PRICING"
    : "HARGA DINAMIS"}
</small>
        </div>

        <h3>
  {language === "en"
    ? "Manual + automated rules."
    : "Aturan manual + otomatis."}
</h3>

<p>
  {language === "en"
    ? "Product prices can be changed centrally by the owner or activated automatically through scheduled event rules, with active pricing reflected in the outlet application."
    : "Harga produk dapat diubah secara terpusat oleh owner atau diaktifkan secara otomatis melalui aturan event terjadwal, dengan harga aktif langsung diterapkan pada aplikasi outlet."}
</p>

        <div className="engineering-pricing-flow">
          <div>
<small>OWNER</small>
<strong>
  {language === "en" ? "Manual Price" : "Harga Manual"}
</strong>
          </div>

          <span>+</span>

          <div>
            <small>EVENT</small>
            <strong>
              {language === "en" ? "Scheduled Rule" : "Aturan Terjadwal"}
            </strong>
          </div>

          <i>→</i>

          <div>
<small>ACTIVE</small>
<strong>
  {language === "en" ? "App Price" : "Harga Aplikasi"}
</strong>
          </div>
        </div>

      </article>


      {/* 06 */}
      <article className="engineering-card engineering-card-wide">

        <div className="engineering-card-top">
          <span>06</span>
          <small>
            {language === "en" ? "RESPONSIVE SYSTEM" : "SISTEM RESPONSIF"}
          </small>
        </div>

        <div className="engineering-wide-content">

          <div>
<h3>
  {language === "en" ? "Designed across" : "Dirancang untuk"}
  <br />
  {language === "en" ? "different screens." : "berbagai ukuran layar."}
</h3>

<p>
  {language === "en"
    ? "The outlet application adapts across Android phones and tablets, while the owner platform is designed as a responsive web dashboard for operational monitoring."
    : "Aplikasi outlet beradaptasi pada berbagai perangkat Android, mulai dari ponsel hingga tablet, sementara platform owner dirancang sebagai web dashboard responsif untuk pemantauan operasional."}
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
      <span>
  {language === "en" ? "TECHNOLOGY STACK" : "STACK TEKNOLOGI"}
</span>
    </div>

    <div className="technology-heading">

      <div>
        <span className="technology-kicker">
  {language === "en" ? "BUILT WITH" : "DIBANGUN DENGAN"}
</span>

<h2>
  {language === "en" ? "The technology" : "Teknologi"}
  <br />
  {language === "en" ? "behind the " : "di balik "}
  <span>{language === "en" ? "system." : "sistem."}</span>
</h2>
      </div>

<p>
  {language === "en"
    ? "The platform combines mobile, web, authentication, cloud database, and development tools into one connected operational system."
    : "Platform ini menggabungkan aplikasi mobile, web, autentikasi, database cloud, dan development tools ke dalam satu sistem operasional yang saling terhubung."}
</p>

    </div>


    <div className="technology-system">

      {/* MOBILE */}
      <article className="technology-platform">

        <div className="technology-platform-number">01</div>

<span className="technology-platform-label">
  {language === "en" ? "OUTLET APPLICATION" : "APLIKASI OUTLET"}
</span>

       <h3>
  {language === "en" ? "Mobile" : "Aplikasi Mobile"}
</h3>

        <div className="technology-items">
          <div>
<strong>Flutter</strong>
<small>
  {language === "en" ? "Application Framework" : "Framework Aplikasi"}
</small>
          </div>

          <div>
            <strong>Dart</strong>
            <small>
              {language === "en" ? "Programming Language" : "Bahasa Pemrograman"}
            </small>
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
  {language === "en" ? "CLOUD INFRASTRUCTURE" : "INFRASTRUKTUR CLOUD"}
</span>

        <h3>Firebase</h3>

        <div className="technology-items">
          <div>
<strong>Cloud Firestore</strong>
<small>
  {language === "en" ? "Operational Database" : "Database Operasional"}
</small>
          </div>

          <div>
<strong>Firebase Auth</strong>
<small>
  {language === "en" ? "Authentication" : "Autentikasi"}
</small>
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
  {language === "en" ? "OWNER PLATFORM" : "PLATFORM OWNER"}
</span>

        <h3>Web</h3>

        <div className="technology-items">
          <div>
<strong>Next.js</strong>
<small>
  {language === "en" ? "Web Framework" : "Framework Web"}
</small>
          </div>

          <div>
<strong>TypeScript</strong>
<small>
  {language === "en"
    ? "Application Language"
    : "Bahasa Aplikasi"}
</small>
          </div>
        </div>

      </article>

    </div>


    {/* DEVELOPMENT TOOLING */}

    <div className="technology-tooling">

      <div className="technology-tooling-title">
        <span>
  {language === "en"
    ? "DEVELOPMENT WORKFLOW"
    : "ALUR DEVELOPMENT"}
</span>

<strong>
  {language === "en"
    ? "Tools used to build and maintain the system."
    : "Tool yang digunakan untuk membangun dan memelihara sistem."}
</strong>
      </div>

      <div className="technology-tooling-items">

        <div>
          <span>01</span>
<strong>Git</strong>
<small>
  {language === "en" ? "Version Control" : "Kontrol Versi"}
</small>
        </div>

        <div>
          <span>02</span>
<strong>GitHub</strong>
<small>
  {language === "en" ? "Source Repository" : "Repositori Sumber Kode"}
</small>
        </div>

        <div>
          <span>03</span>
          <strong>VS Code</strong>
          <small>
            {language === "en" ? "Development Environment" : "Lingkungan Pengembangan"}
          </small>
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
      <span>
  {language === "en" ? "PROJECT OUTCOME" : "HASIL PROYEK"}
</span>
    </div>

    <div className="outcome-heading">

      <div>
        <span className="outcome-kicker">
  {language === "en" ? "THE RESULT" : "HASIL AKHIR"}
</span>

<h2>
  {language === "en"
    ? "From separate tasks"
    : "Dari proses yang terpisah"}
  <br />
  {language === "en" ? "to one " : "menjadi satu "}
  <span>
    {language === "en" ? "connected system." : "sistem yang terhubung."}
  </span>
</h2>
      </div>

<p>
  {language === "en"
    ? "Tuah Kopi brings core outlet operations and owner-level monitoring into a shared digital ecosystem, connecting day-to-day activities with centralized business control."
    : "Tuah Kopi menyatukan operasional utama outlet dan pemantauan oleh owner dalam satu ekosistem digital, menghubungkan aktivitas harian dengan pengelolaan bisnis secara terpusat."}
</p>

    </div>


    <div className="outcome-grid">

      <article className="outcome-card">
        <span>01</span>

        <div>
          <small>
            {language === "en" ? "CENTRALIZED VISIBILITY" : "VISIBILITAS TERPUSAT"}
          </small>
          <h3>
            {language === "en" ? "One place to monitor the business." : "Satu tempat untuk memantau seluruh bisnis."}
          </h3>

<p>
  {language === "en"
    ? "Sales, transactions, expenses, outlet performance, purchase orders, and operational information can be viewed through the owner platform."
    : "Penjualan, transaksi, pengeluaran, performa outlet, purchase order, dan informasi operasional dapat dipantau melalui platform owner."}
</p>
        </div>
      </article>


      <article className="outcome-card">
        <span>02</span>

        <div>
          <small>
  {language === "en" ? "CONNECTED OPERATIONS" : "OPERASIONAL TERINTEGRASI"}
</small>
          <h3>
  {language === "en"
    ? "Outlet activity flows into the same ecosystem."
    : "Aktivitas outlet terhubung dalam satu ekosistem."}
</h3>

<p>
  {language === "en"
    ? "The mobile application handles day-to-day outlet operations while relevant data is synchronized with the centralized web platform."
    : "Aplikasi mobile menangani aktivitas operasional harian outlet, sementara data yang relevan disinkronkan dengan platform web terpusat."}
</p>
        </div>
      </article>


      <article className="outcome-card">
        <span>03</span>

        <div>
          <small>
            {language === "en" ? "MULTI-OUTLET FOUNDATION" : "FONDASI MULTI OUTLET"}
          </small>
          <h3>
            {language === "en"
              ? "Designed to grow beyond a single outlet."
              : "Dirancang untuk tumbuh melebihi satu outlet."}
          </h3>

          <p>
            {language === "en"
              ? "Outlet-based data architecture and a centralized outlet master allow the system to support additional locations without rebuilding individual pages around hardcoded outlet lists."
              : "Arsitektur data berbasis outlet dan master outlet terpusat memungkinkan sistem untuk mendukung lokasi tambahan tanpa perlu membangun ulang halaman individual di sekitar daftar outlet yang telah di HARD CODE."}
          </p>
        </div>
      </article>


      <article className="outcome-card">
        <span>04</span>

        <div>
          <small>
            {language === "en" ? "AUTOMATED BUSINESS RULES" : "ATURAN BISNIS OTOMATIS"}
          </small>
          <h3>
            {language === "en"
              ? "Less manual operational configuration."
              : "Lebih sedikit konfigurasi operasional manual."}
          </h3>

          <p>
            {language === "en"
              ? "Centralized pricing synchronization and scheduled event pricing allow active product prices to update automatically across the outlet application."
              : "Sinkronisasi harga terpusat dan harga acara terjadwal memungkinkan harga produk aktif untuk diperbarui secara otomatis di seluruh aplikasi outlet."}
          </p>
        </div>
      </article>

    </div>


    <div className="outcome-statement">

        <span>
    {language === "en" ? "PROJECT SUMMARY" : "RINGKASAN PROYEK"}
  </span>

      <p>
        {language === "en"
          ? "The result is not simply an outlet application and an admin dashboard."
          : "Hasilnya bukan hanya sekedar aplikasi outlet dan dasbor admin."}
        <strong>
      {language === "en"
        ? "It is a connected operational system built around how the business actually works."
        : "Ini adalah sistem operasional terintegrasi yang dibangun berdasarkan cara bisnis tersebut benar-benar berjalan."}
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
        <span>
          {language === "en" ? "END OF CASE STUDY" : "AKHIR STUDI KASUS"}
        </span>
        <i />
        <span>TUAH KOPI / 2026</span>
      </div>

      <div className="case-closing-content">

<h2>
  {language === "en" ? "Have a system" : "Punya ide sistem"}
  <br />
  <span>{language === "en" ? "in mind?" : "untuk dibangun?"}</span>
</h2>

        <div className="case-closing-right">

<p>
  {language === "en"
    ? "I'm interested in building practical digital systems that solve real operational problems."
    : "Saya tertarik membangun sistem digital yang praktis untuk menyelesaikan permasalahan operasional nyata."}
</p>

          <div className="case-closing-actions">

          <Link href="/projects" className="case-closing-secondary">
  <ArrowLeft size={16} />
  {language === "en" ? "Back to Projects" : "Kembali ke Proyek"}
</Link>

<Link href="/#contact" className="case-closing-primary">
  {language === "en" ? "Let's Talk" : "Mari Bicara"}
  <ArrowUpRight size={17} />
</Link>

          </div>

        </div>

      </div>

      <div className="case-closing-signature">
        <span>
          {language === "en" ? "DESIGNED & DEVELOPED BY" : "DESAIN & DIKEMBANGKAN OLEH"}
        </span>
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