<template>
  <q-layout view="lHh Lpr lFf">
    <br />
    <div class="container"></div>
    <div class="text-center q-mb-xl">
      <div class="text-h4 Text">Green City App</div>
    </div>

    <q-page-container class="flex flex-center full-height">
      <q-card style="width: 350px">
        <q-card-section>
          <div class="text-h6">Inicio de sesión</div>
        </q-card-section>
        <q-card-section>
          <q-input
            v-model="emailValue"
            label="Correo electrónico"
            Filled
            type="email"
            outlined
            dense
            :rules="[(val) => !!val || 'El correo es obligatorio']"
          />
          <q-input
            v-model="pwdValue"
            label="Contraseña"
            Filled
            :type="isPwd ? 'password' : 'text'"
            outlined
            dense
            :rules="[(val) => !!val || 'Ingresar contraseña']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section>
          <q-btn
            label="Iniciar sesión"
            type="submit"
            color="secondary"
            unelevated
            class="full-width q-mt-md"
            @click="inicioSesion"
          />
          <div class="text-center q-mt-md">
            <q-btn
              label="Registrarse"
              flat
              color="secondary"
              to="/RegisterForm"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<style>
.text-h4 {
  font-size: 4.5em;
  margin-top: 2%;
}
.text-h6 {
  font-size: 1.8em;
  text-align: center;
  color: #287039;
}
.Text {
  color: #63c379;
}
body {
  margin: 0;
  padding: 0;
}
.container {
  text-align: center; /* Centra el contenido dentro del contenedor */
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/2/21/Parque_Kennedy.jpg"); /* Ruta de la imagen de fondo */
  background-size: cover; /* Ajusta la imagen para que cubra todo el contenedor */
  background-position: center; /* Centra la imagen en el contenedor */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  padding: 70px; /* Añade espacio alrededor del contenido */
}
</style>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      emailValue: "",
      pwdValue: "",
      isPwd: true,
    };
  },
  methods: {
    inicioSesion() {
      console.log("Click en el boton de inicio de sesión");
      console.log("Valor del email: " + this.emailValue);

      let endpointLogin = "/api/Usuarios/SignIn";
      let usuarios = { email: this.emailValue, contrasena: this.pwdValue };

      this.$api
        .post(endpointLogin, usuarios)
        .then((response) => {
          //respuesta exitosa
          //console.log("Respuesta exitosa: " + JSON.stringify(response));
          //Almacenamos la información en el LocalStorage
          localStorage.setItem("userData", JSON.stringify(response));
          this.$q.notify({
            message: "Bienvenido a GreenCity APP",
            color: "positive",
            position: "bottom",
            timeout: 5000,
          });

          this.$router.push("/dashboard");
        })
        .catch((error) => {
          //Ocurrió un error
          this.$q.notify({
            message: "Ocurrió un error",
            color: "negative",
            position: "top",
            timeout: 5000,
          });
          console.log("Error en: " + error);
        });
    },
  },
};
</script>
