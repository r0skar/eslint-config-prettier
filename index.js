module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  parser: 'babel-eslint',

  plugins: ['@typescript-eslint', 'import', 'promise', 'unicorn', 'prettier'],

  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],

  // settings: {
  //   'import/resolver': {
  //     alias: {
  //       map: [['@web', './src']],
  //     },
  //   },
  // },

  rules: {
    // Prettier.
    'prettier/prettier': 2,

    // Files and folders.
    'unicorn/filename-case': 0,

    // Allow abbreviations.
    'unicorn/prevent-abbreviations': 0,

    // Dev.
    'no-console': [1, { allow: ['warn', 'info', 'error'] }],

    // Imports.
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,

    // Hoisting.
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: false,
      },
    ],

    // Promises.
    'prefer-promise-reject-errors': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/promise-function-async': 0,

    // React.
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/destructuring-assignment': 0,

    // Typescript
    '@typescript-eslint/semi': [2, 'never'],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-require-imports': 1,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: { delimiter: 'none' },
        singleline: { delimiter: 'semi', requireLast: false },
      },
    ],
    camelcase: 0,
    '@typescript-eslint/camelcase': [2, { ignoreDestructuring: true }],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        varsIgnorePattern: '(^_|^IIFE|^\\$|h)',
        argsIgnorePattern: '(^_|)',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
  },

  // Add TS support and rules that require type support.
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: 'module',
        ecmaVersion: 2019,
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        '@typescript-eslint/prefer-includes': 2,
        '@typescript-eslint/no-unnecessary-type-assertion': 2,
        '@typescript-eslint/prefer-string-starts-ends-with': 2,
        '@typescript-eslint/ban-types': [
          2,
          {
            types: {
              Array: {
                message: 'Use <T>[] instead',
                fixWith: '<unknown>[]',
              },
              Object: {
                message: 'Use Record instead',
                fixWith: 'Record<string, unknown>',
              },
              String: {
                message: 'Use string instead',
                fixWith: 'string',
              },
              Boolean: {
                message: 'Use boolean instead',
                fixWith: 'boolean',
              },
              Number: {
                message: 'Use number instead',
                fixWith: 'number',
              },
            },
          },
        ],
      },
    },
  ],
}
