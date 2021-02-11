<template>
<!--   para usar un componente hay que llamarlo aquí como etiqueta html-->
    <PrimeraPagina/>
  
     <Marciano mensaje="¿Te doy una vuelta?"/>

</template>

<script>
// @ significa la ruta hasta la carpeta src
import Reactividad from '@/components/Reactividad.vue'
import Marciano from '@/components/Marciano.vue'
import PrimeraPagina from '@/components/PrimeraPagina.vue'
export default {
  name: 'Home',
  components: {
    /* registrarlo aquí*/
   Marciano,
   PrimeraPagina,
   Reactividad

  }
   /* aquí se ponen los metodos en methods, se crean las variables en data que use mi componente, */
}
</script>
<style lang="scss" scoped>

</style>
