<template class="h-screen">
  <div>
    <Navbar />
    <router-view />
  </div>

  <!-- <nav v-if="isLoggedIn">
    <router-link to="/market"> MarketAnalysis</router-link>
    <router-link to="/expense"> ExpenseTracking</router-link>
    <router-link to="/addcrop"> AddYourCrop</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Logout</button>
  </nav> -->
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
// import { onMounted, ref } from "vue";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { useRouter } from "vue-router";

// const router = useRouter();
// const isLoggedIn = ref(false);

// let auth;

// onMounted(() => {
//   auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       isLoggedIn.value = true;
//     } else {
//       isLoggedIn.value = false;
//     }
//   });
// });

// const handleSignOut = () => {
//   signOut(auth).then(() => {
//     router.push("/");
//   });
// };
</script>

<style>
body {
  margin: 0;
  background: #ffffff;
}
</style>
