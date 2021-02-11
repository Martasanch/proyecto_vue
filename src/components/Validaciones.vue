<template>
    <div class='dato'>

        <label id="ilabel" class="rojo">INTRO</label>
        <input @keypress="caracter">
       
 
    </div>
   
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'Validaciones',
    props: {
        Datoform:{
            default:"dni",
            type:String,
        },
        Regex:{
            default: /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
            type:String,
        }
    },

    setup(props){//api 3.0
    let ExpReg=parseInt(props.Regex)
    

    const caracter=(e)=>{
        let dato=ref(e.target.value)
        console.log(dato)
        if(ExpReg.test(dato)){
            console.log("El dato es correcto.")
            
            ilabel.classList.remove('rojo')
            ilabel.classList.add('verde')
          return true
            
        }
    }

        return{ caracter}  
    }

}
</script>

<style lang="scss" scoped>


.rojo{
    border: 1px dashed black;
    background-color: red;
}
.verde{
    border: 1px dashed black;
    background-color:green;
}
</style>