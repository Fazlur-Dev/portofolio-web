"use client";

import {
  BarChart3,
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

export default function DeviceMockup() {
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
                <span className="mock-label">BUSINESS CONTROL</span>
                <h3>Sales Overview</h3>
              </div>

              <span className="mock-period">October 2026</span>
            </div>

            <div className="mock-stats">
              <StatCard
                label="Total Sales"
                value="Rp 12.450.000"
                growth="+12.4%"
              />

              <StatCard
                label="Total Orders"
                value="2,046"
                growth="+8.2%"
              />

              <StatCard
                label="Total Products"
                value="1,104"
                growth="+5.7%"
              />
            </div>

            <div className="mock-chart-card">
              <div className="mock-card-title">
                <div>
                  <span>SALES TREND</span>
                  <strong>Monthly Performance</strong>
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
                <span>TOP PRODUCTS</span>
                <strong>Americano</strong>
              </div>

              <strong>320</strong>
            </div>

            <div className="mock-products">
              <div>
                <span>TOP PRODUCTS</span>
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
            <span>PURCHASE ORDER</span>
            <strong>Orders</strong>
          </div>

          <div className="phone-tabs">
            <span className="active">All</span>
            <span>Pending</span>
            <span>Process</span>
          </div>

          <PhoneOrder
            number="PO-20261006-001"
            outlet="Central Outlet"
            price="Rp 4.050.000"
            status="Pending"
          />

          <PhoneOrder
            number="PO-20261005-002"
            outlet="North Outlet"
            price="Rp 2.750.000"
            status="Processed"
          />

          <PhoneOrder
            number="PO-20261003-003"
            outlet="West Outlet"
            price="Rp 1.250.000"
            status="Shipped"
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
        <span>WEB DASHBOARD</span>
        Analytics & Business Control
      </div>

      <div className="device-label device-label-mobile">
        <span>MOBILE APP</span>
        Operational System
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