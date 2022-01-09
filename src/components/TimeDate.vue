<template>
  <div class="shadow">
    <br />
    <h2>{{ title }}</h2>
    <h1>{{ time }}</h1>
    {{ day }}, {{ date }}
    <br />
  </div>
</template>

<script>
export default {
  name: "TimeDate",
  props: {
    title: String,
  },
  data() {
    return {
      date: new Date().toLocaleDateString("hr-HR"),
      day: new Date().toLocaleDateString("hr-HR", { weekday: "long" }),
      time: new Date().toLocaleTimeString("hr-HR"),
    };
  },
  mounted() {
    window.setInterval(() => {
      let d = new Date();
      this.time = d.toLocaleTimeString("hr-HR");
      this.date = d.toLocaleDateString("hr-HR");
      this.day = d.toLocaleDateString("hr-HR", { weekday: "long" });
    }, 1000);
  },
};
</script>

<style scoped>
* {
  cursor: default;
}
h2 {
  margin-bottom: 10px;
  transition: all 0.4s;
}
h2:hover {
  color: #07ff8f;
}
h1 {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 36px;
}
/*.shadow {
  box-shadow: 0 .5rem 1rem rgba(30,30,30,.15)!important;
}*/
</style>
