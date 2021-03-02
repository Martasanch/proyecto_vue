<template>

  <div class="container articulos">
   <div class="carrito"> 
     <h1>Carrito</h1>
     <ul>
       <li v-for="(item,i) in articulos" :key="i">
     <Item 
     :titulo="item.nombre" 
     :descripcion="item.descripcion" 
     :imagen="item.imagen"
     :precio="item.precio"
     @cambioTotal="verCambio"
      />
       </li>
     </ul>
    <p>Total Global:<span> {{totalGlobal}}</span></p>
    </div>
   
    
    
  </div>

</template>

<script>
import Item from '@/components/Item.vue'
import {ref, onMounted, computed} from 'vue'
import {useStore} from 'vuex'
export default {
  name: "Carrito",
  components: {
  Item
  },
  setup(){
  const store=useStore()
  let totalGlobal=computed(()=>store.getters.getTotal)

let articulos=[
      {nombre:'cerillas',descripcion:'cerillas bonitas',imagen:'/img/avatar.png',precio:2.20},
      {nombre:'zapatos',descripcion:'zapatos feos',imagen:'/img/avatar.png',precio:2.20},
      {nombre:'martillo',descripcion:'herramienta',imagen:'img/avatar.png',precio:2.20}
    ]

    
  function verCambio(art, total){
  
        console.log(art)
let index=articulos.findIndex(articulo=>articulo.nombre==art)
      console.log(index)
    articulos[index].subtotal=total
     let acumula=0
      articulos.forEach(articulo=>{
        acumula+=articulo.subtotal
      })
      store.commit('setTotal',acumula.toFixed(2))
  
  }
  

    return{articulos, verCambio , totalGlobal}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

     .articulos {
        padding: 20px;
        border: 1px solid;
      
         margin-left: auto;
        margin-right:auto;
        width: 40%;
        background-color:cornsilk;


        .carrito{

          margin: 30px;
          text-align: center;
          li{
            list-style:none;
            border:1px solid;
         

        }
          }
     }


</style>
