<template>
  <q-card class="reporte-card">
    <div class="header">
      <q-card-section>
        <q-card-title class="text1"> {{ reportes.titulo }}</q-card-title>
        <div class="text-left">{{ reportes.usuarioId }}</div>
        <div class="date">{{ formatearFecha(reportes.fechaCreacion) }}</div>
      </q-card-section>
      <div class="q-pa-md q-gutter-md">
        <q-badge color="red" label="Pendiente"></q-badge>
      </div>
    </div>

    <q-card-section>
      <div class="text-h7">{{ reportes.categoria }}</div>
      <q-card-title class="text2">{{ reportes.descripcion }}</q-card-title>
      <div class="text-h6 font-weight-bold">{{ reportes.ubicacion }}</div>
      <div class="text-center"></div>
    </q-card-section>
    <q-card-actions>
      <q-btn
        color="secondary"
        label="Comentar"
        @click="mostrarComentario = !mostrarComentario"
      />
    </q-card-actions>
    <div v-if="mostrarComentario">
      <q-input
        filled
        v-model="nuevoComentario"
        label="Escribe un comentario"
        type="textarea"
      />
      <q-btn color="secondary" label="Enviar" @click="enviarComentario" />
    </div>
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
.date {
  font-size: smaller;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.q-badge {
  margin-right: 7%;
}
.text-h7 {
  text-align: left;
  font-size: 20px;
  font-weight: 300;
}
.text-h6 {
  text-align: right;
}
.text2 {
  text-align: left;
  width: 20%;
  size: 30px;
  font-size: 18px;
  color: #112115;
}
.text1 {
  text-align: center;
  width: 50%;
  size: 50px;
  font-size: 24px;
  color: #287039;
}
.reporte-card {
  width: 1000px;
}
.reporte-card q-card-section {
  height: 800px;
  overflow: hidden;
}
</style>

<script>
export default {
  name: "ReporteItem",
  props: { reportes: { type: Object, required: true } },
  data() {
    return { text: "Empty" };
  },

  data() {
    return {
      mostrarComentario: false,
      nuevoComentario: "",
      comentarios: [],
    };
  },
  methods: {
    formatearFecha(fecha) {
      const opciones = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      return new Date(fecha).toLocaleString("es-ES", opciones);
    },
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
