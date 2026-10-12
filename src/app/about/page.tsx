"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowDownRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* =====================================================
            01 — ABOUT ME
        ===================================================== */}
        <section className="about-me">
          <div className="about-container">

            <div className="about-section-label">
              <span>01</span>
              <span>/</span>
              <span>
  {language === "en" ? "ABOUT ME" : "TENTANG SAYA"}
</span>
            </div>


            {/* INTRO */}
            <div className="about-me-heading">

              <div>
<span className="about-me-kicker">
  {language === "en"
    ? "FROM BUSINESS OPERATIONS TO SOFTWARE DEVELOPMENT"
    : "DARI OPERASIONAL BISNIS KE PENGEMBANGAN SOFTWARE"}
</span>

<h1>
  {language === "en" ? "My journey didn't" : "Perjalanan saya tidak"}
  <br />
  {language === "en" ? "start with " : "dimulai dari "}
  <span>{language === "en" ? "code." : "coding."}</span>
</h1>
              </div>

              <div className="about-me-heading-side">
                <span>FAZLUR RAHMAN</span>

<p>
  {language === "en"
    ? "Software Developer with a background shaped by education, business operations, and real-world operational experience."
    : "Seorang Software Developer dengan latar belakang yang terbentuk dari pendidikan, operasional bisnis, dan pengalaman langsung di dunia kerja."}
</p>

<a href="#journey" className="about-me-scroll">
  {language === "en" ? "Explore my journey" : "Lihat perjalanan saya"}
  <ArrowDownRight size={16} />
</a>
              </div>

            </div>


            {/* PHOTO + STORY */}
            <div className="about-story" id="journey">

              <div className="about-photo-wrap">

                <div className="about-photo">
                  <Image
                    src="/assets/about/foto-portofolio.png"
                    alt="Fazlur Rahman"
                    width={900}
                    height={1100}
                    priority
                  />
                </div>

                <div className="about-photo-meta">
                  <span>FAZLUR RAHMAN</span>
                  <span>SOFTWARE DEVELOPER</span>
                </div>

              </div>


              <div className="about-story-content">

<span className="about-story-label">
  {language === "en" ? "THE JOURNEY" : "PERJALANAN SAYA"}
</span>

<h2>
  {language === "en"
    ? "Before building systems,"
    : "Sebelum membangun sistem,"}
  <br />
  {language === "en"
    ? "I worked inside the"
    : "saya pernah terlibat langsung dalam"}
  <span>
    {language === "en"
      ? " processes they solve."
      : " proses yang ingin diselesaikannya."}
  </span>
</h2>

                <div className="about-story-text">

<p>
  {language === "en"
    ? "I graduated with a Bachelor's degree in Education, but my professional journey took me through different areas of business operations — starting from administration and inventory supervision to sales management, business operations, and retail purchase order processes."
    : "Saya menyelesaikan pendidikan Sarjana di bidang Pendidikan, tetapi perjalanan profesional membawa saya ke berbagai bidang operasional bisnis — mulai dari administrasi dan pengawasan inventaris hingga manajemen penjualan, operasional bisnis, dan proses purchase order di bidang retail."}
</p>

<p>
  {language === "en"
    ? "Working across these roles gave me first-hand experience with how businesses actually operate: how information moves between people, how inventory needs to be controlled, how sales are tracked, and how operational decisions affect day-to-day work."
    : "Menjalani berbagai peran tersebut memberi saya pengalaman langsung tentang bagaimana sebuah bisnis benar-benar beroperasi: bagaimana informasi berpindah antarorang, bagaimana inventaris perlu dikendalikan, bagaimana penjualan dipantau, dan bagaimana keputusan operasional memengaruhi pekerjaan sehari-hari."}
</p>

