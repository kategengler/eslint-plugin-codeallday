module.exports = {
  rules: {
    'curly': 'error',
    'no-confusing-arrow': ['error', { 'allowParens': true }],
    'no-mixed-operators': ['error',
      {
        'groups': [
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        'allowSamePrecedence': true
      }],
    'no-tabs': 'error',
  }
};
