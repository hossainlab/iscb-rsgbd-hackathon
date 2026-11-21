"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, pageLinks } from "../content";
import Icon from "./Icon";

type Theme = "auto" | "light" | "dark";
const order: Theme[] = ["auto", "light", "dark"];
const themeLabel = { auto: "Automatic", light: "Light", dark: "Dark" };
const themeIcon = { auto: "auto", light: "sun", dark: "moon" } as const;

export default function Header({ home = false }: { home?: boolean } = {}) {
  const [theme, setTheme] = useState<Theme>("auto");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = document.documentElement.dataset.theme;
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function cycleTheme() {
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    const root = document.documentElement;
    if (next === "auto") delete root.dataset.theme;
    else root.dataset.theme = next;
    try {
      if (next === "auto") localStorage.removeItem("theme");
      else localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <header className="topbar">
      <div className="wrap topbar-row">
        <Link className="brand" href={home ? "/" : "#top"} aria-label="Bioinformatics Hackathon 2026, home">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-text">
            Bioinformatics Hackathon <span className="brand-year">2026</span>
          </span>
        </Link>

        <nav className="topnav" aria-label="Sections">
          {nav.map((n) => (
            <Link key={n.href} href={home ? `/${n.href}` : n.href}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="topbar-actions">
          {pageLinks.map((n) => (
            <Link key={n.href} className="topnav-page" href={n.href} aria-label={n.label} title={n.label}>
              {n.short}
            </Link>
          ))}
          <button
            className="icon-btn"
            type="button"
            onClick={cycleTheme}
            title={`Theme: ${themeLabel[theme]}`}
            aria-label={`Theme: ${themeLabel[theme]}. Change theme`}
          >
            <Icon name={themeIcon[theme]} />
          </button>
          <button
            className="icon-btn menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Sections">
          {nav.map((n) => (
            <Link key={n.href} href={home ? `/${n.href}` : n.href} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
