var path = require('path');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname,'dist'), // resolve method gives absolute path
    filename: 'bundle.js',
    //publicPath:'/dist' // specifies where assets are to be found, by default it's just /
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
              publicPath:'/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
