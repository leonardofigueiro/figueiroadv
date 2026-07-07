import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import HeaderPost from 'components/Blog/Postagem/HeaderPost';
import Formulario from 'components/Blog/Postagem/Formulario/Formulario';
import ListaDePosts from 'components/Blog/Postagem/ListaDePosts/ListaDePosts';
import Message from '../../../../public/icons/Blog/message.svg';
import Clock from '../../../../public/icons/Blog/clock.svg';
import styled from '@/styles/Blog/Postagem.module.scss';
import { getPost, getPosts } from '@/lib/wp';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) return { title: 'Artigo' };
  const desc = post.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim().slice(0, 155);
  return {
    title: post.title.rendered,
    description: desc,
    alternates: { canonical: `/blog/${id}` },
    openGraph: { title: post.title.rendered, description: desc, type: 'article' },
  };
}

export default async function PostagemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();

  const posts = await getPosts();
  const conteudo = post.content.rendered;
  const tempo = post.tempo;

  return (
    <section className={styled.sectionPost}>
      <HeaderPost posts={post} />
      <div className='container'>
        <div className='row py-5'>
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className='d-flex flex-column gap-5'>
              <ListaDePosts posts={posts} />
              <Formulario />
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <div className='d-flex justify-content-between align-items-center py-3 mb-2'>
              <p className={styled.autor}>Por Figueiró Advocacia</p>
              <div className={`${styled.detalhes} d-flex align-items-center gap-1`}>
                <Message />
                <p>0 comentários</p>
              </div>
              <div className={`${styled.detalhes} d-flex align-items-center gap-1`}>
                <Clock />
                <p>{tempo} minutos de leitura</p>
              </div>
            </div>
            <hr />
            <div id='conteudo' className='mt-5 d-flex flex-column gap-4'>
              <Image
                src={post.featured_image_versions.versions.large}
                alt={post.featured_image_versions.alt}
                width={1000}
                height={299}
              />
              <div
                dangerouslySetInnerHTML={{ __html: conteudo }}
                className={`${styled.postagem} container section__texto `}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
