import z from 'zod';
import { type Transaction, TransactionType } from '../graphql/schema/operations';

const createTransactionFormSchema = z.object({
	title: z.string().nonempty('Invalid Title'),
	amount: z.coerce.number('Invalid Amount').positive(),
	categoryId: z.uuid('Invalid Category'),
	transactionType: z.enum(TransactionType, 'Invalid Transaction Type'),
	date: z.coerce.date('Invalid Date').nonoptional(),
	description: z.string().optional(),
});

type CreateTransactionFormState =
	| {
			transaction?: Transaction | null;
			errors?: {
				title?: string[];
				amount?: string[];
				categoryId?: string[];
				transactionType?: string[];
				date?: string[];
				description?: string[];
			};
			error?: string;
			values: {
				title?: string;
				amount?: string;
				categoryId?: string;
				transactionType?: string;
				date?: string;
				description?: string;
			};
	  }
	| undefined;

export { createTransactionFormSchema as default, type CreateTransactionFormState };
