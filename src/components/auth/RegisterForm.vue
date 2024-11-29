<template>
  <div class="div-form">
    <div class="wrapper">
      <h2>Registro de Usuario</h2>
      <form action="#">
        <div class="input-box">
          <input
            type="text"
            v-model="usuarios.nombre"
            placeholder="Ingresar nombre completo"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="usuarios.email"
            placeholder="Ingresar correo electrónico"
            required
          />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Ingresar contraseña" required />
        </div>
        <div class="input-box">
          <input
            type="password"
            v-model="usuarios.contrasena"
            placeholder="Confirmar contraseña"
            required
          />
        </div>
        <div class="policy">
          <input type="checkbox" />
          <h3>Acepto todos los términos y condiciones</h3>
        </div>
        <div class="input-box button">
          <input type="button" value="Registrarse" @click="registrarUsuario" />
        </div>
        <div class="text">
          <h3>Ya tengo una cuenta <a href="#">Iniciar Seción</a></h3>
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
  max-width: 430px;
  width: 100%;
  background: #fff;
  padding: 34px;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin-left: 5%;
}
.wrapper h2 {
  font-size: 2em;
  text-align: relative;
  color: #287039;
  font-weight: 3600;
}
.wrapper h2::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 28px;
  border-radius: 12px;
  background: #13aa9bf2;
}
.wrapper form {
  margin-top: 30px;
}
.wrapper form .input-box {
  height: 52px;
  margin: 18px 0;
}
form .input-box input {
  height: 100%;
  width: 100%;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-weight: 400;
  color: #333;
  border: 1.5px solid #c7bebe;
  border-bottom-width: 2.5px;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.input-box input:focus,
.input-box input:valid {
  border-color: #13aa9bf2;
}
form .policy {
  display: flex;
  align-items: center;
}
form h3 {
  color: #707070;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
}
.input-box.button input {
  color: #fff;
  letter-spacing: 1px;
  border: none;
  background: #13aa9bf2;
  cursor: pointer;
}
.input-box.button input:hover {
  background: #13aa9bf2;
}
form .text h3 {
  color: #333;
  width: 100%;
  text-align: center;
}
form .text h3 a {
  color: #13aa9bf2;
  text-decoration: none;
}
form .text h3 a:hover {
  text-decoration: underline;
}
</style>
<script>
export default {
  name: "RegisterForm",
  methods: {
    registrarUsuario() {
      let endpointSignUp = "/api/Usuarios/SignUp";

      this.$api
        .post(endpointSignUp, this.usuarios)
        .then((response) => {
          console.log("Esta es la respuesta: " + JSON.stringify(response));
          this.$q.notify({
            message: "Registro exitoso",
            color: "green",
            position: "top",
            timeOut: 3000,
          });
          this.$router.push("/");
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
  },
  data() {
    return {
      usuarios: {
        nombre: "",
        email: "",
        contrasena: "",
      },
    };
  },
};
</script>
