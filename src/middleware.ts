import { NextRequest, NextResponse } from 'next/server';
import axiosWithAuth from './lib/axiosWithAuth';
import { AxiosError } from 'axios';

const protectedRoutes: Record<string, string[]> = {
  '/admin': ['admin'],
  '/dashboard': ['user', 'admin'],
  '/budget': ['admin:read'],
  // add more protected routes and required roles
};

function getAccessToken(req: NextRequest): string | undefined {
  const raw = req.cookies.get('accessToken')?.value;

  return raw;
}

async function isAuthorized(
  path: string,
  accessToken: string
): Promise<boolean> {
  try {
    const requiredPermissions = protectedRoutes[path];

    // Check if authenticated and get permissions
    console.log('making user-permissions request');
    const response = await axiosWithAuth.get<{ permissions: string[] }>(
      `${process.env.AUTH_SERVICE_BASE_URL!}/user-permissions/${process.env
        .AUTH_SERVICE_CLIENT_ID!}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status !== 200) {
      return false;
    }

    // Validate permissions
    for (let i = 0; i < requiredPermissions.length; i++) {
      const permission = requiredPermissions[i];
      if (!response.data.permissions.includes(permission)) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.log((error as AxiosError).message);
    return false;
  }
}

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  if (!Object.keys(protectedRoutes).includes(url.pathname)) {
    return NextResponse.next();
  }

  const accessToken = getAccessToken(request); // Retrieve token from cookies

  if (!accessToken) {
    // Redirect to login
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (await isAuthorized(url.pathname, accessToken)) {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on everything but Next internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
