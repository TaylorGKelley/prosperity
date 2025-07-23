'use client';

import { login } from '@/actions/forms/login';
import { LoginFormState } from '@/lib/zod/loginFormSchema';
import { useActionState } from 'react';

export default function LoginForm() {
  const [state, action, isPending] = useActionState<LoginFormState>(login, {
    message: '',
  });

  return (
    <form action={action}>
      <input type="email" />
      <p>{state?.errors?.email || ''}</p>

      <input type="password" />
      <p>{state?.errors?.password || ''}</p>

      <button type="submit">{isPending ? 'Logging in...' : 'Submit'}</button>
    </form>
  );
}
