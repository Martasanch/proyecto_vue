<template>

   <div class="text">
    <h1>ESTOY EN EL EJEMPLO 1 </h1>
    <p>
     Mi primera página VUE
    </p>
  </div>

</template>

<script>
export default {
  name: 'ejemplo1',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

      h1 {
        color:blueviolet;
          }


</style>