<p>
  {language === "en"
    ? "Over time, that experience changed the way I looked at technology. Instead of only seeing software as a tool to use, I became interested in understanding how it could be built to solve the operational problems I had encountered myself."
    : "Seiring waktu, pengalaman tersebut mengubah cara saya melihat teknologi. Saya tidak lagi hanya melihat software sebagai alat untuk digunakan, tetapi mulai tertarik memahami bagaimana software dapat dibangun untuk menyelesaikan berbagai masalah operasional yang pernah saya hadapi sendiri."}
</p>

<p className="about-story-highlight">
  {language === "en"
    ? "Today, I bring both sides of that journey into my work — an understanding of real business operations and the technical ability to turn those workflows into working software."
    : "Kini, saya membawa kedua sisi perjalanan tersebut ke dalam pekerjaan saya — pemahaman terhadap operasional bisnis secara nyata serta kemampuan teknis untuk mengubah alur kerja tersebut menjadi software yang benar-benar dapat digunakan."}
</p>

                </div>

              </div>

            </div>


            {/* CAREER JOURNEY */}
            <div className="about-career">

<div className="about-career-heading">
  <span>
    {language === "en" ? "CAREER JOURNEY" : "PERJALANAN KARIER"}
  </span>

  <p>
    {language === "en"
      ? "Different roles. Different perspectives."
      : "Beragam peran. Beragam perspektif."}
    <br />
    {language === "en"
      ? "One path toward building better systems."
      : "Satu perjalanan menuju pembangunan sistem yang lebih baik."}
  </p>
</div>


              <div className="about-career-track">

<div className="about-career-item">
  <span>01</span>
  <small>
    {language === "en" ? "EDUCATION" : "PENDIDIKAN"}
  </small>
  <strong>
    {language === "en" ? "Bachelor's Degree" : "Sarjana"}
    <br />
    {language === "en" ? "in Education" : "Pendidikan"}
  </strong>
</div>

                <div className="about-career-arrow">→</div>

<div className="about-career-item">
  <span>02</span>
  <small>
    {language === "en" ? "OPERATIONS" : "OPERASIONAL"}
  </small>
  <strong>
    {language === "en" ? "Administration" : "Administrasi"}
  </strong>
</div>

                <div className="about-career-arrow">→</div>

<div className="about-career-item">
  <span>03</span>
  <small>
    {language === "en" ? "OPERATIONS" : "OPERASIONAL"}
  </small>
  <strong>
    {language === "en" ? "Inventory" : "Pengawasan"}
    <br />
    {language === "en" ? "Supervision" : "Inventaris"}
  </strong>
</div>

                <div className="about-career-arrow">→</div>

<div className="about-career-item">
  <span>04</span>
  <small>
    {language === "en" ? "COMMERCIAL" : "KOMERSIAL"}
  </small>
  <strong>
    {language === "en" ? "Sales" : "Manajemen"}
    <br />
    {language === "en" ? "Management" : "Penjualan"}
  </strong>
</div>

                <div className="about-career-arrow">→</div>

<div className="about-career-item">
  <span>05</span>
  <small>
    {language === "en" ? "BUSINESS" : "BISNIS"}
  </small>
  <strong>
    {language === "en" ? "Business &" : "Bisnis &"}
    <br />
    {language === "en" ? "Retail PO" : "PO Retail"}
  </strong>
</div>

                <div className="about-career-arrow">→</div>

<div className="about-career-item about-career-current">
  <span>06</span>
  <small>
    {language === "en" ? "TODAY" : "SEKARANG"}
  </small>
  <strong>
    {language === "en" ? "Software" : "Pengembangan"}
    <br />
    {language === "en" ? "Development" : "Software"}
  </strong>
</div>

              </div>

            </div>

          </div>
        </section>
        {/* =====================================================
    02 — HOW I SEE PROBLEMS
===================================================== */}
<section className="about-problems" id="problems">
  <div className="about-container">

    <div className="about-section-label">
      <span>02</span>
      <span>/</span>
      <span>
  {language === "en" ? "HOW I SEE PROBLEMS" : "CARA SAYA MELIHAT MASALAH"}
