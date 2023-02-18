<template>
  <div class="p-4 mx-auto w-full">
    <div class="flex justify-center">
      <div class="mb-3 xl:w-96 mt-20">
        <form @submit.prevent="addCrop" class="space-y-4 md:space-y-6">
          <div>
            <label for="crop" class="form-label inline-block mb-2 text-gray-700"
              >Crop:</label
            >
            <select
              v-model="crop"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Select a crop"
            >
              <option value="" selected class="text-gray-400">
                Select a crop
              </option>
              <option>Almond</option>
              <option>Apple</option>
              <option>Avocado</option>
              <option>Banana</option>
              <option>Barley</option>
              <option>Beans</option>
              <option>Beet</option>
              <option>Black pepper</option>
              <option>Black wattle</option>
              <option>Blueberry</option>
              <option>Broccoli</option>
              <option>Cabbage</option>
              <option>Cacao</option>
              <option>Cardamom</option>
              <option>Carrot</option>
              <option>Cashew</option>
              <option>Cauliflower</option>
              <option>Cherry</option>
              <option>Chickpea</option>
              <option>Chicory</option>
              <option>Chilli</option>
              <option>Cinnamon</option>
              <option>Coconut</option>
              <option>Coffee</option>
              <option>Corn</option>
              <option>Cucumber</option>
              <option>Custard apple</option>
              <option>Dates</option>
              <option>Earth pea</option>
              <option>Fig</option>
              <option>Fique</option>
              <option>Flax for oil seed</option>
              <option>Garlic</option>
              <option>Ginger</option>
              <option>Gooseberry</option>
              <option>Gram pea</option>
              <option>Grape</option>
              <option>Groundnut</option>
              <option>Horse bean</option>
              <option>Indigo</option>
              <option>Jasmine</option>
              <option>Jute</option>
              <option>Lavender</option>
              <option>Lemon</option>
              <option>Lentil</option>
              <option>Linseed</option>
              <option>Maize</option>
              <option>Mushrooms</option>
              <option>Mustard</option>
              <option>Nutmeg</option>
              <option>Oil palm</option>
              <option>Olive</option>
              <option>Palm</option>
              <option>Pepper</option>
              <option>Pineapple</option>
              <option>Pomegranate</option>
              <option>Potato</option>
              <option>Radish</option>
              <option>Raspberry</option>
              <option>Rice</option>
              <option>Rose</option>
              <option>Rubber</option>
              <option>Safflower</option>
              <option>Soybean</option>
              <option>Spinach</option>
              <option>Strawberry</option>
              <option>Sugarcane</option>
              <option>Tea</option>
              <option>Tobacco</option>
              <option>Tomato</option>
              <option>Vanilla</option>
              <option>Yam</option>
            </select>
          </div>
          <div>
            <label
              for="month"
              class="form-label inline-block mb-2 text-gray-700"
              >Sowing Month:</label
            >
            <select
              v-model="month"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Select a month"
            >
              <option value="" selected class="text-gray-400">
                Select a month
              </option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <label
                for="acres"
                class="form-label inline-block mb-2 text-gray-700"
                >Acres</label
              >
              <input
                type="number"
                v-model.number="acres"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="acres"
              />
            </div>
          </div>
          <button
            type="submit"
            class="w-full text-white bg-[#2d2d2d] hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Add Crop
          </button>
          <!-- <div>
            <label for="acres">Acres:</label>
            <input type="number" v-model.number="acres" />
          </div> -->
          <!-- <button type="submit">Add Crop</button> -->
        </form>
      </div>
    </div>
  </div>
  <div v-if="crops.length > 0">
    <p v-for="crop in crops" :key="crop.name">
      crop: {{ crop.crop }} <br />
      months: {{ crop.month }}<br />
      acres: {{ crop.acres }}
    </p>
  </div>
</template>

<script>
import { addDoc, collection } from "@firebase/firestore";
import db from "../main.js";
export default {
  data() {
    return {
      crops: [],
      crop: "",
      month: "",
      acres: "",
    };
  },
  methods: {
    async addCrop() {
      if (this.crop && this.month && this.acres) {
        const cropRef = collection(db, "crops");
        const dataObj = {
          crop: this.crop,
          month: this.month,
          acres: this.acres,
        };
        const docref = await addDoc(cropRef, dataObj);
        console.log("Crop was created with id:", docref.id);
        this.crop = "";
        this.month = "";
        this.acres = "";
      } else {
        alert("Provide all the inputs");
      }
    },
  },
};
</script>
