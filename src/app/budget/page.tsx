import { fetchWithAuth } from 'authentication-service-nextjs-sdk';
import React from 'react';

export default async function Budget() {
  const response = await fetchWithAuth<{
    user: {
      id: number;
      email: string;
    };
  }>(`${process.env.AUTH_SERVICE_HOST_URL}/api/v1/users/me`);

  return (
    <div>
      Budget,{' '}
      {response.success ? JSON.stringify(response.data) : response.message}
    </div>
  );
}
