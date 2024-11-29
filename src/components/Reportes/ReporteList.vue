<template>
  <h5>Listado de Reportes</h5>
  <div class="reporte-list">
    <div class="reporte-grid">
      <div class="reporte-item" v-for="item in reporte" :key="item.id">
        <ReporteItem :reportes="item" />
      </div>
    </div>
  </div>
</template>

<style>
.reporte-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  width: 100%;
  max-width: 100px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.reporte-card .q-card-section {
  height: 100px;
  overflow: hidden;
}
</style>

<script>
import ReporteItem from "src/components/Reportes/ReporteItem.vue";

export default {
  name: "ReporteList",
  components: { ReporteItem },
  computed: {
    filtrarReportePorEstado() {
      return this.reporte.filter(
        (reportes) =>
          reportes.estado_reportes.id === this.estadoreportesFiltrada
      );
    },
  },
  props: {
    estadoreportesFiltrada: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      reporte: [],
    };
  },
  mounted() {
    this.cargarReportes();
  },
  methods: {
    cargarReportes() {
      let endpointURL = "/api/reportes";
      let token = JSON.parse(localStorage.getItem("userData")).data.token;
      let headers = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      this.$api
        .get(endpointURL, headers)
        .then((response) => {
          console.log(JSON.stringify(response));
          this.reporte = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
