<template>
  <div class="w-full">
    <nav
      class="bg-gray-50 px-2 sm:px-4 py-2.5 dark:bg-zinc-50 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-zinc-300"
    >
      <div class="container flex items-center justify-between mx-auto">
        <a href="" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-black"
            >Earthworm</span
          >
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-xs text-center mr-3 md:mr-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <router-link to="/register"> Register </router-link>
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <router-link to="/sign-in"> Login </router-link>
          </button>
        </div>
      </div>
    </nav>
    <section class="bg-white dark:bg-zinc-800 mt-4">
      <div class="grid max-w-screen-xl mt-4 px-4 py-8 mx-auto lg:py-16">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-4xl dark:text-white"
          >
            Revolutionize Your Farming Operations
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            Empower your farming business with our web-based platform for
            managing and tracking crop planting operations. Get insights, make
            informed decisions, and optimize your yields with ease.
          </p>
          <p
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700"
          >
            Get started
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </p>
          <router-link
            to="/register"
            class="inline-flex items-center justify-center px-5 py-3 mr-7 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Register
          </router-link>
        </div>
        <!-- <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="../img/hero.jpg" alt="farmer" />
        </div> -->
      </div>
    </section>
    <section class="bg-white dark:bg-gray-50">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-inter font-bold text-gray-900 dark:text-gray-900"
          >
            Our Blog
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div class="grid gap-8 lg:grid-rows">
          <article
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-zinc-800 dark:border-gray-700"
          >
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <span
                class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
              >
                <svg
                  class="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Article
              </span>
              <span class="text-sm">14 days ago</span>
            </div>
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#"
                >Revolutionizing Crop Management: The Goal of Our Agricultural
                Web Platform</a
              >
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              The goal of this project is to provide farmers with a
              comprehensive solution for managing and tracking their crop
              planting activities. With the increasing demand for food
              production, it's becoming increasingly important for farmers to
              have a clear understanding of their crop planting operations. This
              web-based platform aims to help farmers achieve this by allowing
              them to easily input and track important data such as the type of
              crop they are planting, the month they plan to sow, and the number
              of acres they will cover. One of the key features of this project
              is the market analysis page, which provides farmers with valuable
              insights into the crop planting trends in the market. With this
              information, farmers can make informed decisions about the type of
              crops they want to plant and when they want to plant them. This
              can help them optimize their crop planting operations and increase
              their yields. By providing farmers with a comprehensive solution
              for managing and tracking their crop planting activities, this
              project aims to improve the efficiency and productivity of their
              operations. In turn, this can help to increase food production and
              meet the growing demand for food globally. In summary, this
              project aims to help farmers achieve better crop yields and make
              informed decisions about their crop planting operations by
              providing them with a comprehensive solution for managing and
              tracking their crop planting activities.
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img
                  class="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Leos avatar"
                />
                <span class="font-medium dark:text-white"> Jese Leos </span>
              </div>
            </div>
          </article>
          <article
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-zinc-800 dark:border-gray-700"
          >
            <div class="flex justify-between items-center mb-5 text-gray-500">
              <span
                class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
              >
                <svg
                  class="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Article
              </span>
              <span class="text-sm">14 days ago</span>
            </div>
            <h2
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">Transform Your Crop Planting Management</a>
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              Transform the way you manage your crop planting operations with
              our innovative web-based platform. Say goodbye to manual tracking
              and hello to a world of data-driven insights that will take your
              farming business to new heights. With our platform, you can easily
              input and track important information such as the type of crop
              you're planting, the month you plan to sow, and the number of
              acres you will cover. Get access to market analysis and trends,
              and make informed decisions that will help you optimize your crop
              planting operations and increase your yields
            </p>
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <img
                  class="w-7 h-7 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="Bonnie Green avatar"
                />
                <span class="font-medium dark:text-white"> Bonnie Green </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style></style>
