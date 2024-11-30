<template>
  <q-card>
    <q-card-section>
      <h5>{{ reportes.titulo }}</h5>
      <p>{{ reportes.descripcion }}</p>
      <p class="categoria">{{ reportes.categoria }}</p>
      <p class="ubicacion">{{ reportes.ubicacion }}</p>
    </q-card-section>
    <q-card-actions>
      <q-btn
        flat
        color="primary"
        label="Comentar"
        @click="mostrarComentario = !mostrarComentario"
      />
    </q-card-actions>

    <!-- Sección de comentarios -->
    <div v-if="mostrarComentario">
      <q-input
        filled
        v-model="nuevoComentario"
        label="Escribe un comentario"
        type="textarea"
      />
      <q-btn color="primary" label="Enviar" @click="enviarComentario" />
    </div>

    <!-- Lista de comentarios -->
    <div class="comentarios">
      <h6>Comentarios</h6>
      <ul>
        <li v-for="(comentario, index) in comentarios" :key="index">
          {{ comentario }}
        </li>
      </ul>
    </div>
  </q-card>
</template>

<style>
.comentarios {
  margin-top: 10px;
}
.comentarios ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>

<script>
export default {
  name: "ReporteItem",
  props: {
    reportes: { type: Object, required: true },
  },
  data() {
    return {
      mostrarComentario: false,
      nuevoComentario: "",
      comentarios: [], // Lista de comentarios para cada reporte
    };
  },
  methods: {
    enviarComentario() {
      if (this.nuevoComentario.trim()) {
        let endpointURL = "/api/comentario/InsertComentario";
        let token = JSON.parse(localStorage.getItem("userData")).data.token;
        let headers = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };
        let payload = {
          reporteId: this.reportes.id,
          comentario: this.nuevoComentario,
        };

        this.$api
          .post(endpointURL, payload, headers)
          .then(() => {
            this.comentarios.push(this.nuevoComentario); // Agregar comentario localmente
            this.nuevoComentario = ""; // Limpiar campo
          })
          .catch((error) => {
            console.error("Error al guardar comentario:", error);
          });
      }
    },
  },
};
</script>
