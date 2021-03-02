<template>
<div class="prueba"><!-- 
  <h4>hola {{nombre2}} {{apellidos2}}</h4> -->
    <h4>hola {{user.nombre}} {{user.apellidos}}</h4>
</div>   

</template>

<script>

import {ref, computed} from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'Userdata',
  /*   props:{
        nombre2:String,
        apellidos2:String
        }, */
    setup(){
        const store=useStore()
        let user=computed(()=>{
            return store.getters.getUser //lo traemos de index.js de store y lo metemos en user
        })
console.log(user)

       /*  let nombre=ref("")
        let apellidos=ref("") */

        
    return{/* nombre,apellidos */user
    }
}
   
}
   
</script>

<style lang="scss" scoped>

  
          
</style>