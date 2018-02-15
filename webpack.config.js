const path = require('path');

const projectRoot = path.resolve(__dirname, './')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js'),
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
    ]
  }
};
