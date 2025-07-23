'use server';

import loginFormSchema, { LoginFormState } from '@/lib/zod/loginFormSchema';
import axios from 'axios';

export async function login(
  prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  try {
    // Validate input
    const result = loginFormSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
      return {
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { email, password } = result.data;

    // Login request
    const response = await axios.post<{
      accessToken: string;
      message?: string;
    }>('http://localhost:7001/api/v1/login', {
      email,
      password,
    });

    if (response.status == 200 || response.status == 201) {
    } else {
      return {
        error: response.data.message,
      };
    }
  } catch (error) {
    return {
      error: (error as Error).message,
    };
  }
}
