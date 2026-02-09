import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navInner">
        <a className="brand" href="#top">
          PSC Companion
        </a>

        <div className="navLinks">
          <a className="navLink" href="#top">Home</a>
          <a className="navLink" href="#overview">Overview</a>
          <a className="navLink" href="#problem">Problem</a>
          <a className="navLink" href="#goals">Goals</a>
          <a className="navLink" href="#plan">Plan</a>
        </div>
      </div>
    </nav>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="sectionTitleWrap">
      <h2 className="sectionTitle">{title}</h2>
      {subtitle ? <p className="sectionSubtitle">{subtitle}</p> : null}
    </div>
  );
}

function Kicker({ children }) {
  return <div className="kicker">{children}</div>;
}

export default function App() {
  return (
    <div className="page">
      <a id="top" />
      <Navbar />

      <main className="snapWrap">
        {/* HOME / LANDING (cards allowed here only) */}
        <section className="snapSection heroSection">
          <div className="container">
            <h1 className="title">Public Safety Connectivity Companion</h1>
            <p className="subtitle">
              A mobile-first interface concept that helps <strong>first responders</strong> stay connected,
              coordinate quickly, and maintain situational awareness during critical deployments.
            </p>

            <div className="meta">
              <div className="metaItem">
                <div className="metaLabel">Group Name</div>
                <div className="metaValue">Group 9</div>
              </div>
              <div className="metaItem">
                <div className="metaLabel">Members</div>
                <div className="metaValue">Azealia Khalid, Youssef Sallam</div>
              </div>
              <div className="metaItem">
                <div className="metaLabel">Course</div>
                <div className="metaValue">User Interface Design - CS 415/615</div>
              </div>
              <div className="metaItem">
                <div className="metaLabel">Website Purpose</div>
                <div className="metaValue">Design docs • prototypes • user studies • code links</div>
              </div>
            </div>

          </div>
        </section>

        {/* OVERVIEW */}
        <section id="overview" className="snapSection">
          <div className="container">
            <SectionTitle
              title="Overview & Context"
              subtitle="Why this problem matters and how this project is scoped."
            />

            <div className="columns2">
              <div className="col">
                <Kicker>Overview</Kicker>
                <p>
                  During emergencies (wildfires, large incidents, medical response), responders operate under stress,
                  time pressure, and rapidly changing conditions. Interfaces must support fast, safe actions with
                  minimal friction.
                </p>
                <p className="muted">
                  This project will iteratively design and evaluate a UI from paper prototypes to higher-fidelity
                  prototypes and implementation (if applicable).
                </p>
              </div>

              <div className="col colDivider">
                <Kicker>Context</Kicker>
                <p>
                  Inspired by the Verizon Frontline App Developer Challenge, which focuses on public safety connectivity
                  solutions for first responders.
                </p>
                <ul className="bullets">
                  <li>Focus: mission-critical coordination + communication</li>
                  <li>Constraint: degraded/uncertain connectivity</li>
                  <li>Design priority: clarity, speed, confidence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="snapSection">
          <div className="container">
            <SectionTitle
              title="Problem Statement"
              subtitle="User point of view + brief problem statement."
            />

            <div className="columns2">
              <div className="col">
                <Kicker>User Point of View</Kicker>
                <p className="quote">
                  “I need to confirm my team’s status, share updates, and understand what changed—fast—without digging
                  through menus, especially when connectivity is uncertain.”
                </p>
              </div>

              <div className="col colDivider">
                <Kicker>Brief Statement</Kicker>
                <p>
                  First responders must communicate and coordinate rapidly during critical deployments. Even when connectivity
                  exists, UI friction can slow status updates, obscure message delivery, and overload users with alerts.
                  Our UI proposal prioritizes one-tap check-ins, clear delivery confidence, and a shared incident dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GOALS */}
        <section id="goals" className="snapSection">
          <div className="container">
            <SectionTitle
              title="User Goals, Actions, Obstacles"
              subtitle="What users want to do, what they do, and what blocks them."
            />

            <div className="columns3">
              <div className="col">
                <Kicker>User Goals</Kicker>
                <ul className="bullets">
                  <li>Check in / report status in 1–2 steps</li>
                  <li>See team safety & availability at a glance</li>
                  <li>Send urgent updates to the right group quickly</li>
                  <li>Understand delivery confidence during disruptions</li>
                </ul>
              </div>

              <div className="col colDivider">
                <Kicker>Typical Actions</Kicker>
                <ul className="bullets">
                  <li>Open app → glance incident dashboard</li>
                  <li>Tap “Check-in” / “Update status”</li>
                  <li>Broadcast or target an alert</li>
                  <li>Review acknowledgements & changes</li>
                </ul>
              </div>

              <div className="col colDivider">
                <Kicker>Potential Obstacles</Kicker>
                <ul className="bullets">
                  <li>High stress + limited attention</li>
                  <li>Gloves / one-handed use</li>
                  <li>Unreliable connectivity & delays</li>
                  <li>Information overload / alert fatigue</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PLAN */}
        <section id="plan" className="snapSection">
          <div className="container containerWide">
            <SectionTitle
              title="Iteration Plan"
              subtitle="How we’ll iterate from paper prototypes to implementation."
            />

            <div className="planList">
              <ol>
                <li><strong>Paper prototype:</strong> key flows (check-in, incident update, team status)</li>
                <li><strong>Low-fi prototype:</strong> clickable prototype + quick usability test</li>
                <li><strong>High-fi prototype:</strong> refined visuals + accessibility pass</li>
                <li><strong>Implementation:</strong> interactive demo (web/mobile-like)</li>
                <li><strong>Evaluation:</strong> speed, clarity, error rate, user confidence</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
