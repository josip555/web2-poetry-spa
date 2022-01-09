<template>
  <Header />
  <div class="row">
    <div class="column side"><TimeDate title="Time & Date" /></div>
    <router-view class="column middle" />
    <div class="column side"><div v-if="!auth"><Login /></div></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TimeDate from "@/components/TimeDate.vue";
import Login from "@/components/Login.vue";

export default {
  components: {
    Header,
    TimeDate,
    Login,
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}

.column {
  box-sizing: border-box;
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
  width: 70%;
}

.column.side {
  width: 15%;
}

@media screen and (orientation: portrait) {
  .column,
  .column.side,
  .column.middle {
    width: 100%;
  }
}
</style>
