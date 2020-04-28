module.exports = {
  extends: "stylelint-config-standard",
  plugins: ["stylelint-scss"],
  rules: {
    "selector-nested-pattern": "^&",
    indentation: 2,
    "declaration-block-single-line-max-declarations": 1,
    "block-opening-brace-space-before": "always",
    "block-closing-brace-newline-after": "always",
    "declaration-colon-space-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "value-list-comma-space-after": "always-single-line",
    "number-leading-zero": "never",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "selector-no-qualifying-type": [
        true,
      {
        "ignore": ["attribute"]
      },
    ],
    "length-zero-no-unit": true,
    "no-descending-specificity": null,
    "no-eol-whitespace": null,
    "declaration-empty-line-before": null,
    "value-keyword-case": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "responsive",
          "variants",
          "screen",
          "use",
        ],
      },
    ],
  },
};
