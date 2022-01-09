import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PoemWriter from "../views/PoemWriter.vue";
import NotFound from "../views/NotFound.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/poemwriter",
    name: "PoemWriter",
    component: PoemWriter,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;