
/**
 * Babel configurations
 */

module.exports = {
  plugins: [
    ['module-resolver', {
      alias: {
        test: './test'
      },
      root: [
        './src'
      ]
    }],
    ['@babel/plugin-proposal-class-properties']
  ],
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current'
      }
    }]
  ]
};
