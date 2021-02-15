<template>
<div class="formulario">
<div v-if="autentificar" class="acceder">
   <div class="input"> 
     <Validaciones id="usuario" Datoform="Username" Reg=".+"/>
    </div>
    <div  class="input">
      <Validaciones id="contrasenia" Datoform="Password" Reg=".+"/>
    </div>
    <button class="btn" @click="login">Entrar</button>
</div>   

<div v-else class="usuarioIn">  
    <div class="usuario"> 
        
    <img src="@/assets/avatar.png" width="100">
    <h2>Bienvenida</h2>
    <h2 v-html="username"></h2>
    </div>
    <div>
        <a href="#" @click="unLogin">Desconectar</a>
    </div>
      
 </div> 
</div>

</template>

<script>
import Validaciones from './Validaciones'
import {ref} from 'vue'
export default {
    name: 'Login',
    components:{
        Validaciones
    },
    setup(){
    let username=ref()
    let autentificar=ref(true)
    const login=()=>{
        username.value=usuario.lastChild.value
        autentificar.value=false
        
    }
    const unLogin=()=>
    autentificar.value=true

    return{ autentificar, username, login, unLogin}

    }
   
}
   
</script>

<style lang="scss" scoped>

    .formulario {
        padding: 20px;
        border: 2px solid red;
        margin-left: auto;
        margin-right:auto;
        width: 40%;
        background-color: rgba(238, 130, 238, 0.177);

         .input{

          margin: 30px;
          text-align: left;

        }
         h2 {
            color:blueviolet;
          }
    
  }

   
  
          
</style>