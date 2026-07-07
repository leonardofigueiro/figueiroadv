import type { Metadata } from 'next';
import Carrossel from 'components/Index/Carrossel';
import Conteudo1 from 'components/Index/Conteudo1';
import Conteudo2 from 'components/Index/Conteudo2';
import Conteudo3 from 'components/Index/Conteudo3';
import Conteudo4 from 'components/Index/Conteudo4';
import IconsIndex from 'components/Index/Icons';
import UltimasPostagens from 'components/Index/UltimosPosts/UltimasPostagens';
import { getPosts } from '@/lib/wp';

export const revalidate = 600;

export const metadata: Metadata = {
  description:
    'Soluções jurídicas em Direito Civil, Contratos, Sucessões e Trabalhista. Atendimento próximo e técnico. Agende uma avaliação.',
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  const posts = (await getPosts()).slice(0, 3);

  return (
    <>
      <Carrossel />
      <Conteudo1 />
      <Conteudo2 />
      <Conteudo3 />
      <Conteudo4 />
      <IconsIndex />
      {posts.length > 0 && <UltimasPostagens posts={posts} />}
    </>
  );
}
