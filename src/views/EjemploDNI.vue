<template>

   <div class="text">
    <h1>OS MUESTRO EL COMPONENTE DNI </h1>
    <p>
     <DNI/>
    </p>
  <h1>OS MUESTRO EL COMPONENTE TELÉFONO </h1>
    <p>
      <Validaciones Datoform="telefono" Regex="^(\+34|0034|34)?[67]\d{8}$"/>
    </p>
  </div>

</template>

<script>
import DNI from '@/components/DNI'
import Validaciones from '@/components/Validaciones'
export default {
  
  components: {
    DNI,
    Validaciones
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

      h1 {
        color:blueviolet;
          }


</style>
