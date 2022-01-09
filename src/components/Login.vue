<template>
  <br />
  <h2>You are not logged in!</h2>
  <form @submit.prevent="submit">
    <input
      class="form-control"
      placeholder="Your username"
      v-model.trim="username"
    />
    <br>
    <button class="btn btn-success" type="submit">Log in</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: null,
    };
  },
  methods: {
    submit() {
      this.$store.commit("loginUser", this.username);
    },
  },
};
</script>

<style scoped>
h2 {
  cursor: default;
  transition: all 0.4s;
}
h2:hover {
  color: #07ff8f;
}
.form-control {
  font-size: medium;
}
.btn {
  cursor: pointer;
  font-weight: bold;
  background-color: #35495e;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.2em solid #07ff8f;
  margin: 0 0.3em 0.3em 0;
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  color: #07ff8f;
  text-align: center;
  transition: all 0.2s;
}
.btn:hover {
  color: #35495e;
  background-color: #07ff8f;
}
</style>