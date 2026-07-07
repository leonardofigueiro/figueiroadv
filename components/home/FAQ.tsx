import styles from './home.module.css';

const faqs = [
  {
    q: 'Advocacia online é segura e tem validade?',
    a: 'Sim. O atendimento remoto tem a mesma validade jurídica do presencial. Procurações e contratos podem ser assinados digitalmente, com validade legal, e o sigilo profissional é o mesmo de sempre.',
  },
  {
    q: 'Funciona para o meu caso?',
    a: 'A maioria das demandas de Direito Civil, Contratos, Sucessões e Trabalhista pode ser conduzida remotamente. Quando algum ato exigir presença, orientamos você com antecedência.',
  },
  {
    q: 'Preciso ir a algum lugar assinar documentos?',
    a: 'Na maior parte dos casos, não. Usamos assinatura eletrônica com validade jurídica — você resolve pelo próprio celular ou computador.',
  },
  {
    q: 'Como eu falo com o advogado?',
    a: 'Você fala diretamente com o advogado responsável, por WhatsApp ou videochamada. Nada de intermediários ou robôs.',
  },
];

// FAQPage JSON-LD — elegível a rich results no Google.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FAQ() {
  return (
    <section className={styles.block}>
      <div className={styles.wrap}>
        <div className={styles.headCenter}>
          <div className={styles.secEyebrow}>Ainda em dúvida?</div>
          <h2 className={styles.title}>Perguntas frequentes sobre advocacia online</h2>
        </div>
        <div className={styles.faq}>
          {faqs.map((f, i) => (
            <details className={styles.faqItem} key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
