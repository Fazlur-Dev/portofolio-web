import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Applications",
    description:
      "Modern web applications and dashboards designed for real business workflows.",
    tech: "Next.js",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Responsive mobile applications built for practical, everyday operations.",
    tech: "Flutter",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Business Systems",
    description:
      "Operational systems that connect data, workflows, and business processes.",
    tech: "Firebase",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-heading">
          <div className="services-label">
            <span>01</span>
            <span>/</span>
            <span>WHAT I BUILD</span>
          </div>

          <div className="services-title-row">
            <h2>
              Digital solutions
              <br />
              built around <span>real needs.</span>
            </h2>

            <p>
              I design and develop systems that help businesses manage
              operations, data, and everyday workflows.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">{service.number}</span>

                  <div className="service-icon">
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-card-footer">
                  <span>{service.tech}</span>
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}