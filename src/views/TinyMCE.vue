<template>

    <div class="home">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10 col-md-8">
            <p style="max-width:800px">
              <b>EJERCICIO:</b> Implementar "https://www.tiny.cloud/docs/integrations/vue/#tinymcevuejsintegrationquickstartguide"
            </p>
            <editor
       api-key="no-api-key"
       :init="{
         height: 500,
         menubar: true,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
       v-model="texto"
     />
          </div>
          <div class="col-10 col-md-8">
            <h6>Esto es el resultado</h6>
            <div v-html="texto">
             
            </div>
          </div>
        </div>
      </div>
     
    </div>
 
</template>

<script>
//import from '@/components/'
import {ref} from 'vue'
import Editor from '@tinymce/tinymce-vue'

export default {
  name: 'TinyMCE',
  
  components: {
    Editor

  },
  setup(){
    let texto=ref("")
    


    return {texto}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 


</style>
