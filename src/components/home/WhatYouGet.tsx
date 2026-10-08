const benefits = [
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
];

export default function WhatYouGet() {
  return (
    <section className="what-you-get">
      <div className="what-you-get-glow what-you-get-glow-blue" />
      <div className="what-you-get-glow what-you-get-glow-green" />

      <div className="what-you-get-container">
        <div className="what-you-get-heading">
          <div className="what-you-get-label">
            <span>03</span>
            <span>/</span>
            <span>WHAT YOU GET</span>
          </div>

          <div className="what-you-get-title-row">
            <h2>
              More than just
              <br />
              <span>working software.</span>
            </h2>

            <p>
              Working with me means more than receiving a finished product.
              You get a development process built around clarity, support,
              and the needs of your business.
            </p>
          </div>
        </div>

        <div className="what-you-get-grid">
          {benefits.map((benefit) => (
            <article className="what-you-get-item" key={benefit.number}>
              <span className="what-you-get-number">{benefit.number}</span>

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
            Project scope, revision limits, and support period are agreed
            before development begins.
          </p>
        </div>
      </div>
    </section>
  );
}