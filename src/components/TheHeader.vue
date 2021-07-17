<template>
  <div class="header mb-5">
       <!-- header -->
    <nav class="d-flex align-items-center justify-content-around navbar navbar-light bg-info text-white">
      <div class="container-fluid">
        <h1 class="navbar-brand text-white" href="#">USER LIST</h1>
        <button class="btn btn-info text-light" @click="crear" data-bs-toggle="modal" data-bs-target="#ventanaModalA">Agregar Usuario</button>
      </div>
    </nav>
    <!-- /header -->
  </div>
</template>

<script>
export default {
    name: 'TheHeader'
}
</script>

<style>

</style>