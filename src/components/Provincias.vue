<template>
<div class="prueba">
  <h4>Seleccione una provincia</h4>
<select v-model="elemSeleccionado" @change="verSeleccionado">
    <option v-for="(provincia,i) in provincias" :key="i">{{provincia.nm}}</option>
</select>
</div>   

</template>

<script>

import {ref} from 'vue'
export default {
    name: 'Provincias',
    setup(){
	let elemSeleccionado=ref("")

      let provincias=[
{
	"id": "04",
	"nm": "Almería"
}, {
	"id": "11",
	"nm": "Cádiz"
}, {
	"id": "14",
	"nm": "Córdoba"
}, {
	"id": "18",
	"nm": "Granada"
}, {
	"id": "21",
	"nm": "Huelva"
}, {
	"id": "23",
	"nm": "Jaén"
}, {
	"id": "29",
	"nm": "Málaga"
}, {
	"id": "41",
	"nm": "Sevilla"
}, {
	"id": "22",
	"nm": "Huesca"
}, {
	"id": "44",
	"nm": "Teruel"
}, {
	"id": "50",
	"nm": "Zaragoza"
}, {
	"id": "33",
	"nm": "Asturias"
}, {
	"id": "07",
	"nm": "Balears, Illes"
}, {
	"id": "35",
	"nm": "Palmas, Las"
}, {
	"id": "38",
	"nm": "Santa Cruz de Tenerife"
}, {
	"id": "39",
	"nm": "Cantabria"
}, {
	"id": "05",
	"nm": "Ávila"
}, {
	"id": "09",
	"nm": "Burgos"
}, {
	"id": "24",
	"nm": "León"
}, {
	"id": "34",
	"nm": "Palencia"
}, {
	"id": "37",
	"nm": "Salamanca"
}, {
	"id": "40",
	"nm": "Segovia"
}, {
	"id": "42",
	"nm": "Soria"
}, {
	"id": "47",
	"nm": "Valladolid"
}, {
	"id": "49",
	"nm": "Zamora"
}, {
	"id": "02",
	"nm": "Albacete"
}, {
	"id": "13",
	"nm": "Ciudad Real"
}, {
	"id": "16",
	"nm": "Cuenca"
}, {
	"id": "19",
	"nm": "Guadalajara"
}, {
	"id": "45",
	"nm": "Toledo"
}, {
	"id": "08",
	"nm": "Barcelona"
}, {
	"id": "17",
	"nm": "Girona"
}, {
	"id": "25",
	"nm": "Lleida"
}, {
	"id": "43",
	"nm": "Tarragona"
}, {
	"id": "03",
	"nm": "Alicante/Alacant"
}, {
	"id": "12",
	"nm": "Castellón/Castelló"
}, {
	"id": "46",
	"nm": "Valencia/València"
}, {
	"id": "06",
	"nm": "Badajoz"
}, {
	"id": "10",
	"nm": "Cáceres"
}, {
	"id": "15",
	"nm": "Coruña, A"
}, {
	"id": "27",
	"nm": "Lugo"
}, {
	"id": "32",
	"nm": "Ourense"
}, {
	"id": "36",
	"nm": "Pontevedra"
}, {
	"id": "28",
	"nm": "Madrid"
}, {
	"id": "30",
	"nm": "Murcia"
}, {
	"id": "31",
	"nm": "Navarra"
}, {
	"id": "01",
	"nm": "Araba/Álava"
}, {
	"id": "48",
	"nm": "Bizkaia"
}, {
	"id": "20",
	"nm": "Gipuzkoa"
}, {
	"id": "26",
	"nm": "Rioja, La"
}, {
	"id": "51",
	"nm": "Ceuta"
}, {
	"id": "52",
	"nm": "Melilla"
}]


 function verSeleccionado(){
	 alert(elemSeleccionado.value)
 }   

    return{provincias, elemSeleccionado, verSeleccionado
    }
}
   
}
   
</script>

<style lang="scss" scoped>

  
          
</style>