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
        scalarTypePolicies: {
          BigInt: "./bigIntPolicy#bigIntPolicy",
        },
      },
      plugins: [
        {
          "dist/index.cjs.js": {
            scalarTypePolicies: {
              BigInt: "../bigIntPolicy#bigIntPolicy",
            },
          },
        },
      ],
    },
  },
};

export default config;
