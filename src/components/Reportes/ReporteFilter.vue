<template>
  <h6 class="centrado">Filtros:</h6>
  <div class="Estado-filter">
    <q-select
      label="Estado Reporte"
      v-model="estadoreporteSelected"
      filled
      :options="estadoreporte"
      option-value="id"
      option-label="estado"
      @update:model-value="onChangeEstado"
    />
  </div>
  <div class="ubicacion-filter">
    <q-select
      label="Ubicación"
      v-model="ubicacionSelected"
      filled
      :options="ubicaciones"
      @update:model-value="onChangeUbicacion"
    />
  </div>
  <div class="categoria-filter">
    <q-select
      label="Categoría"
      v-model="categoriaSelected"
      filled
      :options="categorias"
      @update:model-value="onChangeCategoria"
    />
  </div>
</template>

<style>
.Estado-filter,
.ubicacion-filter,
.categoria-filter {
  margin-bottom: 1px;
  width: 1000px;
  margin-left: 30%;
}
.centrado {
  text-align: center;
  margin-bottom: -0%;
  margin-left: -35%;
}
</style>

<script>
export default {
  name: "ReporteFilter",
  emits: ["filtroCambiado"],
  data() {
    return {
      estadoreporteSelected: null,
      ubicacionSelected: null,
      categoriaSelected: null,
      ubicaciones: [
        "San Borja",
        "San Isidro",
        "Miraflores",
        "Santiago de Surco",
        "Magdalena del Mar",
        "San Miguel",
        "Jesús María",
      ],
      categorias: ["Ambientales", "Delictivos"],
      estadoreporte: [],
    };
  },
  mounted() {
    this.cargarEstadoReportes();
  },
  methods: {
    onChangeEstado(value) {
      this.$emit("filtroCambiado", { tipo: "estado", valor: value });
    },
    onChangeUbicacion(value) {
      this.$emit("filtroCambiado", { tipo: "ubicacion", valor: value });
    },
    onChangeCategoria(value) {
      this.$emit("filtroCambiado", { tipo: "categoria", valor: value });
    },
    cargarEstadoReportes() {
      let endpointURL = "/api/EstadoReportes";
      this.$api
        .get(endpointURL)
        .then((response) => {
          this.estadoreporte = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
