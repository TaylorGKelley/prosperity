'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
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
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `refreshToken:${refreshToken}`,
        'X-CSRF-Token': csrfToken,
      },
    }
  );

  if (res.status != 200) {
    throw new Error('Failed to refresh token');
  }

  return { accessToken: res.data.accessToken };
}
