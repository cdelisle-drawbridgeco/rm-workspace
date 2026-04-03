import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

// Whitelist of allowed filenames — add new files here as they're dropped into
// ext_docs/Drawbridge Brand/
const ALLOWED_FILES = new Set([
  'Drawbridge - AI Security Overview.pdf',
  'Drawbridge - PE PortCo Cyber Risk Intelligence Overview.pdf',
  'Drawbridge - Vendor Risk Assessment Overview.pdf',
  'Drawbridge Solutions 2026.pdf',
  'Drawbridge True Guard Battle Card.pdf',
  'PE Cyber Audit Battlecard v2.pdf',
]);

export async function GET(req: NextRequest) {
  const filename = req.nextUrl.searchParams.get('file');

  if (!filename || !ALLOWED_FILES.has(filename)) {
    return new NextResponse('Not found', { status: 404 });
  }

  const filePath = path.join(process.cwd(), 'ext_docs', 'Drawbridge Brand', filename);

  try {
    const file = await readFile(filePath);
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'private, max-age=3600',
      },
    });
  } catch (err) {
    console.error('[marketing] readFile error:', err);
    return new NextResponse('File not found', { status: 404 });
  }
}
