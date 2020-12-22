<template>
  <div id="HotelClose" >
    <div>
      <h2>¿Que desea hacer?</h2>
    </div>
    <div >
      <!-- <button type="submit">Ingresar</button> -->
      <button
        type="submit"
        class="btn btn-outline-primary"
        v-on:click="delete_hotel"
      >
        Eliminar
      </button>
      <button
        type="submit"
        class="btn btn-outline-primary"
        v-on:click="close_hotel"
      >
        Cerrar Sesion
      </button>
    </div>
    <div>
      <h2>{{ salida }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HotelClose",
  data: function () {
    return {
      usuario: localStorage.getItem("current_hotelname"),
      salida: "Esperando...",
    };
  },
  methods: {
    delete_hotel: function (event) {
      var self = this;
      axios
        .delete(
          "https://hotel-appi-s.herokuapp.com/hotel/delete/" + this.usuario
        )
        .then((result) => {
          this.salida = "Se ha eliminado el usuario";
          localStorage.setItem("current_hotelname", "");
        })
        .catch((error) => {
          this.salida = "No se ha eliminado el usuario";
        });
    },
    close_hotel: function (event) {
      localStorage.setItem("current_hotelname", "");
      this.salida = "¡Se ha cerrado sesión!";
    },
  },

  created: function () {
    // this.hotelname = this.$route.params.hotelname;
  },
};
</script>

<style>
#HotelClose {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#HotelClose h2 {
  font-size: 50px;
  color: #283747;
}
#HotelClose span {
  color: crimson;
  font-weight: bold;
}
</style>