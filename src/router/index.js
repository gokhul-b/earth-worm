import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { async } from "@firebase/util";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/register",
      component: () => import("../views/Register.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/sign-in",
      component: () => import("../views/SignIn.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/feed",
      component: () => import("../views/Feed.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/market",
      component: () => import("../views/MarketAnalysis.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/addcrop",
      component: () => import("../views/AddYourCrop.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/expense",
      component: () => import("../views/ExpenseTracking.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        // console.log(user.uid);
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/sign-in");
    }
  } else {
    if (await getCurrentUser()) {
      next("/feed");
    } else {
      next();
    }
  }
});
export default router;
