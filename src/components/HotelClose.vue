<template>
  <div id="HotelClose">
    <h2>!Se ha cerrado la sesión!</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HotelClose",
  data: function () {
    return {

    };
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