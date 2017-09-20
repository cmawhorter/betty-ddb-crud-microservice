const IS_PROD = process.env.NODE_ENV === "production";
module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": IS_PROD ? "on" : "off",
    "no-unused-vars": ["error", { "args": "none" }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
  }
};
