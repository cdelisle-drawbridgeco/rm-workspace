export type NavItem = {
  href: string;
  label: string;
  /** When false, hidden in production (NODE_ENV === 'production'). Always visible in dev. */
  published: boolean;
  /** Render on the right side of the nav bar (e.g. Admin) */
  secondary?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { href: '/',             label: 'Forecast',     published: true  },
  { href: '/plans',        label: 'Plans',         published: true  },
  { href: '/interactions', label: 'Interactions',  published: true  },
  { href: '/dashboard',    label: 'Dashboard',     published: true  },
  { href: '/enablement',   label: 'Enablement',    published: true  },
  { href: '/admin/import', label: 'Admin',         published: false, secondary: true },
];

export function getVisibleNavItems(): NavItem[] {
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) return NAV_ITEMS;
  return NAV_ITEMS.filter((item) => item.published);
}
