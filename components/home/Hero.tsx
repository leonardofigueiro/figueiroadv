import Link from 'next/link';
import { site } from '@/lib/site';
import WhatsIcon from 'components/Commons/WhatsIcon';
import styles from './home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrap}>
        <span className={styles.pill}>
          <span className={styles.dot} /> Atendimento 100% online
        </span>
        <h1 className={styles.heroTitle}>
          Seu advogado <em>onde você estiver</em> — sem sair de casa.
        </h1>
        <p className={styles.heroP}>
          Resolva questões de Direito Civil, Contratos, Sucessões e Trabalhista pelo
          WhatsApp e por vídeo. Rápido, seguro e com todo o rigor de um escritório — só
          que digital.
        </p>
        <div className={styles.ctas}>
          <a
            className={`${styles.btn} ${styles.btnWa}`}
            href={site.whatsapp}
            target="_blank"
            rel="noopener"
          >
            <WhatsIcon className={styles.waIco} /> Falar agora no WhatsApp
          </a>
          <Link className={`${styles.btn} ${styles.btnGhost}`} href="/#como">
            Ver como funciona
          </Link>
        </div>
        <p className={styles.freeNote}>
          Primeira conversa <strong>gratuita e sem compromisso</strong>.
        </p>
        <div className={styles.signals}>
          <span>Atendimento por WhatsApp e vídeo</span>
          <span>Procuração e contratos com assinatura digital</span>
          <span>Acompanhamento online do seu caso</span>
        </div>
      </div>
    </section>
  );
}
