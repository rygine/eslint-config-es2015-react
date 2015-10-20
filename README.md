# eslint-config-es2015-react

This package provides an .eslintrc file as an extensible shared config.

## Requirements

1. NodeJS v4+ (for ES6 features)
2. NPM v3+

## Usage

This package exports 3 configurations for ESLint.

### eslint-config-es2015-react

Lints ES2015+ and React. Requires `eslint`, `babel-eslint`, and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-es2015-react babel-eslint eslint-plugin-react eslint`
2. Add `"extends": "es2015-react"` to your .eslintrc

### eslint-config-es2015-react/base

Lints ES2015+ only. Requires `eslint` and `babel-eslint`.

1. `npm install --save-dev eslint-config-es2015-react babel-eslint eslint`
2. Add `"extends": "eslint-config-es2015-react/base"` to your .eslintrc

### eslint-config-es2015-react/react

Lints React only. Requires `eslint` and `babel-eslint`, and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-es2015-react babel-eslint eslint-plugin-react eslint`
2. Add `"extends": "eslint-config-es2015-react/react"` to your .eslintrc
