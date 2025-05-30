module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript', // this is needed to make the import plugin work with TypeScript
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import'],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'type', 'parent', 'sibling', 'index', 'object'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          // Allow devDependencies in:
          '**/webpack.config.*', // Webpack configs
          '**/config/**', // All files in /config/
          '**/*.config.{js,ts}', // Any .config.js/.ts files
          '**/*.setup.{js,ts}', // Test/setup files (if needed)
        ],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: { alwaysTryTypes: true } },
  },
};
