import type { Metadata } from 'next';
import Header from 'components/Blog/Header';
import Content1 from 'components/Blog/Content1';
import CardsPrincipais from 'components/Blog/CardsPrincipais';
import UltimasPostagens from 'components/Blog/UltimosPosts/UltimasPostagens';
import { getPosts } from '@/lib/wp';

export const metadata: Metadata = {
  title: 'Artigos',
  description: 'Artigos e novidades jurídicas do escritório Figueiró Advocacia.',
  alternates: { canonical: '/blog' },
};

export const revalidate = 600;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <section className='container'>
        {posts.length === 0 ? (
          <p className='section__texto py-5'>Nossos artigos estarão disponíveis em breve.</p>
        ) : (
          <>
            <Content1 posts={posts} />
            <CardsPrincipais posts={posts} />
            <UltimasPostagens posts={posts} />
          </>
        )}
      </section>
    </>
  );
}
