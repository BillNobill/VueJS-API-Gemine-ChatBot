<template>
  <div id="images">
    <div id="container">
      <div id="box01">
        <div id="img1">
          <img class="porscheImage" src="../assets/img/porsche01.jpg" />
        </div>
      </div>
      <div id="box02">
        <div id="img2">
          <img class="porscheImage" src="../assets/img/porsche02.jpg" />
        </div>
        <div id="img3">
          <img class="porscheImage" src="../assets/img/porsche03.jpg" />
        </div>
      </div>
      <div id="box03">
        <div id="vid1">
          <iframe
            id="porscheVideo"
            src="https://www.youtube.com/embed/-GiOZ7jfZjc"
            title="The Perfect car doesn&#39;t exi..."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImagensIniciais",
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

.porscheImage {
  width: 100%;
}

#porscheVideo {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
#vid1 {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
}

#images {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

#container {
  display: flex;
  flex-direction: column;
  width: 70%;
}

#box01 {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
}

#box02 {
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

#box03 {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
}

#img2,
#img3 {
  width: 50%;
}

#img2 {
  margin-right: 10px;
}

#img3 {
  margin-left: 10px;
}

#img1,
#img2,
#img3 {
  margin-bottom: -4px;
}

@media (max-width: 800px) {
  #carSale {
    width: 80%;
  }

  #img2,
  #img3 {
    width: 100%;
  }

  #box01 {
    margin-bottom: 0;
  }

  #box02 {
    display: block;
    width: 100%;
    margin-top: 0;
  }

  #img2 {
    margin-top: 20px;
    margin-right: 0px;
  }

  #img3 {
    margin-top: 20px;
    margin-left: 0px;
  }
  #container {
    width: 92%;
  }
}
</style>
