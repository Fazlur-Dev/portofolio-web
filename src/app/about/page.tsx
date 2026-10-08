import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowDownRight } from "lucide-react";

export default function AboutPage() {
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
              <span>ABOUT ME</span>
            </div>


            {/* INTRO */}
            <div className="about-me-heading">

              <div>
                <span className="about-me-kicker">
                  FROM BUSINESS OPERATIONS TO SOFTWARE DEVELOPMENT
                </span>

                <h1>
                  My journey didn&apos;t
                  <br />
                  start with <span>code.</span>
                </h1>
              </div>

              <div className="about-me-heading-side">
                <span>FAZLUR RAHMAN</span>

                <p>
                  Software developer with a background shaped by
                  education, business operations, and real-world
                  operational experience.
                </p>

                <a href="#journey" className="about-me-scroll">
                  Explore my journey
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
                  THE JOURNEY
                </span>

                <h2>
                  Before building systems,
                  <br />
                  I worked inside the
                  <span> processes they solve.</span>
                </h2>

                <div className="about-story-text">

                  <p>
                    I graduated with a Bachelor&apos;s degree in
                    Education, but my professional journey took me
                    through different areas of business operations —
                    starting from administration and inventory
                    supervision to sales management, business
                    operations, and retail purchase order processes.
                  </p>

                  <p>
                    Working across these roles gave me first-hand
                    experience with how businesses actually operate:
                    how information moves between people, how
                    inventory needs to be controlled, how sales are
                    tracked, and how operational decisions affect
                    day-to-day work.
                  </p>

                  <p>
                    Over time, that experience changed the way I
                    looked at technology. Instead of only seeing
                    software as a tool to use, I became interested
                    in understanding how it could be built to solve
                    the operational problems I had encountered
                    myself.
                  </p>

                  <p className="about-story-highlight">
                    Today, I bring both sides of that journey into
                    my work — an understanding of real business
                    operations and the technical ability to turn
                    those workflows into working software.
                  </p>

                </div>

              </div>

            </div>


            {/* CAREER JOURNEY */}
            <div className="about-career">

              <div className="about-career-heading">
                <span>CAREER JOURNEY</span>

                <p>
                  Different roles. Different perspectives.
                  <br />
                  One path toward building better systems.
                </p>
              </div>


              <div className="about-career-track">

                <div className="about-career-item">
                  <span>01</span>
                  <small>EDUCATION</small>
                  <strong>
                    Bachelor&apos;s Degree
                    <br />
                    in Education
                  </strong>
                </div>

                <div className="about-career-arrow">→</div>

                <div className="about-career-item">
                  <span>02</span>
                  <small>OPERATIONS</small>
                  <strong>Administration</strong>
                </div>

                <div className="about-career-arrow">→</div>

                <div className="about-career-item">
                  <span>03</span>
                  <small>OPERATIONS</small>
                  <strong>
                    Inventory
                    <br />
                    Supervision
                  </strong>
                </div>

                <div className="about-career-arrow">→</div>

                <div className="about-career-item">
                  <span>04</span>
                  <small>COMMERCIAL</small>
                  <strong>
                    Sales
                    <br />
                    Management
                  </strong>
                </div>

                <div className="about-career-arrow">→</div>

                <div className="about-career-item">
                  <span>05</span>
                  <small>BUSINESS</small>
                  <strong>
                    Business &amp;
                    <br />
                    Retail PO
                  </strong>
                </div>

                <div className="about-career-arrow">→</div>

                <div className="about-career-item about-career-current">
                  <span>06</span>
                  <small>TODAY</small>
                  <strong>
                    Software
                    <br />
                    Development
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
      <span>HOW I SEE PROBLEMS</span>
    </div>


    <div className="about-problems-intro">

      <div>
        <span className="about-problems-kicker">
          MY PERSPECTIVE
        </span>

        <h2>
          I build by
          <br />
          understanding
          <br />
          <span>the problem first.</span>
        </h2>
      </div>


      <div className="about-problems-side">

        <p className="about-problems-lead">
          A good system doesn&apos;t start with code.
          It starts with understanding how people actually work.
        </p>

        <p>
          Before deciding what to build, I try to understand
          the people involved, the workflow they follow,
          the information they need, and the friction that
          makes the process harder than it should be.
        </p>

      </div>

    </div>


    {/* THINKING FLOW */}
    <div className="about-thinking">

      <div className="about-thinking-question">
        <span>THE FIRST QUESTION</span>

        <p>
          Not
          <strong>
            “What feature should I build?”
          </strong>
        </p>
      </div>


      <div className="about-thinking-divider">
        <span>→</span>
      </div>


      <div className="about-thinking-answer">
        <span>THE BETTER QUESTION</span>

        <p>
          But
          <strong>
            “What problem are we actually trying to solve?”
          </strong>
        </p>
      </div>

    </div>


    {/* PRINCIPLES */}
    <div className="about-problem-principles">

      <article>
        <span>01</span>

        <div>
          <small>PEOPLE</small>

          <h3>Who is actually using it?</h3>

          <p>
            Understanding the person behind the workflow helps
            determine what the system needs to make simpler,
            faster, or clearer.
          </p>
        </div>
      </article>


      <article>
        <span>02</span>

        <div>
          <small>WORKFLOW</small>

          <h3>How does the process work today?</h3>

          <p>
            Before replacing a process with software, I want to
            understand how information, decisions, and actions
            currently move through it.
          </p>
        </div>
      </article>


      <article>
        <span>03</span>

        <div>
          <small>FRICTION</small>

          <h3>Where does the problem happen?</h3>

          <p>
            Repetitive work, disconnected information, manual
            processes, and unclear visibility often reveal where
            software can create real value.
          </p>
        </div>
      </article>


      <article>
        <span>04</span>

        <div>
          <small>SOLUTION</small>

          <h3>What should technology improve?</h3>

          <p>
            Technology becomes useful when it removes friction
            from the workflow instead of simply adding another
            layer of complexity.
          </p>
        </div>
      </article>

    </div>


    {/* CLOSING THOUGHT */}
    <div className="about-problems-closing">

      <span>HOW I THINK ABOUT SOFTWARE</span>

      <p>
        Code is part of the solution.
        <strong>
          Understanding what should be built — and why —
          comes first.
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
      <span>BUSINESS EXPERIENCE</span>
    </div>


    {/* INTRO */}
    <div className="about-experience-intro">

      <div>
        <span className="about-experience-kicker">
          EXPERIENCE THAT SHAPES HOW I BUILD
        </span>

        <h2>
          Experience outside
          <br />
          software became an
          <br />
          <span>advantage inside it.</span>
        </h2>
      </div>


      <div className="about-experience-side">

        <p className="about-experience-lead">
          Building business software requires more than
          understanding technology.
        </p>

        <p>
          My previous roles exposed me to the operational side
          of a business — where products move, sales happen,
          stock changes, purchase orders are processed, and
          decisions depend on accurate information.
        </p>

        <p>
          That experience helps me understand not only what a
          feature needs to do technically, but why it matters
          to the people using it.
        </p>

      </div>

    </div>


    {/* EXPERIENCE AREAS */}
    <div className="about-experience-grid">

      {/* INVENTORY */}
      <article className="about-experience-card">

        <div className="about-experience-number">
          <span>01</span>
          <small>INVENTORY</small>
        </div>

        <div className="about-experience-content">
          <h3>
            Understanding how
            <br />
            stock actually moves.
          </h3>

          <p>
            Experience in inventory supervision gave me a
            practical understanding of stock movement,
            incoming and outgoing goods, record accuracy,
            discrepancies, and the importance of traceability.
          </p>
        </div>

        <div className="about-experience-tags">
          <span>STOCK FLOW</span>
          <span>TRACKING</span>
          <span>ACCURACY</span>
        </div>

      </article>


      {/* SALES */}
      <article className="about-experience-card">

        <div className="about-experience-number">
          <span>02</span>
          <small>SALES</small>
        </div>

        <div className="about-experience-content">
          <h3>
            Seeing the business
            <br />
            through transactions.
          </h3>

          <p>
            Working with sales helped me understand how
            transactions, products, performance, and reporting
            connect — and why useful information needs to be
            easy to access when decisions are being made.
          </p>
        </div>

        <div className="about-experience-tags">
          <span>TRANSACTIONS</span>
          <span>PERFORMANCE</span>
          <span>REPORTING</span>
        </div>

      </article>


      {/* BUSINESS */}
      <article className="about-experience-card">

        <div className="about-experience-number">
          <span>03</span>
          <small>BUSINESS OPERATIONS</small>
        </div>

        <div className="about-experience-content">
          <h3>
            Looking beyond
            <br />
            individual features.
          </h3>

          <p>
            Business operations taught me to look at the
            relationship between people, processes, information,
            and decisions instead of treating each operational
            task as an isolated activity.
          </p>
        </div>

        <div className="about-experience-tags">
          <span>WORKFLOW</span>
          <span>PROCESS</span>
          <span>DECISIONS</span>
        </div>

      </article>


      {/* PO */}
      <article className="about-experience-card">

        <div className="about-experience-number">
          <span>04</span>
          <small>RETAIL PO</small>
        </div>

        <div className="about-experience-content">
          <h3>
            Understanding a process
            <br />
            from request to completion.
          </h3>

          <p>
            Retail purchase order operations gave me experience
            with workflows that move through multiple stages,
            where status, responsibility, documentation, and
            visibility all need to remain connected.
          </p>
        </div>

        <div className="about-experience-tags">
          <span>PROCESS FLOW</span>
          <span>STATUS</span>
          <span>DOCUMENTATION</span>
        </div>

      </article>

    </div>


    {/* CONNECTION TO SOFTWARE */}
    <div className="about-experience-bridge">

      <div className="about-experience-bridge-label">
        <span>BUSINESS EXPERIENCE</span>
        <i />
        <span>SOFTWARE DEVELOPMENT</span>
      </div>


      <div className="about-experience-bridge-content">

        <p>
          This background changes the questions
          <br />
          I ask when building software.
        </p>

        <blockquote>
          I don&apos;t only think about
          <strong>
            how a feature should work technically.
          </strong>

          <span>
            I think about how it will be used operationally.
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
      <span>HOW I WORK</span>
    </div>


    {/* INTRO */}
    <div className="about-workflow-intro">

      <div>
        <span className="about-workflow-kicker">
          FROM PROBLEM TO WORKING PRODUCT
        </span>

        <h2>
          Understand.
          <br />
          Structure.
          <br />
          <span>Build.</span>
        </h2>
      </div>


      <div className="about-workflow-side">

        <p className="about-workflow-lead">
          My development process follows the same principle:
          understand what needs to work before deciding
          how to build it.
        </p>

        <p>
          I move from the real problem into the workflow,
          translate that workflow into a system, and continue
          refining the implementation until the product works
          as intended in actual use.
        </p>

      </div>

    </div>


    {/* MAIN PIPELINE */}
    <div className="about-workflow-pipeline">

      {/* STEP 01 */}
      <article className="about-workflow-step">

        <div className="about-workflow-step-top">
          <span>01</span>
          <small>UNDERSTAND</small>
        </div>

        <div className="about-workflow-step-content">

          <span className="about-workflow-step-label">
            START WITH
          </span>

          <h3>
            The
            <br />
            problem.
          </h3>

          <p>
            Understand the users, operational context,
            current process, constraints, and the actual
            problem that needs to be solved.
          </p>

        </div>

        <div className="about-workflow-details">
          <span>USER</span>
          <span>CONTEXT</span>
          <span>PROBLEM</span>
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
          <small>STRUCTURE</small>
        </div>

        <div className="about-workflow-step-content">

          <span className="about-workflow-step-label">
            TURN WORKFLOWS INTO
          </span>

          <h3>
            The
            <br />
            system.
          </h3>

          <p>
            Translate real processes into application flows,
            data structures, business logic, interfaces,
            and the architecture connecting them.
          </p>

        </div>

        <div className="about-workflow-details">
          <span>FLOW</span>
          <span>DATA</span>
          <span>LOGIC</span>
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
          <small>BUILD</small>
        </div>

        <div className="about-workflow-step-content">

          <span className="about-workflow-step-label">
            MAKE IT
          </span>

          <h3>
            Actually
            <br />
            work.
          </h3>

          <p>
            Build the product, connect its components,
            test real scenarios, solve edge cases, refine
            the experience, and make the system usable.
          </p>

        </div>

        <div className="about-workflow-details">
          <span>BUILD</span>
          <span>TEST</span>
          <span>ITERATE</span>
        </div>

      </article>

    </div>


    {/* DEVELOPMENT LOOP */}
    <div className="about-development-loop">

      <div className="about-development-loop-label">
        <span>DEVELOPMENT LOOP</span>
      </div>

      <div className="about-development-loop-track">

        <div>
          <span>01</span>
          <strong>Implement</strong>
        </div>

        <i>→</i>

        <div>
          <span>02</span>
          <strong>Integrate</strong>
        </div>

        <i>→</i>

        <div>
          <span>03</span>
          <strong>Test</strong>
        </div>

        <i>→</i>

        <div>
          <span>04</span>
          <strong>Refine</strong>
        </div>

        <i>→</i>

        <div>
          <span>05</span>
          <strong>Iterate</strong>
        </div>

      </div>

    </div>


    {/* FINAL PRINCIPLE */}
    <div className="about-workflow-closing">

      <span>THE PRINCIPLE</span>

      <p>
        A product isn&apos;t finished because
        <br />
        the interface looks good.
        <strong>
          It&apos;s finished when the system works
          for the people who need it.
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
        <span>END OF ABOUT</span>
        <span>FAZLUR RAHMAN / SOFTWARE DEVELOPER</span>
      </div>


      <div className="about-closing-content">

        <span className="about-closing-kicker">
          FROM PERSPECTIVE TO PRODUCT
        </span>

        <h2>
          Now you know
          <br />
          how I think.
          <br />
          <span>See what I build.</span>
        </h2>

        <p>
          My work brings together business understanding,
          system thinking, and software development to turn
          real workflows into digital products that actually work.
        </p>


        <div className="about-closing-actions">

          <a
            href="/projects"
            className="about-closing-primary"
          >
            View my projects
            <span>↗</span>
          </a>

          <a
            href="/#contact"
            className="about-closing-secondary"
          >
            Let&apos;s talk
            <span>↗</span>
          </a>

        </div>

      </div>


      <div className="about-closing-signature">
        <span>DESIGNED &amp; DEVELOPED BY</span>
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