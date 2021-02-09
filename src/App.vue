<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | <!-- componente creado para enlaces internos, sigo en el mismo index, pero voy mostrando diferentes componentes, es una SPA -->
    <router-link to="/about">About</router-link> |
    <router-link to="/ejemplo1">Ejemplo 1</router-link> |
    <a href="https://www.google.com/">Google</a><!-- componente creado para enlaces externos, puerza que se cambie de página -->
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
