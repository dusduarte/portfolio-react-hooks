/* eslint-disable quotes */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "quotes": ["error", "single"],
        "react/react-in-jsx-scope": "off",
        "no-multi-spaces": 2,
        "no-lone-blocks": 2,
        "no-spaced-func": 2,
        "no-with": 2,
        "semi-spacing": [2, {"before": false, "after": true}],
        "comma-spacing": 2,
        "camelcase": 2,
    }
};
