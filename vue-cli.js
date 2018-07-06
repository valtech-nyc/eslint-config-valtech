module.exports = {
  extends: [
    require.resolve('./index'),
    require.resolve('./vue')
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js')
      }
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx'
    ]
  },
  rules: {
    'one-var': 0,
    'vue/require-default-prop': 0,
    'vue/this-in-template': 0,
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }]
  },
  override: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, { 'baseIndent': 1 }]
      }
    }
  ]
};
