<template>
    <div class='prueba'>
    <h1>Ejercicio Prueba</h1>
    <p>{{consulta.saludo}}</p>
    <p>{{consulta.respuesta}}</p>

    NOMBRE: <input v-model="nombre" placeholder="nombre">
    APELLIDO: <input v-model="apellido" placeholder="apellido">
    <button @click="enviar">Enviar</button>
    </div>
   
   
</template>

<script>
import {reactive, ref} from 'vue'
export default {
    name: 'Prueba',
       props: {
      
 
    },

    setup(){
      let consulta=reactive({})
      let nombre=ref('')
      let apellido=ref('')




       fetch('http://localhost:8081/api/welcome')
            .then(resp=>resp.json())
            .then(datos=>consulta.saludo=datos)
    
        function enviar(){
  
        fetch('http://localhost:8081/api/nuevo',{
            method:'POST',
            body: JSON.stringify({
                dato1:nombre.value,
                dato2:apellido.value
                }),
            headers:{'Content-type':'application/json'}
            
        })
            .then(resp=>resp.json())
            .then(datos=>consulta.respuesta=datos)
      
        }

     

        return{consulta, nombre, apellido, enviar}  

    }

}
</script>

<style lang="scss" scoped>

</style>