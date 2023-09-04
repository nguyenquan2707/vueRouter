/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

import Home from "./pages/home.vue";
import Transactions from "./pages/transactions.vue";
import TransactionDetail from "./pages/transaction-detail.vue";
import NotFound from "./pages/404.vue";

// 1
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/transactions",
    component: Transactions,
  },
  {
    // Nếu xem trong object $route sẽ thấy idDetail.
    path: "/transactions/:id",
    component: TransactionDetail,
  },
  {
    path: "/ts",
    component: Transactions,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

// 3. Create the router instance and pass the `routes` option(1)
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
