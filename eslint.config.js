/** @type {import('eslint').Linter.FlatConfig} */
const docusaurusPlugin = require('@docusaurus/eslint-plugin');

const config = [
  {
    files: ['**/*.js', '**/*.jsx'], // Adjust file patterns as needed
    languageOptions: {
      ecmaVersion: 2021, // Use the version that fits your project
      sourceType: 'module',
      globals: {
        // Define globals here
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        // Add other globals as needed
      },
    },
    plugins: {
      '@docusaurus': docusaurusPlugin,
    },
    rules: {
      // Your custom rules go here
    },
  },
];

module.exports = config;
