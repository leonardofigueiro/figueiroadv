import styles from './home.module.css';

const points = [
  { ic: '🧑‍⚖️', h: 'Atendimento pessoal', p: 'Quem conversa com você é o advogado responsável pelo caso — do começo ao fim.' },
  { ic: '🔒', h: 'Sigilo profissional', p: 'Tudo o que você compartilhar é protegido pelo dever de sigilo da advocacia.' },
  { ic: '✅', h: 'Validade jurídica', p: 'Procurações e contratos com assinatura eletrônica têm plena validade legal.' },
  { ic: '💬', h: 'Sem compromisso', p: 'A primeira conversa é gratuita. Você entende seus direitos antes de decidir.' },
];

export default function Confianca() {
  return (
    <section className={`${styles.block} ${styles.bg2}`}>
      <div className={styles.wrap}>
        <div className={styles.headCenter}>
          <div className={styles.secEyebrow}>Confiança</div>
          <h2 className={styles.title}>Você fala direto com o advogado</h2>
          <p className={styles.lead}>
            Sem intermediários e sem robô. Enquanto reunimos os primeiros depoimentos,
            veja o que garante a segurança do seu atendimento.
          </p>
        </div>
        <div className={styles.benefits}>
          {points.map((p) => (
            <div className={styles.benefit} key={p.h}>
              <div className={styles.ic} aria-hidden="true">{p.ic}</div>
              <h3>{p.h}</h3>
              <p>{p.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
