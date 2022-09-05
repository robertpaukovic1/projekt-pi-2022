<template>
  <div id="app">
    <nav id="nav" class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar brand" href="#"></a>
      </div>
      <router-link to="/">NASLOVNICA</router-link>
      <router-link to="/help">ČESTA PITANJA</router-link>
      <router-link to="/login">GLASOVANJE</router-link>
      <router-link to="/form">PRIJAVA KANDIDATA</router-link>
      <a href="#" @click="logout()" color="blue">ODJAVA</a>
      <form class="d-flex" role="search">
        <input
          v-model="store.searchTerm"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </nav>
    {{ store.searchTerm }}
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
  background-color: rgb(162, 248, 162) !important;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 18px;

    &.router-link-exact-active {
      color: #16784c;
      display: inline-block;
    }
  }
}
</style>     

<script>
import store from "@/store.js";

import { firebase } from "@/firebase";

import router from "@/router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;

  if (user) {
    console.log(user.email);
    store.currentUser = user.email;
  } else {
    console.log("No-user");
    store.currentUser = null;
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
};
</script>