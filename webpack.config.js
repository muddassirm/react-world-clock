const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const copyWebpackPlugin = new CopyWebpackPlugin([
  {from:'src/css',to:'css'}
])

module.exports = {  
  module: {     
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlWebpackPlugin,copyWebpackPlugin],
  output: {
    path: path.build,
    filename: "[name].[chunkhash].js",
  }
};