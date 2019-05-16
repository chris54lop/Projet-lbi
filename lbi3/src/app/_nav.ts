export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [

  {
    name: 'Tableau de bord',
    url: '/dashboard',
    icon: 'icon-calendar',
    badge: {
      variant: 'info',

    }
  },

  {
    name: 'Tickets',
    url: '/tickets',
    icon: 'fa fa-files-o',
    children: [
      {
        name: 'Demande de tickets',
        url: '/tickets/demande-ticket',
        icon: 'fa fa-tag'
      },
      {
        name: 'Liste des tickets',
        url: '/tickets/list-ticket',
        icon: 'fa fa-th-list'
      },
      {
        name: 'Tickets d\'installation',
        url: '/tickets/ticket-install',
        icon: 'fa fa-tasks'
      },
      {
        name: 'Tickets d\'intervention',
        url: '/tickets/ticket-interv',
        icon: 'fa fa-tasks'
      },

    ]
  },
  {
    name: 'Matériels',
    url: '/materiels',
    icon: 'fa fa-desktop',
    children: [
      {
        name: 'Ajouter matériel',
        url: '/materiels/ajout-materiel',
        icon: 'fa fa-tag'
      },
      {
        name: 'Ajouter type',
        url: '/materiels/ajout-type',
        icon: 'fa fa-tag'
      },
      {
        name: 'Liste des matériels',
        url: '/materiels/list-materiel',
        icon: 'fa fa-th-list'
      },
    ]
  },
  {
    name: 'Clients',
    url: '/clients',
    icon: 'fa fa-user',
    children: [
      {
        name: 'Ajouter client',
        url: '/clients/ajout-client',
        icon: 'fa fa-tag',
      },
      {
        name: 'Ajouter donneur d\'ordre',
        url: '/clients/ajout-donneur-ordre',
        icon: 'fa fa-tag'
      },
      {
        name: 'Liste des clients',
        url: '/clients/list-client',
        icon: 'fa fa-th-list',
      },
      {
        name: 'Liste des donneurs d\' ordre',
        url: '/clients/list-donneur-ordre',
        icon: 'fa fa-th-list',
      }
    ]
  },
  {
    name: 'Techniciens',
    url: '/techniciens',
    icon: 'fa fa-wrench',
    children: [
      {
        name: 'Liste technicien',
        url: '/techniciens/list-technicien',
        icon: 'fa fa-th-list'
      }
    ]
  },
  {
    name: 'Utilisateurs',
    url: '/utilisateur',
    icon: 'fa fa-user',
    children: [
      {
        name: 'Liste utilisateur',
        url: '/utilisateur/list-utilisateur',
        icon: 'fa fa-th-list'
      },
      {
        name: 'Ajout utilisateur',
        url: '/utilisateur/ajout-utilisateur',
        icon: 'fa fa-user'
      },
    ]
  },
  {
    name: 'Statistiques',
    url: '/stat',
    icon: 'fa fa-line-chart',
    children: [
      {
        name: 'Exportation',
        url: '/stat/export',
        icon: 'fa fa-mail-forward'
      }
    ]
  }
];
