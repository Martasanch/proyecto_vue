<template>
    <div class='dni'>

        <label id="ilabel" class="rojo">INTRO DNI</label>
        <input @keypress="caracter">
       
 
    </div>
   
</template>

<script>
import {ref, reactive} from 'vue'
export default {
    name: 'DNI',
   
    setup(){//api 3.0
    let dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i

    const caracter=(e)=>{
        let dni=e.target.value
        console.log(dni)
        if(dniRegex.test(dni)){
            console.log("El dni es correcto.")
            
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