<template>

  <div class="image">
    <img src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-930x487.jpg"/>
  </div>

   <div class="text">
    <h1>Para usar VUE hay que estudiar </h1>
    <p>
     Mi primera página VUE
    </p>
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
.text{
 display: flex;

      h1 {
        margin: 40px 0 0;
        color:blueviolet;
          }
}
.image {
  display: flex;

}


</style>
