
/**
 * Babel configurations
 */

module.exports = {
  plugins: [
    ['add-module-exports'],
    ['module-resolver', {
      alias: {
        test: './test'
      },
      root: [
        './src'
      ]
    }],
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-transform-runtime']
  ],
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: '4'
      }
    }]
  ]
};
