<template>
  <div id="HotelD">
    <h2>Hotel: <span> {{hotelname}}</span> </h2>
    <h2> Valor general: <span> {{price_general}} COP </span>, con <span> {{quantity_room}} </span> habitaciones </h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HotelD",
  data: function () {
    return {
      hotelname: "",
      price_general: 0,
    };
  },

  created: function () {
    this.hotelname = this.$route.params.hotelname;

    let self = this;
    axios
      .get("https://hotel-appi-s.herokuapp.com/hotel/description/" + this.hotelname)
      .then((result) => {
        self.price_general = result.data.price_general;
        self.quantity_room = result.data.quantity_room;
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  },
};
</script>


<style>
#HotelD {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#HotelD h2 {
  font-size: 50px;
  color: #283747;
}
#HotelD span {
  color: crimson;
  font-weight: bold;
}
</style>