</span>
    </div>


    <div className="about-problems-intro">

      <div>
<span className="about-problems-kicker">
  {language === "en" ? "MY PERSPECTIVE" : "PERSPEKTIF SAYA"}
</span>

<h2>
  {language === "en" ? "I build by" : "Saya membangun dengan"}
  <br />
  {language === "en" ? "understanding" : "memahami"}
  <br />
  <span>
    {language === "en" ? "the problem first." : "masalahnya terlebih dahulu."}
  </span>
</h2>
      </div>


      <div className="about-problems-side">

<p className="about-problems-lead">
  {language === "en"
    ? "A good system doesn't start with code. It starts with understanding how people actually work."
    : "Sistem yang baik tidak dimulai dari coding. Semuanya dimulai dengan memahami bagaimana orang benar-benar bekerja."}
</p>

<p>
  {language === "en"
    ? "Before deciding what to build, I try to understand the people involved, the workflow they follow, the information they need, and the friction that makes the process harder than it should be."
    : "Sebelum menentukan apa yang perlu dibangun, saya mencoba memahami siapa saja yang terlibat, alur kerja yang mereka jalankan, informasi yang mereka butuhkan, serta hambatan yang membuat proses tersebut menjadi lebih sulit dari yang seharusnya."}
</p>

      </div>

    </div>


    {/* THINKING FLOW */}
    <div className="about-thinking">

      <div className="about-thinking-question">
        <span>
          {language === "en" ? "THE FIRST QUESTION" : "PERTANYAAN PERTAMA"}
        </span>

<p>
    {language === "en" ? "Not" : "Bukan"}
    <strong>
      {language === "en"
        ? "“What feature should I build?”"
        : "“Fitur apa yang harus saya buat?”"}
    </strong>
  </p>
      </div>


      <div className="about-thinking-divider">
        <span>→</span>
      </div>


<div className="about-thinking-answer">
  <span>
    {language === "en" ? "THE BETTER QUESTION" : "PERTANYAAN YANG LEBIH TEPAT"}
  </span>

  <p>
    {language === "en" ? "But" : "Tetapi"}
    <strong>
      {language === "en"
        ? "“What problem are we actually trying to solve?”"
        : "“Masalah apa yang sebenarnya ingin kita selesaikan?”"}
    </strong>
  </p>
</div>

    </div>


    {/* PRINCIPLES */}
    <div className="about-problem-principles">

      <article>
        <span>01</span>

        <div>
<small>
  {language === "en" ? "PEOPLE" : "PENGGUNA"}
</small>

<h3>
  {language === "en"
    ? "Who is actually using it?"
    : "Siapa yang benar-benar akan menggunakannya?"}
</h3>

<p>
  {language === "en"
    ? "Understanding the person behind the workflow helps determine what the system needs to make simpler, faster, or clearer."
    : "Memahami orang yang menjalankan alur kerja membantu menentukan bagian mana yang perlu dibuat lebih sederhana, lebih cepat, atau lebih jelas oleh sistem."}
</p>
        </div>
      </article>


      <article>
        <span>02</span>

        <div>
          <small>
            {language === "en" ? "WORKFLOW" : "ALUR KERJA"}
          </small>

          <h3>
            {language === "en"
              ? "How does the process work today?"
              : "Bagaimana proses tersebut berjalan hari ini?"}
          </h3>

<p>
  {language === "en"
    ? "Before replacing a process with software, I want to understand how information, decisions, and actions currently move through it."
    : "Sebelum menggantikan suatu proses dengan software, saya ingin memahami bagaimana informasi, keputusan, dan tindakan mengalir dalam proses tersebut saat ini."}
</p>
        </div>
      </article>


      <article>
        <span>03</span>

        <div>
<small>
  {language === "en" ? "FRICTION" : "HAMBATAN"}
</small>

