<template>
  <div class="header">
    <h4 class="center">Listado de Reportes</h4>
    <q-btn class="ingresar-reporte" color="secondary" to="/ReporteForm"
      >INGRESAR REPORTE
    </q-btn>
  </div>
  <ReporteFilter @filtroCambiado="actualizarFiltro" />
  <div class="reporte-list">
    <div class="reporte-grid">
      <div
        class="reporte-item"
        v-for="item in reportesFiltrados"
        :key="item.id"
      >
        <ReporteItem :reportes="item" />
      </div>
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.center {
  font-size: 4em;
  text-align: center;
  color: #287039;
  margin-left: 30%;
  margin-bottom: 5%;
}
.ingresar-reporte {
  margin-right: 7%;
}
.ReporteFilter {
  width: 30%;
  gap: 20px;
  margin-left: 40%;
}
.reporte_list {
  margin-left: 20%;
}
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 200px;
}
.reporte-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  width: 100%;
  max-width: 100px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-left: 40%;
  margin-bottom: 10%;
}
.reporte-card .q-card-section {
  height: 100px;
  overflow: hidden;
}
</style>

<script>
import ReporteItem from "src/components/Reportes/ReporteItem.vue";
import ReporteFilter from "src/components/Reportes/ReporteFilter.vue";

export default {
  name: "ReporteList",
  components: { ReporteItem, ReporteFilter },
  computed: {
    reportesFiltrados() {
      return this.reporte.filter((reportes) => {
        return (
          (!this.filtros.estado || reportes.estado === this.filtros.estado) &&
          (!this.filtros.ubicacion ||
            reportes.ubicacion === this.filtros.ubicacion) &&
          (!this.filtros.categoria ||
            reportes.categoria === this.filtros.categoria)
        );
      });
    },
  },
  data() {
    return {
      reporte: [],
      filtros: { estado: "", categoria: "", ubicacion: "" },
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
    actualizarFiltro({ tipo, valor }) {
      this.filtros[tipo] = valor;
    },
  },
};
</script>
