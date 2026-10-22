
import Link from "next/link";
import {
  ArrowUpRight,
  Factory,
  ExternalLink,
} from "lucide-react";
import styles from "./footer.module.css";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Contact", href: "mailto:hello@kanchanflow.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIcon}>
                <Factory size={19} />
              </span>
              KANCHAN<span className={styles.gold}>FLOW.</span>
            </Link>

            <p className={styles.description}>
              A connected workspace for manufacturing sales,
              quotations and operations. Built to keep your
              factory moving forward.
            </p>

            <Link href="/features" className={styles.exploreLink}>
              Explore the platform <ArrowUpRight size={16} />
            </Link>
          </div>

          {footerLinks.map((group) => (
            <div className={styles.linkGroup} key={group.title}>
              <h2 className={styles.groupTitle}>{group.title}</h2>
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={styles.footerLink}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 KanchanFlow. All rights reserved.
          </p>

          <div className={styles.socials}>
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <ExternalLink size={18} />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <ExternalLink size={18} />
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}
