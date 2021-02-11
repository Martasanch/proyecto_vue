<template>

   <div class="formulario">
   <div class="input"> 
     <Login Dato="User" Valor="pepe"/>
    </div>
    <div class="input">
      <Login Dato="Password" Valor="1234"/>
    </div> 
    
    
  </div>

</template>

<script>

import Login from '@/components/Login'
export default {
  
  components: {
   Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

     .formulario {
        padding: 20px;
        border: 1px solid;
        color:white;
         margin-left: auto;
        margin-right:auto;
        width: 40%;
        background-color:cornsilk;


        .input{

          margin: 30px;
          text-align: left;

        }
          }


</style>
