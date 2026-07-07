import { site } from '@/lib/site';
import WhatsIcon from 'components/Commons/WhatsIcon';
import styles from './home.module.css';

export default function CtaFinal() {
  return (
    <section className={styles.block}>
      <div className={styles.wrap}>
        <div className={styles.ctaFinal}>
          <div className={styles.ctaEyebrow}>Vamos resolver isso?</div>
          <h2>Tire sua dúvida agora, sem sair de casa</h2>
          <p>
            Conte seu caso pelo WhatsApp e receba uma primeira orientação. Sem compromisso
            e com o sigilo que a advocacia exige.
          </p>
          <a
            className={`${styles.btn} ${styles.btnWa}`}
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
          >
            <WhatsIcon className={styles.waIco} /> Falar no WhatsApp agora
          </a>
        </div>
      </div>
    </section>
  );
}
