<template>
  <div class="row">
    <div class="container text-center">
      <div class="col-md-8">
        <br />
        <br />
        <h2><b>Prijava u sustav glasovanja</b></h2>
        <br />
        <br />
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              ><b>E-mail</b></label
            >
            <br />
            <br />
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <br />
          <br />
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              ><b>Lozinka</b></label
            >
            <br />
            <br />
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <br />
          <button type="button" class="btn btn-lg col-sm-4" @click="login">
            Prijava
          </button>

          <p>
            Ako nemaš račun, Registriraj se !
            <router-link class="text-blue" to="/signup"
              >Registracija</router-link
            >
          </p>
        </form>
      </div>
    </div>
  </div>
  <div class="sticky-top">...</div>
</template>   

<style>
.row .col-md-8 {
  width: 50%;
  padding: 30px;
  box-sizing: border-box;
  color: green;
  margin: 20px;
}

.row form {
  padding: 16px, 32px;
  color: #04aa6d;
  border: none;
  color: grey;
  padding: 20px, 20px;
  text-decoration: none;
  margin: 5px 5px;
  cursor: pointer;
  font-size: 20px;
}

.row .col-sm-4 {
  background-color: rgb(23, 157, 23);
  border: rgb(23, 157, 23);
  margin: 20px;
  width: 200px;
  font-size: 20px;
  color: white;
}

.row .button .login {
  color: white;
}

.sticky-top {
  background-color: rgb(162, 248, 162);
  height: 40px;
  padding: 30px;
}
</style>    

<script>
import { firebase } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("Uspješna prijava", result);
          this.$router.replace({ name: "VotingList" });
        })
        .catch(function (error) {
          console.error("Pogreška u prijavi", error);
        });
      console.log("Nastavak");
    },
  },
};
</script>

