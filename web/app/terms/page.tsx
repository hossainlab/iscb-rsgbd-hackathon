import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Icon from "../components/Icon";
import { REPO_URL, nav, pageLinks } from "../content";
import { articles, termsIntro, termsMeta } from "../terms-content";

export const metadata: Metadata = {
  title: "Terms of participation · Bioinformatics Hackathon 2026",
  description:
    "Who can take part in the 1st Bioinformatics Hackathon 2026, how teams are formed, how work is submitted, evaluated and recognised, and the rights and obligations of participants.",
  authors: [{ name: "Md. Jubayer Hossain" }],
  creator: "Md. Jubayer Hossain",
};

export default function TermsPage() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header home />

      <main id="main">
        <section className="hero terms-hero" id="top">
          <div className="wrap">
            <p className="crumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>{termsMeta.title}</span>
            </p>
            <p className="eyebrow">
              <Icon name="scale" size={18} /> {termsMeta.kicker}
            </p>
            <h1>{termsMeta.title}</h1>
            <p className="lede">{termsMeta.lede}</p>
            <p className="terms-updated">
              Last updated: {termsMeta.updated} · {articles.length} articles
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap terms-layout">
            <nav className="terms-toc" aria-label="Contents">
              <p className="label">Contents</p>
              <ol>
                <li>
                  <a href="#terms-intro">
                    <span className="toc-n">—</span> {termsIntro.title}
                  </a>
                </li>
                {articles.map((a) => (
                  <li key={a.id}>
                    <a href={`#terms-${a.id}`}>
                      <span className="toc-n">{a.n}</span> {a.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="terms-body">
              <aside className="draft-note">
                <Icon name="warning" size={20} />
                <p>{termsMeta.note}</p>
              </aside>

              <article className="article" id="terms-intro">
                <h2>{termsIntro.title}</h2>
                {termsIntro.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </article>

              {articles.map((a) => (
                <article className="article" id={`terms-${a.id}`} key={a.id}>
                  <p className="article-n">Article {a.n}</p>
                  <h2>{a.title}</h2>
                  {a.intro && <p>{a.intro}</p>}
                  <ol className="clauses">
                    {a.items.map((item) => (
                      <li key={item.slice(0, 40)}>{item}</li>
                    ))}
                  </ol>
                </article>
              ))}

              <p className="terms-back">
                <Link className="chip-link" href="/">
                  <Icon name="arrowLeft" size={16} /> Back to the preparation resources
                </Link>
              </p>
            </div>
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
              <Link key={n.href} href={`/${n.href}`}>
                {n.label}
              </Link>
            ))}
            {pageLinks.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
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
