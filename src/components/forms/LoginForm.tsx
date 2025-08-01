'use client';

import { login } from '@/actions/forms/login';
import { LoginFormState } from '@/lib/zod/loginFormSchema';
// import { useAuth } from 'authentication-service-nextjs-sdk';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';

export default function LoginForm() {
  const router = useRouter();
  // const { login: setLogin } = useAuth();

  const handleSubmit = async (
    prevState: LoginFormState | null,
    formData: FormData
  ) => {
    const result = await login(prevState, formData);

    if (result?.user) {
      // Handle successful login
      // setLogin({ accessToken: result.accessToken, user: result.user });

      router.push('/');
    }

    return result;
  };

  const [state, action, isPending] = useActionState(handleSubmit, null);

  return (
    <form action={action}>
      <input type="email" name="email" id="email" />
      <p>{state?.errors?.email || ''}</p>

      <input type="password" name="password" id="password" />
      <p>{state?.errors?.password || ''}</p>

      <button type="submit" disabled={isPending}>
        {isPending ? 'Logging in...' : 'Submit'}
      </button>
    </form>
  );
}
