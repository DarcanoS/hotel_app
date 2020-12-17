<template>
  <div id="HotelLogin" class="input-group input-group-sm mb-3">
    <form v-on:submit.prevent="login_usuario">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm"
          >Ingrese nombre de Hotel</span
        >
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          v-model="usuario_login.hotelname"
          placeholder="Usuario"
        />
      </div>

      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm"
          >Ingrese la contraseña</span
        >
        <input
          type="password"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          v-model="usuario_login.password"
          placeholder="Contraseña"
        />
      </div>

      <div align="center">
        <!-- <button type="submit">Ingresar</button> -->
        <button type="submit" class="btn btn-outline-primary">Ingresar</button>
        <h2>
          {{ salida }}
        </h2>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HotelLogin",
  data: function () {
    return {
      usuario_login: {
        hotelname: "",
        password: "",
      },
      salida: "Esperando Inicio de Sesión",
    };
  },

  methods: {
    login_usuario: function () {
      var self = this;
      axios
        .post(
          "https://hotel-appi-s.herokuapp.com/hotel/login",
          self.usuario_login
        )
        .then((result) => {
          this.salida = "Sesion inciada";
          localStorage.setItem(
            "current_hotelname",
            this.usuario_login.hotelname
          );
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
#HotelLogin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#HotelLogin h2 {
  font-size: 30px;
  color: #283747;
}
#HotelLogin span {
  color: crimson;
  font-weight: bold;
}
</style>