const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/assets/js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:9090' })
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loaders: [
          require.resolve('react-hot-loader'),
          require.resolve('babel-loader')
        ],
        // loader: 'react-hot-loader!babel-loader',
        // // query: {
        // //   presets: ['react', 'es2015'],
        // // },
      },
      // {
      //   test: /\.jsx?$/,
      //   loader: 'babel-loader',
      //   exclude: [/node_modules/, /public/],
      //   query: {
      //     plugins: ['react-hot-loader/babel', 'transform-runtime'],
      //     presets: ['es2015', 'stage-0', 'react'],
      //   },
      // },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.ttf$/, loader: 'file-loader' },
      { test: /\.woff$/, loader: 'file-loader' },
      { test: /\.eot$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'file-loader' },
      { test: /\.png$/, loader: 'url-loader' },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /(\.css|\.scss)$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'],
      }
    ],
  },
  postcss: [autoprefixer({ browsers: ['last 50 versions'] })],
};
