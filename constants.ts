import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'A Solução', href: '#problem-solution' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Planos', href: '#investment' },
  { name: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Plano Vitalício - Público Geral',
    price: '12x de R$ 138,80 ou R$ 1.388 à vista',
    features: [
      'Acesso vitalício à Comunidade Lendár[IA]',
      'Segundo Cérebro do Alan Nicolas',
      '26+ cursos completos de IA aplicada a negócios',
      'Atualizações e mentorias futuras',
      'Bônus: E-books estratégicos e brindes físicos para os primeiros compradores'
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Plano Vitalício - Alunos Atuais',
    price: '12x de R$ 98,80 ou R$ 988 à vista',
    features: [
      '25% de desconto exclusivo para alunos',
      'Acesso vitalício à Comunidade Lendár[IA]',
      '26+ cursos completos e mentorias contínuas',
      'Atualizações futuras e acesso ao Segundo Cérebro do Alan Nicolas',
      'Bônus: E-books e brindes físicos'
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'A Comunidade Lendár[IA] mudou completamente minha forma de empreender. Em pouco tempo, consegui aplicar IA nos meus projetos e multiplicar meus resultados.',
    author: 'Mariana Alves',
    role: 'Empreendedora Digital',
    avatarUrl: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: 'Mais do que um curso, é um ecossistema de crescimento. As mentorias com o Alan elevaram meu negócio a outro patamar.',
    author: 'João Ferreira',
    role: 'Consultor de Negócios',
    avatarUrl: 'https://picsum.photos/id/1012/100/100',
  },
  {
    quote: 'Com o conteúdo da Lendár[IA], economizei meses de aprendizado e já estou implementando IA nas estratégias dos meus clientes.',
    author: 'Carla Mendes',
    role: 'Estrategista de Marketing',
    avatarUrl: 'https://picsum.photos/id/1013/100/100',
  },
];

export const FAQ_DATA = [
  {
    question: 'O acesso é realmente vitalício?',
    answer: 'Sim. Ao adquirir o plano durante a Black Friday Lendária, você garante acesso vitalício e permanente a todo o conteúdo da Comunidade Lendár[IA], incluindo futuras atualizações e novos cursos.'
  },
  {
    question: 'Existe garantia de reembolso?',
    answer: 'Oferecemos 7 dias completos para você testar a experiência. Caso não fique satisfeito, devolvemos 100% do valor investido, sem burocracia.'
  },
  {
    question: 'Sou aluno atual, tenho desconto?',
    answer: 'Sim! Alunos atuais recebem 25% de desconto exclusivo, pagando apenas 12x de R$ 98,80 ou R$ 988 à vista.'
  },
  {
    question: 'Quantos cursos estão incluídos?',
    answer: 'Mais de 26 cursos completos sobre Inteligência Artificial aplicada a negócios, incluindo acesso ao “Segundo Cérebro do Alan Nicolas”.'
  },
  {
    question: 'Como funciona o bônus físico?',
    answer: 'Os primeiros compradores da campanha Black Friday Lendária receberão brindes físicos exclusivos, enviados após a confirmação da compra.'
  },
];

export const FOOTER_LINKS = {
  company: {
    name: 'Adm Academia',
    description: 'Comunidade Lendár[IA] — Black Friday Lendária: a última compra de IA que você faz na vida.',
    cnpj: 'CNPJ: 00.000.000/0001-00',
    address: 'Endereço: São Paulo/SP - Brasil',
  },
  legal: [
    { name: 'Termos de Uso', href: '/termos-de-servico' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'Política de Reembolso', href: '/politica-de-reembolso' },
  ],
};
