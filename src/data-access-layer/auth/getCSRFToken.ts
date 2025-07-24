import 'server-only';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function getCSRFToken() {
  const cookieStore = await cookies();

  // return csrf token stored in cookie
  const xsrfToken = cookieStore.get('xsrfToken')?.value;
  if (xsrfToken) {
    return xsrfToken;
  }

  // if it's not already stored in the cookie, refresh via the api
  const response = await axios.get<{ csrfToken: string }>(
    `${process.env.AUTH_SERVICE_BASE_URL}/csrf-token`,
    { withCredentials: true }
  );

  // Pass along _csrf cookie
  const setCookieHeader = response.headers['set-cookie'];
  if (setCookieHeader) {
    // Extract the token value from the cookie string
    const csrfToken = setCookieHeader[0].split(';')[0].split('=')[1];
    // Set the cookie with just the token value
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

  return response.data.csrfToken;
}
