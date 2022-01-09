<template>
  <div class="home">
    <h1>
      Welcome
      <span v-if="$store.getters.isAuthenticated">{{
        $store.getters.username
      }}</span
      >!
    </h1>
    <p>
      There is <b>{{ $store.getters.allPoems.length }} poems </b>currently.
      <br />
    </p>
    <div class="container">
      <poem-component v-for="p in allPoems"
        :key="p"
        :pid="p.get('pid')"
        :author="p.get('author')"
        :title="p.get('title')"
        :content="p.get('content')"
        @delete-poem="deletePoem"
      ></poem-component>
    </div>
  </div>
</template>

<script>
import PoemComponent from '../components/PoemComponent.vue';

export default {
  components: {
    PoemComponent,
  },
  methods: {
    async deletePoem(args){
      await this.$store.dispatch("deletePoem", { pid:args.pid });
    },
  },
  computed: {
    allPoems() { 
      return this.$store.getters.allPoems;
    }
  },
  async mounted() {
    await this.$store.dispatch("getPoems");
  },
};
</script>

<style scoped>
* {
  text-align: left;
}

.container {
  width: 100%;
}

.home p {
  text-align: center;
  margin-top: 3rem;
  font-size: large;
}

h1 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>