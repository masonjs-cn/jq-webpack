export default [
  {
    path: "*",
    name: "报错",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/404/index.vue")
  },
  {
    path: "/",
    name: "主页",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/home/index.vue")
  }
];
