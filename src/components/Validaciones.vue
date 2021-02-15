<template>
    <div class='dato'>
        <label v-bind:class="{verde:color}">INTRO {{datoForm}}</label>
        <input @keyup="caracter">
    </div>
   
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'Validaciones',
    props: {
        Datoform:{

            type:String,
        },
        Reg:{
            type:String,
        }
      
    },

    setup(props){//api 3.0
    let datoForm=props.Datoform.toUpperCase()
    let datoRegex=new RegExp(props.Reg)
    
    let color=ref(false) //color es un valor buliano, que asignamos a la clase, para que sea activa o no 
    
    console.log(datoRegex)
    
        const caracter=(e)=>{
        let dato=e.target.value
        console.log(dato)
        if(datoRegex.test(dato)) {
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
    border: 2px solid white;
    border-radius:5px;
    background-color: red;
    padding: 5px;
}
.verde{
    border: 1px dashed black;
    background-color:green;
}
</style>