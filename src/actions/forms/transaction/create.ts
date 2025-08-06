import createTransactionFormSchema, {
	type CreateTransactionFormState,
} from '@/lib/zod/createTransactionFormSchema';

export async function createTransaction(
	_prevState: CreateTransactionFormState | null,
	formData: FormData,
): Promise<CreateTransactionFormState> {
	try {
		// Validate input
		const result = createTransactionFormSchema.safeParse(Object.fromEntries(formData));

		if (!result.success) {
			return {
				transaction: null,
				errors: result.error.flatten().fieldErrors,
			};
		}

		const { title, amount, transactionType, date, description } = result.data;

		// Send Graph Mutation

		return {
			transaction: {
				id: '',
				title,
				amount,
				transactionType,
				date,
				description,
			},
		};
	} catch (error) {
		return {
			transaction: null,
			error: (error as Error).message,
		};
	}
}
