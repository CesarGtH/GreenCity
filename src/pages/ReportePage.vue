<template>
  <div class="reporte-page">
    <div class="reporte-filter q-ml-md q-mr-xl">
      <ReporteFilter @estadoreporteCambiada="actualizarEstadoReporte" />
    </div>
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
import ReporteFilter from "src/components/Reportes/ReporteFilter.vue";
import ReporteList from "src/components/Reportes/ReporteList.vue";

export default {
  name: "ReportePage",
  components: { ReporteFilter, ReporteList },
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
