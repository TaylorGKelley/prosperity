'use server';

import { cookies } from 'next/headers';
import axios from 'axios';
import { getCSRFToken } from './getCSRFToken';

export async function refreshToken() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  if (!refreshToken) {
    throw new Error('No refresh token found');
  }

  const csrfToken = await getCSRFToken();

  const res = await axios.post<{ accessToken: string }>(
    `${process.env.AUTH_SERVICE_BASE_URL}/refresh-token`,
    {},
    {
      headers: {
        'X-CSRF-Token': csrfToken.xsrfToken,
        Cookie: cookieStore
          .getAll()
          .map((cookie) => `${cookie.name}=${cookie.value};`)
          .join('; '),
      },
    }
  );

  if (res.status != 200) {
    throw new Error('Failed to refresh token');
  }

  // Set new cookies
  const setCookieHeader = res.headers['set-cookie']?.toString();
  const newRefreshToken = setCookieHeader?.split(';')[0].split('=')[1];
  if (newRefreshToken) {
    cookieStore.set({
      name: 'refreshToken',
      value: newRefreshToken,
      path: '/',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      sameSite: 'lax',
      httpOnly: true,
    });

    cookieStore.set({
      name: 'accessToken',
      value: res.data.accessToken,
      path: '/',
      sameSite: 'lax',
      httpOnly: true,
    });
  }

  return { accessToken: res.data.accessToken };
}
