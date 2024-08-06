<template>
  <div>
    <h1>Databases</h1>
    <ul>
      <li v-for="db in databases" :key="db.name">{{ db.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DatabaseService",
  data() {
    return {
      databases: [],
    };
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:3000/databases");
      this.databases = response.data;
    } catch (error) {
      console.error("Error fetching databases:", error);
    }
  },
};
</script>

<style scoped>
/* Adicione estilos se necessário */
</style>
