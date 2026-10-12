"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      heroLabel1: "PROJECTS",
      heroLabel2: "SELECTED WORK",
      heroTitle1: "Systems built for",
      heroTitle2: "real problems.",
      heroDescription:
        "A selection of applications and digital systems designed around real workflows, operations, and business needs.",

      featured: "01 / FEATURED PROJECT",
      projectType: "BUSINESS OPERATIONS SYSTEM",

      identity: "01 / BUSINESS SYSTEM",
      identityTitle1: "One system.",
      identityTitle2: "Every outlet.",
      identityDescription:
        "Operations, sales, inventory, and owner control connected through one platform.",

      ownerDashboard: "Owner Dashboard",
      live: "LIVE",
      overview: "OVERVIEW",
      businessDashboard: "Business Dashboard",
      period: "October 2026",

      monthlyRevenue: "MONTHLY REVENUE",
      transactions: "TRANSACTIONS",
      outlets: "8 OUTLETS",
      productsSold: "PRODUCTS SOLD",
      thisMonth: "THIS MONTH",

      salesPerformance: "SALES PERFORMANCE",
      monthly: "Monthly",
      outletActivity: "OUTLET ACTIVITY",
      transactionLabel: "transactions",

      outletDashboard: "Outlet Dashboard",
      todaysSales: "TODAY'S SALES",
      todayGrowth: "+8.2% today",

      orders: "Orders",
      items: "Items",
      stock: "Stock",
      po: "PO",

      recentActivity: "RECENT ACTIVITY",
      newTransaction: "New transaction",
      stockUpdated: "Stock updated",
      poSubmitted: "PO submitted",
      twoMinutesAgo: "2 minutes ago",
      fiveMinutesAgo: "5 minutes ago",

      ownerWeb: "OWNER WEB",
      centralizedControl: "Centralized Control",
      mobileApp: "MOBILE APP",
      outletOperations: "Outlet Operations",

      projectDescription:
        "A multi-outlet operational system connecting daily outlet activities with centralized owner monitoring and management.",

      caseStudy: "View Case Study",
    },

    id: {
      heroLabel1: "PROYEK",
      heroLabel2: "KARYA PILIHAN",
      heroTitle1: "Sistem yang dibangun untuk",
      heroTitle2: "masalah nyata.",
      heroDescription:
        "Pilihan aplikasi dan sistem digital yang dirancang berdasarkan alur kerja, operasional, dan kebutuhan bisnis nyata.",

      featured: "01 / PROYEK UNGGULAN",
      projectType: "SISTEM OPERASIONAL BISNIS",

      identity: "01 / SISTEM BISNIS",
      identityTitle1: "Satu sistem.",
      identityTitle2: "Setiap outlet.",
      identityDescription:
        "Operasional, penjualan, stok, dan kontrol owner terhubung melalui satu platform.",

      ownerDashboard: "Dashboard Owner",
      live: "LIVE",
      overview: "RINGKASAN",
      businessDashboard: "Dashboard Bisnis",
      period: "Oktober 2026",

      monthlyRevenue: "OMZET BULANAN",
      transactions: "TRANSAKSI",
      outlets: "8 OUTLET",
      productsSold: "PRODUK TERJUAL",
      thisMonth: "BULAN INI",

      salesPerformance: "PERFORMA PENJUALAN",
      monthly: "Bulanan",
      outletActivity: "AKTIVITAS OUTLET",
      transactionLabel: "transaksi",

      outletDashboard: "Dashboard Outlet",
      todaysSales: "PENJUALAN HARI INI",
      todayGrowth: "+8.2% hari ini",

      orders: "Pesanan",
      items: "Item",
      stock: "Stok",
      po: "PO",

      recentActivity: "AKTIVITAS TERBARU",
      newTransaction: "Transaksi baru",
      stockUpdated: "Stok diperbarui",
      poSubmitted: "PO diajukan",
      twoMinutesAgo: "2 menit lalu",
      fiveMinutesAgo: "5 menit lalu",

      ownerWeb: "WEB OWNER",
      centralizedControl: "Kontrol Terpusat",
      mobileApp: "APLIKASI MOBILE",
      outletOperations: "Operasional Outlet",

      projectDescription:
        "Sistem operasional multi-outlet yang menghubungkan aktivitas harian setiap outlet dengan pemantauan dan pengelolaan terpusat oleh owner.",

      caseStudy: "Lihat Studi Kasus",
    },
  };

  const text = content[language];

  return (
    <>
      <Navbar />

      <main className="projects-page">
        <section className="projects-hero">
          <div className="projects-container">

            <div className="projects-label">
              <span>{text.heroLabel1}</span>
              <span>/</span>
              <span>{text.heroLabel2}</span>
            </div>

            <div className="projects-heading">
              <h1>
                {text.heroTitle1}
                <br />
                <span>{text.heroTitle2}</span>
              </h1>

              <p>
                {text.heroDescription}
              </p>
            </div>

          </div>
        </section>

        <section className="projects-list">
          <div className="projects-container">

            <article className="featured-project">

              <div className="featured-project-top">
                <div>
                  <span className="project-number">
                    {text.featured}
                  </span>

                  <h2>Tuah Kopi</h2>

                  <p className="project-type">
                    {text.projectType}
                  </p>
                </div>

                <span className="project-year">2026</span>
              </div>

              <div className="project-preview">

                {/* Background Project Identity */}
                <div className="project-preview-identity">
                  <span>{text.identity}</span>

                  <h3>
                    {text.identityTitle1}
                    <br />
                    {text.identityTitle2}
                  </h3>

                  <p>
                    {text.identityDescription}
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

                    <span>{text.ownerDashboard}</span>

                    <div className="project-browser-status">
                      {text.live}
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
                          <span>{text.overview}</span>
                          <strong>{text.businessDashboard}</strong>
                        </div>

                        <div className="project-dashboard-period">
                          {text.period}
                        </div>
                      </div>

                      <div className="project-dashboard-cards">

                        <div className="project-dashboard-card">
                          <span>{text.monthlyRevenue}</span>
                          <strong>Rp 84.2M</strong>
                          <small>+12.4%</small>
                        </div>

                        <div className="project-dashboard-card">
                          <span>{text.transactions}</span>
                          <strong>4,280</strong>
                          <small>{text.outlets}</small>
                        </div>

                        <div className="project-dashboard-card">
                          <span>{text.productsSold}</span>
                          <strong>6,942</strong>
                          <small>{text.thisMonth}</small>
                        </div>

                      </div>

                      <div className="project-dashboard-bottom">

                        <div className="project-chart">
                          <div className="project-chart-heading">
                            <span>{text.salesPerformance}</span>
                            <small>{text.monthly}</small>
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
                          <span>{text.outletActivity}</span>

                          <div>
                            <i />
                            <p>
                              <strong>Shelga</strong>
                              <small>
                                142 {text.transactionLabel}
                              </small>
                            </p>
                          </div>

                          <div>
                            <i />
                            <p>
                              <strong>Costal Area</strong>
                              <small>
                                118 {text.transactionLabel}
                              </small>
                            </p>
                          </div>

                          <div>
                            <i />
                            <p>
                              <strong>Central</strong>
                              <small>
                                96 {text.transactionLabel}
                              </small>
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
                        <strong>{text.outletDashboard}</strong>
                      </div>

                      <span>FR</span>
                    </div>

                    <div className="project-phone-summary">
                      <small>{text.todaysSales}</small>
                      <strong>Rp 2.840.000</strong>
                      <span>{text.todayGrowth}</span>
                    </div>

                    <div className="project-phone-grid">

                      <div>
                        <strong>124</strong>
                        <small>{text.orders}</small>
                      </div>

                      <div>
                        <strong>186</strong>
                        <small>{text.items}</small>
                      </div>

                      <div>
                        <strong>12</strong>
                        <small>{text.stock}</small>
                      </div>

                      <div>
                        <strong>3</strong>
                        <small>{text.po}</small>
                      </div>

                    </div>

                    <div className="project-phone-list">
                      <span>{text.recentActivity}</span>

                      <div>
                        <i />
                        <p>
                          <strong>{text.newTransaction}</strong>
                          <small>Rp 45.000</small>
                        </p>
                      </div>

                      <div>
                        <i />
                        <p>
                          <strong>{text.stockUpdated}</strong>
                          <small>{text.twoMinutesAgo}</small>
                        </p>
                      </div>

                      <div>
                        <i />
                        <p>
                          <strong>{text.poSubmitted}</strong>
                          <small>{text.fiveMinutesAgo}</small>
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Floating Labels */}
                <div className="project-device-label project-device-label-web">
                  <span>{text.ownerWeb}</span>
                  {text.centralizedControl}
                </div>

                <div className="project-device-label project-device-label-mobile">
                  <span>{text.mobileApp}</span>
                  {text.outletOperations}
                </div>

              </div>

              <div className="project-info">
                <p>
                  {text.projectDescription}
                </p>

                <div className="project-tags">
                  <span>Flutter</span>
                  <span>Next.js</span>
                  <span>Firebase</span>
                  <span>Firestore</span>
                  <span>Multi-Outlet</span>
                </div>

                <a href="/projects/tuah-kopi">
                  {text.caseStudy}
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