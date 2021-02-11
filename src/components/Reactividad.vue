<template>
    <div class='reactividad'>
        <p>{{contador.titulo}}: {{contador.valor}}</p>
        <button @click="sumar">+</button>
        <button @click="restar">-</button>
    </div>
     <div class='incremento'>
        <p>el incremento de este componente es {{incremento}}</p>
    </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
    name: 'Reactividad',
    props: {
        inc:{
            type: Number,
            default:1,
            }
    },
    setup(props){//api 3.0

    //let contador=ref(0)  //uso ref para hacer contador una variable reactiva, en objetos se usa reactive
    let incremento=parseInt(props.inc)
    let contador=reactive({
        titulo: 'Contador',
        valor: 0,
    })
    const sumar=()=>{
        contador.valor+=incremento // con ref (no es objeto) se usa contador.valeu++, hay que usar vue xq ref convierte contador en un objeto
        console.log(contador)
    }
    const restar=()=>{
        contador.valor-=incremento //contador.value-- // con ref (no es objeto) se usa contador.value--
        console.log(contador)
    }
  
        return{
          contador,
          sumar,
          restar,
          incremento  
        }

    }

}
</script>

<style>
.reactividad{
    border: 1px dashed black;
}
</style>