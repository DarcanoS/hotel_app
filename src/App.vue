<template>
  <div id="app">
    <div class="header">
      <h1>Hotel Price</h1>
      <nav>
        <button v-on:click="init" v-if="is_auth">Inicio</button>
        <button v-on:click="iniciar_sesion" v-if="is_auth">
          Iniciar Sesion
        </button>
        <button v-on:click="addHotel" v-if="is_auth">Agregar</button>
        <button v-on:click="getBalance" v-if="is_auth">Estado</button>
        <button v-on:click="cerrar_sesion">Cerrar/Eliminar</button>
      </nav>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },
  methods: {
    init: function () {
      if (this.$route.name != "home") {
        let hotelname = localStorage.getItem("current_hotelname");
        this.$router.push({ name: "home" });
      }
    },
    getBalance: function () {
      if (
        this.$route.name != "hotel_description" &&
        localStorage.getItem("current_hotelname") != ""
      ) {
        let hotelname = localStorage.getItem("current_hotelname");
        this.$router.push({
          name: "hotel_description",
          params: { hotelname: hotelname },
        });
      }
      if (localStorage.getItem("current_hotelname") == "") {
        this.$router.push({ name: "hotel_not_login" });
      }
    },
    addHotel: function () {
      if (this.$route.name != "hotel_add") {
        let hotelname = localStorage.getItem("current_hotelname");
        this.$router.push({
          name: "hotel_add",
        });
      }
    },
    iniciar_sesion: function () {
      if (this.$route.name != "hotel_login") {
        let hotelname = localStorage.getItem("current_hotelname");
        this.$router.push({
          name: "hotel_login",
        });
      }
    },
    cerrar_sesion: function () {
      if (localStorage.getItem("current_hotelname") != "") {
        this.$router.push({ name: "hotel_login_close" });
        // localStorage.setItem("current_hotelname", "");
      }
    },
  },
  beforeCreate: function () {
    localStorage.setItem("isAuth", true);
    localStorage.setItem("current_hotelname", "");

    this.$router.push({ name: "home" });
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #e5e7e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  width: 20%;
  text-align: center;
}
.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
}
.header nav button {
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 15px;
}
.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #283747;
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
