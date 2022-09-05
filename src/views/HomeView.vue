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
            Zaposlenici Sveučilišta u Rijeci<br />
            Okušati će se po prvi puta<br />
            na elektroničkom glasovanju 5.9.2022.<br />
            Korisnici aplikacije prijavom na <br />
            na poslovni i svoj korisnički račun <br />
            moraju pristupiti listi, ispuniti obrazac pristupa <br />
            te dobiti listu kandidata. <br />
            Mogućnosti glasovanja su od 8:00 h do 12:00 h.<br />
            Naknadno glasovanje nije moguće !!
          </p>
        </div>
      </div>
      <br />
      <br />
      <div class="card" style="width: 30rem">
        <div class="card-body">
          <p>
            Čitanje i proglašenje novog dekana<br />
            na Sveučilištu u Rijeci održati će se 12.9 u 15:00 h.<br />
            Konačna objava imena novog dekana biti će <br />
            objavljena na stranice ove aplikacije
          </p>
        </div>
      </div>
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
            Dana 01.10.2022. otvaraju se prijave kandidature za izbor novog
            ravnatelja KBC-a Rebro.<br />
            Svi medicinski djelatnici kandidaturu za ravnatelja mogu ispuniti i
            poslati putem ove aplikacije.<br />
            Prijave kandidature se primaju do 15.10 23:59 h.<br />Nakandna
            prijava neće biti moguća.
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