import styles from './home.module.css';

const steps = [
  { h: 'Conte seu caso', p: 'Mande sua dúvida pelo WhatsApp ou pelo formulário. Sem agenda, sem deslocamento.' },
  { h: 'Orientação por vídeo', p: 'Conversamos por vídeo ou WhatsApp e explicamos seus direitos com clareza, sem juridiquês.' },
  { h: 'Tudo digital', p: 'Procuração e contratos assinados eletronicamente — com validade jurídica, sem papel.' },
  { h: 'Acompanhe online', p: 'Receba as atualizações do seu caso onde você estiver, direto no celular.' },
];

export default function ComoFunciona() {
  return (
    <section className={styles.block} id="como">
      <div className={styles.wrap}>
        <div className={styles.headCenter}>
          <div className={styles.secEyebrow}>Simples assim</div>
          <h2 className={styles.title}>Como funciona o atendimento online</h2>
          <p className={styles.lead}>
            Do primeiro contato à solução, tudo pela tela — no seu tempo e sem burocracia.
          </p>
        </div>
        <div className={styles.steps}>
          {steps.map((s) => (
            <div className={styles.step} key={s.h}>
              <div className={styles.stepN} />
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
