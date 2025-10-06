import { NextResponse, NextRequest } from 'next/server';

const PUBLIC_PATHS = [
  '/',
  '/login',
  '/_next',
  '/favicon.ico'
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isPublic = PUBLIC_PATHS.some(p => pathname.startsWith(p));
  if (isPublic) return NextResponse.next();

  const hasSession = req.cookies.get('rf_session')?.value === 'ok';
  if (!hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/health).*)']
};

