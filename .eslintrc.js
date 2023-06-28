module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
  ],
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
  plugins: ['jest', 'jam3'],
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
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/no-danger': 'off',
    'jam3/no-sanitizer-with-danger': [
      2,
      {
        wrapperName: ['sanitizer']
      }
    ]
  },
};
