'use server';

import loginFormSchema, { LoginFormState } from '@/lib/zod/loginFormSchema';
import { User } from 'authentication-service-react-sdk';
import axios from 'axios';
import { cookies } from 'next/headers';

export async function login(
	_prevState: LoginFormState | null,
	formData: FormData
): Promise<LoginFormState> {
	try {
		const cookieStore = await cookies();

		// Validate input
		const result = loginFormSchema.safeParse(Object.fromEntries(formData));

		if (!result.success) {
			return {
				accessToken: null,
				user: null,
				errors: result.error.flatten().fieldErrors,
			};
		}

		const { email, password } = result.data;

		// Login request
		const response = await axios.post<{
			accessToken: string;
			user: User | null;
			message?: string;
		}>('http://localhost:7001/api/v1/login', {
			username: email,
			password,
		});

		if (response.status == 200 || response.status == 201) {
			// Forward the Set-Cookie header from the response
			const setCookieHeader = response.headers['set-cookie'];
			if (setCookieHeader) {
				// Extract the token value from the cookie string
				const refreshToken = setCookieHeader[0].split(';')[0].split('=')[1];
				// Set the cookie with just the token value
				cookieStore.set({
					name: 'refreshToken',
					value: refreshToken,
					httpOnly: true,
					path: '/',
					sameSite: 'strict',
					secure: process.env.NODE_ENV === 'production',
				});
			}

			// Set AccessToken cookie for server-side access
			cookieStore.set({
				name: 'accessToken',
				value: response.data.accessToken,
				httpOnly: true,
				path: '/',
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
			});

			return {
				accessToken: response.data.accessToken,
				user: response.data.user,
			};
		} else {
			return {
				accessToken: null,
				user: null,
				error: response.data.message,
			};
		}
	} catch (error) {
		return {
			accessToken: null,
			user: null,
			error: (error as Error).message,
		};
	}
}
