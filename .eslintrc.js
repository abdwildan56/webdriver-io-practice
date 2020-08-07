module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    mocha: true,
    amd: true,
  },
  globals: {
    $: true,
    $$: true,
    browser: true,
    expect: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    }],
    'arrow-parents': [0, 'as-needed'],
    'require-jsdoc': 'off',
    'brace-style': [0, 'allman', { allowSingleLine: true }],
    'max-len': ['error', { ignoreComments: true }],
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'global-require': 0,
    semi: ['error', 'always'],
    'array-callback-return': ['error', { allowImplicit: true }],
  },
};
