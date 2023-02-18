<!-- // eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div
    class="p-4 mt-10 h-56 content-center items-center justify-center max-w-[950px] mx-auto"
  >
    <div class="rounded-md bg-blue-700 py-4 px-6 text-white">
      <div>
        <h5 class="text-1xl">Welcome back!</h5>
      </div>
      <p>
        We're glad to see you again. Check out the latest updates from other
        farmers and share your own crop planting activities. Let's work together
        to revolutionize the agriculture industry." You can replace [user name]
        with the actual name of the user who is logged in to personalize the
        message.
      </p>
    </div>
    <div id="instructions" class="py-10">
      <h4 class="text-3xl" py-2>Guide:</h4>
      <div class="py-2">
        <p class="text-zinc-600">
          <span class="text-1xl text-zinc-900 font-medium"
            >1.Viewing the Market Analysis:
          </span>
          To view the Market Analysis page, click on the "Market Analysis" tab
          from your Dashboard. Here, you can select a crop from the dropdown
          menu to view its sowing chart and insights. The chart shows the number
          of acres planted for the selected crop during each month of the year.
          You can hover over each bar in the chart to view the exact acreage
          value.
        </p>
      </div>
      <div class="py-2">
        <p class="text-zinc-600">
          <span class="text-1xl text-zinc-900 font-medium"
            >2.Selecting a Crop:
          </span>
          From your Dashboard, click on the "Add Crop" tab to add a new crop to
          your field. Here, you can select the type of crop you want to plant,
          the month in which you want to sow it, and the number of acres you
          plan to sow. Click "Save" to add the crop to your profile.
        </p>
      </div>
      <div class="py-2">
        <p class="text-zinc-600">
          <span class="text-1xl text-zinc-900 font-medium"
            >3.Contributing to the Community:
          </span>
          If you want to contribute to the community, you can add more crops to
          your profile by clicking on the "Add Crop" tab from your Dashboard.
          The more data we have, the better the insights we can provide to
          everyone. You can also share your insights and learnings in the
          comments section on the Market Analysis page.
        </p>
      </div>
      <div class="py-2">
        <p class="text-zinc-600">
          <span class="text-1xl text-zinc-900 font-medium">4.Logout: </span>
          To log out of your account, click on the logout button in the sidebar.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
// import { auth } from "@/firebase";

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

// eslint-disable-next-line no-unused-vars
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/sign-in");
  });
};
</script>

<style></style>
