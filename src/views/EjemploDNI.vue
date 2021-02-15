<template>

  <div class="formulario">
   <div class="input"> 
     <Validaciones Datoform="dni" Reg="^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$"/>
    </div>
    <div class="input">
      <Validaciones Datoform="telefono" Reg="^(\+34|0034|34)?[67]\d{8}$"/>
    </div> 
    
    
  </div>

</template>

<script>
import DNI from '@/components/DNI'
import Validaciones from '@/components/Validaciones'
export default {
  
  components: {
    DNI,
    Validaciones
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
