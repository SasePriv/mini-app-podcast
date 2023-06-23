module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    },
    babelOptions: {
      configFile: './babel.config.js'
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'max-len': 'off',
    'comma-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'default-case': 'off',
    'class-methods-use-this': 'off',
  },
};
