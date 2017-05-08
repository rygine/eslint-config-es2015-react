module.exports = {
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
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "extends": [
    "./rules/react.js",
  ],
  "rules": {},
};
