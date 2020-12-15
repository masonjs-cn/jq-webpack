/*
 *定义多个服务器账号 及 根据 SERVER_ID 导出当前环境服务器账号
 */
const SERVER_LIST = [
  {
    id: 0,
    name: "A-测试环境",
    host: "127.0.0.1", // ip
    url: "http://www.baidu.com",
    port: 22, // 端口
    username: "root", // 登录服务器的账号
    password: "", // 登录服务器的账号
    path: "" // 发布至静态服务器的项目路径
  }
];

module.exports = SERVER_LIST;
