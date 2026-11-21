"use client";

import { useState } from "react";
import { essentials, stages, tools, type Kind, type Tool } from "../content";
import Icon, { type IconName } from "./Icon";

const kindIcon: Record<Kind, IconName> = { "AI tool": "sparkle", Tool: "tools", Database: "database" };

function KindTag({ kind }: { kind: Kind }) {
  return (
    <span className={`kind kind--${kind === "AI tool" ? "ai" : kind.toLowerCase()}`}>
      <Icon name={kindIcon[kind]} size={14} /> {kind}
    </span>
  );
}

/* A ribbon coloured by pLDDT band, as a model would be in a viewer. */
function RibbonArt() {
  return (
    <div className="ribbon" aria-hidden="true">
      <svg viewBox="0 0 220 150" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="plddt-run" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--plddt-0)" />
            <stop offset="18%" stopColor="var(--plddt-1)" />
            <stop offset="38%" stopColor="var(--plddt-3)" />
            <stop offset="72%" stopColor="var(--plddt-3)" />
            <stop offset="88%" stopColor="var(--plddt-2)" />
            <stop offset="100%" stopColor="var(--plddt-1)" />
          </linearGradient>
        </defs>
        <path
          d="M8 118 C28 118 30 96 44 94 C62 92 58 60 76 58 C96 56 92 30 112 30 C132 30 130 58 148 60 C166 62 162 92 180 94 C196 96 198 76 212 74"
          fill="none"
          stroke="url(#plddt-run)"
          strokeWidth="13"
          strokeLinecap="round"
        />
        {[
          [60, 76],
          [84, 50],
          [112, 38],
          [140, 50],
          [164, 76],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="var(--surface-lowest)" stroke="var(--plddt-3)" strokeWidth="3" />
        ))}
      </svg>
      <span className="ribbon-legend">
        <b>pLDDT</b>
        {[
          ["p3", "> 90"],
          ["p2", "70–90"],
          ["p1", "50–70"],
          ["p0", "< 50"],
        ].map(([tone, range]) => (
          <span key={range}>
            <i className={`swatch ${tone}`} />
            {range}
          </span>
        ))}
      </span>
    </div>
  );
}

function EssentialCard({ tool, feature }: { tool: Tool; feature?: boolean }) {
  return (
    <article className={`tool-card${feature ? " feature" : ""}`}>
      {feature && <RibbonArt />}
      <div className="tool-top">
        <span className="badge">
          <Icon name={tool.icon as IconName} size={22} />
        </span>
        <span className="tool-stage">{tool.stage}</span>
      </div>
      <h4>
        <a href={tool.href} target="_blank" rel="noopener noreferrer">
          {tool.name}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </h4>
      <p>{tool.desc}</p>
      <span className="host">{tool.host}</span>
      <div className="tool-foot">
        <KindTag kind={tool.kind} />
        <span className="open" aria-hidden="true">
          Open <Icon name="arrowOut" size={16} />
        </span>
      </div>
    </article>
  );
}

function StageCard({ tool }: { tool: Tool }) {
  return (
    <li className="stage-card">
      <a href={tool.href} target="_blank" rel="noopener noreferrer">
        <span className="stage-card-top">
          <span className="stage-card-icon">
            <Icon name={tool.icon as IconName} size={20} />
          </span>
          <Icon name="arrowOut" size={16} />
        </span>
        <span className="stage-card-name">{tool.name}</span>
        <span className="stage-card-desc">{tool.desc}</span>
        <span className="stage-card-foot">
          <KindTag kind={tool.kind} />
          <span className="host">{tool.host}</span>
        </span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </li>
  );
}

export default function Toolbox() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const shown = stages.filter((s) => filter === "all" || s.id === filter);
  const count = tools.filter((t) => filter === "all" || t.stage === filter).length;
  const current = stages.find((s) => s.id === filter);

  return (
    <>
      <h3 className="sub">Essential tools</h3>
      <p className="sub-lede">Start here: the tools that cover the core of the hackathon workflow.</p>
      <div className="essentials">
        {essentials.map((t, i) => (
          <EssentialCard key={t.name} tool={t} feature={i === 0} />
        ))}
      </div>

      <section className="more">
        <div className="more-bar">
          <span className="more-shape">
            <Icon name="tools" size={24} />
          </span>
          <div className="more-text">
            <h3>More tools by stage</h3>
            {!open && (
              <p>
                <strong>{tools.length} more tools, databases and resources:</strong>{" "}
                {tools.map((t) => t.name).join(", ")}.
              </p>
            )}
          </div>
          <button className="btn tonal" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? "Hide tools" : "Show tools"}
            <span className={`chev${open ? " up" : ""}`}>
              <Icon name="chevron" size={18} />
            </span>
          </button>
        </div>

        {open && (
          <div className="more-body">
            <div className="stage-strip" role="group" aria-label="Filter tools by stage">
              <button
                type="button"
                className="strip-item strip-all"
                aria-pressed={filter === "all"}
                onClick={() => setFilter("all")}
              >
                <span className="strip-mark">
                  <Icon name="grid" size={20} />
                </span>
                <span className="strip-name">All</span>
                <span className="strip-count">{tools.length} tools</span>
              </button>
              {stages.map((s) => {
                const n = tools.filter((t) => t.stage === s.id).length;
                return (
                  <button
                    key={s.id}
                    type="button"
                    className="strip-item"
                    aria-pressed={filter === s.id}
                    onClick={() => setFilter(s.id)}
                  >
                    <span className="strip-mark">{s.n === "·" ? <Icon name="layers" size={20} /> : s.n}</span>
                    <span className="strip-name">{s.name}</span>
                    <span className="strip-count">
                      {n} {n === 1 ? "entry" : "entries"}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="showing" aria-live="polite">
              <Icon name="list" size={16} />
              {current
                ? `Showing ${count} in ${current.name} · choose another stage, or All`
                : `Showing all ${count} tools · choose a stage to filter`}
            </p>

            <div className="stage-groups">
              {shown.map((s) => {
                const list = tools.filter((t) => t.stage === s.id);
                return (
                  <section className="stage-group" key={s.id}>
                    <header>
                      <span className="stage-shape">
                        <Icon name={s.icon as IconName} size={20} />
                      </span>
                      <div>
                        <p className="stage-kicker">
                          {s.n === "·" ? "Reference" : `Stage ${s.n}`} · {list.length}{" "}
                          {list.length === 1 ? "entry" : "entries"}
                        </p>
                        <h4>{s.name}</h4>
                        <p className="stage-blurb">{s.blurb}</p>
                      </div>
                    </header>
                    <ul className="stage-cards">
                      {list.map((t) => (
                        <StageCard key={t.name} tool={t} />
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
