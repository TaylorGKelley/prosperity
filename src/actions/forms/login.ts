'use server';

import loginFormSchema, { LoginFormState } from '@/lib/zod/loginFormSchema';

export async function login(
  _prevState: LoginFormState | null,
  formData: FormData
): Promise<LoginFormState> {
  try {
    // Validate input
    const result = loginFormSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        user: null,
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { email, password } = result.data;

    // Login request
    // {
    //   accessToken: string;
    //   user: User | null;
    //   message?: string;
    // }

    const response = await fetch('/api/auth/login', {
      method: 'get',
      body: new URLSearchParams({
        username: email,
        password,
      }),
    });

    const data = await response.json();

    return {
      user: data.user,
    };
  } catch (error) {
    return {
      user: null,
      error: (error as Error).message,
    };
  }
}
