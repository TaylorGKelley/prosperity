'use client';

import { login } from '@/actions/forms/login';
import { LoginFormState } from '@/lib/zod/loginFormSchema';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (
    prevState: LoginFormState | null,
    formData: FormData
  ) => {
    const result = await login(prevState, formData);

    if (result?.user) {
      router.push('/');
    }

    return result;
  };

  const [state, action, isPending] = useActionState(handleSubmit, null);

  return (
    <form action={action} className="flex gap-2 flex-col w-sm">
      <input
        type="email"
        name="email"
        id="email"
        className="p-2 rounded-md bg-white"
      />
      <p>{state?.errors?.email || ''}</p>

      <input
        type="password"
        name="password"
        id="password"
        className="p-2 rounded-md bg-white"
      />
      <p>{state?.errors?.password || ''}</p>

      <button type="submit" disabled={isPending}>
        {isPending ? 'Logging in...' : 'Submit'}
      </button>

      <p>{state?.error}</p>
    </form>
  );
}
