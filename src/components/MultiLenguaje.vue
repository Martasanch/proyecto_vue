<template>
    <div class='dni'>

        <label id="ilabel" class="rojo">INTRO DNI</label>
        <input @keypress="caracter">
       
 
    </div>
   
</template>

<script>
import {ref, reactive} from 'vue'
export default {
    name: 'MultiLenguaje',
   
    setup(){//api 3.0


        return{}  
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