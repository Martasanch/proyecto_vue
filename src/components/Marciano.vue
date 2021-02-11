<template>

   <div class="text">
     <h2>
     {{mensajeMay}}
    </h2>
    <img src="@/assets/marciano.jpg">
    <h2>
     Fuerza Actual: {{fuerzaActual}}
    </h2>
    
    <button @click="cabrear">Cabrear al Marciano</button>
  </div>

</template>

<script>

export default {
  name: 'Marciano',
  props: {
    mensaje:{
      type:String,
    },
    fuerza:{ //la etiqueta de mi componente ahora acepta un atributo numerico que se llama fuerza
      type: Number,
      default: 10,
      required: true,
    },
  },

//Option API (vue 2)  ,
  data() {
   return{
     fuerzaActual:this.fuerza,
     mensajeMay: this.mensaje.toUpperCase()
   }
    },
  methods:{
    cabrear(){
      this.fuerzaActual++
    }
  }
}
</script>

<style scoped lang="scss">

  h2 {
    color:blueviolet;
    }
  button{
    background-color: rgb(14, 186, 14);
    padding: 20px;
    border-radius: 20px;
    color: white;
   
  }



</style>
