module.exports = {
  "extends": [
    "eslint-config-es2015-react/rules/best-practices",
    "eslint-config-es2015-react/rules/errors",
    "eslint-config-es2015-react/rules/es2015",
    "eslint-config-es2015-react/rules/legacy",
    "eslint-config-es2015-react/rules/strict",
    "eslint-config-es2015-react/rules/style",
    "eslint-config-es2015-react/rules/variables",
  ],
  // https://github.com/babel/babel-eslint
  "parser": "babel-eslint",
  "plugins": [
    // https://github.com/yannickcr/eslint-plugin-react
    "react",
  ],
  // http://eslint.org/docs/user-guide/configuring.html#specifying-environments
  "env": {
    // browser global variables
    "browser": true,
    // enable all ECMAScript 6 features except for modules
    "es6": true,
    // Node.js global variables and Node.js-specific rules
    "node": true,
  },
  "ecmaFeatures": {
    // enable ES6 modules and global strict mode
    "modules": true,
  },
  "rules": {},
};
