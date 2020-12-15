const htmlPlugin = require("html-webpack-plugin");
const resource = require("./resource");
const routerObj = require("./router");

const htmlWebpackPlugins = [];
routerObj.router.forEach(item => {
  htmlWebpackPlugins.push(
    new htmlPlugin({
      filename: item.filename, //打包后的文件名
      minify: false,
      chunks: item.chunks, //每个html只引入对应的js和css
      inject: true,
      hash: true, //避免缓存js。
      template: item.template
    })
  );
});

module.exports = {
  htmlWebpackPlugins,
  entry: resource.entry
};
