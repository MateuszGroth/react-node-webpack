const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// import { getIfUtils, removeEmpty } from 'webpack-config-utils';
// const { ifProd, ifNotProd } = getIfUtils(env);
// ifProd('production', 'development'),

module.exports = env => ({
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: "2"
                }
              ],
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // After all CSS loaders we use plugin to do his work.
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader
          },
          {
            // This loader resolves url() and @imports inside CSS
            loader: "css-loader"
          },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: "postcss-loader"
          },
          {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            // Using file-loader for these files
            loader: "file-loader",

            // In options we can set different things like format
            // and directory to save
            options: {
              outputPath: "images"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      // to add the js script webpack created
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
});
