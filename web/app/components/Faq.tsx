"use client";

import { useMemo, useState } from "react";
import { faqCategories, faqSuggestions, faqs } from "../content";
import Icon, { type IconName } from "./Icon";

export default function Faq() {
  const [cat, setCat] = useState("all");
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => (cat === "all" || f.cat === cat) && (!q || (f.q + " " + f.a).toLowerCase().includes(q)));
  }, [cat, query]);

  const groups = faqCategories
    .map((c) => ({ ...c, items: matches.filter((f) => f.cat === c.id) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="faq-layout">
      <div className="faq-intro">
        <p className="eyebrow">
          <Icon name="help" size={18} /> FAQ
        </p>
        <h2>Questions &amp; answers</h2>
        <p className="lede">
          What teams ask most about preparing, about the tools and about what has to be reported. For anything else, ask
          your mentors — early, not at the last minute.
        </p>

        <label className="faq-search">
          <Icon name="search" size={18} />
          <input
            type="search"
            value={query}
            placeholder="Search, e.g. pLDDT or mentors"
            aria-label="Search the questions"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>

        <div className="faq-tabs" role="group" aria-label="Filter by category">
          <button type="button" aria-pressed={cat === "all"} onClick={() => setCat("all")}>
            <Icon name="check" size={16} /> All
          </button>
          {faqCategories.map((c) => (
            <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
              <Icon name={c.icon as IconName} size={16} /> {c.name}
            </button>
          ))}
        </div>

        <p className="faq-count" aria-live="polite">
          {matches.length} {matches.length === 1 ? "question" : "questions"}
        </p>

        <div className="faq-suggest">
          <span className="label">Suggested searches</span>
          <div className="chip-row">
            {faqSuggestions.map((s) => (
              <button key={s} type="button" className="chip-link" onClick={() => setQuery(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="faq-list">
        {groups.map((g) => (
          <section key={g.id}>
            <header className="faq-group-head">
              <span className="faq-seal">
                <Icon name={g.icon as IconName} size={20} />
              </span>
              <h3>{g.name}</h3>
              <span className="faq-badge">
                {g.items.length} {g.items.length === 1 ? "question" : "questions"}
              </span>
            </header>
            {g.items.map((f) => (
              <details key={f.id} id={`faq-${f.id}`}>
                <summary>
                  <span className="faq-icon">
                    <Icon name={f.icon as IconName} size={18} />
                  </span>
                  <span className="faq-q">{f.q}</span>
                  <Icon name="chevron" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </section>
        ))}
        {groups.length === 0 && (
          <p className="faq-empty">
            Nothing matches “{query}”. Clear the search, or ask a mentor — the question may be worth adding here.
          </p>
        )}
      </div>
    </div>
  );
}
