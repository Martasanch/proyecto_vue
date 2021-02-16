<template>
   <div class="formulario">
   <div class="input"> 
     <Validaciones Id="Concepto" Datoform="Concepto" Reg=".+"/>
    </div>
    <div class="input">
      <Validaciones Id="Cantidad" Datoform="Cantidad" Reg="[0-9]"/>
    </div> 
    <div class="input">
      <Validaciones Id="Precio" Datoform="Precio" Reg="^[0-9]+([.][0-9]+)?$"/>
    </div> 
    <button @click="agregar">Añadir</button>
  </div>

    <table class='tabla'>
        <thead>
            <tr>
                <th>Concepto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(dato,i) in Arraydatos" :key="i">
                <td><input type="text" class="form-control" v-model="dato.concepto"></td>
                <td><input type="number" class="form-control" v-model="dato.precio"></td>
                <td><input type="number" class="form-control" v-model="dato.cantidad"></td>
                <td>{{subtotal(dato.precio,dato.cantidad)}}</td>
                <td><button class="btn btn-danger" @click="eliminar(i)">Eliminar</button></td>
            </tr>
            <tr class="total">
                
               <td colspan="5">Total: {{total}} </td>
            </tr>
        </tbody>
    
    </table>
    <div class=total>

    </div>
   
</template>

<script>
import Validaciones from './Validaciones'
import {ref, reactive, onMounted, watchEffect} from 'vue'
export default {
    name: 'Tabla',
    components:{
        Validaciones
    },
    props:{},
   
    setup(){//api 3.0
    

    let Arraydatos=reactive([
        {concepto:'Pantalones vaqueros chico',cantidad:2,precio:30.99},
        {concepto:'Camiseta básica chico',cantidad:4,precio:6.99},
        {concepto:'Pijama unisex',cantidad:1,precio:12.50},
        {concepto:'Deportivas Nike',cantidad:1,precio:80.00}
    ])     
    const subtotal=(cant,precio)=>cant*precio
    let total=ref(0)
    const calculaTotal=()=>{
        watchEffect(()=>
       { total.value=0
       Arraydatos.forEach(dato=>total.value+=dato.cantidad*dato.precio)
       })
    }
    const agregar=()=>{
         console.log(Concepto)
        let nuevo={
            concepto: Concepto.lastChild.value,
            cantidad: Cantidad.lastChild.value,
            precio: Precio.lastChild.value,
        }
        
        Arraydatos.push(nuevo)
        total.value=0
        Arraydatos.forEach(dato=>total.value+=dato.cantidad*dato.precio)

    }
    

    const eliminar=(item)=>{
        console.log(item)//es el i que le mando desde eliminar, que va variando según la posición en el array
    Arraydatos.splice(item, 1 );
    }


    onMounted(()=>calculaTotal())
    return { Arraydatos, subtotal, total, agregar, eliminar}  
    }

}
</script>

<style lang="scss" scoped>

.tabla{
    display: inline-block;
    justify-content: center;
    
        
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
        .total{
            text-align: right;
            
        }
        
}

    .formulario {
        padding: 10px;
        border: 1px solid black;
        margin-left: auto;
        margin-right:auto;
        width: 35%;
        background-color:rgba(238, 130, 238, 0.469);
        margin-bottom: 20px;


        .input{
          margin: 30px;
          text-align: left;

        }
    }  
</style>