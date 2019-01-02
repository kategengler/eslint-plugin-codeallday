module.exports = {
  plugins: [
    'ember',
  ],
  extends: [
    'plugin:ember/recommended',
    require.resolve('./recommended.js'),
  ],

  rules: {
    'ember/routes-segments-snake-case': 'off',
    'ember/order-in-routes': 'error',
    'ember/order-in-models': 'error',
    'ember/order-in-controllers': 'error',
    'ember/order-in-components': 'error',
    'ember/avoid-leaking-state-in-ember-objects': 'error',
    'ember/no-new-mixins': 'error',
    'ember/no-observers': 'error',
    'ember/no-ember-testing-in-module-scope': 'error',
  },
  overrides: [
    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      rules: {
        'max-nested-callbacks': ['error', 10],
        'no-magic-numbers': 'off',
      },
    },
    {
      files: ['mirage/**/*.js'],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
  ],
};
