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
    // 'compat',
    // 'deprecate',
    // 'import',
    // 'jsx-a11y',
    // 'react',
    // 'xss',
    // jest
    // unicorn?
    // array-func
    // immutable? fp? pretty restrictive
    // filenames
    // disable rules that conflict with prettier
  ],

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    require.resolve('./rules/eslint/index.js'),
    // 'prettier/react',
    // 'plugin:compat/recommended',
    // 'plugin:eslint-comments/recommended',
    // 'plugin:import/errors',
    // 'plugin:jsx-a11y/recommended',
    // 'plugin:react/recommended',

    'prettier',
  ],
};
