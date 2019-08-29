module.exports = {
    // ref: https://eslint.org/docs/user-guide/configuring#specifying-environments
    "env": {
      "browser": true,
      "node": true
    },
    // ref: https://eslint.org/docs/user-guide/configuring#using-eslintrecommended
    "extends": "eslint:recommended",
    // ref: https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    "parserOptions": {
      "ecmaVersion": 6
    },
    // ref: https://eslint.org/docs/rules
    "rules": {
      // ref: https://eslint.org/docs/rules/indent
      "indent": [
        "error",
        2
      ],
      // ref: https://eslint.org/docs/rules/linebreak-style
      // "linebreak-style": [ "error", "windows" ],
      // Cross Platform Rule
      "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
      // Disabled Line Break Style
      // "linebreak-style": 0,
      // ref: https://eslint.org/docs/rules/quotes
      "quotes": [
        "error",
        "single"
      ],
      // ref: https://eslint.org/docs/rules/semi
      "semi": [
        "error",
        "never"
      ],
      // ref: https://eslint.org/docs/rules/no-console
      "no-console": "off"
    }
  }