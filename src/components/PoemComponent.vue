<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="author">{{ author }}</div>
    <br>
    <div class="content">{{ content }}</div>
    <br>
    <button class="btn-danger" @click="deletePoem">Delete</button>
  </div>
</template>

<script>
export default {
  emits: ["deletePoem",],
  name: "PoemComponent",
  props: {
    pid: Number,
    author: String,
    title: String,
    content: String,
  },
  methods: {
    deletePoem() {
      this.$emit('deletePoem', {pid: this.pid});
    }
  }
};
</script>

<style scoped>
.btn-danger {
  cursor: pointer;
  font-weight: bold;
  background-color: red;
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.2em solid white;
  margin: 0 0.3em 0.3em 0;
  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  color: white;
  text-align: center;
  transition: all 0.2s;
}
.btn-danger:hover {
  color: red;
  background-color: white;
  border-color: red;
}
.card {
  float: left;
  margin: 0px;
  width: fit-content;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 20px;
  border-radius: 5px;
  min-width: 200px;
  white-space: pre-line;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.title {
  font-size: 1em;
  font-weight: bold;
}
.author {
  font-size: 0.9em;
}
.content {
  font-size: 0.9em;
}
</style>