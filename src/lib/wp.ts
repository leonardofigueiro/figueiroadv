import type Post from '@/interfaces/Post';
import calculateReadingTime from '@/Hooks/tempoLeitura';

const WP_BASE = 'https://figueiroadvocacia.x10.mx/wp-json/wp/v2';
const REVALIDATE = 600;

/**
 * Fetch resiliente do WordPress: timeout de 8s, trata erro e devolve um
 * fallback em vez de derrubar o build/página (o CMS está em hospedagem grátis
 * e pode ficar fora do ar). Substitui o getStaticProps que retornava undefined.
 */
async function wpFetch<T>(path: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(`${WP_BASE}${path}`, {
      next: { revalidate: REVALIDATE },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`WP ${res.status} em ${path}`);
    return (await res.json()) as T;
  } catch (err) {
    console.error(`[wp] falha ao buscar ${path}:`, (err as Error).message);
    return fallback;
  }
}

export async function getPosts(): Promise<Post[]> {
  const posts = await wpFetch<Post[]>('/posts/', []);
  return posts.map((post) => ({
    ...post,
    tempo: calculateReadingTime(post.content?.rendered ?? ''),
  }));
}

export async function getPost(id: string): Promise<Post | null> {
  const post = await wpFetch<Post | null>(`/posts/${id}`, null);
  if (!post) return null;
  return { ...post, tempo: calculateReadingTime(post.content?.rendered ?? '') };
}
