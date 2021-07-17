<template>
  <div class="d-flex flex-wrap justify-content-around">
      <!-- tarjetas -->
      <div class="card position-relative mb-4" style="width: 19rem;" v-for="(usuario, index) in Usuarios" :key="index">
        <div class="position-absolute top-0 start-0 p-2">
          <div>
            <button  class="botonEditar border-0 bg-transparent text-white" @click="editar(usuario.id)" data-bs-toggle="modal" data-bs-target="#modalEdit">✏️</button>
          </div>
        </div>
        <div>
          <div class="position-absolute top-0 end-0 p-2">
            <button  class="botonBorrar border-0 bg-transparent text-dark" @click="borrar(usuario.id)">X</button>
          </div>
        </div>
        <img src="../assets/usuario.jpg" style="height: 15rem; width: auto;" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{usuario.nombre}}</h5>
          <h6>{{usuario.apodo}}</h6>
          <p class="card-text">{{usuario.Frase}}</p>
          <router-link :to="`/usuarios/${usuario.id}`" class="btn btn-primary">Ver Detalles</router-link>
        </div>
      </div>
      <!-- /tarjetas -->
  </div>
</template>

<script>
export default {
    name: 'TarjetasUsers',
    props: {
        proptest: {},
    },
    data(){
        return{
            Usuarios: [],
        };
    },
    methods: {
        async getUsuarios() {
            const data = await fetch('http://localhost:3000/usuarios');
            const info = await data.json();
            this.Usuarios = info;
        },

        borrar(id){
            alert('Borrando' + id);
            this.Usuarios = this.Usuarios.filter((usuario) => usuario.id != id)
        },
        

        editar(id){
            alert('Editando' + id);
        },

    },
    


    created(){
        this.getUsuarios();
    },
    watch: {
        proptest() {
            this.Usuarios = [...this.Usuarios, this.proptest];
        },
    }
}
</script>

<style>

</style>