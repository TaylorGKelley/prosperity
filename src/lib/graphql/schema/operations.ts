export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
  DateTime: { input: Date; output: Date; }
};

export type Category = {
  __typename?: 'Category';
  amount: Scalars['Float']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type CreateCategoryInput = {
  amount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type CreateTransactionInput = {
  amount: Scalars['Float']['input'];
  categoryId: Scalars['ID']['input'];
  date: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  transactionType: TransactionType;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createTransaction: Transaction;
  deleteCategory: Scalars['ID']['output'];
  deleteTransaction: Scalars['ID']['output'];
  updateCategory: Category;
  updateTransaction: Transaction;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateTransactionArgs = {
  input: UpdateTransactionInput;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  categoryById: Category;
  transactionById: Transaction;
  transactions: Array<Transaction>;
};


export type QueryCategoriesArgs = {
  monthDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransactionByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Float']['output'];
  date: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  transactionType: TransactionType;
};

export enum TransactionType {
  BankTransfer = 'bank_transfer',
  Cash = 'cash',
  Check = 'check',
  CreditCard = 'credit_card',
  DebitCard = 'debit_card',
  GiftCard = 'gift_card'
}

export type UpdateCategoryInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTransactionInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  transactionType?: InputMaybe<TransactionType>;
};

export type CategoriesByMonthQueryVariables = Exact<{
  monthDate: Scalars['DateTime']['input'];
}>;


export type CategoriesByMonthQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, amount: number }> };

export type CategoriesIdNameQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesIdNameQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string }> };

export type CreateCategoryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: { __typename?: 'Category', id: string, name: string, amount: number } };

export type TransactionsQueryVariables = Exact<{ [key: string]: never; }>;


export type TransactionsQuery = { __typename?: 'Query', transactions: Array<{ __typename?: 'Transaction', id: string, title: string, amount: number, transactionType: TransactionType, date: Date, description?: string | null }> };

export type CreateTransactionMutationVariables = Exact<{
  categoryId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  transactionType: TransactionType;
  date: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', createTransaction: { __typename?: 'Transaction', id: string, title: string, amount: number, transactionType: TransactionType, date: Date, description?: string | null } };
