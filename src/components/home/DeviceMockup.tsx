"use client";

import {
  BarChart3,
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function DeviceMockup() {
  const { language } = useLanguage();

  const content = {
    en: {
      businessControl: "BUSINESS CONTROL",
      salesOverview: "Sales Overview",
      period: "October 2026",

      totalSales: "Total Sales",
      totalOrders: "Total Orders",
      totalProducts: "Total Products",

      salesTrend: "SALES TREND",
      monthlyPerformance: "Monthly Performance",
      topProducts: "TOP PRODUCTS",

      purchaseOrder: "PURCHASE ORDER",
      orders: "Orders",
      all: "All",
      pending: "Pending",
      process: "Process",

      centralOutlet: "Central Outlet",
      northOutlet: "North Outlet",
      westOutlet: "West Outlet",

      pendingStatus: "Pending",
      processedStatus: "Processed",
      shippedStatus: "Shipped",

      webDashboard: "WEB DASHBOARD",
      webDescription: "Analytics & Business Control",

      mobileApp: "MOBILE APP",
      mobileDescription: "Operational System",
    },

    id: {
      businessControl: "KONTROL BISNIS",
      salesOverview: "Ringkasan Penjualan",
      period: "Oktober 2026",

      totalSales: "Total Penjualan",
      totalOrders: "Total Pesanan",
      totalProducts: "Total Produk",

      salesTrend: "TREN PENJUALAN",
      monthlyPerformance: "Performa Bulanan",
      topProducts: "PRODUK TERATAS",

      purchaseOrder: "PURCHASE ORDER",
      orders: "Pesanan",
      all: "Semua",
      pending: "Menunggu",
      process: "Diproses",

      centralOutlet: "Outlet Pusat",
      northOutlet: "Outlet Utara",
      westOutlet: "Outlet Barat",

      pendingStatus: "Menunggu",
      processedStatus: "Diproses",
      shippedStatus: "Dikirim",

      webDashboard: "WEB DASHBOARD",
      webDescription: "Analitik & Kontrol Bisnis",

      mobileApp: "APLIKASI MOBILE",
      mobileDescription: "Sistem Operasional",
    },
  };

  const text = content[language];

  return (
    <div className="device-scene">

      {/* =========================
          DESKTOP / TABLET
      ========================== */}
      <div className="dashboard-device">
        <div className="dashboard-screen">

          <aside className="mock-sidebar">
            <div className="mock-logo">FR</div>

            <div className="mock-nav active">
              <LayoutDashboard size={14} />
            </div>

            <div className="mock-nav">
              <BarChart3 size={14} />
            </div>

            <div className="mock-nav">
              <ShoppingCart size={14} />
            </div>

            <div className="mock-nav">
              <Package size={14} />
            </div>
          </aside>

          <div className="mock-dashboard">
            <div className="mock-dashboard-header">
              <div>
                <span className="mock-label">
                  {text.businessControl}
                </span>

                <h3>{text.salesOverview}</h3>
              </div>

              <span className="mock-period">
                {text.period}
              </span>
            </div>

            <div className="mock-stats">
              <StatCard
                label={text.totalSales}
                value="Rp 12.450.000"
                growth="+12.4%"
              />

              <StatCard
                label={text.totalOrders}
                value="2,046"
                growth="+8.2%"
              />

              <StatCard
                label={text.totalProducts}
                value="1,104"
                growth="+5.7%"
              />
            </div>

            <div className="mock-chart-card">
              <div className="mock-card-title">
                <div>
                  <span>{text.salesTrend}</span>
                  <strong>{text.monthlyPerformance}</strong>
                </div>

                <TrendingUp size={16} />
              </div>

              <div className="mock-chart">
                <span style={{ height: "35%" }} />
                <span style={{ height: "52%" }} />
                <span style={{ height: "43%" }} />
                <span style={{ height: "68%" }} />
                <span style={{ height: "58%" }} />
                <span style={{ height: "82%" }} />
                <span style={{ height: "72%" }} />
                <span style={{ height: "95%" }} />
                <span style={{ height: "78%" }} />
                <span style={{ height: "88%" }} />
              </div>
            </div>

            <div className="mock-products">
              <div>
                <span>{text.topProducts}</span>
                <strong>Americano</strong>
              </div>

              <strong>320</strong>
            </div>

            <div className="mock-products">
              <div>
                <span>{text.topProducts}</span>
                <strong>Butterscotch</strong>
              </div>

              <strong>210</strong>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          MOBILE
      ========================== */}
      <div className="phone-device">
        <div className="phone-speaker" />

        <div className="phone-screen">
          <div className="phone-header">
            <span>{text.purchaseOrder}</span>
            <strong>{text.orders}</strong>
          </div>

          <div className="phone-tabs">
            <span className="active">{text.all}</span>
            <span>{text.pending}</span>
            <span>{text.process}</span>
          </div>

          <PhoneOrder
            number="PO-20261006-001"
            outlet={text.centralOutlet}
            price="Rp 4.050.000"
            status={text.pendingStatus}
          />

          <PhoneOrder
            number="PO-20261005-002"
            outlet={text.northOutlet}
            price="Rp 2.750.000"
            status={text.processedStatus}
          />

          <PhoneOrder
            number="PO-20261003-003"
            outlet={text.westOutlet}
            price="Rp 1.250.000"
            status={text.shippedStatus}
          />

          <div className="phone-bottom-nav">
            <LayoutDashboard size={14} />
            <ShoppingCart size={14} />
            <Package size={14} />
          </div>
        </div>
      </div>

      {/* Floating labels */}
      <div className="device-label device-label-web">
        <span>{text.webDashboard}</span>
        {text.webDescription}
      </div>

      <div className="device-label device-label-mobile">
        <span>{text.mobileApp}</span>
        {text.mobileDescription}
      </div>

    </div>
  );
}

function StatCard({
  label,
  value,
  growth,
}: {
  label: string;
  value: string;
  growth: string;
}) {
  return (
    <div className="mock-stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{growth}</small>
    </div>
  );
}

function PhoneOrder({
  number,
  outlet,
  price,
  status,
}: {
  number: string;
  outlet: string;
  price: string;
  status: string;
}) {
  return (
    <div className="phone-order">
      <div className="phone-order-top">
        <strong>{number}</strong>
        <span>{status}</span>
      </div>

      <small>{outlet}</small>
      <strong className="phone-price">{price}</strong>
    </div>
  );
}