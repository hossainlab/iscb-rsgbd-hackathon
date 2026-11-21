import Header from "./components/Header";
import Icon, { type IconName } from "./components/Icon";
import Faq from "./components/Faq";
import StepGuide from "./components/StepGuide";
import Toolbox from "./components/Toolbox";
import { REPO_URL, facts, licences, mustReport, nav, talk, topics, topicsNote } from "./content";

const navIcon: Record<string, IconName> = {
  "#guide": "route",
  "#challenges": "grid",
  "#presentation": "slides",
  "#toolbox": "tools",
  "#faq": "help",
};

function SectionHead({
  icon,
  eyebrow,
  title,
  lede,
}: {
  icon: IconName;
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
}) {
  return (
    <header className="section-head">
      <p className="eyebrow">
        <Icon name={icon} size={18} /> {eyebrow}
      </p>
      <h2>{title}</h2>
      <p className="lede">{lede}</p>
    </header>
  );
}

/* Small slide mock-ups for the presentation cards. */
function SlideArt({ kind }: { kind: (typeof talk)[number]["art"] }) {
  return (
    <div className="slide-art" aria-hidden="true">
      <span className="sheet s3" />
      <span className="sheet s2" />
      <span className="sheet s1">
        <i className="bar title" />
        {kind === "team" && (
          <>
            <i className="bar accent" style={{ width: "58%" }} />
            <i className="bar" style={{ width: "40%" }} />
            <b className="avatars">
              <u />
              <u />
              <u />
            </b>
          </>
        )}
        {kind === "problem" && (
          <>
            <i className="bar" style={{ width: "66%" }} />
            <i className="bar" style={{ width: "52%" }} />
            <i className="bar" style={{ width: "60%" }} />
            <b className="bubble">?</b>
          </>
        )}
        {kind === "approach" && (
          <span className="flow">
            <i />
            <u />
            <i className="on" />
            <u />
            <i className="warm" />
          </span>
        )}
        {kind === "results" && (
          <span className="bars">
            {[35, 60, 48, 82, 66].map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </span>
        )}
      </span>
    </div>
  );
}

const talkIcon: IconName[] = ["grid", "help", "route", "chart"];

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* Hero */}
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-text">
            <p className="crumb">
              <span>1st Bioinformatics Hackathon 2026</span>
              <span aria-hidden="true">/</span>
              <span>RSG Bangladesh · ISCB Student Council</span>
            </p>
            <p className="eyebrow">For those who want to explore further</p>
            <h1>Preparation resources</h1>
            <p className="lede">
              Everything your team needs to prepare: a hands-on guide to computational biology tools, the eleven
              topics, the structure of the final presentation, the toolbox and all the frequently asked questions.
            </p>

            <dl className="facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <nav className="onpage" aria-label="On this page">
              <span className="label">On this page</span>
              <div className="chip-row">
                {nav.map((n) => (
                  <a key={n.href} className="chip-link" href={n.href}>
                    <Icon name={navIcon[n.href]} size={18} /> {n.label}
                  </a>
                ))}
              </div>
            </nav>
            </div>

            <div className="hero-art" aria-hidden="true">
              <span className="blob blob-main">
                <Icon name="dna" size={46} />
              </span>
              <span className="blob blob-flower" />
              <span className="blob blob-clover" />
              <span className="blob blob-dot" />
            </div>
          </div>
        </section>

        {/* Guide */}
        <section className="section" id="guide">
          <div className="wrap">
            <SectionHead
              icon="route"
              eyebrow="Guide to computational biology tools"
              title={
                <>
                  From sequence to structure — <span className="nowrap">in 7 steps</span>
                </>
              }
              lede="A practical walkthrough for teams using computational biology tools for the first time, from protein sequence to structure prediction and evaluation: what to do at each step, which tools to use and how to judge how reliable the results are."
            />
            <StepGuide />
          </div>
        </section>

        {/* Topics */}
        <section className="section alt" id="challenges">
          <div className="wrap">
            <SectionHead
              icon="grid"
              eyebrow="The topics"
              title="Eleven topics. One method."
              lede="Each team is assigned one topic at the briefing. Whichever you get, the work is the same: frame a question inside it, run the seven steps yourselves, and defend what the confidence scores do and do not support."
            />

            <ol className="topics">
              {topics.map((t) => (
                <li className="topic" key={t.id}>
                  <div className="topic-top">
                    <span className="topic-id">{t.id}</span>
                    <span className="topic-kicker">{t.kicker}</span>
                  </div>
                  <h3>{t.title}</h3>
                  <p className="topic-body">{t.body}</p>
                  <div className="topic-q">
                    <p className="label">Indicative research question</p>
                    <p>{t.question}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="note-card">
              <Icon name="microscope" size={22} />
              <div>
                <h3>{topicsNote.title}</h3>
                <p>{topicsNote.body}</p>
              </div>
            </aside>
          </div>
        </section>

        {/* Presentation */}
        <section className="section" id="presentation">
          <div className="wrap">
            <SectionHead
              icon="slides"
              eyebrow="Final presentation"
              title="10 minutes for the presentation"
              lede="A suggested structure for your team's final presentation: four parts that take the audience from the idea to the results."
            />
            <ol className="talk">
              {talk.map((t, i) => (
                <li key={t.title}>
                  <SlideArt kind={t.art} />
                  <div className="talk-line">
                    <span className="talk-icon">
                      <Icon name={talkIcon[i]} size={20} />
                    </span>
                  </div>
                  <h3>{t.title}</h3>
                  <ul>
                    {t.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <p className="time-chip">
                    <Icon name="clock" size={16} /> ≈ {t.time}
                  </p>
                </li>
              ))}
            </ol>

            <aside className="rule-card" id="document">
              <div className="rule-main">
                <div className="rule-title">
                  <span className="seal">
                    <Icon name="list" size={24} />
                  </span>
                  <div>
                    <p className="eyebrow warm">A rule for every team</p>
                    <h3>Document what you used</h3>
                  </div>
                </div>
                <p className="rule-lede">In the final presentation, every team must report:</p>
                <ul className="ticks">
                  {mustReport.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <blockquote>
                <Icon name="flask" size={22} />
                <p>Using AI and computational biology tools does not replace scientific validation.</p>
              </blockquote>
            </aside>
          </div>
        </section>

        {/* Toolbox */}
        <section className="section alt" id="toolbox">
          <div className="wrap">
            <SectionHead
              icon="tools"
              eyebrow="Toolbox"
              title="Tools for every stage of the analysis"
              lede="A curated list of bioinformatics and computational biology tools, databases and resources: from checking your sequence to predicting, comparing, designing and visualising structures. Everything here runs in the browser or installs into a Colab notebook with pip — nothing needs a desktop install."
            />
            <Toolbox />

            <div className="licences">
              <h3>
                <Icon name="scale" /> Licences and terms of use
              </h3>
              <ul>
                {licences.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="wrap">
            <Faq />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <p className="brand-text big">
              Bioinformatics Hackathon <span className="brand-year">2026</span>
            </p>
            <p className="footer-about">
              1st Bioinformatics Hackathon 2026 by RSG Bangladesh, the Regional Student Group under the ISCB Student
              Council.
            </p>
          </div>
          <nav aria-label="Footer">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              GitHub repository<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </nav>
        </div>
        <div className="wrap footer-base">
          <p>RSG Bangladesh · 2026. Released under the MIT licence.</p>
          <p className="credit">
            Designed and developed by <strong>Md. Jubayer Hossain</strong>
          </p>
        </div>
      </footer>
    </>
  );
}
