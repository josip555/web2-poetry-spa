import { createApp, defineAsyncComponent } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import PoemComponent from './components/PoemComponent.vue';

const NotFoundComponent = defineAsyncComponent(() => import('./components/NotFoundComponent.vue'));

createApp(App).use(store).use(router)
    .component('notfound-component', NotFoundComponent)
    .component('poem-component', PoemComponent)
    .mount("#app");
