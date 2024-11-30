<template>
  <div class="div-form">
    <div class="wrapper">
      <h2>Registro de Reporte</h2>
      <form action="#">
        <div class="q-pa-md" style="max-width: 1200px">
          <q-input
            v-model="reporte.titulo"
            type="text"
            color="green-8"
            label="Ingresar título del reporte"
            required
          />
          <q-select
            v-model="reporte.categoriaSeleccionada"
            :options="categorias"
            color="green-8"
            label="Seleccionar categoría"
            class="input-box"
            required
          />
          <q-select
            v-model="reporte.ubicacionSeleccionada"
            :options="ubicaciones"
            clearable
            color="green-8"
            label="Seleccionar distrito"
            class="input-box"
            required
          />

          <q-input
            v-model="reporte.descripcion"
            filled
            autogrow
            color="green-8"
            type="textarea"
            label="Ingresar detalle de reporte"
            required
          />
          <div class="text-center q-mt-md">
            <q-btn
              label="Publicar Reporte"
              color="green"
              @click="ingresarReporte"
            />
            <q-btn label="Limpiar" color="red" @click="resetFormulario" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.q-btn {
  align-items: "center";
  margin-left: 15%;
}
.q-input.textarea {
  height: 800px;
}
.div-form {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://upload.wikimedia.org/wikipedia/commons/2/21/Parque_Kennedy.jpg");
  background-size: cover;
  opacity: 0.8;
  height: 945px;
  width: 100%;
}
.wrapper {
  position: relative;
  max-width: 1500px;
  width: 100%;
  background: #fff;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.wrapper h2 {
  font-size: 3em;
  text-align: center;
  color: #287039;
  margin-bottom: 20px;
}
.text-center {
  text-align: center;
}
</style>

<script>
export default {
  name: "ReporteForm",
  data() {
    return {
      reporte: {
        titulo: "",
        descripcion: "",
        categoriaSeleccionada: "",
        ubicacionSeleccionada: "",
        usuarioId: 1,
      },
      categorias: ["Ambientales", "Delictivos"],
      ubicaciones: [
        "San Borja",
        "San Isidro",
        "Miraflores",
        "Santiago de Surco",
        "Magdalena del Mar",
        "San Miguel",
        "Jesús María",
      ],
    };
  },
  methods: {
    ingresarReporte() {
      if (
        !this.reporte.titulo.trim() ||
        !this.reporte.descripcion.trim() ||
        !this.reporte.categoriaSeleccionada ||
        !this.reporte.ubicacionSeleccionada
      ) {
        this.$q.notify({
          message: "Por favor, completar todos los campos antes de enviar.",
          color: "red",
          position: "top",
        });
        return;
      }

      const endpointInsertReport = "/api/Reporte/InsertReport";
      const data = {
        Titulo: this.reporte.titulo,
        Descripcion: this.reporte.descripcion,
        Categoria: this.reporte.categoriaSeleccionada,
        Ubicacion: this.reporte.ubicacionSeleccionada,
        UsuarioId: this.reporte.usuarioId,
      };

      this.$api
        .post(endpointInsertReport, data)
        .then((response) => {
          console.log("Esta es la respuesta: " + JSON.stringify(response));
          this.$q.notify({
            message: "Registro exitoso",
            color: "green",
            position: "top",
            timeOut: 3000,
          });
          this.$router.push("/dashboard/reporte");
        })
        .catch((error) => {
          console.log("Ocurrió un error: " + error);
          this.$q.notify({
            message: "Ocurrió un error: " + error,
            color: "red",
            position: "top",
            timeOut: 3000,
          });
        });
    },
    resetFormulario() {
      // Restablecer valores del formulario
      this.reporte = {
        titulo: "",
        descripcion: "",
        categoriaSeleccionada: "",
        ubicacionSeleccionada: "",
        usuarioId: 1,
      };
    },
  },
};
</script>
