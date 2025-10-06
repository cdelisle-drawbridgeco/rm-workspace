import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  const access = process.env.ACCESS_KEY || '';
  if (code && access && code === access) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set('rf_session', 'ok', {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: true,
      maxAge: 60 * 60 * 8
    });
    return res;
  }
  return new NextResponse('Unauthorized', { status: 401 });
}

