import { createRouter, createWebHistory } from "vue-router";
import Topics from "@/components/Topics.vue";
import Examples from "@/components/Examples.vue";
import Example from "@/components/Example.vue";

const routes = [
  { path: "/topics/", component: Topics, props: true },
  { path: "/topics/:topic", component: Examples, props: true },
  { path: "/examples", component: Examples, props: true },
  { path: "/examples/:id", component: Example, props: true },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
