import Vue from "vue";
import VueRouter from "vue-router";
import Content from '@/components/Content.vue';
import About from '@/components/About.vue';
import Mission from '@/components/Mission.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Content
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/mission/:id",
    name: "Mission",
    component: Mission
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
