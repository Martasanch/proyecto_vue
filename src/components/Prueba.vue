<template>
  <div class='acceso'>
       <Login2/>
  </div>
    <div class='prueba'> 
    <h1>Gestión de usuarios</h1>
    <p>{{consulta.saludo}}</p>
    <h4>Registrar nuevo usuario</h4>

   <input v-model="nombre" placeholder="nombre">
   <input v-model="apellido" placeholder="apellido">
   <input v-model="telefono" placeholder="telefono">
   <input v-model="email" placeholder="email">
   <input v-model="password" placeholder="password">
    <button class="btn btn-success" @click="enviar">Enviar</button>
    </div>
   
     <table class='tabla'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Eliminar</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(usu,i) in ArrayUsuarios" :key="i">
                <td>{{usu.nombre}}</td>
                <td>{{usu.apellido}}</td>
                <td>{{usu.telefono}}</td>
                <td>{{usu.email}}</td>
                <td><button class="btn btn-danger" @click="eliminar(usu._id)">Eliminar</button></td>
            </tr>
        </tbody>
    
    </table>



</template>

<script>

import Login2 from '@/components/Login2'
import {reactive, ref, onMounted} from 'vue'
export default {
    name: 'Prueba',
    components: {
    Login2,
    },

    setup(){
      let consulta=reactive({})
      let nombre=ref('')
      let apellido=ref('')
      let email=ref('')
      let password=ref('')
      let telefono=ref('')
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
                //console.log(datos)
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

//Guardar  //enviar los datos a la url del backend por fetch
function enviar(){
  
         fetch('http://localhost:8081/api/guardar',{
            method:'POST',
            body: JSON.stringify({
                nombre:nombre.value,
                apellido:apellido.value,
                telefono:telefono.value,
                email:email.value,
                password:password.value
                
                }),
            headers:{'Content-type':'application/json'}
        })
            .then(resp=>resp.json())
            .then(datos=>{consulta.respuesta=datos
            /* console.log(datos) */})
              .then(datos=>listar())
  
        }
  
        return{consulta, nombre, apellido, password, email, telefono, enviar, ArrayUsuarios, eliminar}  

    }

}
</script>

<style lang="scss" scoped>
.prueba{
    margin-bottom: 40px;
    display:inline-grid;
}
.tabla{
    margin:auto;
thead{
    border: 1px solid ;
    background-color: rgba(197, 178, 216, 0.285);
}
tbody{
    border: 1px solid ;
}
tr{
    border: 1px solid ;
}
td{
    border: 1px solid ;
}
}
</style>