import type { Metadata } from 'next';
import Content1 from 'components/About/Content1';
import Header from 'components/About/Header';
import Icons from 'components/About/Icons';
import Staff from 'components/About/Staff';

export const metadata: Metadata = {
  title: 'Quem somos',
  description:
    'Conheça o escritório Figueiró Advocacia — atuação próxima e técnica em Direito Civil, Contratos, Sucessões e Trabalhista.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Content1 />
      <Staff />
      <Icons />
    </>
  );
}
