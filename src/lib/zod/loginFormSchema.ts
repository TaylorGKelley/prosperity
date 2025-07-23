import z from 'zod';

const loginFormSchema = z.object({
  email: z.email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});

type LoginFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      error?: string;
    }
  | undefined;

export { loginFormSchema as default, type LoginFormState };
