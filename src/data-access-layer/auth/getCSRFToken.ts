import 'server-only';
import axios from 'axios';
import { cookies } from 'next/headers';

export type CSRFCookies = {
  xsrfToken: string;
  _csrf: string;
};

export async function getCSRFToken(): Promise<CSRFCookies> {
  const cookieStore = await cookies();

  // return csrf token stored in cookie
  const xsrfToken = cookieStore.get('xsrfToken')?.value;
  const _csrf = cookieStore.get('_csrf')?.value;
  if (xsrfToken && _csrf) {
    return { xsrfToken, _csrf: _csrf };
  }

  // if it's not already stored in the cookie, refresh via the api
  const response = await axios.get<{ csrfToken: string }>(
    `${process.env.AUTH_SERVICE_BASE_URL}/csrf-token`,
    { withCredentials: true }
  );

  // Pass along _csrf cookie
  const setCookieHeader = response.headers['set-cookie']?.toString();
  const csrfToken = setCookieHeader?.split(';')[0].split('=')[1];

  // Set the cookie with just the token value
  if (csrfToken) {
    cookieStore.set({
      name: '_csrf',
      value: csrfToken,
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
    });
  }

  // Set xsrfToken cookie
  cookieStore.set({
    name: 'xsrfToken',
    value: response.data.csrfToken,
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
  });

  return { xsrfToken: response.data.csrfToken, _csrf: csrfToken || _csrf! };
}
