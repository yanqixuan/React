let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const basePath = __dirname;

module.exports = {
  context:path.join(basePath,'src'),
  resolve:{
    extensions:['.js','.ts','.tsx']
  },
  // 可以设置多个入口文件
  entry:{
    app:'./index.tsx',
    appStyles:'./css/site.css',
    // 分离文件打包
    vendor:[
      'react',
      'react-dom'
    ],
    vendorStyles:[
      '../node_modules/bootstrap/dist/css/bootstrap.css'
    ]
  },
  output:{
    path:path.join(basePath,'dist'),
    filename:'[name].js'
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        exclude:/node_modules/,
        loader:'awesome-typescript-loader',
        options:{
          useBabel:true
        }
      },
      {
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,//压缩
          "css-loader"
        ]
      }
    ]
  },
  devServer:{
    port:8080
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'index.html',
      hash:true
    }),
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[id].css'
    })
  ]
}