<h3>
  {language === "en"
    ? "Where does the problem happen?"
    : "Di mana masalahnya terjadi?"}
</h3>

<p>
  {language === "en"
    ? "Repetitive work, disconnected information, manual processes, and unclear visibility often reveal where software can create real value."
    : "Pekerjaan berulang, informasi yang tidak terhubung, proses manual, dan kurangnya visibilitas sering menunjukkan bagian di mana software dapat memberikan manfaat nyata."}
</p>
        </div>
      </article>


      <article>
        <span>04</span>

        <div>
          <small>
            {language === "en" ? "SOLUTION" : "SOLUSI"}
          </small>

<h3>
  {language === "en"
    ? "What should technology improve?"
    : "Apa yang seharusnya diperbaiki oleh teknologi?"}
</h3>

<p>
  {language === "en"
    ? "Technology becomes useful when it removes friction from the workflow instead of simply adding another layer of complexity."
    : "Teknologi menjadi bermanfaat ketika mampu mengurangi hambatan dalam alur kerja, bukan justru menambah kerumitan baru."}
</p>
        </div>
      </article>

    </div>


    {/* CLOSING THOUGHT */}
    <div className="about-problems-closing">

      <span>
  {language === "en"
    ? "HOW I THINK ABOUT SOFTWARE"
    : "CARA SAYA MEMANDANG SOFTWARE"}
</span>

<p>
  {language === "en"
    ? "Code is part of the solution."
    : "Coding adalah bagian dari solusi."}

  <strong>
    {language === "en"
      ? "Understanding what should be built — and why — comes first."
      : "Memahami apa yang perlu dibangun — dan mengapa — adalah langkah yang lebih utama."}
  </strong>
</p>

    </div>

  </div>
</section>
{/* =====================================================
    03 — BUSINESS EXPERIENCE
===================================================== */}
<section className="about-experience" id="experience">
  <div className="about-container">

    <div className="about-section-label">
      <span>03</span>
      <span>/</span>
      <span>
  {language === "en" ? "BUSINESS EXPERIENCE" : "PENGALAMAN BISNIS"}
</span>
    </div>


    {/* INTRO */}
    <div className="about-experience-intro">

      <div>
<span className="about-experience-kicker">
  {language === "en"
    ? "EXPERIENCE THAT SHAPES HOW I BUILD"
    : "PENGALAMAN YANG MEMBENTUK CARA SAYA MEMBANGUN"}
</span>

<h2>
  {language === "en" ? "Experience outside" : "Pengalaman di luar"}
  <br />
  {language === "en" ? "software became an" : "dunia software menjadi"}
  <br />
  <span>
    {language === "en" ? "advantage inside it." : "keunggulan di dalamnya."}
  </span>
</h2>
      </div>


      <div className="about-experience-side">

<p className="about-experience-lead">
  {language === "en"
    ? "Building business software requires more than understanding technology."
    : "Membangun software untuk bisnis membutuhkan lebih dari sekadar pemahaman terhadap teknologi."}
</p>

<p>
  {language === "en"
    ? "My previous roles exposed me to the operational side of a business — where products move, sales happen, stock changes, purchase orders are processed, and decisions depend on accurate information."
    : "Berbagai peran yang pernah saya jalani membawa saya terlibat langsung dalam sisi operasional bisnis — tempat produk bergerak, penjualan terjadi, stok berubah, purchase order diproses, dan keputusan bergantung pada informasi yang akurat."}
</p>

<p>
  {language === "en"
    ? "That experience helps me understand not only what a feature needs to do technically, but why it matters to the people using it."
    : "Pengalaman tersebut membantu saya memahami bukan hanya apa yang harus dilakukan sebuah fitur secara teknis, tetapi juga mengapa fitur tersebut penting bagi orang yang menggunakannya."}
</p>

      </div>

    </div>


    {/* EXPERIENCE AREAS */}
    <div className="about-experience-grid">

      {/* INVENTORY */}
      <article className="about-experience-card">

