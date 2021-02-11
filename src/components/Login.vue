<template>
    <div class='Login'>
        <label v-bind:class="{verde:color}">INTRO {{datoForm}}</label>
        <input @keyup="caracter">
    </div>
   
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'Login',
    props: {
        Dato:{

            type:String,
        },
       
        Valor:{
            type:String,

        }
    },

    setup(props){//api 3.0
    let datoForm=props.Dato.toUpperCase()
    
    let datoValor=props.Valor
    let color=ref(false) //color es un valor buliano, que asignamos a la clase, para que sea activa o no 
    
    console.log(datoValor)
    
const caracter=(e)=>{
        let dato=e.target.value
        console.log(dato)
        if(datoValor==dato){
            console.log("El dato es correcto.")
            color.value= true
          
          return true
            
        } 
    }

       return{ caracter, datoForm, color} 
    }

}
</script>

<style lang="scss" scoped>


label{
    border: 1px dashed black;
    border-radius:50px;
    background-color: red;
    padding: 8px;
}
.verde{
    border: 1px dashed black;
    background-color:green;
}
</style>