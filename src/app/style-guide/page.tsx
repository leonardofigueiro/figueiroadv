import type { Metadata } from 'next';
import { Button, Card, Input } from 'components/ui';

/**
 * Página de referência do Design System (dev/QA) — primeira rota migrada
 * para o App Router. Server Component (os componentes do kit não usam hooks).
 * noindex — remover ou proteger antes do launch.
 */
export const metadata: Metadata = {
  title: 'Design System',
  robots: { index: false, follow: false },
};

export default function StyleGuide() {
  return (
    <div style={{ maxWidth: 1140, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1 style={{ fontSize: 'var(--fs-h1)', color: 'var(--brand-strong)', marginBottom: '2rem' }}>
        Design System — componentes
      </h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: '1rem' }}>Botões</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="primary">Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" size="lg" href="/contato">
            CTA grande (link)
          </Button>
          <Button variant="primary" disabled>
            Desabilitado
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: '1rem' }}>Cards — áreas</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: 18,
          }}
        >
          <Card icon="§" title="Direito Civil" href="/areas/civil">
            Contratos, responsabilidade civil e relações de consumo.
          </Card>
          <Card icon="✎" title="Contratos" href="/areas/contratos">
            Elaboração, revisão e negociação com segurança jurídica.
          </Card>
          <Card icon="⚖" title="Sucessões" href="/areas/sucessoes">
            Inventário, testamento e planejamento sucessório.
          </Card>
          <Card icon="⚑" title="Trabalhista" href="/areas/trabalhista">
            Defesa de direitos nas relações de trabalho.
          </Card>
        </div>
      </section>

      <section style={{ marginBottom: '3rem', maxWidth: 420 }}>
        <h2 style={{ fontSize: 'var(--fs-h3)', marginBottom: '1rem' }}>Formulário</h2>
        <Input id="nome" label="Nome" placeholder="Seu nome completo" />
        <Input id="email" label="E-mail" defaultValue="email-invalido" error="Informe um e-mail válido." />
        <Button variant="primary" type="submit">
          Enviar mensagem
        </Button>
      </section>
    </div>
  );
}
