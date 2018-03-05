const commaNewLine = {
  after: 'always-multi-line',
  before: 'never-multi-line'
}

const commaSpace = {
  after: 'always-single-line',
  before: 'never'
}

module.exports = {
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always', {
        except: [
          'blockless-after-same-name-blockless',
          'blockless-after-blockless',
          'first-nested'
        ]
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [ 'always', {
      'ignore': [ 'stylelint-commands', 'after-comment' ]
    }],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': 'never',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'font-weight-notation': 'named-where-possible',
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': commaNewLine.after,
    'function-comma-newline-before': commaNewLine.before,
    'function-comma-space-after': commaSpace.after,
    'function-comma-space-before': commaSpace.before,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'function-url-scheme-whitelist': [ 'https', 'data' ],
    'function-whitespace-after': 'always',
    'indentation': 2,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-line-length': [
      80, {
        ignore: ['comments']
      }
    ],
    'max-nesting-depth': 5,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-parentheses-space-inside': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': commaNewLine.after,
    'media-query-list-comma-newline-before': commaNewLine.before,
    'media-query-list-comma-space-after': commaSpace.after,
    'media-query-list-comma-space-before': commaSpace.before,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'always',
    'number-max-precision': 2,
    'number-no-trailing-zeros': true,
    'order/order': [
      'custom-properties',
      'at-variables',
      'declarations',
      'rules',
      'at-rules'
    ],
    'order/properties-alphabetical-order': true,
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [ 'always', {
      'except': [ 'first-nested', 'after-single-line-comment' ],
      'ignore': ['after-comment']
    }],
    'selector-attribute-brackets-space-inside': 'always',
    'selector-attribute-operator-space-after': 'always',
    'selector-attribute-operator-space-before': 'always',
    'selector-attribute-operator-whitelist': [ '=', '|=' ],
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': commaNewLine.after,
    'selector-list-comma-newline-before': commaNewLine.before,
    'selector-list-comma-space-after': commaSpace.after,
    'selector-list-comma-space-before': commaSpace.before,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-universal': [ 0, 1 ],
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'always',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'unit-whitelist': [
      [ 'rem', '%', 's', 'vh', 'vw' ], {
        'severity': 'warning'
      }
    ],
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': commaNewLine.after,
    'value-list-comma-newline-before': commaNewLine.before,
    'value-list-comma-space-after': commaSpace.after,
    'value-list-comma-space-before': commaSpace.before,
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': true
  }
}
