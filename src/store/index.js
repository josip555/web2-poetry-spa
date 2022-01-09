const Parse = require('parse');

Parse.initialize("xx6armGqAzTTxm9y8U39cgdgwfvro7SPj5oUSI78", "7chKDpvoKIaS1M1awEQoqPXJkWQ4xT3Hj75BsSmc");
Parse.serverURL = 'https://parseapi.back4app.com/'

import {
  createStore
} from "vuex";

export default createStore({
  state: {
    user: null,
    allPoems: [],
  },
  mutations: {
    loginUser(store, nUser) {
      store.user = nUser;
    },
    logoutUser(store) {
      store.user = null;
    },
    setPoems(store, poems) {
      store.allPoems = poems;
    }
  },
  getters: {
    username(store) {
      return `${store.user}`;
    },
    isAuthenticated(store) {
      return store.user ? true : false;
    },
    allPoems(store) {
      return store.allPoems || [];
    },
  },
  actions: {
    async getPoems(context) {
      if (context.getters.allPoems.length === 0) {
        var Poem = Parse.Object.extend("Poem");
        const query = new Parse.Query(Poem);
        const results = await query.find();
        context.commit("setPoems", results);
      }
    },
    deletePoem(context, {pid}) {
      context.commit("setPoems", context.getters.allPoems.filter((x) => x.get('pid') !== pid));
    },
    addPoem(context, poem) {
      let newArray = context.getters.allPoems;
      let newpoem = new Map();
      newpoem.set('pid', (newArray[newArray.length-1]).get('pid') + 1);
      newpoem.set('author', poem.author);
      newpoem.set('title', poem.title);
      newpoem.set('content', poem.content);
      newArray.push(newpoem);
      context.commit("setPoems", newArray);
    },

  },
  modules: {},
});