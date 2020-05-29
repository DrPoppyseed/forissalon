const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');


module.exports = {
  entry: [
    './src/js/index.js',
    './src/sass/style.scss',
    './src/sass/aboutus.scss',
    './src/sass/chat.scss',
    './src/sass/company.scss',
    './src/sass/events.scss',
    './src/sass/footer.scss',
    './src/sass/header.scss',
    './src/sass/interview.scss',
    './src/sass/match.scss',
    './src/sass/measures.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: 'all',
      }),
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true,
          discardComments: {
            removeAll: true
          }
        }
      })
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8081,
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutus.html',
      template: './src/aboutus.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'chat.html',
      template: './src/chat.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'company.html',
      template: './src/company.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'events.html',
      template: './src/events.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'footer.html',
      template: './src/footer.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'header.html',
      template: './src/header.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'interview.html',
      template: './src/interview.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'match.html',
      template: './src/match.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'measures.html',
      template: './src/measures.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      template: "./src/sass/style.scss"
    }),
    new MiniCssExtractPlugin({
      filename: "css/aboutus.css",
      template: "./src/sass/aboutus.scss"
    }),
    new MiniCssExtractPlugin({
      filename: "css/chat.css",
      template: "./src/sass/chat.scss"
    }),
    new MiniCssExtractPlugin({
      filename: "css/company.css",
      template: "./src/sass/company.scss"
    }),
    new MiniCssExtractPlugin({
      filename: "css/events.css",
      template: "./src/sass/events.scss"
    }),
    new MiniCssExtractPlugin({
      filename: "css/footer.css",
      template: "./src/sass/footer.scss"
    }),
    new MiniCssExtractPlugin({
      filename: "css/header.css",
      template: "./src/sass/header.scss"
    }),
    new MiniCssExtractPlugin({
      filename: "css/interview.css",
      template: "./src/sass/interview.scss"
    }),
    new MiniCssExtractPlugin({
      filename: "css/match.css",
      template: "./src/sass/match.scss"
    }),
    new MiniCssExtractPlugin({
      filename: "css/measures.css",
      template: "./src/sass/measures.scss"
    }),
    new CompressionPlugin({
      test: /\.(js|css)/
    }),
    new UglifyJsPlugin({}),
    new JavaScriptObfuscator ({
      rotateUnicodeArray: true
    }, ['./src/js/index.js'])
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{
            loader: 'file-loader',
            options: {
              name: '../dist/css/[name].css'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
};