const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  watch: true,
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    firstEntryPointName: "./scripts/1.js",
    secondEntryPointName: "./scripts/2.js",
    thirdEntryPointName: "./scripts/3.js",
    cssEntryPointName: "./scripts/css.script.js",
    jsonEntryPointName: "./scripts/json.script.js",
    imageEntryPointName: "./scripts/image.script.js",
  },
  output: {
    filename: "[name][contenthash]bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|gif|jpg|ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
};
