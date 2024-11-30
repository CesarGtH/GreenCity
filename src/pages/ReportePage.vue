<template>
  <div class="reporte-page">
    <div class="reporte-list q-mr-md">
      <ReporteList :estadoreporteFiltrada="estadoreporteSeleccionada" />
    </div>
  </div>
</template>

<style>
.reporte-page {
  display: flex;
  justify-content: space-between;
}
.reporte-filter {
  width: 25%;
}
.reporte-list {
  width: 75%;
}
</style>

<script>
import ReporteList from "src/components/Reportes/ReporteList.vue";

export default {
  name: "ReportePage",
  components: { ReporteList },

  data() {
    return {
      estadoreporteSeleccionada: null,
    };
  },

  methods: {
    actualizarEstadoReporte(estadoreporte) {
      console.log("La categoria recibida es: " + estadoreporte);
      this.estadoreporteSeleccionada = estadoreporte;
    },
  },
};
</script>
