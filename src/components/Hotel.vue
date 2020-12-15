<template>
  <div id="Hotel">
    <h2>
      Hola Hotel <span> {{ hotelname }}, </span> ¡Bienvenido!
    </h2>
  </div>
</template>

<script>
export default {
  name: "Hotel",
  data: function () {
    return {
      hotelname: "none",
    };
  },
  created: function () {
    this.hotelname = this.$route.params.hotelname;
  },
};
</script>

<style>
#Hotel {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#Hotel h2 {
  font-size: 50px;
  color: #283747;
}
#Hotel span {
  color: crimson;
  font-weight: bold;
}
</style>