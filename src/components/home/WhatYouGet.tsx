"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WhatYouGet() {
  const { language } = useLanguage();

  const content = {
    en: {
      label: "WHAT YOU GET",
      titleLine1: "More than just",
      titleHighlight: "working software.",
      description:
        "Working with me means more than receiving a finished product. You get a development process built around clarity, support, and the needs of your business.",
      note:
        "Project scope, revision limits, and support period are agreed before development begins.",

      benefits: [
        {
          number: "01",
          title: "Free Bug Fixes",
          description:
            "Issues caused by the development are covered during the agreed support period, so you are not left dealing with technical problems alone.",
        },
        {
          number: "02",
          title: "Revision Included",
          description:
            "Minor revisions are included within the agreed project scope, giving you room to refine the final result before everything is wrapped up.",
        },
        {
          number: "03",
          title: "Fair & Transparent Pricing",
          description:
            "Pricing is based on the actual scope and complexity of the project, with clear expectations before development begins.",
        },
        {
          number: "04",
          title: "Post-Launch Support",
          description:
            "Support continues through the initial launch period to help with deployment, adjustments, and early usage issues.",
        },
        {
          number: "05",
          title: "Built for Your Business",
          description:
            "Your system is designed around your workflow and operational needs instead of forcing your business into a generic template.",
        },
        {
          number: "06",
          title: "Direct Communication",
          description:
            "You communicate directly with the developer building your project, keeping decisions, feedback, and progress clear from start to finish.",
        },
      ],
    },

    id: {
      label: "YANG ANDA DAPATKAN",
      titleLine1: "Lebih dari sekadar",
      titleHighlight: "software yang berfungsi.",
      description:
        "Bekerja sama dengan saya bukan sekadar menerima produk yang sudah jadi. Anda mendapatkan proses pengembangan yang mengutamakan kejelasan, dukungan, dan kebutuhan bisnis Anda.",
      note:
        "Ruang lingkup proyek, batas revisi, dan periode dukungan disepakati sebelum proses pengembangan dimulai.",

      benefits: [
        {
          number: "01",
          title: "Perbaikan Bug Gratis",
          description:
            "Masalah yang disebabkan oleh proses pengembangan akan ditangani selama periode dukungan yang telah disepakati, sehingga Anda tidak harus menghadapi masalah teknis sendirian.",
        },
        {
          number: "02",
          title: "Revisi Termasuk",
          description:
            "Revisi minor termasuk dalam ruang lingkup proyek yang telah disepakati, sehingga Anda memiliki ruang untuk menyempurnakan hasil akhir sebelum proyek diselesaikan.",
        },
        {
          number: "03",
          title: "Harga Adil & Transparan",
          description:
            "Harga ditentukan berdasarkan ruang lingkup dan tingkat kompleksitas proyek, dengan kesepakatan yang jelas sebelum pengembangan dimulai.",
        },
        {
          number: "04",
          title: "Dukungan Setelah Peluncuran",
          description:
            "Dukungan tetap tersedia selama periode awal peluncuran untuk membantu proses deployment, penyesuaian, dan kendala awal penggunaan.",
        },
        {
          number: "05",
          title: "Dibangun untuk Bisnis Anda",
          description:
            "Sistem dirancang berdasarkan alur kerja dan kebutuhan operasional bisnis Anda, bukan memaksa bisnis mengikuti template generik.",
        },
        {
          number: "06",
          title: "Komunikasi Langsung",
          description:
            "Anda berkomunikasi langsung dengan developer yang mengembangkan proyek Anda, sehingga keputusan, masukan, dan progres tetap jelas dari awal hingga selesai.",
        },
      ],
    },
  };

  const text = content[language];

  return (
    <section className="what-you-get">
      <div className="what-you-get-glow what-you-get-glow-blue" />
      <div className="what-you-get-glow what-you-get-glow-green" />

      <div className="what-you-get-container">
        <div className="what-you-get-heading">
          <div className="what-you-get-label">
            <span>03</span>
            <span>/</span>
            <span>{text.label}</span>
          </div>

          <div className="what-you-get-title-row">
            <h2>
              {text.titleLine1}
              <br />
              <span>{text.titleHighlight}</span>
            </h2>

            <p>
              {text.description}
            </p>
          </div>
        </div>

        <div className="what-you-get-grid">
          {text.benefits.map((benefit) => (
            <article
              className="what-you-get-item"
              key={benefit.number}
            >
              <span className="what-you-get-number">
                {benefit.number}
              </span>

              <div className="what-you-get-copy">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="what-you-get-note">
          <span />

          <p>
            {text.note}
          </p>
        </div>
      </div>
    </section>
  );
}