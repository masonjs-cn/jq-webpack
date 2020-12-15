const router = [
  {
    name: "首页",
    filename: "index.html",
    chunks: ["index-css", "index-js"],
    template: "./src/pages/index/index.html",
  },
  {
    name: "活动",
    filename: "activity.html",
    chunks: ["activity-css", "activity-js"],
    template: "./src/pages/activity/index.html",
  },
  {
    name: "vue-template",
    filename: "template.html",
    chunks: ["babel-polyfill", "vue-template-js"],
    template: "./src/pages/vue-template/index.html",
  },
];

module.exports = {
  router,
};
