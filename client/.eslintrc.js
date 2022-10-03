module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'default-param-last': 0,
    'no-restricted-exports': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'no-param-reassign': 0,
    'func-names': 0,
    'max-len': 0,
    'no-trailing-spaces': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 0,
    'no-nested-ternary': 0,
  },
};
