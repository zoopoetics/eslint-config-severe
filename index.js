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
     * 'import',
     * 'jsx-a11y',
     * 'xss',
     * jest
     * unicorn?
     * array-func
     * immutable? fp? pretty restrictive
     * filenames
     */
  ],

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    require.resolve('./rules/eslint/index.js'),
    require.resolve('./rules/jsx-a11y/index.js'),
    require.resolve('./rules/react/index.js'),
    /*
     * 'plugin:compat/recommended',
     * 'plugin:eslint-comments/recommended',
     * 'plugin:import/errors',
     */

    'prettier',
    'prettier/react',
  ],
};
