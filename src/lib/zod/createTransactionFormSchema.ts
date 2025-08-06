import z from 'zod';
import { type Transaction, TransactionType } from '../graphql/schema/operations';

const createTransactionFormSchema = z.object({
	title: z.string().nonempty(),
	amount: z.float32().positive(),
	transactionType: z.enum(TransactionType),
	date: z.date().nonoptional(),
	description: z.string(),
});

type CreateTransactionFormState =
	| {
			transaction: Transaction | null;
			errors?: {
				title?: string[];
				amount?: string[];
				transactionType?: string[];
				date?: string[];
				description?: string[];
			};
			error?: string;
	  }
	| undefined;

export { createTransactionFormSchema as default, type CreateTransactionFormState };
