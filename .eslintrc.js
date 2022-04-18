module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["prettier", "eslint:recommended", "plugin:prettier/recommended", "plugin:react/recommended", "prettier", "plugin:react-hooks/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module",
    ecmaVersion: 'latest'
  },
  plugins: ["react-hooks", "jest", 'react', 'prettier'],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "prettier/prettier": ["error", {
      "endOfLine": "auto"
    }],
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": 0,
    semi: ['warn', 'always']
  },
  overrides: [{
    files: ["webpack.config.js"],
    rules: {
      "@typescript-eslint/no-var-requires": ["off"]
    }
  }]
};