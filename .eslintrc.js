module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true,
    'node': true
  },
  'globals': {
    'page': true,
    'browser': true,
    'context': true,
    'jestPuppeteer': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'useJSXTextNode': true
  },
  'settings': {
    'react': {
      'version': '16.5'
    }
  },
  'plugins': [
    'jest',
    'react',
    '@typescript-eslint'
  ],
  'extends': [
    '@nimiusrd',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/all'
  ],
  'rules': {
    '@typescript-eslint/class-name-casing': 0,
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/indent': ['error', 2, {'SwitchCase': 1, 'VariableDeclarator': {'var': 2, 'let': 2, 'const': 3}}],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: false
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false
      }
    }],
    'jest/consistent-test-it': ['error', {
      fn: 'test',
      withinDescribe: 'test'
    }],
    'jest/expect-expect': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-expect-resolves': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect-in-promise': 0,
    'jest/no-export': 'error',
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-component-props': 0,
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx', '.ts', 'tsx']}],
    'react/jsx-fragments': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-indent' : [0, 2],
    'react/jsx-indent-props' : [2, 2],
    'react/jsx-max-props-per-line': [2, {
      maximum: 4
    }],
    'react/jsx-max-depth': 0,
    'react/jsx-no-bind': [2, {'allowArrowFunctions': true}],
    'react/jsx-no-literals': 2,
    'react/jsx-wrap-multilines': 0,
    'react/no-set-state': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }]
  }
}
