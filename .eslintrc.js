module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "node": true
  },
  "parser": "typescript-eslint-parser",
  "parserOptions": {
    'ecmaFeatures': {
      'jsx': true
    },
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "16.4",
      "flowVersion": "0.71"
    }
  },
  "plugins": [
    "flowtype",
    "jest",
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "plugin:jest/recommended",
    "plugin:react/all"
  ],
  "rules": {
    "array-bracket-spacing": ["error", "never"],
    "array-callback-return": "error",
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "callback-return": "error",
    "camelcase": "error",
    "comma-dangle": ["error", "never"],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-return": "error",
    "consistent-this": ["error", "that"],
    "constructor-super": "error",
    "curly": "error",
    "default-case": ["error", { "commentPattern": "^no default$" }],
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "func-names": "error",
    "func-style": ["error", "expression"],
    "generator-star-spacing": ["error", "after"],
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-blacklist": ["error", "callback"],
    "indent": ["error", 2, { "SwitchCase": 1 , "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }}],
    "init-declarations": ["error", "never", { "ignoreForLoopInit": true }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "linebreak-style": ["error","unix"],
    "max-depth": ["warn", 4],
    "max-statements-per-line": ["warn", { "max": 1 }],
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": ["warn", "always"],
    "newline-before-return": "warn",
    "newline-per-chained-call": ["warn", { "ignoreChainWithDepth": 4 }],
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-caller": "error",
    "no-catch-shadow": "error",
    "no-class-assign": "error",
    "no-confusing-arrow": "error",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-const-assign": "error",
    "no-continue": "error",
    "no-div-regex": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-parens": ["error", "all", { "returnAssign": false }],
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": ["error", {"skipRegExps": true}],
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "warn",
    "no-loop-func": "error",
    "no-magic-numbers": 0,
    "no-mixed-requires": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["warn", {"max": 1}],
    "no-native-reassign": "error",
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": ["warn", { "allowForLoopAfterthoughts": true }],
    "no-process-env": "error",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-restricted-globals": ["error", "event"],
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-spaced-func": "error",
    "no-sync": "warn",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": ["error", { "skipBlankLines": false }],
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": ["error", { "allow": [] }],
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": ["error", { "vars": "all", "args": "all", "caughtErrors": "all" }],
    "no-use-before-define": ["error", { "functions": true, "classes": true }],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "object-curly-newline": ["error", {"ObjectExpression": { "minProperties": 1 }, "ObjectPattern": "never"}],
    "object-curly-spacing": ["error", "never"],
    "object-property-newline": "error",
    "object-shorthand": ["error", "always"],
    "one-var": ["error", {"uninitialized": "always","initialized": "never"}],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "after"],
    "prefer-arrow-callback": ["error", { "allowNamedFunctions": true }],
    "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "consistent"],
    "quotes": ["error", "single", {"allowTemplateLiterals": true}],
    "quotes": ["error","single"],
    "radix": "error",
    "react/button-has-type": 0,
    "react/destructuring-assignment": 0,
    "react/forbid-component-props": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", "tsx"] }],
    "react/jsx-fragments": 0,
    "react/jsx-handler-names": 0,
    "react/jsx-indent" : [0, 2],
    "react/jsx-indent-props" : [2, 2],
    "react/jsx-max-props-per-line": [2, {
      maximum: 4
    }],
    "react/jsx-max-depth": 0,
    "react/jsx-no-bind": [2, {"allowArrowFunctions": true}],
    "react/jsx-no-literals": 2,
    "react/jsx-wrap-multilines": 0,
    "react/no-set-state": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "react/require-default-props": 0,
    "react/sort-comp": [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }],
    "require-yield": "error",
    "rest-spread-spacing": ["error", "always"],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "semi": ["error", "never"],
    "sort-imports": ["warn", {"ignoreCase": false,"ignoreMemberSort": false,"memberSyntaxSortOrder": ["none", "all", "multiple", "single"]}],
    "sort-keys": ["error", "asc", {"caseSensitive": true, "natural": true}],
    "sort-vars": ["warn", { "ignoreCase": true }],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "strict": 0,
    "template-curly-spacing": ["error", "never"],
    "unicode-bom": ["warn", "never"],
    "vars-on-top": "error",
    "wrap-iife": ["error", "inside"],
    "wrap-regex": "warn",
    "yield-star-spacing": ["error", "after"],
    "yoda": "error"
  }
};
