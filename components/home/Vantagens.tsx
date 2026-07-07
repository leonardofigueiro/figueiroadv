import styles from './home.module.css';

const benefits = [
  { ic: '⚡', h: 'Agilidade', p: 'Canais diretos e respostas objetivas. Você não trava esperando encaixe na agenda.' },
  { ic: '📍', h: 'Sem deslocamento', p: 'Resolva de onde estiver. Atendimento remoto, esteja você em casa ou viajando.' },
  { ic: '🕐', h: 'No seu tempo', p: 'Horários flexíveis e conversa por mensagem — compatível com quem trabalha o dia todo.' },
  { ic: '✍️', h: '100% digital', p: 'Documentos e assinaturas eletrônicas com validade legal. Nada de cartório desnecessário.' },
  { ic: '🔒', h: 'Sigilo e segurança', p: 'O mesmo dever de sigilo e o mesmo rigor técnico de um escritório tradicional.' },
  { ic: '👁️', h: 'Transparência', p: 'Tudo registrado por escrito. Você acompanha cada etapa, sem se perder no processo.' },
];

export default function Vantagens() {
  return (
    <section className={`${styles.block} ${styles.bg2}`} id="vantagens">
      <div className={styles.wrap}>
        <div className={styles.headCenter}>
          <div className={styles.secEyebrow}>Por que online</div>
          <h2 className={styles.title}>A advocacia que cabe na sua rotina</h2>
        </div>
        <div className={styles.benefits}>
          {benefits.map((b) => (
            <div className={styles.benefit} key={b.h}>
              <div className={styles.ic} aria-hidden="true">{b.ic}</div>
              <h3>{b.h}</h3>
              <p>{b.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
