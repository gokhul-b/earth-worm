<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav
      class="flex justify-between items-center bg-[#181818] p-6"
      v-if="isLoggedIn"
    >
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Earthworm</span>
      </div>
      <!-- <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> -->
      <div class="lg:w-full flex lg:items-center justify-between">
        <div class="text-sm lg:flex-grow hidden lg:flex">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-white mr-4"
          >
            <router-link to="/market" class="flex-1 ml-3 whitespace-nowrap">
              Market analysis</router-link
            >
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-white mr-4"
          >
            <router-link to="/addcrop" class="flex-1 ml-3 whitespace-nowrap">
              Add your crops</router-link
            >
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-white"
          >
            <router-link to="/expense" class="flex-1 ml-3 whitespace-nowrap">
              Expense tracking</router-link
            >
          </a>
        </div>
        <div class="hidden lg:flex">
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-zinc-900 hover:bg-white mt-4 lg:mt-0"
            ><span @click="handleSignOut" v-if="isLoggedIn">Logout</span></a
          >
        </div>

        <div class="lg:hidden text-white w-fit">
          <!-- <Menu>
            <MenuButton>More</MenuButton>
            <MenuItems class="z-10 absolute bg-black p-8 rounded-xl right-2">
              <MenuItem>
                <MenuButton>
                  <a
                    href="#responsive-header"
                    class="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-white mr-4"
                  >
                    <router-link
                      to="/market"
                      class="flex-1 ml-3 whitespace-nowrap"
                    >
                      Market analysis</router-link
                    >
                  </a>
                </MenuButton>
              </MenuItem>
              <MenuItem>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-white mr-4"
                >
                  <router-link
                    to="/addcrop"
                    class="flex-1 ml-3 whitespace-nowrap"
                  >
                    Add your crops</router-link
                  >
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#responsive-header"
                  class="block mt-4 lg:inline-block lg:mt-0 text-zinc-200 hover:text-white"
                >
                  <router-link
                    to="/expense"
                    class="flex-1 ml-3 whitespace-nowrap"
                  >
                    Expense tracking</router-link
                  >
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-zinc-900 hover:bg-white mt-4 lg:mt-0"
                  ><span @click="handleSignOut" v-if="isLoggedIn"
                    >Logout</span
                  ></a
                >
              </MenuItem>
            </MenuItems>
          </Menu> -->
          <Popover class="">
            <PopoverButton
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                /></svg
            ></PopoverButton>

            <PopoverPanel
              class="absolute z-10 left-0 top-0 h-full bg-black opacity-90 w-full"
              v-slot="{ close }"
            >
              <div class="flex flex-col items-start p-8 rounded-xl gap-2">
                <div class="flex justify-end w-full">
                  <PopoverButton>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </PopoverButton>
                </div>

                <PopoverButton>
                  <button @click="accept(close)">
                    <router-link to="/market"> Market analysis</router-link>
                  </button>
                </PopoverButton>
                <PopoverButton>
                  <button @click="accept(close)">
                    <router-link to="/addcrop"> Add your crops</router-link>
                  </button>
                </PopoverButton>
                <PopoverButton>
                  <button @click="accept(close)">
                    <router-link to="/expense"> Expense tracking</router-link>
                  </button>
                </PopoverButton>
                <PopoverButton
                  ><span @click="handleSignOut" v-if="isLoggedIn"
                    >Logout</span
                  ></PopoverButton
                >
              </div>
            </PopoverPanel>
          </Popover>
        </div>
      </div>
    </nav>
    <!-- <div class="flex">
      <aside
        v-if="isLoggedIn"
        id="default-sidebar"
        class="w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div
          class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-zinc-800"
        >
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <router-link to="/market" class="flex-1 ml-3 whitespace-nowrap">
                  MarketAnalysis</router-link
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                  ></path>
                  <path
                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                  ></path>
                </svg>
                <router-link
                  to="/addcrop"
                  class="flex-1 ml-3 whitespace-nowrap"
                >
                  AddYourCrop</router-link
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <router-link
                  to="/expense"
                  class="flex-1 ml-3 whitespace-nowrap"
                >
                  ExpenseTracking</router-link
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span
                  @click="handleSignOut"
                  v-if="isLoggedIn"
                  class="flex-1 ml-3 whitespace-nowrap"
                  >Logout</span
                >
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
async function accept(close) {
  close();
}
const router = useRouter();
const isLoggedIn = ref(false);

let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>
