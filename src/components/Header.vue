<template>
  <div id="head" class="row">
    <div id="logobox" class="column side">
      <img
        id="logo"
        alt="Vue logo"
        src="../assets/logo.png"
        width="45"
        height="45"
        class="d-inline-block align-top"
      />
    </div>
    <div id="title" class="column middle">
      <div>Poems Application</div>
    </div>
    <div id="nav" class="column side">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/poemwriter">Add Poems</router-link>

      <span v-if="auth"
        ><img
          id="profile"
          alt="User: "
          src="../assets/user.png"
          width="16"
          height="16"
          class="d-inline-block align-top"
        />
        {{ $store.getters.username }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.column {
  border-radius: 5px;
  float: left;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column.middle {
  width: 50%;
}

.column.side {
  width: 25%;
}

#logobox {
  text-align: left;
}

#logo {
  background-color: #ffffff;
  border-radius: 5%;
  border: 0.1em solid #07ff8f;
}

#head {
  background: #35495e;
  width: 100%;
  border-bottom: 0.2em solid #07ff8f;
  border-top: 0.2em solid #07ff8f;
}

#title {
  color: #07ff8f;
  font-weight: bold;
  font-size: 33px;
  padding: 15px;
}

#nav {
  padding-top: 23px;
  text-align: right;
}

#title span {
  padding-left: 15px;
  padding-right: 15px;
  color: #5cffb5;
  font-weight: bold;
}

#nav a,
#nav span {
  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 5px;
  padding-right: 5px;
  text-decoration: none;
  color: #07ff8f;
  transition: all 0.5s;
  font-weight: bold;
}

#nav span {
  padding-left: 15px;
}

#nav a:hover {
  color: #35495e;
  background-color: #07ff8f;
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}

@media screen and (orientation: portrait) {
  .column,
  .column.side,
  .column.middle {
    width: 100%;
  }
}
</style>