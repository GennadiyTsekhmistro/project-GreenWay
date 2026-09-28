// Власник: Олександр (TL). Розмежування приватних і публічних маршрутів + тихе оновлення сесії.
import { NextRequest, NextResponse } from 'next/server';

const PRIVATE_ROUTES = ['/profile', '/locations/new'];
const AUTH_ROUTES = ['/sign-in', '/sign-up'];

const isPrivate = (pathname: string) =>
  PRIVATE_ROUTES.some((route) => pathname.startsWith(route)) ||
  /^\/locations\/[^/]+\/edit$/.test(pathname);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  let isAuthenticated = Boolean(accessToken);
  const setCookies: string[] = [];

  // access прострочився, а refresh ще живий — оновлюємо сесію на бекенді
  if (!accessToken && refreshToken) {
    try {
      const res = await fetch(`${process.env.BACKEND_API_URL}/auth/refresh`, {
        method: 'POST',
        headers: { cookie: request.headers.get('cookie') ?? '' },
      });
      if (res.ok) {
        isAuthenticated = true;
        setCookies.push(...res.headers.getSetCookie());
      }
    } catch {
      // бекенд недоступний — вважаємо неавторизованим
    }
  }

  let response: NextResponse;
  if (isPrivate(pathname) && !isAuthenticated) {
    response = NextResponse.redirect(new URL('/sign-in', request.url));
  } else if (AUTH_ROUTES.includes(pathname) && isAuthenticated) {
    response = NextResponse.redirect(new URL('/profile', request.url));
  } else {
    response = NextResponse.next();
  }

  setCookies.forEach((cookie) => response.headers.append('set-cookie', cookie));
  return response;
}

export const config = {
  matcher: [
    '/profile/:path*',
    '/locations/new',
    '/locations/:locationId/edit',
    '/sign-in',
    '/sign-up',
  ],
};
