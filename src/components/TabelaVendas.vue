<template>
  <div id="table">
    <table id="product-table">
      <thead>
        <tr>
          <th class="product-header" data-th="ITEM">Item</th>
          <th class="product-header" data-th="NOME PODUTO">Model Name</th>
          <th class="product-header" data-th="IMAGEM PRODUTO">Model Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="product-cell">1</td>
          <td class="product-cell">Porsche 911 Carrera</td>
          <td class="product-cell">
            <img id="carSale" src="../assets/img/porsche-thumbwhite.webp" />
          </td>
        </tr>
        <tr>
          <td class="product-cell">2</td>
          <td class="product-cell">Porsche 911 Turbo</td>
          <td class="product-cell">
            <img id="carSale" src="../assets/img/porsche-thumbwhite (1).webp" />
          </td>
        </tr>
        <tr>
          <td class="product-cell">3</td>
          <td class="product-cell">Porsche 911 RS</td>
          <td class="product-cell">
            <img id="carSale" src="../assets/img/porsche-thumbwhite (2).webp" />
          </td>
        </tr>
        <tr>
          <td class="product-cell">4</td>
          <td class="product-cell">Porsche 911 S/T</td>
          <td class="product-cell">
            <img id="carSale" src="../assets/img/porsche-thumbwhite (3).webp" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TabelaVendas",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
/*--------------------------------------------------Fontes*/
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap");

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

/*--------------------------------------------------Tabela*/
#table {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

#product-table {
  border-collapse: collapse;
  width: 70%;
}

.product-header,
.product-cell {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.product-header {
  position: relative;
  background-color: #f2f2f2;
}

.product-header::before {
  position: absolute;
  left: 0;
  width: 100%;
  padding: 8px;
  text-align: left;
  font-weight: bold;
}

#product-table,
#product-table thead,
#product-table tbody,
#product-table th,
#product-table td,
#product-table tr {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

@media (max-width: 800px) {
  #product-table,
  #product-table thead,
  #product-table tbody,
  #product-table th,
  #product-table td,
  #product-table tr {
    text-align: center;
    display: block;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  #product-table {
    width: 100%;
  }

  h1 {
    font-size: 7vw;
    line-height: 4vh;
  }

  h2 {
    font-size: 20px;
    line-height: 0.5vh;
  }

  #carSale {
    width: 80%;
  }

  .product-header,
  .product-cell {
    padding: 8px;
  }
}
</style>
