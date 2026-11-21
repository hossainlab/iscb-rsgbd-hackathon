"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, pageLinks } from "../content";
import Icon from "./Icon";

export default function Header({ home = false }: { home?: boolean } = {}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

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
