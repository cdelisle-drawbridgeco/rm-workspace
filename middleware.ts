import { NextResponse } from 'next/server';

// Auth is handled via SSO — no passcode gating.
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api/health).*)'],
};





