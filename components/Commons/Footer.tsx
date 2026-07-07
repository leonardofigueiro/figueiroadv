import Link from 'next/link';
import { site, nav } from '@/lib/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <span className={styles.logo}>
              Figueiró<small>Advocacia</small>
            </span>
            <p className={styles.muted} style={{ marginTop: 12 }}>
              Advocacia com atendimento online.
            </p>
            <p className={styles.muted}>{site.oab}</p>
          </div>

          <div className={styles.col}>
            <h4>Navegação</h4>
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </div>

          <div className={styles.col}>
            <h4>Contato</h4>
            <a href={site.whatsapp} target="_blank" rel="noopener">
              WhatsApp: {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.instagram} target="_blank" rel="noopener">
              Instagram
            </a>
            <a href={site.maps} target="_blank" rel="noopener">
              {site.address.full}
            </a>
          </div>
        </div>

        <div className={styles.bar}>
          © {new Date().getFullYear()} Figueiró Advocacia · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
