module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: [".eslintrc.js", "tsconfig.json"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    project: ['./tsconfig.json', './client/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    "class-methods-use-this": ["off"],
    "max-len": ["error", { code: 120 }],
  },
};
