<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 2000px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-2 text-grey-7"
          active-color="primary"
          indicator-color="purple"
          align="justify"
        >
          <q-tab name="mails" label="GreenCity" />
          <q-tab name="alarms" label="Ambientales" />
          <q-tab name="movies" label="Delictivos" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="bg-primary text-white">
          <q-tab-panel name="mails" align="center">
            <div class="text-h4">GreenCity</div>
            <h5>
              Solución que permite a los ciudadanos reportar tanto problemas
              ambientales como eventos delictivos en su ciudad. La plataforma
              ofrecerá la posibilidad de visualizar reportes por ubicación y
              categoría, además de hacer un seguimiento del estado del problema
              reportado por las autoridades locales, con la opción de que los
              ciudadanos puedan comentar sobre dichos reportes.
            </h5>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4">Casos Ambientales</div>
            <h5>Casos en que se ven afectadas los espacios públicos</h5>
            <h5>- Acumulación de basura</h5>
            <h5>- Árboles caídos</h5>
            <h5>- Fugas de agua</h5>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h4">Casos Delictivos</div>
            <h5>
              Actos de personas que atentan contra la integridad de las personas
              o espacios públicos
            </h5>
            <h5>- Robos</h5>
            <h5>- Vandalismo</h5>
            <h5>- Extorsión</h5>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>
