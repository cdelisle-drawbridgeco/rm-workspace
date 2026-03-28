import './globals.css';
import type { Metadata } from 'next';
import { getVisibleNavItems } from './nav-config';

export const metadata: Metadata = {
  title: 'Drawbridge | Renewal Forecast',
  description: 'Renewal forecasting and planning'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const navItems = getVisibleNavItems();
  const primary = navItems.filter((item) => !item.secondary);
  const secondary = navItems.filter((item) => item.secondary);

  return (
    <html lang="en">
      <body className="min-h-screen bg-db-gray-light text-db-dark">
        <header className="bg-db-dark">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm">
            <div className="flex items-center gap-6">
              <a href="/" className="font-heading text-lg font-semibold text-white">
                Drawbridge
              </a>
              {primary.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-db-orange hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {secondary.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-db-orange hover:text-white transition text-xs"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
