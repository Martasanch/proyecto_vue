<template>

  <div class="home">
  <h1>MultiLenguaje</h1>


 <select v-model="currentLang">
    <option v-for="(l, i) in langs" :key="i">
      {{l}}
    </option>
</select> 
<h1>Clave 'hello': {{lang.hello}}</h1>
<h1>Clave 'bye': {{lang.bye}}</h1>
<button @click="comprobar" class="btn btn-primary">Cambiar</button>

</div>
</template>

<script>
import i18next from 'i18next'
import {useStore} from 'vuex'
import {computed, ref, reactive} from 'vue'
export default {
  name: 'VistaMLenguaje',
  components: {
 
  },
  setup(){
    console.log(i18next)
    let langs=reactive(i18next.languages)
    //console.log(langs)
    let currentLang=ref(i18next.language)
    let lang=computed(()=>{
      return i18next.getDataByLanguage(currentLang.value)
   
    })
 
   const store=useStore()
   function comprobar(){
    // console.log(store.state.userdata)
   }

    return{ currentLang, langs, lang, comprobar}
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  


</style>
