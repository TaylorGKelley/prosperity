import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:4000',
	documents: ['./src/lib/graphql/queries/*.ts'],
	generates: {
		// 'src/lib/graphql/schema/types.ts': {
		// 	plugins: ['typescript'],
		// 	config: {
		// 		scalars: {
		// 			Date: 'Date',
		// 			DateTime: 'Date',
		// 		},
		// 		preResolveTypes: true,
		// 	},
		// },
		'src/lib/graphql/schema/operations.ts': {
			plugins: ['typescript', 'typescript-operations'],
			config: {
				scalars: {
					Date: 'Date',
					DateTime: 'Date',
				},
			},
		},
	},
};

export default config;
