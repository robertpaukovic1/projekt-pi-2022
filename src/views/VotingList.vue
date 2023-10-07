<template>
  <br />
  <br />
  <div class="list">
    <h2><b>Lista kandidata</b></h2>
    <br />
    <br />
    <br />
    <br />
    <div class="d-grid gap-2">
      <button class="btn btn-primary" type="button" @click="votinglist">
        <b> Izbor kandidata za novog šefa kuhinje Hotela Ičići</b>
      </button>
    </div>
  </div>
</template>   

<style>
.list h2 {
  color: green;
}

.d-grid .btn-primary {
  height: 80px;
  width: 1500px;
  background-color: rgb(162, 248, 162);
  color: green;
  font-size: 25px;
  border: rgb(162, 248, 162);
  margin-left: 40px;
}

.text-green {
  color: blue;
}
</style>     

<script>
export default {
  name: "votingList",
  methods: {
    votinglist() {
      this.$router.replace({ name: "Check" });
    },
  },
};
</script>


