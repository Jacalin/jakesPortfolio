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
    home: './src/js/main.js',
    about:'./src/js/about.js',
    portfolio:'./src/js/portfolio.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'), // resolve method gives absolute path
    filename: '[name].bundle.js',
    //publicPath:'/jakesPortfolio/' // specifies where assets are to be found, by default it's just /
  },
  devServer: {
    // inline:true,
    port: 8000
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
          use:['css-loader','postcss-loader','sass-loader']
        })
      },
      {
        test:/\.html$/,
        use:['html-loader']
      },
      {
        test:/\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[name].[ext]', //by default file name will be randomly assigned
              outputPath:'img/', // by default it would be inside the dist
              //publicPath:'img/'
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
      template: 'src/index.html',
      chunks:['home']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/about.html',
      chunks:['about']
    }),
    new HtmlWebpackPlugin({
      filename: 'portfolio.html',
      template: 'src/portfolio.html',
      chunks:['portfolio']
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
