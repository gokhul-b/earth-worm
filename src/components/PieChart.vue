<template>
  <div>
    <div class="flex mb-2 w-full flex-wrap space-x-1">
      <div v-for="crop in choosenCrops" :key="crop">
        <div
          class="w-full flex flex-wrap px-3 items-center py-1 bg-gray-200 text-gray-800 text-sm font-regular rounded my-1 mx-1"
        >
          <p class="mr-1">{{ crop }}</p>
          <span class="rounded-full"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 justify-end hover:bg-gray-300"
              @click="deleteCrop(crop)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="flex flex-col mx-1">
        <div class="flex items-center">
          <div for="label">
            <label
              for="chooseCrops"
              class="block text-sm font-medium text-zinc-800 mr-2"
              >Add crops:
            </label>
          </div>
          <div for="input">
            <input
              type="text"
              v-model="tempCrop"
              placeholder="type and press enter"
              @keyup="addCrop"
              class="mr-2 form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
          <button class="sm:hidden" @click="addCrop(e)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 border border-blue-700 rounded"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      for="piechart"
      class="shadow-lg rounded-lg overflow-hidden mt-10 mb-12"
    >
      <div
        class="py-3 px-5 bg-[#2d2d2d] w-full text-sm font-medium text-zinc-50"
      >
        Current Month Analysis
      </div>
      <div for="pie-chart" class="my-10">
        <pie-chart :data="chartData"></pie-chart>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, query, where } from "@firebase/firestore";
import db from "../main.js";

export default {
  data() {
    return {
      tempCrop: "",
      choosenCrops: [],
      pieChartData: [],
      chartData: {},
    };
  },
  methods: {
    addCrop(e) {
      if (e) {
        if (e.key === "Enter" && this.tempCrop) {
          if (
            !this.choosenCrops.includes(
              this.tempCrop.charAt(0).toUpperCase() + this.tempCrop.slice(1)
            )
          ) {
            this.choosenCrops.push(
              this.tempCrop.charAt(0).toUpperCase() + this.tempCrop.slice(1)
            );
          }
          this.getCurrentMonthCrops();
          this.tempCrop = "";
        }
      } else {
        if (this.tempCrop) {
          if (
            !this.choosenCrops.includes(
              this.tempCrop.charAt(0).toUpperCase() + this.tempCrop.slice(1)
            )
          ) {
            this.choosenCrops.push(
              this.tempCrop.charAt(0).toUpperCase() + this.tempCrop.slice(1)
            );
          }
          this.getCurrentMonthCrops();
          this.tempCrop = "";
        }
      }
    },
    deleteCrop(crop) {
      this.choosenCrops.splice(this.choosenCrops.indexOf(crop), 1);
      console.log(this.choosenCrops), this.getCurrentMonthCrops();
    },
    async getCurrentMonthCrops() {
      let tempObj = {};
      this.pieChartData = [];
      if (this.choosenCrops.length != 0) {
        const q = query(
          collection(db, "crops"),
          where("month", "==", "February"),
          where("crop", "in", this.choosenCrops)
        );
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => {
          this.pieChartData.push(doc.data());
        });
        // console.log(this.pieChartData);

        for (const key in this.pieChartData) {
          if (Object.hasOwnProperty.call(this.pieChartData, key)) {
            const element = this.pieChartData[key];
            // console.log(element);
            if (element.crop in tempObj) {
              tempObj[element.crop] += element.acres;
            } else {
              tempObj[element.crop] = element.acres;
            }
          }
        }
        this.chartData = Object.entries(tempObj);
      } else {
        this.chartData = {};
      }
      // console.log(this.chartData);
    },
  },
};
</script>

<style>
#chart-1 {
  height: 100vh;
}
</style>
