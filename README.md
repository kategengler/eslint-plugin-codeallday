# eslint-plugin-codeallday

Preferred ESlint configuration of [Code All Day LLC](https://www.codeallday.com)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add --dev eslint
```

Next, install `eslint-plugin-codeallday`:

```
$ yarn add --dev eslint-plugin-codeallday
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-codeallday` globally.

## Usage

Add `codeallday` to the plugins section of your `.eslintrc.js` configuration file.

```javascript
// .eslintrc.js
module.exports = {
  plugins: [
    'codeallday'
  ],
  extends: [
    'plugin:codeallday/recommended'
  ],
  rules: {
    // override rules' settings here
  }
}
```

The [plugin:codeallday/recommended](lib/config/recommended.js) configuration provides our general recommendations 
for ESlint config, including formatting rules. It extends `eslint:recommended`.

## Usage in an Ember Project

This plugin provides a configuration specific to an Ember project: [plugin:codeallday/ember](lib/config/ember.js). 
This configuration extends from [`eslint-plugin-ember`](https://github.com/ember-cli/eslint-plugin-ember)'s recommended configuration.
It also includes the `codeallday/recommended` config and overrides some rules for `tests/` and `mirage/` directories in Ember projects.

```javascript
// .eslintrc.js
module.exports = {
  plugins: [
    'codeallday'
  ],
  extends: [
    'plugin:codeallday/ember'
  ],
  rules: {
    // override rules' settings here
  }
}
```

## Using [`Prettier`](https://github.com/prettier/prettier)

To use Prettier in place of the formatting rules provided by this plugin, additionally extend from [plugin:codeallday/ember](lib/config/prettier.js).
This configuration uses [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) with an opinionated config. It also overrides some
formatting rules that do not conflict with `prettier`. The formatting rules that do conflict are disabled by `eslint-config-prettier`

```javascript
// .eslintrc.js
module.exports = {
  plugins: [
    'codeallday'
  ],
  extends: [
    'plugin:codeallday/recommended',
    'plugin:codeallday/prettier'
  ],
  rules: {
    // override rules' settings here
  }
}
```

To ensure your tooling has the correct `prettier` options, add the following `.prettierrc`:

```
{
  "trailingComma": "es5",
  "singleQuote": true,
  "arrowParens": "always"
}
```
