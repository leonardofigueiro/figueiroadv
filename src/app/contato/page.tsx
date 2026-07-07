import type { Metadata } from 'next';
import Form from 'components/Commons/Form';
import WhatsIcon from 'components/Commons/WhatsIcon';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Figueiró Advocacia pelo WhatsApp ou envie uma mensagem. Atendimento online, primeira conversa gratuita.',
  alternates: { canonical: '/contato' },
};

export default function ContatoPage() {
  return (
    <section
      style={{ maxWidth: 720, margin: '0 auto', padding: '56px 24px' }}
    >
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <h1 className="section__title">Fale conosco</h1>
        <p className="section__texto" style={{ marginTop: 8 }}>
          O jeito mais rápido é pelo WhatsApp. Prefere escrever? Use o formulário abaixo —
          respondemos com atenção.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 44 }}>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#25D366',
            color: '#0b2e13',
            fontWeight: 600,
            fontSize: '1.05rem',
            padding: '15px 28px',
            borderRadius: 999,
            textDecoration: 'none',
          }}
        >
          <WhatsIcon className="waIconLg" /> Falar no WhatsApp
        </a>
        <p
          className="section__texto"
          style={{ marginTop: 10, fontSize: '0.85rem', color: 'var(--ink-muted)' }}
        >
          Primeira conversa gratuita e sem compromisso.
        </p>
      </div>

      <Form />
    </section>
  );
}
