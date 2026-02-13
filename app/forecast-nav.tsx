'use client';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/rm', label: 'RM' },
  { href: '/manager', label: 'VP' },
  { href: '/exec', label: 'Exec' },
];

export default function ForecastNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3">
      {LINKS.map((link) => {
        const active = pathname === link.href;
        return (
          <a
            key={link.href}
            href={link.href}
            className={`rounded px-3 py-1 text-sm font-medium transition ${
              active
                ? 'bg-db-aqua text-db-dark'
                : 'text-gray-500 hover:text-db-dark hover:bg-gray-100'
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
