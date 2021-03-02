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
<!-- <div><Userdata :nombre2="nombre" :apellidos2="apellidos"/></div> -->
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
	props:{

	},
    setup(){
		const store=useStore()
		let nombre=ref("")
		let apellidos=ref("")

		function login(){
			let user={
				nombre:nombre.value,
				apellidos: apellidos.value
			}
			store.commit('setUser',user)

		}
		function logout(){
			let user={}
			store.commit('setUser',user)
			
		}

		function aleatorio(){ //consulta a mongo
			store.dispatch('fetchUsers')
			
		}



	

    return{nombre,apellidos,login,logout,aleatorio
    }
}
   
}
   
</script>

<style lang="scss" scoped>

  
          
</style>