<div className="about-experience-number">
  <span>01</span>
  <small>
    {language === "en" ? "INVENTORY" : "INVENTARIS"}
  </small>
</div>

        <div className="about-experience-content">
<h3>
  {language === "en" ? "Understanding how" : "Memahami bagaimana"}
  <br />
  {language === "en" ? "stock actually moves." : "stok benar-benar bergerak."}
</h3>

<p>
  {language === "en"
    ? "Experience in inventory supervision gave me a practical understanding of stock movement, incoming and outgoing goods, record accuracy, discrepancies, and the importance of traceability."
    : "Pengalaman dalam pengawasan inventaris memberi saya pemahaman praktis tentang pergerakan stok, barang masuk dan keluar, akurasi pencatatan, selisih stok, serta pentingnya kemampuan untuk menelusuri setiap perubahan."}
</p>
        </div>

<div className="about-experience-tags">
  <span>
    {language === "en" ? "STOCK FLOW" : "ALUR STOK"}
  </span>
  <span>
    {language === "en" ? "TRACKING" : "PELACAKAN"}
  </span>
  <span>
    {language === "en" ? "ACCURACY" : "AKURASI"}
  </span>
</div>

      </article>


      {/* SALES */}
      <article className="about-experience-card">

        <div className="about-experience-number">
          <span>02</span>
          <small>
            {language === "en" ? "SALES" : "PENJUALAN"}
          </small>
        </div>

        <div className="about-experience-content">
<h3>
  {language === "en" ? "Seeing the business" : "Melihat bisnis"}
  <br />
  {language === "en" ? "through transactions." : "melalui transaksi."}
</h3>

<p>
  {language === "en"
    ? "Working with sales helped me understand how transactions, products, performance, and reporting connect — and why useful information needs to be easy to access when decisions are being made."
    : "Pengalaman di bidang penjualan membantu saya memahami bagaimana transaksi, produk, performa, dan laporan saling terhubung — serta mengapa informasi yang dibutuhkan harus mudah diakses ketika sebuah keputusan perlu dibuat."}
</p>
        </div>

<div className="about-experience-tags">
  <span>
    {language === "en" ? "TRANSACTIONS" : "TRANSAKSI"}
  </span>
  <span>
    {language === "en" ? "PERFORMANCE" : "PERFORMA"}
  </span>
  <span>
    {language === "en" ? "REPORTING" : "PELAPORAN"}
  </span>
</div>

      </article>


      {/* BUSINESS */}
      <article className="about-experience-card">

<div className="about-experience-number">
  <span>03</span>
  <small>
    {language === "en" ? "BUSINESS OPERATIONS" : "OPERASIONAL BISNIS"}
  </small>
</div>

        <div className="about-experience-content">
<h3>
  {language === "en" ? "Looking beyond" : "Melihat lebih jauh dari"}
  <br />
  {language === "en" ? "individual features." : "sekadar fitur individual."}
</h3>

<p>
  {language === "en"
    ? "Business operations taught me to look at the relationship between people, processes, information, and decisions instead of treating each operational task as an isolated activity."
    : "Pengalaman dalam operasional bisnis mengajarkan saya untuk melihat hubungan antara orang, proses, informasi, dan keputusan, bukan memperlakukan setiap aktivitas operasional sebagai pekerjaan yang berdiri sendiri."}
</p>
        </div>

<div className="about-experience-tags">
  <span>
    {language === "en" ? "WORKFLOW" : "ALUR KERJA"}
  </span>
  <span>
    {language === "en" ? "PROCESS" : "PROSES"}
  </span>
  <span>
    {language === "en" ? "DECISIONS" : "KEPUTUSAN"}
  </span>
