<template>
  <div class="analyzer">
    <h1>Add a new poem</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <input
          class="form-control"
          placeholder="Author"
          v-model.trim="author"
          required
        />
        <input class="form-control" placeholder="Title" v-model.trim="title" required />
      </div>
      <textarea
        name="the-textarea"
        id="the-textarea"
        maxlength="5000"
        placeholder="Write your text here..."
        autofocus
        v-model="tcontent"
        @keyup="updateCounts"
      ></textarea>
      <div id="the-count" class="row">
        <span class="line">
          Characters: <span id="charcount" v-text="char"></span>
        </span>
        <span class="line">
          Words: <span id="wordcount" v-text="word"></span>
        </span>
        <span class="line">
          Sentences: <span id="sentencecount" v-text="sentence"></span>
        </span>
        <span class="line">
          Lines: <span id="linecount" v-text="line"></span>
        </span>
      </div>
      <button class="btn btn-success" type="submit">Add a new Poem</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "",
      title: "",
      tcontent: "",
      char: 0,
      word: 0,
      sentence: 0,
      line: 0,
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("addPoem", {
        author: this.author,
        title: this.title,
        content: this.tcontent,
      });
      alert(`Poem ${this.title} has been added.`);
    },
    updateCounts() {
      this.char = this.tcontent.length;
      let w = this.tcontent.match(/\S+/g);
      this.word = w ? w.length : 0;
      this.line = this.tcontent.replace(/\n$/gm, "").split(/\n/).length;
      this.sentence = this.tcontent.split(/[.!?]+/).length - 1;

      if (this.char == 0) {
        this.word = 0;
        this.sentence = 0;
        this.line = 0;
        this.sentence = 0;
      }
    },
  },
};
</script>

<style scoped>
.btn {
  font-size: 1rem;
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
.form-control {
  width: 40%;
  padding: 1em;
}
textarea {
  width: 97%;
  height: 400px;
  min-height: 100px;
  resize: vertical;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 0.5rem;
  color: #666;
  box-shadow: inset 0 0 0.25rem #ddd;
}
textarea:focus {
  outline: none;
  border: 1px solid darken(#ddd, 5%);
  box-shadow: inset 0 0 0.5rem darken(#ddd, 5%);
}
textarea[placeholder] {
  font-style: italic;
  font-size: 0.9rem;
}
#the-count {
  float: left;
  padding: 0.1rem 0 0 0;
  font-size: large;
}
#the-count .line {
  width: 25%;
  padding-right: 15px;
}
@media screen and (orientation: portrait) {
  #the-count .line {
    width: 100%;
  }
  #the-count {
    text-align: left;
    display: grid;
    grid-template-columns: auto;
  }
}
</style>