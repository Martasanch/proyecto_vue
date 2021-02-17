<template>
<div class="prueba">
  <h4>Seleccione un personaje</h4>
<select v-model="elemSeleccionado" @change="verSeleccionado">
    <option v-for="(personaje,i) in personajes" :key="i"  :value="personaje.imagen">{{personaje.nombre}}</option>
</select>
<img class="imagen" :src="elemSeleccionado">

</div>   

</template>

<script>

import {ref} from 'vue'
export default {
    name: 'Avatares',
    setup(){
	let elemSeleccionado=ref("")

    let personajes=[
{
	id: "01",
	nombre: "WonderWoman",
	imagen: "/img/wonderwoman.jpg"
	
}, {
	id: "02",
	nombre: "SuperMan",
	imagen: "/img/superman.jpg"
}, {
	id: "03",
	nombre:"Batman",
	imagen: "/img/batman.jpg"
}, {
	id: "04",
	nombre: "Frodo",
	imagen: "/img/frodo.jpg"
}]


 function verSeleccionado(){
	// console.log("Has cambiado el select a "+ elemSeleccionado.value)
 }   

    return{personajes, elemSeleccionado, verSeleccionado
    }
}
   
}
   
</script>

<style lang="scss" scoped>
.imagen{
	width: 100px;
	height: 100px;
	
}
  
          
</style>