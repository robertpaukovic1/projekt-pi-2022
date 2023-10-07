<template>
  <br />
  <br />
  <div class="quection-text">
    <p>
      Od pet ponuđena kandidata odaberite jednog i točno jednog kandidata. Tko
      je po vama novi šef kuhinje Hotela Ičići ?
    </p>
  </div>
  <br />
  <br />
  <br />
  <div>
    <input
      class="form-check-input"
      type="radio"
      name="radioNoLabel"
      id="radioNoLabel1"
      value=""
      aria-label="..."
    />
    <label class="form-check-label" for="flexRadioDefault1">
      Elio Brubnjak
    </label>
  </div>
  <br />
  <br />
  <br />
  <div>
    <input
      class="form-check-input"
      type="radio"
      name="radioNoLabel"
      id="radioNoLabel2"
      value=""
      aria-label="..."
    />
    <label class="form-check-label" for="flexRadioDefault1">
      Vladimir Vučenov
    </label>
  </div>
  <br />
  <br />
  <br />
  <div>
    <input
      class="form-check-input"
      type="radio"
      name="radioNoLabel"
      id="radioNoLabel2"
      value=""
      aria-label="..."
    />
    <label class="form-check-label" for="flexRadioDefault1">
      Antonia Sušić
    </label>
  </div>
  <br />
  <br />
  <br />
  <div>
    <input
      class="form-check-input"
      type="radio"
      name="radioNoLabel"
      id="radioNoLabel2"
      value=""
      aria-label="..."
    />
    <label
      class="form-check-label"
      for="flexRadioDefault1"
      position="horisontal"
    >
      Matija Pauković
    </label>
  </div>
  <br />
  <br />
  <br />
  <div>
    <input
      class="form-check-input"
      type="radio"
      name="radioNoLabel"
      id="radioNoLabel2"
      value=""
      aria-label="..."
    />
    <label
      class="form-check-label"
      for="flexRadioDefault1"
      position="horisontal"
    >
      Mislav Mustapić
    </label>
  </div>
  <br />
  <br />
  <br />
  <div class="col-12">
    <button class="btn btn-primary btn-lg" type="button" @click="poll">
      Potvrdite odabir
    </button>
    <br />
    <br />
    <br />
    <br />
  </div>
  <div class="sticky-top">...</div>
</template>  

<style>
.quection-text {
  font-size: 20px;
  font-family: Verdana;
  text-align: center;
  margin-left: 50px;
}

.form-check-input .radio {
  height: 10px;
  width: 10px;
  margin-right: 10px;
}

.form-check-label {
  font-size: 20px;
  font-family: Verdana;
  text-align: right;
  margin-left: 20px;
}

.col-12 button {
  background-color: rgb(23, 157, 23);
  border: rgb(23, 157, 23);
  margin: 20px;
  width: 200px;
  padding: 15px;
}
</style>   

<script>
export default {
  name: "poll",
  methods: {
    poll() {
      alert("Vaš glas je zabilježen");
      this.$router.replace({ name: "Home" });
    },
  },
};
</script>