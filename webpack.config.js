const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new htmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html"
});

const hotReplacementPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  plugins: [
    hotReplacementPlugin,
    htmlPlugin
  ]
};
