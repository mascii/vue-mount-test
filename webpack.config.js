const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: ['./src/mounter.js'],
  output: {
    path: __dirname,
    filename: './dist2/mounter.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
};
