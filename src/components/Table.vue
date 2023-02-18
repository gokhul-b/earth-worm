<template>
  <div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="py-2 inline-block min-w-full">
          <div class="overflow-hidden">
            <table class="table-auto w-1/2 border mx-auto">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Purpose
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="data in tableData"
                  :key="data.id"
                  class="bg-white border-b"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ data.date }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ data.purpose }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ data.amount }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, query, where } from "@firebase/firestore";
import db from "../main.js";
import { getAuth } from "firebase/auth";

export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.getableData();
  },
  methods: {
    async getableData() {
      const auth = getAuth();
      const userId = auth.currentUser.uid;
      const q = query(collection(db, "Expenses"), where("user", "==", userId));
      const querySnap = await getDocs(q);
      querySnap.forEach((doc) => {
        this.tableData.push(doc.data());
      });
      console.log(this.tableData);
    },
  },
};
</script>

<style></style>
