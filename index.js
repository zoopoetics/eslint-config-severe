module.exports = {
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  // http://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: 'babel-eslint',

  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  // http://eslint.org/docs/user-guide/configuring#configuring-plugins
  plugins: [
    /*
     * 'compat',
     * 'deprecate',
     * jest
     * unicorn?
     * array-func
     * immutable? fp? pretty restrictive
     * filenames
     */
  ],

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    /*
     * 'plugin:compat/recommended',
     * 'plugin:eslint-comments/recommended',
     */

    './rules/eslint/index.js',
    './rules/eslint-comments/index.js',
    './rules/import/index.js',
    './rules/jsx-a11y/index.js',
    './rules/react/index.js',

    // Prettier overrides must come last
    './rules/prettier/index.js',
  ].map(require.resolve),
};
