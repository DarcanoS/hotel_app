<template>
  <div id="HotelAdd">
    <div>
      <form v-on:submit.prevent="in_usuario">
        <div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Hotel</span>
            </div>
              <input
            type="text"
            v-model="usuario_in.hotelname"
            placeholder="Usuario"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          />
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Contraseña</span>
            </div>
              <input
            type="password"
            v-model="usuario_in.password"
            placeholder="Contreaseña"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          />
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Ubicación</span>
            </div>
              <input
            type="text"
            v-model="usuario_in.location"
            placeholder="Ubicación"
            class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          />
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Precio general</span>
              <span class="input-group-text">$</span>
            </div>
              <input type="number" v-model="usuario_in.price_general" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">Habitaciones</span>
            </div>
              <input type="number" v-model="usuario_in.quantity_room" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>

        </div>
        <div>
          
          <button type="submit" class="btn btn-outline-success">Agregar</button>
        </div>
      </form>
    </div>
    <div>
      <h3>{{ salida }}</h3>
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
  color: rgb(0, 0, 0);
  font-weight: bold;
}
</style>