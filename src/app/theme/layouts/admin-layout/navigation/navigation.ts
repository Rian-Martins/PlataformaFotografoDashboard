export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false,
      },
    ],
  },
  {
    id: 'Lojas',
    title: 'Minhas Lojas',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        classes: 'nav-item',
        url: '/login',
        icon: 'login',
        target: true,
        breadcrumbs: false,
      },
    ],
  },
  {
    id: 'Eventos',
    title: 'Eventos:',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'meusEventos',
        title: 'Criar Evento',
        type: 'item',
        classes: 'nav-item',
        url: '/criar-evento',
        icon: 'font-size',
      },
      {
        id: 'listarEventos',
        title: 'Listar Eventos',
        type: 'item',
        classes: 'nav-item',
        url: '/color',
        icon: 'bg-colors',
      },
      {
        id: 'grupoEventos',
        title: 'Grupo de Eventos',
        type: 'item',
        classes: 'nav-item',
        url: 'https://ant.design/components/icon',
        icon: 'ant-design',
        target: true,
        external: true,
      },
      {
        id: 'galeria',
        title: 'Galeria',
        type: 'item',
        classes: 'nav-item',
        url: '/galeria',
        icon: 'ant-design',
        target: true,
        external: true,
      },      
      {
        id: 'listarGaleria',
        title: 'Listar Galerias',
        type: 'item',
        classes: 'nav-item',
        url: '/listarGaleria',
        icon: 'ant-design',
        target: true,
        external: true,
      },
      {
        id: 'precos',
        title: 'Preços',
        type: 'item',
        classes: 'nav-item',
        url: '/cham-computadores',
        icon: 'ant-design',
        target: true,
        external: true,
      },
    ],
  },
  {
    id: 'financeiro',
    title: 'Financeiro:',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'minhasFinancas',
        title: 'Minhas Finanças',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'font-size',
      },
      {
        id: 'financeiroMes',
        title: 'Financeiro por Mês',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'font-size',
      },
      {
        id: 'vendasEvento',
        title: 'Vendas por Evento:',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'font-size',
      },
      {
        id: 'dadosPedido',
        title: 'Dados do Pedido:',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'font-size',
      },
      {
        id: 'vendidos',
        title: 'O que já foi Vendido:',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'font-size',
      },
      {
        id: 'extrato',
        title: 'Extrato:',
        type: 'item',
        classes: 'nav-item',
        url: '/typography',
        icon: 'font-size',
      },
    ],
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'samplePage',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'chrome',
      },
      {
        id: 'document',
        title: 'Document',
        type: 'item',
        classes: 'nav-item',
        url: 'https://codedthemes.gitbook.io/mantis-angular/',
        icon: 'question',
        target: true,
        external: true,
      },
    ],
  },
];

