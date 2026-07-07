import type { Metadata } from 'next';
import Form from 'components/Commons/Form';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com o escritório Figueiró Advocacia. Tire suas dúvidas e agende uma avaliação.',
  alternates: { canonical: '/contato' },
};

export default function ContatoPage() {
  return (
    <section className='py-5 d-flex flex-column gap-5'>
      <div className='d-flex justify-content-center flex-column align-items-center'>
        <h1 className='section__title'>Fale Conosco</h1>
        <p className='section__texto'>Entre em contato com o nosso escritório</p>
      </div>
      <Form />
    </section>
  );
}
