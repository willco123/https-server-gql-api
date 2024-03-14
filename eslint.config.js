import stylistic from "@stylistic/eslint-plugin";
import parserTs from "@typescript-eslint/parser";

export default [
  {
    plugins: {
      "@stylistic": stylistic,
    },
    parser: parserTs,
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double"],
    },
  },
];
