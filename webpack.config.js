const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/src/app.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/dist')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx$/,
      exclude: /node_modules/
    }]
  }
};