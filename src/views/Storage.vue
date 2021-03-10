<template>

  <div class="storage">
  <h1>Aquí se puede logear cualquier usuario, aunque no esté en la base de datos</h1>
  <Store/>


</div>
</template>

<script>
import i18next from 'i18next'
import {useStore} from 'vuex'
import {computed, ref, reactive} from 'vue'
import Store from '@/components/Store'
export default {
  name: 'Storage',
  components: {
    Store,
 
  },
  setup(){
   
 
    const store=useStore()


    return{}
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  


</style>
