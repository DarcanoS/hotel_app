<template>
  <div id="HotelLogin">
    <div>
      <form v-on:submit.prevent="login_usuario">
        <div>
          <label>Ingrese nombre de Hotel</label>
          <input
            type="text"
            v-model="usuario_login.hotelname"
            placeholder="Usuario"
          />
        </div>
        <div>
          <label>Ingrese la contraseña</label>
          <input
            type="password"
            v-model="usuario_login.password"
            placeholder="Contreaseña"
          />
        </div>
        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </div>
    <div>
      <h1>{{ salida }}, Usuario: {{usuario_login.hotelname}} Contraseña: {{usuario_login.password}}</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HotelAdd",
  data: function () {
    return {
      usuario_login: {
        hotelname: "",
        password: "",
      },
      salida: "Esperando Inicio de Sesión",
      //   hotelname: "none",
    };
  },

  methods: {
    login_usuario: function () {
      var self = this;
      axios
        .post("https://hotel-appi-s.herokuapp.com/hotel/login", self.usuario_login)
        .then((result) => {
          this.salida =
            "Sesion inciada";
            localStorage.setItem("current_hotelname", this.usuario_login.hotelname);
            localStorage.setItem("isAuth", true);
        })
        .catch((error) => {
          this.salida = "Contraseña o Usuario incorrecto";
        });
    },
  },
  created: function () {
    // this.hotelname = this.$route.params.hotelname;
  },
};
</script>

<style>
#HotelAdd {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#HotelAdd h2 {
  font-size: 50px;
  color: #283747;
}
#HotelAdd span {
  color: crimson;
  font-weight: bold;
}
</style>