</div>

      </article>


      {/* PO */}
      <article className="about-experience-card">

        <div className="about-experience-number">
          <span>04</span>
          <small>
            {language === "en" ? "RETAIL PO" : "PO RITEL"}
          </small>
        </div>

        <div className="about-experience-content">
          <h3>
            {language === "en" ? "Understanding a process" : "Memahami sebuah proses"}
            <br />
            {language === "en" ? "from request to completion." : "dari permintaan hingga penyelesaian."}
          </h3>

          <p>
            {language === "en"
              ? "Retail purchase order operations gave me experience with workflows that move through multiple stages, where status, responsibility, documentation, and visibility all need to remain connected."
              : "Operasi order pembelian ritel memberi saya pengalaman dengan alur kerja yang bergerak melalui beberapa tahap, di mana status, tanggung jawab, dokumentasi, dan visibilitas semuanya perlu tetap terhubung."}
          </p>
        </div>

        <div className="about-experience-tags">
          <span>
            {language === "en" ? "PROCESS FLOW" : "ALUR PROSES"}
          </span>
          <span>
            {language === "en" ? "STATUS" : "STATUS"}
          </span>
          <span>
            {language === "en" ? "DOCUMENTATION" : "DOKUMENTASI"}
          </span>
        </div>

      </article>

    </div>


    {/* CONNECTION TO SOFTWARE */}
    <div className="about-experience-bridge">

<div className="about-experience-bridge-label">
  <span>
    {language === "en" ? "BUSINESS EXPERIENCE" : "PENGALAMAN BISNIS"}
  </span>
  <i />
  <span>
    {language === "en"
      ? "SOFTWARE DEVELOPMENT"
      : "PENGEMBANGAN SOFTWARE"}
  </span>
</div>


      <div className="about-experience-bridge-content">

<p>
  {language === "en"
    ? "This background changes the questions"
    : "Latar belakang ini memengaruhi cara"}
  <br />
  {language === "en"
    ? "I ask when building software."
    : "saya berpikir ketika membangun software."}
</p>

<blockquote>
  {language === "en"
    ? "I don't only think about"
    : "Saya tidak hanya memikirkan"}

  <strong>
    {language === "en"
      ? "how a feature should work technically."
      : "bagaimana sebuah fitur bekerja secara teknis."}
  </strong>

  <span>
    {language === "en"
      ? "I think about how it will be used operationally."
      : "Saya juga memikirkan bagaimana fitur tersebut akan digunakan dalam operasional nyata."}
  </span>
</blockquote>

      </div>

    </div>

  </div>
</section>
{/* =====================================================
    04 — HOW I WORK
===================================================== */}
<section className="about-workflow" id="workflow">
  <div className="about-container">

    <div className="about-section-label">
      <span>04</span>
      <span>/</span>
      <span>
  {language === "en" ? "HOW I WORK" : "CARA SAYA BEKERJA"}
</span>
    </div>


    {/* INTRO */}
    <div className="about-workflow-intro">

      <div>
<span className="about-workflow-kicker">
  {language === "en"
    ? "FROM PROBLEM TO WORKING PRODUCT"
    : "DARI MASALAH MENJADI PRODUK YANG BERFUNGSI"}
</span>

<h2>
  {language === "en" ? "Understand." : "Pahami."}
  <br />
  {language === "en" ? "Structure." : "Susun."}
  <br />
  <span>
    {language === "en" ? "Build." : "Bangun."}
  </span>
</h2>
      </div>


      <div className="about-workflow-side">

<p className="about-workflow-lead">
  {language === "en"
    ? "My development process follows the same principle: understand what needs to work before deciding how to build it."
    : "Proses pengembangan saya mengikuti prinsip yang sama: pahami terlebih dahulu apa yang harus bekerja sebelum menentukan bagaimana cara membangunnya."}
</p>

<p>
  {language === "en"
    ? "I move from the real problem into the workflow, translate that workflow into a system, and continue refining the implementation until the product works as intended in actual use."
    : "Saya memulai dari masalah nyata, memahami alur kerjanya, menerjemahkan alur tersebut menjadi sebuah sistem, lalu terus menyempurnakan implementasinya hingga produk dapat bekerja sebagaimana mestinya dalam penggunaan nyata."}
