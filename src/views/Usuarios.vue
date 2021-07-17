<template>
  <div>
      <TheHeader/>
      <h1 class="mb-5">Lista de Usuarios</h1>
      <TarjetasUsers :proptest="valor" />
      <Modal @refresco="refrescar" />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TarjetasUsers from '../components/TarjetasUsers.vue';
import Modal from '../components/Modal.vue';
export default {
    name: 'Usuarios',
    components: {
        TheHeader,
        TarjetasUsers,
        Modal,
    },
    data(){
    return {
      valor: {},
    }
  },
  methods:{
    refrescar(valor) {
      this.valor = valor;
      // console.log('refrescando' + JSON.stringify(valor));
    }
  }
}
</script>

<style>

</style>