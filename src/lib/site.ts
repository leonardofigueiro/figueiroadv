const waText = encodeURIComponent('Olá! Gostaria de tirar uma dúvida jurídica.');

export const site = {
  name: 'Figueiró Advocacia',
  url: 'https://figueiroadvocacia.com.br',
  phone: '(65) 99275-0512',
  phoneRaw: '5565992750512',
  whatsapp: `https://wa.me/5565992750512?text=${waText}`,
  email: 'contato@figueiroadvocacia.com.br',
  instagram: 'https://www.instagram.com/leonardofigueiro/',
};

export const nav = [
  { label: 'Início', href: '/' },
  { label: 'Como funciona', href: '/#como' },
  { label: 'Áreas', href: '/#areas' },
  { label: 'Artigos', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];
