<template>

    <table class='table'>
        <thead>
            <tr>
                <th>Concepto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(dato,i) in Arraydatos" :key="i">
                <td>{{dato.concepto}}</td>
                <td>{{dato.precio}}</td>
                <td>{{dato.cantidad}}</td>
                <td>{{subtotal(dato.precio,dato.cantidad)}}</td>
            </tr>
        </tbody>
    
    </table>
   
</template>

<script>
import {ref, reactive} from 'vue'
export default {
    name: 'Tabla',
    props:{},
   
    setup(){//api 3.0
    let Arraydatos=reactive([

        {concepto:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
        {concepto:'Camiseta básica chico',cantidad:4,precio:6.99},
        {concepto:'Pijama unisex',cantidad:1,precio:12.50},
        {concepto:'Deportivas Nike',cantidad:1,precio:80.00}

    ])     
    const subtotal=(cant,precio)=>cant*precio
   

        return { Arraydatos, subtotal}  
    }

}
</script>

<style lang="scss" scoped>

.table{
    display: inline-block;
    justify-content: center;
    border: 3px solid black;
        
        td{
            border: 1px dashed black;
            background-color: rgba(255, 0, 0, 0.265);
            padding:10px;
        }
        th{
            border: 1px dashed black;
            background-color:rgba(0, 128, 0, 0.217);
            padding:10px;
        }
        
}
</style>