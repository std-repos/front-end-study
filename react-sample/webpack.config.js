const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['babel-preset-env','react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  //새로 추가
  resolve: {
    extensions: ['.js','.css']
  },
  plugins: [
    new ExtractTextPlugin('../css/style.css')
  ],
  mode: 'development', //책에 없었음
};