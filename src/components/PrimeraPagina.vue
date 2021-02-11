<template>
<div class="tarjeta">
  <div class="image">
    <img src="@/assets/ovni.jpg" width="200" height="200"/>
  </div>
   <div class="text">
    <h1>HELLO, WORLD!</h1>
    <p>
     Acabo de llegar de Marte
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'PrimeraPagina',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tarjeta{ 
  display: flex;
  justify-content: center;
  border: solid 1px rgb(0, 255, 30);
  width: 70%;
  margin: auto;

    .text{
   width: 70%;
      h1 {
        color:blueviolet;
          }
    }
    .image {
      width: 30%;
    
    }

}
</style>
