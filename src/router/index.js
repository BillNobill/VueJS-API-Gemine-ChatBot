import Vue from "vue";
import Router from "vue-router";
import Databases from "../components/Databases.vue"; // ajuste o caminho conforme necessário

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/databases",
      name: "Databases",
      component: Databases,
    },
    // outras rotas
  ],
});
