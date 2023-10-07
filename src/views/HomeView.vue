<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-7">
      <br />
      <br />
      <br />
      <br />
      <h3><b>Obavijesti i promjene</b></h3>
      <br />
      <br />
      <div class="card" style="width: 30rem">
        <div class="card-body">
          <p>
            U utorak 20.rujna u komunalnom poduzeću Herculanea u Puli,<br />započinju
            prijave kandidature za novog direktora poduzeća. Zaposlenici
            poduzeća prijavljuju svoje<br />kandidature na stranici "Prijava
            kanidature" gdje ispunjavaju obrazac prijave.<br />.Prijave se
            primaju do 1.10.2022. Naknadna prijava nije moguća
          </p>
        </div>
      </div>
      <br />
      <br />
      <div class="card" style="width: 30rem">
        <div class="card-body">
          <p>
            U utorak 15 studenog, otvaraju se prijave kanidature za novog
            ravnatelja ili ravnateljicu<br />gradske knjižnice i čitaonice u
            Karlovcu. Zaposlenici koji se odluče kandidirati za ravnatelja dužni
            su na ovoj aplikaciji prijaviti kanidaturu.<br />
            Mala napomena je da zaposlenici kao novi korisnici<br />najprije
            moraju se registrirati i prijaviti svojim računom u sustav
            glasovanja.<br />
            Prijave kanidature su moguće do kraja studenog. Naknadna prijava
            nije moguća.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div class="card" style="width: 30rem">
        <div class="card-body">
          <p>
            U ponedjeljak 9. listopada otvaraju se mogućnosti glasovanja za
            <br />izbor novog šefa kuhinje u Hoetlu Ičići. Pravo glasovanja
            imaju svi zaposlenici <br />
            kuhinje Hotela Ičići. Glasovanje traje do 19:00 h.
          </p>
        </div>
      </div>
    </div>
    <div class="col-3">
      <br />
      <br />
      <br />
      <br />
      <div class="vlast">
        <h2><b>Vlast je slast !!</b></h2>
      </div>
      <br />
      <br />
      <div class="text">
        <p>
          <b>
            Vlast može biti za <br />
            svakoga slast ako vam <br />
            rastu apetiti za postati<br />direktorom<br />predsjednikom udruge
            <br />
            upraviteljem i sl... <br />
            <br />
            Da vam daju vlast <br />
            zahvalite im za čast !
          </b>
        </p>
      </div>
      <br />
      <br />
      <div class="card" style="width: 30rem">
        <img
          src="https://thumbs.dreamstime.com/b/angry-boss-cartoon-illustration-to-employee-75179709.jpg"
          class="card-img-top"
          alt=""
        />
        <div class="card-body p-0"></div>
      </div>
    </div>
  </div>
  <br />
  <br />

  {{ store.searchTerm }}

  <div class="sticky-top">...</div>
</template>



<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import store from "@/store.js";

let ime = "Robert";

let prezime = "Pauković";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      store,
      ime,
      prezime,
    };
  },
};
</script>

<style>
h3 {
  color: green;
  margin-right: 300px;
  padding-right: 205px;
}

.vlast {
  color: green;
  margin-right: 50px;
  padding-right: 100px;
}

.text {
  font-size: 20px;
  text-align: center;
  color: grey;
  margin-right: 80px;
  padding-right: 80px;
}

.card {
  font-size: 20px;
  text-align: center;
  margin-right: 200px;
  padding-right: 20px;
}

.card-img-top {
  margin-right: 80px;
}

.sticky-top {
  background-color: rgb(162, 248, 162);
  height: 40px;
  padding: 30px;
}
</style>