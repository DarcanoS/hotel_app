<template>
  <div id="Home">
    <h2>¡Bienvenido! {{autenticacion}} xd</h2>
    <!-- <h2>Recuerda iniciar sesión!xd</h2> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: function () {
    return {
        autenticacion: localStorage.getItem("isAuth")
    };
  },

  created: function () {
    // this.hotelname = this.$route.params.hotelname;
  },
};
</script>

<style>
#Home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#Home h2 {
  font-size: 50px;
  color: #283747;
}
#Home span {
  color: crimson;
  font-weight: bold;
}
</style>