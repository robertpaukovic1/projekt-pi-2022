<template>
  <br />
  <br />
  <div class="row">
    <br />
    <h2><b>Registracija korisnika</b></h2>
    <br />
    <br />
    <div class="col-sm-5 m-auto">
      <form class="signup-form">
        <div class="row">
          <div class="col-sm-12 form-group">
            <br />
            <label for="email">Email adress</label>
            <br />
            <br />
            <input
              v-model="email"
              type="email"
              id="email"
              class="form-control form-control-lg"
              required
            />
          </div>
          <br />
          <br />
          <div class="col-sm-12 form-group">
            <br />
            <label for="password">Password</label>
            <br />
            <br />
            <input
              v-model="password"
              type="password"
              id="password"
              class="form-control form-control-lg"
              autocomplete="on"
              required
            />
          </div>
          <br />
          <br />
          <div class="col-sm-12 form-group">
            <br />
            <label for="password">Confirm Password</label>
            <br />
            <br />
            <input
              v-model="confirm_password"
              type="password"
              id="confirm_password"
              class="form-control form-control-lg"
              autocomplete="on"
              required
            />
          </div>
          <br />
          <br />
          <div class="col-sm-12 form-group">
            <br />
            <button type="button" class="btn btn-lg col-sm-4" @click="signup">
              Registracija
            </button>
          </div>
          <div class="col-sm-12 form-group">
            <br />
            <p>
              Ako imaš račun, samo se prijavi !
              <router-link class="text-blue" to="/login">Prijava</router-link>
            </p>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="sticky-top">...</div>
</template>  

<script>
import { firebase } from "@/firebase.js";

export default {
  name: "signup",
  data() {
    return {
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log("Uspješna registracija", result);
          this.$router.replace({ name: "VotingList" });
        })
        .catch(function (error) {
          console.error("Pogreška u registraciji", error);
        });
      console.log("Nastavak");
    },
  },
};
</script>  

<style>
.row h2 {
  color: green;
}

.row .col-md-8 {
  width: 50%;
  padding: 30px;
  box-sizing: border-box;
  color: green;
  margin: 20px;
}

.row .button .signup {
  color: white;
  background-color: green;
}
</style>