export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: import('node:crypto').UUID; output: import('node:crypto').UUID; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
  DateTime: { input: Date; output: Date; }
};

export type Account = {
  __typename?: 'Account';
  budget: Budget;
  currency: Scalars['String']['output'];
  enrollmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  institution: Institution;
  lastFour: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  status: StatusEnum;
  subtype: SubtypeEnum;
  type: TypeEnum;
};

export type BasicAccount = {
  __typename?: 'BasicAccount';
  currency: Scalars['String']['output'];
  enrollmentId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  institution: Institution;
  lastFour: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  status: StatusEnum;
  subtype: SubtypeEnum;
  type: TypeEnum;
};

export type BasicCategory = {
  __typename?: 'BasicCategory';
  amount: Scalars['Float']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type BasicSavingGoal = {
  __typename?: 'BasicSavingGoal';
  contributionAmount: Scalars['Float']['output'];
  currentAmount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  lastContribution: Scalars['DateTime']['output'];
  prioritize: Scalars['Boolean']['output'];
  targetAmount: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type Budget = {
  __typename?: 'Budget';
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  amount: Scalars['Float']['output'];
  budget: Budget;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  totalSpent: Scalars['Float']['output'];
};

export type CreateAccountInput = {
  accessToken: Scalars['String']['input'];
};

export type CreateBudgetInput = {
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  amount: Scalars['Float']['input'];
  budgetId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CreateSavingGoalInput = {
  budgetId: Scalars['ID']['input'];
  contributionAmount: Scalars['Float']['input'];
  prioritize: Scalars['Boolean']['input'];
  targetAmount: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type CursorPaginationInput = {
  count: Scalars['Int']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
};

export type Institution = {
  __typename?: 'Institution';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Array<Account>;
  createBudget: Budget;
  createCategory: Category;
  createSavingGoal: SavingGoal;
  deleteAccount?: Maybe<Scalars['ID']['output']>;
  deleteBudget?: Maybe<Scalars['ID']['output']>;
  deleteCategory: Scalars['ID']['output'];
  deleteSavingGoal: Scalars['ID']['output'];
  deleteTransaction: Scalars['ID']['output'];
  syncTransactions: SyncTransactions;
  updateBudget: Budget;
  updateCategory: Category;
  updateSavingGoal: SavingGoal;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateBudgetArgs = {
  input: CreateBudgetInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateSavingGoalArgs = {
  input: CreateSavingGoalInput;
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBudgetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSavingGoalArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBudgetArgs = {
  input: UpdateBudgetInput;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateSavingGoalArgs = {
  input: UpdateSavingGoalInput;
};

export type PageInformation = {
  __typename?: 'PageInformation';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  length: Scalars['Int']['output'];
};

export type PaginatedTransaction = {
  __typename?: 'PaginatedTransaction';
  items: Array<Transaction>;
  pageInfo?: Maybe<PageInformation>;
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  accounts: Array<Account>;
  budget: Budget;
  budgets: Array<Budget>;
  categories: Array<Category>;
  category: Category;
  savingGoal?: Maybe<SavingGoal>;
  savingGoals: Array<SavingGoal>;
  transaction: Transaction;
  transactions: PaginatedTransaction;
};


export type QueryAccountArgs = {
  id: Scalars['String']['input'];
};


export type QueryAccountsArgs = {
  budgetId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryBudgetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  budgetId?: InputMaybe<Scalars['ID']['input']>;
  monthDate: Scalars['DateTime']['input'];
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySavingGoalArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySavingGoalsArgs = {
  budgetId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTransactionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransactionsArgs = {
  budgetId?: InputMaybe<Scalars['ID']['input']>;
  monthDate: Scalars['DateTime']['input'];
  pagination?: InputMaybe<CursorPaginationInput>;
};

export type SavingGoal = {
  __typename?: 'SavingGoal';
  budget: Budget;
  contributionAmount: Scalars['Float']['output'];
  currentAmount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  lastContribution: Scalars['DateTime']['output'];
  prioritize: Scalars['Boolean']['output'];
  targetAmount: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export enum StatusEnum {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

export enum SubtypeEnum {
  CertificateOfDeposit = 'CERTIFICATE_OF_DEPOSIT',
  Checking = 'CHECKING',
  CreditCard = 'CREDIT_CARD',
  MoneyMarket = 'MONEY_MARKET',
  Savings = 'SAVINGS',
  Sweep = 'SWEEP',
  Treasury = 'TREASURY'
}

export enum SyncStatusEnum {
  Error = 'ERROR',
  Success = 'SUCCESS'
}

export type SyncTransactions = {
  __typename?: 'SyncTransactions';
  error?: Maybe<Scalars['String']['output']>;
  status: SyncStatusEnum;
};

export type Transaction = {
  __typename?: 'Transaction';
  account: BasicAccount;
  amount: Scalars['Float']['output'];
  category?: Maybe<BasicCategory>;
  date: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: TransactionStatusEnum;
  tellerId: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};

export enum TransactionStatusEnum {
  Pending = 'PENDING',
  Posted = 'POSTED'
}

export enum TypeEnum {
  Credit = 'CREDIT',
  Depository = 'DEPOSITORY'
}

export type UpdateBudgetInput = {
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSavingGoalInput = {
  contributionAmount?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  prioritize?: InputMaybe<Scalars['Boolean']['input']>;
  targetAmount?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionPageQueryVariables = Exact<{
  monthDate: Scalars['DateTime']['input'];
  budgetId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type TransactionPageQuery = { __typename?: 'Query', transactions: { __typename?: 'PaginatedTransaction', items: Array<{ __typename?: 'Transaction', id: import('node:crypto').UUID, tellerId: import('node:crypto').UUID, amount: number, date: Date, description: string, status: TransactionStatusEnum, type: string }>, pageInfo?: { __typename?: 'PageInformation', length: number, hasNextPage: boolean, endCursor?: string | null } | null }, accounts: Array<{ __typename?: 'Account', id: import('node:crypto').UUID, currency: string, enrollmentId: string, lastFour: number, name: string, type: TypeEnum, subtype: SubtypeEnum, status: StatusEnum }>, categories: Array<{ __typename?: 'Category', id: import('node:crypto').UUID, name: string, amount: number, totalSpent: number, endDate?: Date | null }> };
