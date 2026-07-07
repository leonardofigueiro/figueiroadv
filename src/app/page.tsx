import type { Metadata } from 'next';
import Hero from 'components/home/Hero';
import ComoFunciona from 'components/home/ComoFunciona';
import Vantagens from 'components/home/Vantagens';
import AreasHome from 'components/home/AreasHome';
import Confianca from 'components/home/Confianca';
import FAQ from 'components/home/FAQ';
import CtaFinal from 'components/home/CtaFinal';

export const metadata: Metadata = {
  title: 'Advocacia online — atendimento por WhatsApp e vídeo',
  description:
    'Resolva questões de Direito Civil, Contratos, Sucessões e Trabalhista 100% online, com atendimento direto do advogado. Primeira conversa gratuita.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ComoFunciona />
      <Vantagens />
      <AreasHome />
      <Confianca />
      <FAQ />
      <CtaFinal />
    </>
  );
}
