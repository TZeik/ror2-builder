import { NextResponse, type NextRequest } from 'next/server';
import { UAParser } from 'ua-parser-js';

export function middleware(request: NextRequest) {
  // 1. Parsear el user agent
  const userAgent = request.headers.get('user-agent') || '';
  const { device } = UAParser(userAgent);
  const isMobile = device?.type === 'mobile';

  // 2. Crear respuesta
  const response = NextResponse.next();

  // 3. Añadir header personalizado
  response.headers.set('x-device-type', isMobile ? 'mobile' : 'desktop');

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};