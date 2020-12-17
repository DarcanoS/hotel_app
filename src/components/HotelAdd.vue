<template>
  <div id="HotelAdd">
    <div>
      <form v-on:submit.prevent="in_usuario">
        <div>
          <label>Ingrese nombre de Usuario</label>
          <input
            type="text"
            v-model="usuario_in.hotelname"
            placeholder="Usuario"
          />
        </div>
        <div>
          <label>Ingrese la contraseña</label>
          <input
            type="password"
            v-model="usuario_in.password"
            placeholder="Contreaseña"
          />
        </div>
        <div>
          <label>Ingrese la ubicación</label>
          <input
            type="text"
            v-model="usuario_in.location"
            placeholder="Ubicación"
          />
        </div>
        <div>
          <label>Ingrese precio general</label>
          <input type="number" v-model="usuario_in.price_general" />
        </div>
        <div>
          <label>Ingrese la cantidad de cuartos</label>
          <input type="number" v-model="usuario_in.quantity_room" />
        </div>
        <div>
          <button type="submit">Agregar</button>
        </div>
      </form>
    </div>
    <div>
      <h1>{{ salida }}</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HotelAdd",
  data: function () {
    return {
      usuario_in: {
        hotelname: "",
        password: "",
        location: "",
        price_general: 0,
        quantity_room: 0,
      },
      salida: "Esperando creación de Hotel",
      //   hotelname: "none",
    };
  },

  methods: {
    in_usuario: function () {
      var self = this;
      axios
        .post("https://hotel-appi-s.herokuapp.com/hotel/add", self.usuario_in)
        .then((result) => {
          this.salida =
            "Hotel " + self.usuario_in.hotelname + " creado con exito!";
        })
        .catch((error) => {
          this.salida = "Hotel no Creado";
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