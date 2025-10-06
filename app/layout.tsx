import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Renewal Forecast',
  description: 'MVP for renewal forecasting'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4 text-sm">
            <a href="/" className="font-semibold">Renewal Forecast</a>
            <div className="flex items-center gap-4">
              <a className="text-blue-600 hover:underline" href="/rm">RM</a>
              <a className="text-blue-600 hover:underline" href="/manager">VP</a>
              <a className="text-blue-600 hover:underline" href="/exec">Exec</a>
              <a className="text-blue-600 hover:underline" href="/admin/import">Admin</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

