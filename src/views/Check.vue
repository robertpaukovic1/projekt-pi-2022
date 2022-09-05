<template>
  <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-6">
      <label for="validationCustom01" class="form-label"><b>Ime</b></label>
      <br />
      <br />
      <input
        type="text"
        class="form-control"
        id="validationCustom01"
        required
      />
      <div class="invalid-feedback">Upišite ime</div>
    </div>

    <div class="col-md-6">
      <label for="validationDefault02" class="form-label"><b>Prezime</b></label>
      <br />
      <br />
      <input
        type="text"
        class="form-control"
        id="validationDefault02"
        required
      />
      <div class="invalid-feedback">Upišite prezime</div>
    </div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label"><b>OIB</b></label>
      <br />
      <br />
      <input
        type="text"
        class="form-control"
        id="validationDefault03"
        required
      />
      <div class="invalid-feedback">Upišite OIB</div>
    </div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label"
        ><b>Grad prebivališta</b></label
      >
      <br />
      <br />
      <input
        type="text"
        class="form-control"
        id="validationDefault03"
        required
      />
      <div class="invalid-feedback">Upišite grad</div>
    </div>
    <div class="col-md-6">
      <label for="validationDefault04" class="form-label"
        ><b>Status korisnika</b></label
      >
      <br />
      <br />
      <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="something">Odaberi status</option>
        <option>Direktor poduzeća</option>
        <option>Menadžer taktičkih poslova</option>
        <option>Menadžer operativnih poslovnih aktivnosti</option>
        <option>Ravnatelj,Prodekan,Dekan,Prorektor,Rektor</option>
        <option>Profesor,asistent</option>
        <option>Tajnik</option>
        <option>Administrator</option>
        <option>Računovođa</option>
        <option>Učenik,student</option>
      </select>
      <div class="invalid-feedback">Odaberite status</div>
    </div>
    <div class="col-md-6">
      <label for="validationDefault04" class="form-label"
        ><b>Popis ustanova</b></label
      >
      <br />
      <br />
      <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="something">Odaberi status</option>
        <option>Proizvodno poduzeće</option>
        <option>Gradska uprava</option>
        <option>Vrtići,škole,sveučilište,fakulteti</option>
        <option>Zdravstvene ustanove, bolnice i domovi zdravlja</option>
        <option>ICT poduzeća</option>
      </select>
      <div class="invalid-feedback">Odaberite ustanovu</div>
    </div>
    <br />
    <br />
    <div class="col-12">
      <br />
      <br />
      <button class="btn btn-primary btn-lg" type="button" @click="check">
        Pristupi glasovanju
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
  </form>
  <div class="sticky-top">...</div>
</template>  

<style>
.col-md-6 {
  padding: 30px;
  margin: 50px 80px;
  width: 600px;
  height: 80px;
  box-sizing: border-box;
  font-size: 20px;
  color: grey;
}

.mb-6 {
  padding: 30px;
  margin: 50px 80px;
  width: 1500px;
  height: 100px;
  color: grey;
  font-size: 20px;
}

.col-12 button {
  background-color: rgb(23, 157, 23);
  border: rgb(23, 157, 23);
  margin: 20px;
  width: 200px;
  padding: 15px;
}

.sticky-top {
  background-color: rgb(162, 248, 162);
  height: 30px;
  padding: 30px;
}
</style>    

<script>
export default {
  name: "check",
  methods: {
    check() {
      this.$router.replace({ name: "Poll" });
    },
  },
};
</script>

