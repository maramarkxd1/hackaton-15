<template>
  <div>
      <!-- modal agregar -->
    <div class="modal fade" id="ventanaModalA" role="dialog" aria-labelledby="tituloVentana" aria-hidden="true" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="tituloVentana" class="modal-title">Agregar Usuario</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input class="form-control" type="text" id="URL" placeholder="Agregar nombre" v-model="NOMBRE">
            <input class="form-control" type="text" id="APODO" placeholder="Agregar apodo" v-model="APODO">
            <input class="form-control" type="number" id="EDAD" placeholder="Agregar edad" v-model="EDAD">
            <input class="form-control" type="tel" id="PHONE" placeholder="Agregar telefono" v-model="PHONE">
            <input class="form-control" type="email" id="EMAIL" placeholder="Agregar email" v-model="EMAIL">
            <textarea class="form-control" name="" id="LOREM" placeholder="Agregar frase" v-model="FRASE"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="crear()">Guardar Usuario</button>
          </div>
        </div>
      </div>
    </div>

    <!-- /modal agregar -->
  </div>
</template>

<script>
export default {
    name: 'Modal',
    data(){
        return{
            NOMBRE: '',
            APODO: '',
            EDAD: '',
            PHONE:'',
            EMAIL: '',
            FRASE: '',
        }
    },
    methods: {
    crear(){
      if(this.NOMBRE.trim() === '' || this.APODO.trim() === '' || this.FRASE.trim() === ''){
        alert('esta vacio');
      } else {
        const usuario = {
          nombre: this.NOMBRE,
          apodo: this.APODO,
          edad: this.EDAD,
          phone: this.PHONE,
          email: this.EMAIL,
          Frase: this.FRASE,
        };

        this.postUser(usuario);
        // console.log(video);
        // this.videos = [...this.videos, video];
            }
        },

        async postUser(datos){
            

            const url = 'http://localhost:3000/usuarios';

            try{
                const params = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(datos),
            };
            const data = await fetch(url, params);
            const result = await data.json();
            console.log(result);
            
            this.$emit('refresco', result);
            
            
            }catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style>

</style>