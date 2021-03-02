<template>
<div class="prueba">
  <h4>hola {{nombre}} {{apellidos}}</h4>
</div>   

</template>

<script>

import {ref, computed} from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'Userdata',
    setup(){
        let nombre=ref("")
        let apellidos=ref("")


    return{nombre,apellidos
    }
}
   
}
   
</script>

<style lang="scss" scoped>

  
          
</style>