import routers from "./routers/index";
import App from "~/App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import "lib-flexible";

Vue.use(VueRouter);
Vue.use(Vant);

const router = new VueRouter({
  routes: routers
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
