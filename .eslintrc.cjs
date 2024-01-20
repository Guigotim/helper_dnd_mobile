module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@stylistic/recommended-extends', 
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', 
    'plugin:react-native/all'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    '@stylistic/ts',
  ],
  root: true,
  rules: {
    'yoda': 'error',
    'no-console': 'warn',
    '@stylistic/indent': 'off',
    '@stylistic/jsx-indent': ['error', 4],
    '@stylistic/jsx-indent-props': ['error', 4],
    'react/react-in-jsx-scope': 'off',
  }
};