</p>

      </div>

    </div>


    {/* MAIN PIPELINE */}
    <div className="about-workflow-pipeline">

      {/* STEP 01 */}
      <article className="about-workflow-step">

<div className="about-workflow-step-top">
  <span>01</span>
  <small>
    {language === "en" ? "UNDERSTAND" : "PAHAMI"}
  </small>
</div>

        <div className="about-workflow-step-content">

<span className="about-workflow-step-label">
  {language === "en" ? "START WITH" : "MULAI DARI"}
</span>

<h3>
  {language === "en" ? "The" : "Sebuah"}
  <br />
  {language === "en" ? "problem." : "masalah."}
</h3>

<p>
  {language === "en"
    ? "Understand the users, operational context, current process, constraints, and the actual problem that needs to be solved."
    : "Pahami pengguna, konteks operasional, proses yang berjalan saat ini, berbagai batasan yang ada, serta masalah sebenarnya yang perlu diselesaikan."}
</p>

        </div>

<div className="about-workflow-details">
  <span>
    {language === "en" ? "USER" : "PENGGUNA"}
  </span>
  <span>
    {language === "en" ? "CONTEXT" : "KONTEKS"}
  </span>
  <span>
    {language === "en" ? "PROBLEM" : "MASALAH"}
  </span>
</div>

      </article>


      <div className="about-workflow-connector">
        <span>01 → 02</span>
        <i />
      </div>


      {/* STEP 02 */}
      <article className="about-workflow-step">

<div className="about-workflow-step-top">
  <span>02</span>
  <small>
    {language === "en" ? "STRUCTURE" : "SUSUN"}
  </small>
</div>

        <div className="about-workflow-step-content">

<span className="about-workflow-step-label">
  {language === "en" ? "TURN WORKFLOWS INTO" : "UBAH ALUR KERJA MENJADI"}
</span>

<h3>
  {language === "en" ? "The" : "Sebuah"}
  <br />
  {language === "en" ? "system." : "sistem."}
</h3>

<p>
  {language === "en"
    ? "Translate real processes into application flows, data structures, business logic, interfaces, and the architecture connecting them."
    : "Terjemahkan proses nyata menjadi alur aplikasi, struktur data, business logic, interface, serta arsitektur yang menghubungkan seluruh komponennya."}
</p>

        </div>

<div className="about-workflow-details">
  <span>
    {language === "en" ? "FLOW" : "ALUR"}
  </span>
  <span>DATA</span>
  <span>
    {language === "en" ? "LOGIC" : "LOGIKA"}
  </span>
</div>

      </article>


      <div className="about-workflow-connector">
        <span>02 → 03</span>
        <i />
      </div>


      {/* STEP 03 */}
      <article className="about-workflow-step about-workflow-step-final">

<div className="about-workflow-step-top">
  <span>03</span>
  <small>
    {language === "en" ? "BUILD" : "BANGUN"}
  </small>
</div>

        <div className="about-workflow-step-content">

<span className="about-workflow-step-label">
  {language === "en" ? "MAKE IT" : "BUAT AGAR"}
</span>

<h3>
  {language === "en" ? "Actually" : "Benar-benar"}
  <br />
  {language === "en" ? "work." : "berfungsi."}
</h3>

<p>
  {language === "en"
    ? "Build the product, connect its components, test real scenarios, solve edge cases, refine the experience, and make the system usable."
    : "Bangun produknya, hubungkan setiap komponen, uji berbagai skenario nyata, tangani edge case, sempurnakan pengalaman pengguna, dan pastikan sistem benar-benar dapat digunakan."}
</p>

        </div>

<div className="about-workflow-details">
  <span>
    {language === "en" ? "BUILD" : "BANGUN"}
  </span>
  <span>
    {language === "en" ? "TEST" : "UJI"}
  </span>
  <span>
    {language === "en" ? "ITERATE" : "ITERASI"}
  </span>
