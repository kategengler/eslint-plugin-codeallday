# @codeallday/eslint-plugin

Preferred eslint configuration of Code All Day LLC

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add --dev eslint
```

Next, install `@codeallday/eslint-plugin`:

```
$ yarn add --dev @codeallday/eslint-plugin
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@codeallday/eslint-plugin` globally.

## Usage

Add `@codeallday` to the plugins section of your `.eslintrc.js` configuration file.

```javascript
// .eslintrc.js
module.exports = {
  plugins: [
    '@codeallday'
  ],
  extends: [
    'plugin:@codeallday/recommended'
  ],
  rules: {
    // override rules' settings here
  }
}
```
```

## Using Prettier

## Supported Rules

* Fill in provided rules here





