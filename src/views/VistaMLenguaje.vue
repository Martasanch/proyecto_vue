<template>

  <div class="formulario">
   <div class="input"> 
     <MultiLenguaje/>
    </div>
   
    
    
  </div>

</template>

<script>
import MultiLenguaje from '@/components/MultiLenguaje'

export default {
  
  components: {
   MultiLenguaje
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
