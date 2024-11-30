<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ reportes.titulo }}</div>
      <div class="text-subtitle2">{{ reportes.fecha_creacion }}</div>
      <div class="text-caption">Categoría: {{ reportes.categoria }}</div>
      <div class="text-body2 q-mt-md">{{ reportes.descripcion }}</div>
      <div class="text-caption q-mt-md">
        Ubicación: {{ reportes.ubicacion }}
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn
        flat
        color="primary"
        @click="mostrarFormulario = !mostrarFormulario"
      >
        COMENTAR
      </q-btn>
      <div v-if="mostrarFormulario">
        <q-form @submit.prevent="registrarComentario">
          <q-input
            v-model="nuevoComentario"
            type="textarea"
            label="Ingresa tu comentario"
            filled
            required
          />
          <q-btn type="submit" label="Enviar" color="primary" class="q-mt-sm" />
        </q-form>
      </div>
    </q-card-actions>
  </q-card>
</template>

<style></style>

<script>
export default {
  name: "CommentPage",
  props: { reportes: { type: Object, required: true } },
  data() {
    return { text: "Empty" };
  },
};
</script>
