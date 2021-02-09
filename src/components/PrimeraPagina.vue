<template>
<div class="tarjeta">
  <div class="image">
    <img src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-930x487.jpg" width="200" height="200"/>
  </div>

   <div class="text">
    <h1>Para usar VUE hay que estudiar </h1>
    <p>
     Mi primera página VUE
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'PrimeraPagina',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tarjeta{ 
 text-align: left;
 width: 70%;
 margin: auto;

    .text{
    width: 80%;
    float:right;

      h1 {
        color:blueviolet;
          }
    }
    .image {
    width: 20%;
    float: left;
    }

}
</style>
