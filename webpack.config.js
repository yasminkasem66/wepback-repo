const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  devServer: {
    // contentBase:path.resolve(__dirname, "./dist"),
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    compress: true,
    port: 3010,
    hot: true,
    devMiddleware: {
      index: 'filename.html',
    },
    allowedHosts: 'all',
    bonjour: {
      type: 'http',
    },

  },
};

// rules  its the rules to deal with files in the application  array of objects specified for a spicific thing
// use what we should use prepared before to deal with files
// [contenthash] every time generate a new file 
