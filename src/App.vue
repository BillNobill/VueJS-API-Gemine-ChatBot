<template>
  <div id="app">
    <header>
      <nav>
        <div>
          <img
            :src="require('@/assets/img/Porsche-Logo.png')"
            alt="Porsche Logo"
            style="width: 30px"
          />
        </div>
        <button @click="toggleMenu" class="hamburger-button">
          <span class="hamburger-icon"></span>
          <span class="hamburger-icon"></span>
          <span class="hamburger-icon"></span>
        </button>
        <ul v-if="isMenuOpen" class="dropdown-menu">
          <li><RouterLink to="/">Início</RouterLink></li>
          <li><RouterLink to="/vendas">Tabela Vendas</RouterLink></li>
          <li><RouterLink to="/imagens">Imagens Iniciais</RouterLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isMenuOpen,
      toggleMenu,
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap");

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  background-color: #ddd;
  padding: 10px 0;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  max-width: 1200px;
  margin: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.porsche-logo {
  width: 40px; /* Ajuste conforme necessário */
  height: auto;
  margin-right: 10px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}

.hamburger-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.hamburger-icon {
  width: 25px;
  height: 3px;
  border-radius: 100px;
  background-color: #fff;
  margin: 3px 0;
  transition: background-color 0.3s;
}

.dropdown-menu {
  position: absolute;
  top: 60px;
  right: 15%;
  background-color: #ddd;
  border-radius: 5px;
  list-style: none;
  padding: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu li a {
  color: #fff;
  padding: 10px 15px;
  font-size: 15px;
  display: block;
  text-decoration: none;
  transition: background-color 0.3s, border-radius 0.3s;
}

.dropdown-menu li a:hover {
  background-color: #555;
  border-radius: 5px;
}

@media (max-width: 800px) {
  header {
    width: 92%;
  }

  .dropdown-menu {
    right: 4%;
  }
}
</style>
