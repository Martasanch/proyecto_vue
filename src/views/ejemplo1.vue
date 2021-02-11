<template>

   <div class="text">
    <h1>ESTOY EN EL EJEMPLO 1, OS MUESTRO MI REACTIVIDAD </h1>
    <p>
     <Reactividad inc="2"/>
     <Reactividad inc="5"/>
     <Reactividad inc="10"/>
    </p>
  </div>

</template>

<script>
import Reactividad from '@/components/Reactividad'
export default {
  
  components: {
    Reactividad
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

      h1 {
        color:blueviolet;
          }


</style>
