import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// function redirectTo(
//   req: NextRequest,
//   pathname: string,
//   query: Record<string, string> = {}
// ) {
//   const redirectUrl = req.nextUrl.clone();
//   redirectUrl.pathname = pathname;
//   redirectUrl.searchParams.delete('error');
//   Object.entries(query).forEach(([key, value]) =>
//     redirectUrl.searchParams.set(key, value)
//   );
//   return NextResponse.redirect(redirectUrl);
// }

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Handle API routes - skip middleware
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Allow static files and Next.js internals
  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.headers.set('X-Custom-Middleware', 'processed'); // Add custom headers for all responses

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
