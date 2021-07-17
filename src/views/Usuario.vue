<template>
  <div>
      <h1>USUARIO: {{$route.params.id}}</h1>
      <div class="container mt-5 d-flex justify-content-center">
            <div class=" mb-3 " style="width: 18rem;">
                <img class="img-fluid" src="../assets/usuario.jpg" alt="">
                <p>NOMBRE: {{user.nombre}}</p>
                <p>APODO: {{user.apodo}}</p>
                <p>EDAD: {{user.edad}}</p>
                <p>TELEFONO: {{user.phone}}</p>
                <p>E-MAIL: {{user.email}}</p>
                <p>FRASE: {{user.Frase}}</p>
            </div>
      </div>
      <div style="height: 250px;"></div>
  </div>
  
</template>

<script>
export default {
    name: 'Usuario',
    data(){
        return {
            mensaje: 'hola',
            user: {},
        };
    },

    methods: {
        async getUser(){
            const data = await fetch(`http://localhost:3000/usuarios/${this.$route.params.id}`);
            const info = await data.json();
            this.user = info;
        }
    },

    created() {
        this.getUser();
    },
}
</script>

<style>

</style>