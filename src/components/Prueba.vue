<template>
    <div class='prueba'>
    <h1>Ejercicio Prueba</h1>
    <p>{{consulta.saludo}}</p>
    <p>{{consulta.respuesta}}</p>

    NOMBRE: <input v-model="nombre" placeholder="nombre">
    APELLIDO: <input v-model="apellido" placeholder="apellido">
    <button @click="enviar">Enviar</button>
    </div>
   
     <table class='tabla'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Eliminar</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(usu,i) in ArrayUsuarios" :key="i">
                <td>{{usu.nombre}}</td>
                <td>{{usu.apellido}}</td>
                <td><button class="btn btn-danger" @click="eliminar(usu._id)">Eliminar</button></td>
            </tr>
        </tbody>
    
    </table>



</template>

<script>
import {reactive, ref, onMounted} from 'vue'
export default {
    name: 'Prueba',
       props: {
      
 
    },

    setup(){
      let consulta=reactive({})
      let nombre=ref('')
      let apellido=ref('')
      let ArrayUsuarios=reactive([])


fetch('http://localhost:8081/api/welcome')
            .then(resp=>resp.json())
            .then(datos=>consulta.saludo=datos)


onMounted(()=>{
    listar()

})

//Mostrar
function listar(){
             fetch('http://localhost:8081/api/listar')
         .then(resp=>resp.json())
            .then(datos=>{
            ArrayUsuarios.splice(0)
            datos.forEach(usuario => {
                ArrayUsuarios.push(usuario)
            })
            })
      
}


//Eliminar
function eliminar(idSeleccionado){
          fetch('http://localhost:8081/api/eliminar',{
            method:'POST',
            body: JSON.stringify({
               id: idSeleccionado
                }),
            headers:{'Content-type':'application/json'}
            
        }).then(resp=>resp.json())
        .then(datos=>listar())
}

//Guardar    
function enviar(){
  
         fetch('http://localhost:8081/api/guardar',{
            method:'POST',
            body: JSON.stringify({
                nombre:nombre.value,
                apellido:apellido.value
                }),
            headers:{'Content-type':'application/json'}
        })
            .then(resp=>resp.json())
            .then(datos=>consulta.respuesta=datos)
              .then(datos=>listar())
  
        }
  
        return{consulta, nombre, apellido, enviar, ArrayUsuarios, eliminar}  

    }

}
</script>

<style lang="scss" scoped>

</style>