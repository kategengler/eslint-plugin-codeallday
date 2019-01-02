const overrides = require('./prettier-overrides.js').rules;

module.exports = {
  plugins: [
    'prettier',
  ],
  extends: ['plugin:prettier/recommended'],
  rules: Object.assign({
    'prettier/prettier': ['error', {'singleQuote': true, 'allowParens': 'always', 'trailingComma': 'es5' }]
  }, overrides),
};
