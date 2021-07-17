<template>
  <div class="navi" id="nav">
     <router-link to="/">Home</router-link> |
      <router-link to="/usuarios">Usuarios</router-link> 
  <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return{

    }
  }
}
</script>


<style>
.navi{
  background-color: rgb(151, 237, 245);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #0dcaf0;
}
</style>
