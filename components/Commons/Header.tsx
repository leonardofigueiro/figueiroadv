'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site, nav } from '@/lib/site';
import WhatsIcon from './WhatsIcon';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Figueiró Advocacia — início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/logo_1.svg" alt="" className={styles.logoMark} />
          <span className={styles.logoText}>
            Figueiró<small>Advocacia</small>
          </span>
        </Link>

        <nav className={styles.nav}>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`${styles.link} ${pathname === n.href ? styles.linkActive : ''}`}
            >
              {n.label}
            </Link>
          ))}
          <a className={styles.cta} href={site.whatsapp} target="_blank" rel="noopener">
            <WhatsIcon className={styles.waIco} /> WhatsApp
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className={styles.mobile}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <a className={styles.cta} href={site.whatsapp} target="_blank" rel="noopener">
            <WhatsIcon className={styles.waIco} /> Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
