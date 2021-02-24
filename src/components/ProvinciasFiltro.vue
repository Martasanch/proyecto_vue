<template>
<div class="prueba">
  <h4>Seleccione una provincia</h4>
<select v-model="provincia" @change="verSeleccionado">
    <option v-for="(provincia,i) in provincias" :key="i" :value="provincia.CODPROV">{{provincia.NOMBRE_PROVINCIA}}</option>
</select>

<input type="text" v-model="inputFiltro" placeholder="Filtro">

<div class="filtrado">
	<div v-for="(item, indice) in municipiosFiltrados" :key="indice">
		<div class="elemento" @click="autocompletar(item.NOMBRE)">{{item.NOMBRE}}</div>

	</div>
</div>


<div class="informacion" v-if="informacion.datos">
	<ul><h4>Información meteorológica de la estación de {{informacion.datos.breadcrumb[3].name}}:</h4></ul>
<li>HUMEDAD: {{informacion.datos.humedad}}</li>
<li>TEMPERATURA MAX: {{informacion.datos.temperaturas.max}}</li>
<li>TEMPERATURA MIN: {{informacion.datos.temperaturas.min}}</li>
<li>VIENTO: {{informacion.datos.viento}}</li>
</div>
</div>   

</template>

<script>

import {ref, reactive, watch, computed} from 'vue'
export default {
    name: 'ProvinciasFiltro',
    setup(){
	
    let provincias=reactive([])
	let provincia=ref("")
	let municipio=ref("")
	let municipios=reactive([])
	let informacion=reactive([])
	let inputFiltro=ref("")

	let municipiosFiltrados=computed(()=>{
		return municipios.filter(m=>m.NOMBRE.indexOf(inputFiltro.value)!=-1)
	})

	function autocompletar(nombre){
		inputFiltro.value=nombre
	}



//Se piden los datos de provincias por fetch, la respuesta se pasa a json(), del objeto me quedo con provincias, que es un array y pusheo cada elemento dentro de mi array de provincias
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


  

    return{provincias, provincia, verSeleccionado, municipio, municipios, verInformacion, informacion, inputFiltro, municipiosFiltrados, autocompletar
    }
}
   
}
   
</script>

<style lang="scss" scoped>

	.elemento{
		background-color: blueviolet;
	}

  .informacion{
	margin-left: auto;
    margin-right:auto;
	margin-top: 20px;
	padding:20px;
	box-sizing: content-box;
	width: 30%;
	
	border: 1px solid black;
	display: block;
	text-align: left;
	background-color: rgba(0, 128, 0, 0.265);
}
          
</style>