</div>

      </article>

    </div>


    {/* DEVELOPMENT LOOP */}
    <div className="about-development-loop">

<div className="about-development-loop-label">
  <span>
    {language === "en" ? "DEVELOPMENT LOOP" : "SIKLUS PENGEMBANGAN"}
  </span>
</div>

<div className="about-development-loop-track">

  <div>
    <span>01</span>
    <strong>
      {language === "en" ? "Implement" : "Implementasi"}
    </strong>
  </div>

  <i>→</i>

  <div>
    <span>02</span>
    <strong>
      {language === "en" ? "Integrate" : "Integrasikan"}
    </strong>
  </div>

  <i>→</i>

  <div>
    <span>03</span>
    <strong>
      {language === "en" ? "Test" : "Uji"}
    </strong>
  </div>

  <i>→</i>

  <div>
    <span>04</span>
    <strong>
      {language === "en" ? "Refine" : "Sempurnakan"}
    </strong>
  </div>

  <i>→</i>

  <div>
    <span>05</span>
    <strong>
      {language === "en" ? "Iterate" : "Ulangi"}
    </strong>
  </div>

</div>

    </div>


    {/* FINAL PRINCIPLE */}
    <div className="about-workflow-closing">

     <span>
  {language === "en" ? "THE PRINCIPLE" : "PRINSIP UTAMA"}
</span>

<p>
  {language === "en"
    ? "A product isn't finished because"
    : "Sebuah produk belum selesai hanya karena"}
  <br />
  {language === "en"
    ? "the interface looks good."
    : "tampilannya sudah terlihat bagus."}

  <strong>
    {language === "en"
      ? "It's finished when the system works for the people who need it."
      : "Produk benar-benar selesai ketika sistem dapat bekerja untuk orang-orang yang membutuhkannya."}
  </strong>
</p>

    </div>

  </div>
</section>
{/* =====================================================
    ABOUT — CLOSING
===================================================== */}
<section className="about-closing">
  <div className="about-container">

    <div className="about-closing-inner">

<div className="about-closing-meta">
  <span>
    {language === "en" ? "END OF ABOUT" : "AKHIR TENTANG SAYA"}
  </span>
  <span>FAZLUR RAHMAN / SOFTWARE DEVELOPER</span>
</div>


      <div className="about-closing-content">

<span className="about-closing-kicker">
  {language === "en"
    ? "FROM PERSPECTIVE TO PRODUCT"
    : "DARI PERSPEKTIF MENJADI PRODUK"}
</span>

<h2>
  {language === "en" ? "Now you know" : "Sekarang Anda tahu"}
  <br />
  {language === "en" ? "how I think." : "cara saya berpikir."}
  <br />
  <span>
    {language === "en"
      ? "See what I build."
      : "Lihat apa yang saya bangun."}
  </span>
</h2>

<p>
  {language === "en"
    ? "My work brings together business understanding, system thinking, and software development to turn real workflows into digital products that actually work."
    : "Pekerjaan saya menggabungkan pemahaman bisnis, cara berpikir sistematis, dan pengembangan software untuk mengubah alur kerja nyata menjadi produk digital yang benar-benar dapat digunakan."}
</p>


        <div className="about-closing-actions">

<a
  href="/projects"
  className="about-closing-primary"
>
  {language === "en" ? "View my projects" : "Lihat proyek saya"}
  <span>↗</span>
</a>

<a
  href="/#contact"
  className="about-closing-secondary"
>
  {language === "en" ? "Let's talk" : "Mari bicara"}
  <span>↗</span>
</a>

        </div>

      </div>


<div className="about-closing-signature">
  <span>
    {language === "en"
      ? "DESIGNED & DEVELOPED BY"
      : "DIRANCANG & DIKEMBANGKAN OLEH"}
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