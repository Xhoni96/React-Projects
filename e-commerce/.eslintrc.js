module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier", // this also tells eslint not to mess with prettier formatting style
    "airbnb/hooks",
    "plugin:react/jsx-runtime", // disables error for "React must be in scope when using jsx "
  ],
  // "import/no-extraneous-dependencies": ["error", { devDependencies: false }], // disables 'import/no-extraneous-dependencies in vite.config.js'
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
  },
};
