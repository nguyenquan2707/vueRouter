/* eslint-disable no-unused-vars */
import { createRouter, createWebHashHistory } from "vue-router";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

import Home from "./pages/home.vue";

// 1
const routes = [
  {
    path: "/",
    component: Home,
  },
];

// 3. Create the router instance and pass the `routes` option(1)
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
