<template>
  <div class="p-4 mx-auto w-full">
    <div class="flex justify-center">
      <div class="xl:w-96 my-10">
        <form @submit.prevent="addExpense" class="space-y-4 md:space-y-6">
          <div>
            <label for="date" class="form-label inline-block mb-2 text-gray-700"
              >Date</label
            >
            <input
              type="date"
              v-model="date"
              placeholder="Date"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div>
            <label
              for="purpose"
              class="form-label inline-block mb-2 text-gray-700"
              >Purpose</label
            >
            <input
              type="text"
              v-model="purpose"
              placeholder="Purpose"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <div>
            <label
              for="amount"
              class="form-label inline-block mb-2 text-gray-700"
              >Amount</label
            >
            <input
              type="number"
              v-model="amount"
              placeholder="amount"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-[#2d2d2d] hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>

    <!-- <button type="button" @click="addExpense">Add expense</button> -->
    <div class="my-5"><Table /></div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import { addDoc, collection } from "@firebase/firestore";
import db from "../main.js";
import Table from "@/components/Table.vue";

export default {
  components: {
    Table,
  },
  data() {
    return {
      date: "",
      purpose: "",
      amount: "",
      user: "",
    };
  },
  methods: {
    async addExpense() {
      const auth = getAuth();
      const userId = auth.currentUser.uid;
      if (this.date && this.purpose && this.amount) {
        const cropRef = collection(db, "Expenses");
        const dataObj = {
          user: userId,
          date: this.date,
          purpose: this.purpose,
          amount: this.amount,
        };
        await addDoc(cropRef, dataObj);
        this.date = "";
        this.purpose = "";
        this.amount = "";
      } else {
        alert("Provide all the inputs");
      }
    },
  },
};
</script>

<style></style>
