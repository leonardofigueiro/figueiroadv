import { site } from '@/lib/site';
import WhatsIcon from './WhatsIcon';
import styles from './FloatWhats.module.css';

export default function FloatWhats() {
  return (
    <a
      className={styles.float}
      href={site.whatsapp}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
    >
      <WhatsIcon className={styles.ico} />
      <span className={styles.label}>Fale conosco</span>
    </a>
  );
}
