<template>
  <div class="div-form">
    <div class="wrapper">
      <h2>Registro de Usuario</h2>
      <form action="#">
        <div class="input-box">
          <input
            type="text"
            v-model="user.nombre"
            placeholder="Ingresar nombre completo"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="user.lastName"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="date"
            v-model="user.dateOfBirth"
            placeholder="Enter your birthday"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="user.country"
            placeholder="Enter your country"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="user.address"
            placeholder="Enter your address"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="text"
            v-model="user.email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Create password" required />
        </div>
        <div class="input-box">
          <input
            type="password"
            v-model="user.password"
            placeholder="Confirm password"
            required
          />
        </div>
        <div class="policy">
          <input type="checkbox" />
          <h3>I accept all terms & condition</h3>
        </div>
        <div class="input-box button">
          <input type="button" value="Register Now" @click="registrarUsuario" />
        </div>
        <div class="text">
          <h3>Already have an account? <a href="#">Login now</a></h3>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4070f4;
}
.wrapper {
  position: relative;
  max-width: 430px;
  width: 100%;
  background: #fff;
  padding: 34px;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  margin-left: 40%;
}
.wrapper h2 {
  font-size: 1.8em;
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
  background: #4070f4;
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
  border-color: #4070f4;
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
  background: #4070f4;
  cursor: pointer;
}
.input-box.button input:hover {
  background: #0e4bf1;
}
form .text h3 {
  color: #333;
  width: 100%;
  text-align: center;
}
form .text h3 a {
  color: #4070f4;
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
      let endpointSignUp = "/api/User/SignUp";

      this.$api
        .post(endpointSignUp, this.user)
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
      user: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        country: "",
        address: "",
        email: "",
        password: "",
      },
    };
  },
};
</script>
