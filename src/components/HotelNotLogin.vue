<template>
  <div id="HotelNotLogin">
    <h2>!No se ha iniciado sesion!</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HotelNotLogin",
  data: function () {
    return {};
  },

  created: function () {
    // this.hotelname = this.$route.params.hotelname;
  },
};
</script>

<style>
#HotelNotLogin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#HotelNotLogin h2 {
  font-size: 50px;
  color: #283747;
}
#HotelNotLogin span {
  color: crimson;
  font-weight: bold;
}
</style>