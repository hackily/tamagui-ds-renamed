module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react-native-a11y/all",
    "plugin:react/jsx-runtime",
    "plugin:testing-library/react",
    "prettier",
    "plugin:storybook/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  ignorePatterns: ["node_modules/", "coverage/", "storybook-static"],
  plugins: [
    "react",
    "import",
    "jest",
    "react-hooks",
    "prettier",
    "testing-library",
  ],
  rules: {
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
  },
};
