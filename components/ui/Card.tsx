import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  href?: string;
  cta?: string;
}

/**
 * Card do design system — usado em áreas de atuação e no blog.
 * Eleva no hover (--e-1 → --e-2). Ícone é decorativo (aria-hidden).
 */
export default function Card({ icon, title, children, href, cta }: CardProps) {
  return (
    <article className={styles.card}>
      {icon && (
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{children}</p>
      {href && (
        <a className={styles.link} href={href}>
          {cta ?? 'Saiba mais'} <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}
