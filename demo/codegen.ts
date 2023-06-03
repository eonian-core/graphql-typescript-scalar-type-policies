import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./demo/schema.graphql",
  generates: {
    "./demo/gql/": {
      preset: "client",
      config: {
        useTypeImports: true,
        strictScalars: true,
        scalars: { BigInt: "BigInt" },
      },
      plugins: [
        {
          "dist/index.cjs.js": {
            scalarTypePolicies: {
              // File path should be relative to the generated "graphql.ts"
              BigInt: "../bigIntPolicy#bigIntPolicy",
            },
          },
        },
      ],
    },
  },
};

export default config;
