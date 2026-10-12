"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();

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
    {language === "en" ? "Back to Home" : "Kembali ke Beranda"}
  </Link>

  <span>
    {language === "en"
      ? "AVAILABLE FOR PROJECTS"
      : "TERBUKA UNTUK PROYEK"}
  </span>
</div>


          {/* =====================================================
              HERO
          ====================================================== */}

          <section className="contact-page-hero">
<div className="contact-page-label">
  <span>01</span>
  <span>/</span>
  <span>
    {language === "en" ? "CONTACT" : "KONTAK"}
  </span>
</div>

            <div className="contact-page-title-row">
<h1>
  {language === "en"
    ? "Let's build something"
    : "Mari bangun sesuatu"}
  <br />
  <span>
    {language === "en"
      ? "that actually works."
      : "yang benar-benar berfungsi."}
  </span>
</h1>

              <p>
                {language === "en"
                  ? "Have a project, business problem, or system you want to discuss? Tell me what you're trying to solve and let's see what we can build."
                  : "Punya proyek, masalah bisnis, atau sistem yang ingin Anda diskusikan? Ceritakan pada saya apa yang sedang Anda hadapi dan mari kita lihat apa yang bisa kita bangun."}
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
  <span>
    {language === "en"
      ? "START A CONVERSATION"
      : "MULAI PERCAKAPAN"}
  </span>
</div>

<h2>
  {language === "en"
    ? "The easiest way to start"
    : "Cara termudah untuk memulai"}
  <br />
  {language === "en"
    ? "is simply to say hello."
    : "adalah dengan menyapa."}
</h2>

              <p className="contact-page-conversation-copy">
                {language === "en"
                  ? "You don't need a complete technical plan. Tell me about your idea, workflow, or problem and we can figure out the right direction from there."
                  : "Anda tidak perlu rencana teknis yang lengkap. Ceritakan pada saya ide, alur kerja, atau masalah Anda dan kita bisa menentukan arah yang tepat dari sana."}
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
  <strong>
    {language === "en"
      ? "Start a conversation"
      : "Mulai percakapan"}
  </strong>
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
  <strong>
    {language === "en"
      ? "Connect professionally"
      : "Bangun koneksi profesional"}
  </strong>
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
  <strong>
    {language === "en"
      ? "Explore my code"
      : "Jelajahi kode saya"}
  </strong>
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
  <span>
    {language === "en" ? "PROJECT DETAILS" : "DETAIL PROYEK"}
  </span>
</div>

<h2>
  {language === "en"
    ? "What are you looking"
    : "Apa yang ingin"}
  <br />
  {language === "en"
    ? "to build?"
    : "Anda bangun?"}
</h2>

<p className="contact-page-project-copy">
  {language === "en"
    ? "I work on digital systems designed around real operational needs—from customer-facing products to internal business tools."
    : "Saya mengembangkan sistem digital berdasarkan kebutuhan operasional nyata, mulai dari produk yang digunakan pelanggan hingga sistem internal untuk mendukung bisnis."}
</p>

              <div className="contact-project-types">

<div className="contact-project-type">
  <span>01</span>

  <div>
    <strong>
      {language === "en" ? "Web Application" : "Aplikasi Web"}
    </strong>
    <p>
      {language === "en"
        ? "Dashboards, management systems, and responsive web applications."
        : "Dashboard, sistem manajemen, dan aplikasi web yang responsif di berbagai perangkat."}
    </p>
  </div>
</div>

<div className="contact-project-type">
  <span>02</span>

  <div>
    <strong>
      {language === "en" ? "Mobile Application" : "Aplikasi Mobile"}
    </strong>
    <p>
      {language === "en"
        ? "Mobile tools and operational applications built around real workflows."
        : "Aplikasi mobile dan perangkat operasional digital yang dikembangkan sesuai dengan alur kerja nyata."}
    </p>
  </div>
</div>

<div className="contact-project-type">
  <span>03</span>

  <div>
    <strong>
      {language === "en" ? "Business System" : "Sistem Bisnis"}
    </strong>
    <p>
      {language === "en"
        ? "Connected systems for transactions, operations, reporting, inventory, and business processes."
        : "Sistem terintegrasi untuk transaksi, operasional, pelaporan, inventaris, dan berbagai proses bisnis."}
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
  <span>
    {language === "en"
      ? "HAVE SOMETHING ELSE IN MIND?"
      : "PUNYA IDE LAIN?"}
  </span>
  <strong>
    {language === "en"
      ? "Tell me about your project"
      : "Ceritakan proyek Anda"}
  </strong>
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
    {language === "en"
      ? "Every project starts with understanding the problem before deciding what needs to be built."
      : "Setiap proyek dimulai dengan memahami masalah sebelum menentukan apa yang perlu dibangun."}
  </p>
</div>

        </div>
      </main>

      <Footer />
    </>
  );
}