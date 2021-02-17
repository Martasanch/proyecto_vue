<template>
<div class="prueba">
  <h4>Seleccione una provincia</h4>
<select v-model="provincia" @change="verSeleccionado">
    <option v-for="(provincia,i) in provincias" :key="i" :value="provincia.CODPROV">{{provincia.NOMBRE_PROVINCIA}}</option>
</select>

<select v-model="municipio" @change="verInformacion">
    <option v-for="(municipio,i) in municipios" :key="i" :value="municipio.COD_GEO">{{municipio.NOMBRE}}</option>
</select>
<div class="informacion" v-if="informacion.datos">
HUMEDAD: {{informacion.datos.humedad}}
</div>
</div>   

</template>

<script>

import {ref, reactive} from 'vue'
export default {
    name: 'Provincias',
    setup(){
	
    let provincias=reactive([])
	let provincia=ref("")
	let municipio=ref("")
	let municipios=reactive([])
	let informacion=reactive([])

	fetch("https://www.el-tiempo.net/api/json/v2/provincias")
	.then(res=>res.json())
	.then(datos=>{
		//console.log(datos) de todos los datos del objeto me interesa la propiedad provincias, que es un array
		datos.provincias.forEach(element => {provincias.push(element)
		
		});
		
	})

 function verSeleccionado(){
	// alert("El código de la provincia es "+provincia.value)
	fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios`)
	 .then(res=>res.json())
	 .then(datos=>{
		 //console.log(datos) 
		 municipios.splice(0)//para poner el array a cero y que no se acumulen
		 datos.municipios.forEach(element => {municipios.push(element)
	 })
	 })
 }


  function verInformacion(){
	 fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios/${municipio.value}`)
	 .then(res=>res.json())
	 .then(datos=>{
		console.log(datos) 
		informacion.datos=datos 
	 })
 }


  

    return{provincias, provincia, verSeleccionado, municipio, municipios, verInformacion, informacion
    }
}
   
}
   
</script>

<style lang="scss" scoped>

  
          
</style>