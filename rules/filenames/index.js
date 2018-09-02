module.exports = {
  plugins: ['filenames'],
  rules: {
    // File/folder names must use kebab case.
    'filenames/match-regex': [2, '^([a-z0-9]+)([^A-Z][a-z0-9]+)*$'],

    // Exported items can be camel or pascal case.
    'filenames/match-exported': [2, 'camel', 'pascal'],

    // Allow index.* files.
    'filenames/no-index': 0,
  },
};
