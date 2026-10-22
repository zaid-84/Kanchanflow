
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setMenuOpen(false)}
        >
          KANCHAN<span className={styles.gold}>FLOW.</span>
        </Link>

        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/pricing"
          className={`${styles.cta} ${styles.desktopCta}`}
        >
          Explore Plans <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className={styles.mobileMenu}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/pricing"
            className={styles.cta}
            onClick={() => setMenuOpen(false)}
          >
            Explore Plans <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
