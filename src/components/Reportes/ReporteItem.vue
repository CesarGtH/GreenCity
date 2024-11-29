<template>
  <q-card class="reporte-card">
    <q-card-section>
      <q-card-title class="text1"> {{ reportes.titulo }}</q-card-title>
    </q-card-section>
    <q-card-section>
      <q-card-title>{{ reportes.descripcion }}</q-card-title>
      <div class="text-h6 font-weight-bold">{{ reportes.ubicacion }}</div>
      <div class="text-center">
        <q-btn color="secondary" label="Comentar"></q-btn>
      </div>
    </q-card-section>
  </q-card>
</template>

<style>
.text1 {
  width: 50%;
  size: 50px;
  font-size: 24px;
  color: #287039;
}
.reporte-card {
  width: 1300px;
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
};
</script>
