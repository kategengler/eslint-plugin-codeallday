module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    browser: true,
    es6: true,
  },

  extends: [
    'eslint:recommended',
    require.resolve('./prettier-overrides.js'),
    require.resolve('./formatting.js'),
  ],

  rules: {
    // 'padding-line-between-statements': [
    //   'error',
    //   { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
    //   { blankLine: 'any',    prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
    //   { blankLine: 'always', prev: ['block-like'], next: '*'},
    //   { blankLine: 'always', prev: ['function'], next: '*'},
    // ],
    'one-var': ['error', 'never'],
    'no-var': 'error',
    'no-useless-rename': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-destructuring': 'off',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'off',
    'eol-last': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'array-callback-return': 'error',
    'complexity': ['error', { 'max': 10 }],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-magic-numbers': ['error', { ignore: [0, 1, 100, -1], ignoreArrayIndexes: true }],
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'require-await': 'error',
    'camelcase': 'error',
    'arrow-body-style': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-params': ['error', 4],
    'max-nested-callbacks': ['error', 4],
    'max-statements-per-line': 'error',
    'no-bitwise': 'error',
    'no-lonely-if': 'error',
    'no-ternary': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-trailing-spaces': 'error',
    'no-duplicate-imports': 'error',
  },

};
