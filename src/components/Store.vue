<template>
<div class="prueba">
  <h4>Store</h4>
  <input type="number" v-model="cont">


</div>   

</template>

<script>

import {ref, computed} from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'Store',
    setup(){
		console.log(useStore().state)
	let cont=computed(()=>{
		useStore().state.contador
	})

    return{cont
    }
}
   
}
   
</script>

<style lang="scss" scoped>

  
          
</style>