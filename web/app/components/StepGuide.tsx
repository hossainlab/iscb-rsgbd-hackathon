"use client";

import { useRef, useState } from "react";
import { plddtBands, steps, type Link } from "../content";
import Icon, { type IconName } from "./Icon";

function ResourceLink({ link }: { link: Link }) {
  const external = link.href.startsWith("http");
  return (
    <a className="chip-link" href={link.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {link.label}
      {external && (
        <>
          <Icon name="arrowOut" size={16} />
          <span className="sr-only">(opens in a new tab)</span>
        </>
      )}
    </a>
  );
}

/* pLDDT scale: the four confidence bands, read top down. */
function PlddtScale() {
  return (
    <figure className="plddt">
      <div className="plddt-bar" aria-hidden="true">
        <span className="p3" />
        <span className="p2" />
        <span className="p1" />
        <span className="p0" />
      </div>
      <ul>
        {plddtBands.map((b) => (
          <li key={b.range}>
            <span className={`swatch ${b.tone}`} aria-hidden="true" />
            <span className="plddt-range">{b.range}</span>
            <span className="plddt-label">{b.label}</span>
            <span className="plddt-note">{b.note}</span>
          </li>
        ))}
      </ul>
      <figcaption>pLDDT bands, as used by the AlphaFold database colouring.</figcaption>
    </figure>
  );
}

export default function StepGuide() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = steps[active];
  const last = active === steps.length - 1;

  function go(i: number, focus: "panel" | "tab" | "none" = "none") {
    const next = (i + steps.length) % steps.length;
    setActive(next);
    if (focus === "tab") tabRefs.current[next]?.focus();
    if (focus === "panel") {
      panelRef.current?.focus({ preventScroll: true });
      const top = panelRef.current?.getBoundingClientRect().top ?? 0;
      if (top < 72 || top > window.innerHeight * 0.6) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollBy({ top: top - 88, behavior: reduce ? "auto" : "smooth" });
      }
    }
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1, "tab");
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1, "tab");
    }
  }

  return (
    <div className="guide">
      <div className="guide-rail" role="tablist" aria-label="Steps" aria-orientation="vertical" onKeyDown={onKey}>
        {steps.map((s, i) => (
          <button
            key={s.title}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`step-tab-${i}`}
            aria-selected={i === active}
            aria-controls="step-panel"
            tabIndex={i === active ? 0 : -1}
            className={`rail-step${i === active ? " is-active" : ""}${i < active ? " is-done" : ""}`}
            onClick={() => go(i)}
          >
            <span className="rail-num">{i < active ? <Icon name="check" size={18} /> : i + 1}</span>
            <span className="rail-text">
              <span className="rail-kicker">Step {i + 1}</span>
              <span className="rail-title">{s.title}</span>
            </span>
          </button>
        ))}
      </div>

      <div
        className="guide-panel"
        id="step-panel"
        role="tabpanel"
        aria-labelledby={`step-tab-${active}`}
        tabIndex={-1}
        ref={panelRef}
        key={active}
      >
        <header className="panel-head">
          <span className="panel-icon">
            <Icon name={step.icon as IconName} size={24} />
          </span>
          <span className="panel-head-text">
            <span className="panel-kicker">
              Step {active + 1} of {steps.length}
            </span>
            <h3>{step.title}</h3>
          </span>
          <span className="panel-num" aria-hidden="true">
            {String(active + 1).padStart(2, "0")}
          </span>
        </header>
        <p className="panel-body">{step.body}</p>

        <ul className="ticks">
          {step.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        {step.fit && (
          <div className="fit">
            <div className="fit-card good">
              <h4>
                <Icon name="check" size={18} /> {step.fit.goodTitle}
              </h4>
              <ul>
                {step.fit.good.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
            <div className="fit-card other">
              <h4>
                <Icon name="plus" size={18} /> {step.fit.otherTitle}
              </h4>
              <ul>
                {step.fit.other.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {step.visual === "plddt" && <PlddtScale />}

        {step.caution && (
          <p className="caution">
            <Icon name="warning" />
            <span>
              <strong>Caution:</strong> {step.caution}
            </span>
          </p>
        )}

        {step.commands && (
          <div className="commands">
            <h4 className="label">Useful commands</h4>
            {step.commands.map((c) => (
              <div className="command" key={c.code}>
                <span className="command-env">{c.env}</span>
                <code>{c.code}</code>
                <span className="command-note">{c.note}</span>
              </div>
            ))}
          </div>
        )}

        <h4 className="label">Tools and resources</h4>
        <div className="chip-row">
          {step.links.map((l) => (
            <ResourceLink key={l.href + l.label} link={l} />
          ))}
        </div>

        <div className="panel-nav">
          <button className="btn text" type="button" disabled={active === 0} onClick={() => go(active - 1, "panel")}>
            <Icon name="arrowLeft" /> Previous step
          </button>
          {last ? (
            <button className="btn tonal" type="button" onClick={() => go(0, "panel")}>
              <Icon name="restart" /> Start over
            </button>
          ) : (
            <button className="btn filled" type="button" onClick={() => go(active + 1, "panel")}>
              Next step <Icon name="arrowRight" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
