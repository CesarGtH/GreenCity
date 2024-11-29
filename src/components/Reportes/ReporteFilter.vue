<template>
  <h6>Filtros</h6>
  <div class="Estado-filter">
    <q-select
      label="Estado Reporte"
      v-model="estadoreporteSelected"
      filled
      :options="estadoreporte"
      option-value="id"
      option-label="estado"
      @update:model-value="onChange"
    />
  </div>
  <div class="ubicacion-filter">
    <q-select label="Ubicación" v-model="model" filled :options="ubicaciones" />
  </div>
</template>

<style></style>

<script>
export default {
  name: "ReporteFilter",
  emits: ["estadoreporteCambiada"],
  data() {
    return {
      model: null,
      ubicaciones: [
        "San Borja",
        "San Isidro",
        "Miraflores",
        "Santiago de Surco",
        "Magdalena del Mar",
        "San Miguel",
        "Jesús María",
      ],
      estadoreporte: [],
      estadoreporteSelected: null,
    };
  },
  mounted() {
    this.cargarEstadoReportes();
  },
  methods: {
    onChange(value) {
      console.log("El valor seleccionado es: ", value.id);
      this.$emit("estadoreporteCambiada", value.id);
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
