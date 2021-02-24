<template>
    <div class='item row'>
        <div class="col-2">
            <img :src="imagen">
        </div>
        <div class="col-10">
            <h3 v-html="titulo"></h3>
            <p v-text="descripcion"></p>
            <p v-text="precio"></p>
        
        Unidades:
        <input v-model="cantidad" type="number"/>
        </div>
       <div class="col-12"> Total: <span v-text="total"></span></div>
    </div>
   
   
</template>

<script>
import {ref, computed} from 'vue'
export default {
    name: 'Item',
       props: {
        imagen:{
            type:String,
        },
        titulo:String,
        descripcion: String,
        precio:Number
      
    },

    setup(props, context){
      
        let cantidad=ref(1)
        let total=computed(()=>{
            let resultado=(props.precio*cantidad.value).toFixed(2)
            context.emit('cambioTotal', resultado)
            console.log(resultado)
            return(resultado)
            })


        return{cantidad, total }  

    }

}
</script>

<style lang="scss" scoped>

  img{
    max-width: 100px;

          }

</style>