<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 2000px">
      <q-card-section>
        <div class="container"></div>
        <div class="text-h3">Green City</div>
        <div class="text-h6 font-weight-bold">
          La Municipalidad de Lima coloca a disposición esta solución que
          permite a los ciudadanos reportar tanto problemas ambientales como
          eventos delictivos en su ciudad. La plataforma ofrecerá la posibilidad
          de visualizar reportes por ubicación y categoría, además de hacer un
          seguimiento del estado del problema reportado por las autoridades
          locales, con la opción de que los ciudadanos puedan comentar sobre
          dichos reportes.
        </div>
      </q-card-section>
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-green-2 text-grey-7"
          active-color="secondary"
          indicator-color="green"
          align="justify"
        >
          <q-tab name="caso1" label="Casos Ambientales" />
          <q-tab name="caso2" label="Casos Delictivos" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="text-dark grey">
          <q-tab-panel name="caso1">
            <h6>Casos en que se ven afectadas los espacios públicos</h6>
            <li>Acumulación de basura</li>
            <li>Árboles caídos</li>
            <li>Fugas de agua</li>
            <q-btn
              label="Ir a Reportes"
              flat
              color="secondary"
              type="submit"
              to="/dashboard/reporte"
              align="center"
            />
          </q-tab-panel>

          <q-tab-panel name="caso2">
            <h6>
              Actos de personas que atentan contra la integridad de las personas
              o espacios públicos
            </h6>
            <li>Robos</li>
            <li>Vandalismo</li>
            <li>Extorsión</li>
            <q-btn
              label="Ir a Reportes"
              flat
              type="submit"
              color="secondary"
              to="/dashboard/reporte"
              align="center"
            />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.q-tab-panel {
  line-height: 1.2;
  font-size: 16px;
}
.q-tab-panels {
  background-color: #ecfff1;
  text-emphasis-color: #287039;
  height: auto;
}
.q-tabs {
  color: #287039;
}
.text-h3 {
  text-align: center;
  margin-top: 0.5%;
  color: #287039;
}
.text-h6 {
  font-size: large;
  margin-top: 0.5%;
}
.container {
  text-align: center;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/2/21/Parque_Kennedy.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 70px;
}
</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("caso1"),
    };
  },
};
</script>
