const waText = encodeURIComponent('Olá! Gostaria de tirar uma dúvida jurídica.');

const addressFull = 'Av. Nilo Torres, 2113-W, Jardim Santa Lúcia, Tangará da Serra-MT';

export const site = {
  name: 'Figueiró Advocacia',
  url: 'https://figueiroadvocacia.com.br',
  phone: '(65) 99275-0512',
  phoneRaw: '5565992750512',
  whatsapp: `https://wa.me/5565992750512?text=${waText}`,
  email: 'contato@figueiroadvocacia.com.br',
  instagram: 'https://www.instagram.com/leonardofigueiro/',
  oab: 'OAB/MT 14.035',
  address: {
    street: 'Av. Nilo Torres, 2113-W',
    district: 'Jardim Santa Lúcia',
    city: 'Tangará da Serra',
    state: 'MT',
    full: addressFull,
  },
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressFull)}`,
};

export const nav = [
  { label: 'Início', href: '/' },
  { label: 'Como funciona', href: '/#como' },
  { label: 'Áreas', href: '/#areas' },
  { label: 'Artigos', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];
