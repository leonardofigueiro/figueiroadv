import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  href?: string;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;

/**
 * Botão do design system. Renderiza <a> quando `href` é passado, senão <button>.
 * Consome apenas tokens (tokens.css) — sem valores mágicos.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
