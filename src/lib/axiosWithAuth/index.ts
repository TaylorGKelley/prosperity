import { getAccessToken } from '@/data-access-layer/auth/getAccessToken';
import { getCSRFToken } from '@/data-access-layer/auth/getCSRFToken';
import { refreshToken } from '@/data-access-layer/auth/refreshToken';
import axios from 'axios';

const axiosWithAuth = axios.create({
  timeout: 10 * 1000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosWithAuth.interceptors.request.use(
  async (config) => {
    config.headers['Authorization'] = `Bearer ${await getAccessToken()}`;
    config.headers['X-CSRF-Token'] = await getCSRFToken();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Refresh access token interceptor
axiosWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log({
      status: error.response.status,
      message: error.response.data.message,
      retry: error.config._retry,
    });
    if (!error?.response?.status || error.config._retry) {
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
        const { accessToken } = await refreshToken();

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${accessToken}`,
        };
        console.log(originalRequest.headers);
        originalRequest._retry = true;
        return axiosWithAuth(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosWithAuth;
