<template>
  <div class="loginbox2">
      <h2>Acceso usuario autorizado</h2>
       <div class="formulario">
           <input v-model="email" placeholder="email">
           <input v-model="password" placeholder="password">
           <button @click="login" class="btn btn-info">Login</button>
           <div>Usuario logueado: {{user.nombre}}</div>
       </div>
  </div>
  
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'Login2',
    components:{
       
    },
    setup(){
        const store=useStore()
        let user=computed(()=>{
            return store.getters.getUser
        })


        let email=ref('')
        let password=ref('')
        function login(){ 
            //hacemos una llamada a nuestro api de la carpeta backend
            alert("hola")
            fetch('http://localhost:8081/api/login',{
                method:'POST',
                body:JSON.stringify({
                    email:email.value,
                    password: password.value
                }),
                headers:{'Content-Type':'application/json'}
            }).then(resp=>resp.json())
            .then(user=>{
           console.log(user)
            if(user) store.commit('setUser',user) //inyecto a user de la base de datos del store los datos que me llegan del usuario por commit
            })


        }
        return{email, password, login, user}
    }
}
</script>

<style lang="scss" scoped>
.loginbox2{
    padding-bottom: 30px;
    .formulario {
        padding: 10px;
        border: 2px solid red;
        margin-left: auto;
        margin-right:auto;
        width: 30%;
        background-color: rgba(238, 130, 238, 0.177);
         display:inline-grid;

         input{

          margin: 10px;
          text-align: left;

        }
         h2 {
            color:blueviolet;
          }
   } 
  }
</style>