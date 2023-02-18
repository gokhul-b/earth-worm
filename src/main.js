import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/base.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
//to add firebase to app
const firebaseConfig = {
  apiKey: "AIzaSyDNWaZ9FDJX9jETDngqwDe4wvEJZI3FASM",
  authDomain: "earth-worm-fcefa.firebaseapp.com",
  projectId: "earth-worm-fcefa",
  storageBucket: "earth-worm-fcefa.appspot.com",
  messagingSenderId: "474617717590",
  appId: "1:474617717590:web:2c5d58e569bf294a72acf7",
};
//initialize db
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;

const app = createApp(App);
app.use(VueChartkick);
app.use(router);
app.component("EasyDataTable", Vue3EasyDataTable);
app.mount("#app");
