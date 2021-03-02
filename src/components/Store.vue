<template>
<div class="store">
  <h4>Store</h4>
  <input  v-model="nombre" placeholder="nombre">
  <input v-model="apellidos" placeholder="apellidos">
  </div> 
  <div class="button">
  <button class="btn btn-primary" @click="login">Login</button>
   <button class="btn btn-danger" @click="logout">Logout</button>
    <button class="btn btn-warning" @click="aleatorio">Aleatorio</button>
  </div>
<div><Userdata/></div>


</template>

<script>

import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import Userdata from '@/components/Userdata'
export default {
    name: 'Store',
	components:{
		Userdata
	},
    setup(){
		let nombre=ref("")
		let apellidos=ref("")

		function login(){

		}
			function logout(){
			
		}

	function aleatorio(){
			
		}



	

    return{nombre,apellidos,login,logout,aleatorio
    }
}
   
}
   
</script>

<style lang="scss" scoped>

  
          
</style>