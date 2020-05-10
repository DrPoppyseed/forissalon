const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: [
        './src/js/index.js', 
        './src/sass/style.scss', 
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                extractComments: 'all',
            }),
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
        new MiniCssExtractPlugin({
            filename: "css/style.css",
            template: "./src/sass/style.scss"
        }),
        new CompressionPlugin({
            test: /\.(js|css)/
        }),
        new UglifyJsPlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
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

