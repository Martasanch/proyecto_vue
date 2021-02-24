<template>

   <div class="text">
    <h1>EL TIEMPO EN MUNICIPIOS DE ESPAÑA</h1>
    <p>
     <Provincias/>
 
    </p>
  </div>
     <div class="text">
    <h1>MUNICIPIOS CON FILTRO</h1>
    <p>
     <ProvinciasFiltro/>
 
    </p>
  </div>

</template>

<script>
import Provincias from '@/components/Provincias'
import ProvinciasFiltro from '../components/ProvinciasFiltro.vue'
export default {
  
  components: {
    Provincias,
    ProvinciasFiltro
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

     


</style>
