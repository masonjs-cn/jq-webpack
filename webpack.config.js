const path = require("path");
const HtmlRouter = require("./router/index");
const CopyPlugin = require("copy-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const optimizeCss = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除dist
const CompressionPlugin = require("compression-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  devServer: {
    contentBase: path.resolve("dist"),
    host: "localhost", //服务器的IP地址，这里先使用loaclhost地址
    compress: true, //服务端压缩是否开启
    port: "8888", //配置服务端口号
    stats: "errors-only",
    historyApiFallback: true,
    overlay: true
  },
  entry: HtmlRouter.entry,
  output: {
    path: path.resolve("dist"),
    filename: "js/[name].[hash:8].js"
  },
  plugins: [
    new ProgressBarPlugin(),
    new CleanWebpackPlugin(),
    new optimizeCss({
      cssProcessor: require("cssnano"), //引入cssnano配置压缩选项
      cssProcessorOptions: {
        discardComments: { removeAll: true }
      },
      canPrint: true //是否将插件信息打印到控制台
    }),
    new ExtractTextWebpackPlugin({
      filename: "css/[name].[hash:8].css", // 配置提取出来的css名称
      allChunks: true
    }),
    new CopyPlugin(
      [
        {
          from: path.resolve(__dirname, "./src/public/lib"),
          to: path.resolve(__dirname, "./dist/public/lib")
        },
        {
          from: path.resolve(__dirname, "./src/public/images"),
          to: path.resolve(__dirname, "./dist/public/images")
        }
      ],
      { ignore: [], copyUnmodified: true }
    ),
    new VueLoaderPlugin(),
    new CompressionPlugin()
  ].concat(HtmlRouter.htmlWebpackPlugins),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "src/pages/vue-template"),
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.(htm|html)$/i,
        loader: "html-withimg-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader"
            }
          ],
          publicPath: "../"
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "less-loader"
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              //当加载的图片小于limit时，会将图片编译成base64字符串的形式,
              //当图片大于这个limit，会用file-loader进行加载
              limit: 10000,
              //在webpack4.x必须显式的指定fallback备用方法，这里指定为file-loader
              fallback: require.resolve("file-loader"),
              encoding: "base64",
              outputPath: "images/",
              publichPath: "images/",
              name: "[name].[hash:8].[ext]",
              esModule: false //解决方法
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  externals: {
    vue: "Vue",
    "vue-router": "VueRouter"
  }
};