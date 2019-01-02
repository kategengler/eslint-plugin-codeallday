# eslint-plugin-codeallday

Preferred eslint configuration of Code All Day LLC

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
```

## Using Prettier

## Supported Rules

* Fill in provided rules here





