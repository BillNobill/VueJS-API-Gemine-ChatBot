<template>
  <div>
    <h1>Porsche 911</h1>
    <h2>The perfect car doesn't exis...</h2>

    <!-- Carregamento condicional -->
    <div v-if="loadingImagens">
      <LoadingSpinner />
    </div>
    <div v-else>
      <component :is="ImagensIniciais" :key="componentKey" />
    </div>

    <div v-if="loadingTabela">
      <LoadingSpinner />
    </div>
    <div v-else>
      <component :is="TabelaVendas" :key="componentKey" />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from "./LoadingSpinner.vue";

export default {
  name: "PaginaPrincipal",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      loadingImagens: true,
      loadingTabela: true,
      ImagensIniciais: null,
      TabelaVendas: null,
    };
  },
  async created() {
    await this.loadComponents();
  },
  methods: {
    async loadComponents() {
      // Simula um atraso de 500ms
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Importa os componentes após o atraso
      this.ImagensIniciais = (
        await import(/* webpackChunkName: "imagens" */ "./ImagensIniciais.vue")
      ).default;
      this.TabelaVendas = (
        await import(/* webpackChunkName: "vendas" */ "./TabelaVendas.vue")
      ).default;

      // Atualiza o estado de carregamento
      this.loadingImagens = false;
      this.loadingTabela = false;
    },
  },
};
</script>

<style scoped>
/*--------------------------------------------------Fontes*/
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap");

/*--------------------------------------------------Configuração Padrão*/
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

ul,
ol,
li {
  list-style: none;
}

/*--------------------------------------------------Scroll bar*/
body::-webkit-scrollbar {
  width: 4px;
}

body::-webkit-scrollbar-track {
  background: rgb(226, 226, 226);
}

body::-webkit-scrollbar-thumb {
  background-color: #333333;
  border-radius: 100px;
  border: 10px solid #333333;
}

h1 {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 5vw;
  line-height: 4vh;
}

h2 {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 2.5vw;
  line-height: 0.5vh;
}

@media (min-width: 1920px) {
  #container {
    width: 1200px;
  }

  h1 {
    font-size: 7vw;
    line-height: 4vh;
  }

  h2 {
    font-size: 20px;
    line-height: 0.5vh;
  }
}

@media (max-width: 800px) {
  #container {
    width: 92%;
  }
}
</style>
