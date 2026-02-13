import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drawbridge | Renewal Forecast',
  description: 'Renewal forecasting and planning'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-db-gray-light text-db-dark">
        <header className="bg-db-dark">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm">
            <div className="flex items-center gap-6">
              <a href="/" className="font-heading text-lg font-semibold text-white">
                Drawbridge
              </a>
              <a href="/" className="text-db-orange hover:text-white transition">Forecast</a>
              <a href="/plans" className="text-db-orange hover:text-white transition">Plans</a>
            </div>
            <a className="text-db-orange hover:text-white transition text-xs" href="/admin/import">Admin</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
