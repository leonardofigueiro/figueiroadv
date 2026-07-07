import Link from 'next/link';
import styles from './home.module.css';

const areas = [
  { ic: '⚖', h: 'Sucessões e Inventário', p: 'Inventário (inclusive extrajudicial) e testamento — boa parte 100% online.', href: '/areas/sucessoes', featured: true },
  { ic: '⚑', h: 'Trabalhista', p: 'Seus direitos no trabalho, resolvidos sem sair de casa.', href: '/areas/trabalhista' },
  { ic: '✎', h: 'Contratos', p: 'Revisão e elaboração para você ou sua empresa, com assinatura digital.', href: '/areas/contratos' },
  { ic: '§', h: 'Direito Civil', p: 'Indenizações, consumo e responsabilidade civil.', href: '/areas/civil' },
];

export default function AreasHome() {
  return (
    <section className={styles.block} id="areas">
      <div className={styles.wrap}>
        <div className={styles.headCenter}>
          <div className={styles.secEyebrow}>Áreas atendidas online</div>
          <h2 className={styles.title}>Onde podemos te ajudar</h2>
        </div>
        <div className={styles.areas}>
          {areas.map((a) => (
            <Link
              className={`${styles.area} ${a.featured ? styles.areaFeatured : ''}`}
              href={a.href}
              key={a.h}
            >
              {a.featured && <span className={styles.badge}>MAIS PROCURADO</span>}
              <div className={styles.ic} aria-hidden="true">{a.ic}</div>
              <h3>{a.h}</h3>
              <p>{a.p}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
