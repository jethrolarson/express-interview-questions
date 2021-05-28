module.exports = {
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "@typescript-eslint/triple-slash-reference": 0,
      "object-shorthand": 2,
      "@typescript-eslint/no-unused-vars": 0,
      "@typescript-eslint/no-unused-vars-experimental": 2,
      complexity: [1, 10], // KISS
      "@typescript-eslint/explicit-function-return-type": 0,
    },
  };
  