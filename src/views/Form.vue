<template>
  <br />
  <br />
  <form class="row g-3">
    <div class="col-md-6">
      <label for="validationDefault01" class="form-label"><b>Ime</b></label>
      <input
        type="text"
        class="form-control"
        id="validationDefault01"
        required
      />
      <div class="valid-feedback">Looks good!</div>
    </div>
    <div class="col-md-6">
      <label for="validationDefault02" class="form-label"><b>Prezime</b></label>
      <input
        type="text"
        class="form-control"
        id="validationDefault02"
        required
      />
    </div>
    <div class="valid-feedback">Looks good!</div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label"><b>OIB</b></label>
      <input
        type="text"
        class="form-control"
        id="validationDefault03"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label"
        ><b>Grad prebivališta</b></label
      >
      <input
        type="text"
        class="form-control"
        id="validationDefault03"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label"
        ><b>Naziv završene osnovne škole</b></label
      >
      <input
        type="text"
        class="form-control"
        id="validationDefault03"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label"
        ><b>Završena srednja škola, smijer</b></label
      >
      <input
        type="text"
        class="form-control"
        id="validationDefault03"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault03" class="form-label"
        ><b>Naziv sveučilišta, Završen fakultet</b></label
      >
      <input
        type="text"
        class="form-control"
        id="validationDefault03"
        required
      />
    </div>
    <div class="col-md-6">
      <label for="validationDefault04" class="form-label"
        ><b>Status korisnika</b></label
      >
      <select class="form-select" id="validationDefault04" required>
        <option selected disabled value="something">Odaberi status</option>
        <option>Direktor poduzeća</option>
        <option>Menadžer taktičkih poslova</option>
        <option>Menadžer operativnih poslovnih aktivnosti</option>
        <option>Profesor, asistent</option>
        <option>Tajnik</option>
        <option>Administrator</option>
        <option>Računovođa</option>
      </select>
    </div>
    <div class="mb-6">
      <label for="validationTextarea" class="form-label"
        ><b>Posebne stečene kvalifikacije</b></label
      >
      <textarea
        class="form-control"
        id="validationTextarea"
        placeholder="Required example textarea"
        required
      ></textarea>
      <div class="invalid-feedback">Napišite nešto</div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary btn-lg" type="submit" @click="form">
        Prijavi kandidaturu
      </button>
      <br />
      <br />
      <br />
      <br />
    </div>
  </form>
  <br />
  <br />
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
  name: "form",
  methods: {
    form() {
      alert("Vaša kandidatura je zaprimljena");
      this.$router.push({ name: "Home" });
    },
  },
};
</script>