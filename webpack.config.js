var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: {
    main: './src/js/main.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'), // resolve method gives absolute path
    filename: 'bundle.js',
    //publicPath:'/jakesPortfolio/' // specifies where assets are to be found, by default it's just /
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use:['css-loader','sass-loader']
        })
      },
      {
        test:/\.ejs$/,
        use: [
          {
            loader: 'ejs-compiled-loader'
          }
        ]
      },
      {
        test:/\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[name].[ext]', //by default file name will be randomly assigned
              outputPath:'img/', // by default it would be inside the dist
              publicPath:'/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
    extractPlugin,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/pages/index.ejs',
      chunks:['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/pages/about.ejs',
      chunks:['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'portfolio.html',
      template: 'src/pages/portfolio.ejs',
      chunks:['main']
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
