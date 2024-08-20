import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "paginainicial",
    component: () =>
      import(
        /* webpackChunkName: "paginainicial" */ "../components/PaginaInicial.vue"
      ),
  },
  {
    path: "/vendas",
    name: "vendas",
    component: () =>
      import(
        /* webpackChunkName: "vendas" */ "../components/TabelaVendas.vue"
      ),
  },
  {
    path: "/imagens",
    name: "imagens",
    component: () =>
      import(
        /* webpackChunkName: "imagens" */ "../components/ImagensIniciais.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
