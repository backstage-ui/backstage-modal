var webpack = require('webpack');

module.exports = {
  entry: [
    './demo/demo.js'
  ],
  output: {
    filename: './demo/bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './'
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
