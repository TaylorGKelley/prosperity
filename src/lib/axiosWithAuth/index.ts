import { getAccessToken } from '@/data-access-layer/auth/getAccessToken';
import { getCSRFToken } from '@/data-access-layer/auth/getCSRFToken';
import { refreshToken } from '@/data-access-layer/auth/refreshToken';
import axios from 'axios';
import { cookies } from 'next/headers';

const axiosWithAuth = axios.create({
  timeout: 10 * 1000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosWithAuth.interceptors.request.use(async function (config) {
  axiosWithAuth.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${await getAccessToken()}`;
  axiosWithAuth.defaults.headers.common['X-CSRF-Token'] = await getCSRFToken();

  return config;
});

// Refresh access token interceptor
axiosWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error?.response?.status) {
      // If the error is not a response error, return
      return Promise.reject(error);
    }

    const originalRequest = error.config;
    if (
      (error.response.status === 403 &&
        error.response.data.message === 'Invalid access token') ||
      (error.response.status === 401 &&
        error.response.data.message !== 'Refresh token not found')
    ) {
      try {
        await refreshToken();

        // retrieve refreshed access token
        const cookieStore = await cookies();
        const accessToken = cookieStore.get('accessToken')?.value;

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${accessToken}`,
        };
        originalRequest._retry = true;
        return axiosWithAuth(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
  }
);

export default axiosWithAuth;
