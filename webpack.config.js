const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

dotenv.config();

const { NODE_ENV, PORT } = process.env

const 
      isProd = NODE_ENV === 'production',
      isDevelop = NODE_ENV === 'development'

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: isDevelop ? './src/index.js' : isProd ? './dist/[name].bundle.js' : './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: NODE_ENV === 'development'
            }
          },
          'css-loader',
        ],
        
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              publicPath: '../',
              hmr: NODE_ENV === 'development'
            }
          },
          'css-loader',
          'less-loader',
        ],
        
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    })
  ],
}