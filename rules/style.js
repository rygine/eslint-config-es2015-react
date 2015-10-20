module.exports = {
  "rules": {
    // Disallow spaces inside of brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    "array-bracket-spacing": [2, "never"],
    // Enforce spaces inside of single line blocks
    // http://eslint.org/docs/rules/block-spacing
    "block-spacing": [2, "always"],
    // Enforce Brace Style
    // http://eslint.org/docs/rules/brace-style
    "brace-style": [2, "1tbs", {
      "allowSingleLine": false,
    }],
    // Require camelCase, except for property names
    // http://eslint.org/docs/rules/camelcase
    "camelcase": [2, {
      "properties": "never",
    }],
    // Enforce spacing around commas
    // http://eslint.org/docs/rules/comma-spacing
    "comma-spacing": [2, {
      "before": false,
      "after": true,
    }],
    // Enforce Comma Style
    // http://eslint.org/docs/rules/comma-style
    "comma-style": [2, "last"],
    // Disallow spaces inside of computed properties
    // http://eslint.org/docs/rules/computed-property-spacing
    "computed-property-spacing": [2, "never"],
    // Require Consistent this9
    // http://eslint.org/docs/rules/consistent-this
    "consistent-this": [2, "self"],
    // Require files to end with single newline
    // http://eslint.org/docs/rules/eol-last
    "eol-last": 2,
    // Require Names for Function Expressions
    // http://eslint.org/docs/rules/func-names
    "func-names": 1,
    // Enforce minimum and maximum length for identifiers
    // http://eslint.org/docs/rules/id-length
    "id-length": [2, {
      "min": 2,
      "exceptions": ["i"],
    }],
    // Enforce Indentation
    // http://eslint.org/docs/rules/indent
    "indent": [2, 2, {
      "SwitchCase": 1,
    }],
    // Enforce Property Spacing
    // http://eslint.org/docs/rules/key-spacing
    "key-spacing": [2, {
      "beforeColon": false,
      "afterColon": true,
    }],
    // Enforce Maximum Depth of Nested Callbacks
    // http://eslint.org/docs/rules/max-nested-callbacks
    "max-nested-callbacks": [2, 4],
    // Require Constructors to Use Initial Caps
    // http://eslint.org/docs/rules/new-cap
    "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false,
    }],
    // Require Parens for Constructors
    // http://eslint.org/docs/rules/new-parens
    "new-parens": 2,
    // Disallow if as the Only Statement in an else Block
    // http://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": 2,
    // Disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    "no-mixed-spaces-and-tabs": 2,
    // Disallow multiple blank lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": [2, {
      "max": 2,
    }],
    // Disallow Nested Ternaries
    // http://eslint.org/docs/rules/no-nested-ternary
    "no-nested-ternary": 2,
    // Disallow the use of the Object constructor
    // http://eslint.org/docs/rules/no-new-object
    "no-new-object": 2,
    // Disallow Spaces in Function Calls
    // http://eslint.org/docs/rules/no-spaced-func
    "no-spaced-func": 2,
    // Disallow trailing spaces at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    "no-trailing-spaces": 2,
    // Disallow conditional expressions that can be expressed with simpler constructs
    // http://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": 2,
    // Disallow or enforce spaces inside of curly braces in objects
    // http://eslint.org/docs/rules/object-curly-spacing
    "object-curly-spacing": [2, "always"],
    // Enforce Operator Assignment Shorthand
    // http://eslint.org/docs/rules/operator-assignment
    "operator-assignment": [2, "always"],
    // Enforce Operator Linebreak
    // http://eslint.org/docs/rules/operator-linebreak
    "operator-linebreak": [2, "after"],
    // Enforce padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    "padded-blocks": [2, "never"],
    // Enforce Quoting Style for Property Names
    // http://eslint.org/docs/rules/quote-props
    "quote-props": [2, "as-needed"],
    // Enforce Quote Style
    // http://eslint.org/docs/rules/quotes
    "quotes": [2, "single", "avoid-escape"],
    // Enforce spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    "semi-spacing": [2, {
      "before": false,
      "after": true,
    }],
    // Enforce Semicolons
    // http://eslint.org/docs/rules/semi
    "semi": [2, "always"],
    // Require a space after keywords
    // http://eslint.org/docs/rules/space-after-keywords
    "space-after-keywords": 2,
    // Require a space before keywords
    // http://eslint.org/docs/rules/space-before-keywords
    "space-before-keywords": [2, "always"],
    // Require Space Before Blocks
    // http://eslint.org/docs/rules/space-before-blocks
    "space-before-blocks": [2, "always"],
    // Disallow a space before function parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": [2, "never"],
    // Disallow spaces inside of parentheses
    // http://eslint.org/docs/rules/space-in-parens
    "space-in-parens": [2, "never"],
    // Require Spaces Around Infix Operators
    // http://eslint.org/docs/rules/space-infix-ops
    "space-infix-ops": 2,
    // Require spaces following return, throw, and case
    // http://eslint.org/docs/rules/space-return-throw-case
    "space-return-throw-case": 2,
    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": [1, {
      "words": true,
      "nonwords": false,
    }],
  },
};
