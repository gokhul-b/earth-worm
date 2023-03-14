<template>
  <div class="flex flex-col items-center">
    <div class="flex w-8/12 items-center">
      <div class="relative flex py-5 items-center w-full justify-center">
        <div class="text-2xl my-10 font-medium text-center">
          <h1>Market Analysis</h1>
          <!-- <button v-on:click="click()">Click me</button> -->
        </div>
        <!-- <div class="flex-grow border-t border-gray-400"></div>
        <div class="flex-grow border-t border-gray-400"></div> -->
      </div>
    </div>
    <div id="currentMonth " class="sm:w-8/12 h-full">
      <PieChart />
    </div>
    <div class="w-full sm:w-8/12 h-full my-24">
      <div>
        <div class="flex flex-col">
          <div class="flex items-center space-x-4 mx-auto">
            <div for="label">
              <label
                for="selectacrop"
                class="block text-sm font-medium text-zinc-800"
                >Select Crop:</label
              >
            </div>
            <div for="select">
              <select
                v-model="selectedCrop"
                placeholder="Select the crop"
                id="crops"
                class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              >
                <option value="" disabled selected>Select your option</option>
                <!-- <option selected>Select a crop</option> -->
                <option v-for="option in options" :value="option" :key="option">
                  {{ option }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-16 mx-1">
        <div
          for="columchart"
          class="shadow-lg rounded-lg overflow-hidden mt-10 h-full"
        >
          <div
            class="py-3 px-5 bg-[#2d2d2d] w-full text-sm font-medium text-zinc-50"
          >
            Crop Wise Analysis
          </div>
          <div class="flex items-center w-full h-full mt-10 mb-12">
            <column-chart
              class="px-2 sm:px-8"
              :data="chartData"
              xtitle="Months"
              ytitle="Acres"
            ></column-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, query } from "@firebase/firestore";
import db from "../main.js";
import PieChart from "../components/PieChart.vue";

export default {
  components: {
    PieChart,
  },
  data() {
    return {
      crops: [],
      selectedCrop: "",
      chartData: {},
      options: [],
      message: "Market Analysis",
      // chartData: [],
    };
  },
  mounted() {
    this.getCrops();
  },
  methods: {
    click() {
      if (this.message == "Market Analysis") {
        this.message = "Market";
      } else {
        this.message = "Market Analysis";
      }
    },
    async getCrops() {
      const querySnap = await getDocs(query(collection(db, "crops")));
      querySnap.forEach((doc) => this.crops.push(doc.data()));
      this.options = Array.from(new Set(this.crops.map((crop) => crop.crop)));
    },
  },
  watch: {
    selectedCrop() {
      let tempObj = {
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
      };
      for (const key in this.crops) {
        if (Object.hasOwnProperty.call(this.crops, key)) {
          const element = this.crops[key];
          // console.log(element);
          if (element.crop === this.selectedCrop) {
            if (element.month in tempObj) {
              tempObj[element.month] += element.acres;
            } else {
              tempObj[element.month] = element.acres;
            }
          }
        }
      }
      this.chartData = Object.entries(tempObj);
    },
  },
};
</script>
<style>
.chart {
  max-width: 50%;
}
</style>
