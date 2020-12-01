<template>
  <nav class="w-full bg-gray-800 shadow-lg">
    <div
      v-if="dropdown"
      @click="dropdown = !dropdown"
      class="absolute inset-0 w-full h-full bg-black opacity-40"
      tabindex="-1"
    ></div>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            @click="menuDropdown = !menuDropdown"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <!-- Heroicon name: menu
              Menu open: "hidden", Menu closed: "block" -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!--
              Heroicon name: x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <p class="hidden sm:block text-lg text-white">MU Guild Business</p>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                to="/"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                :class="{ 'text-white bg-gray-900': $route.name == 'Home' }"
                >Home</router-link>
              <router-link
                to="/mu-servers"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                :class="{ 'text-white bg-gray-900': $route.name == 'MU Servers' }"
                >MU Servers</router-link>
            </div>
          </div>
        </div>
        <!-- Login -->
        <router-link to="/login">
          <div v-if="getUsername == null" class="cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            :class="{ 'text-white bg-gray-900': $route.name == 'Login' }">
            login
          </div>
        </router-link>

        <div v-if="getUsername != null" class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div>
              <button
                @click="dropdown = !dropdown"
                class="flex text-md"
                id="user-menu"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <div
                  type="submit"
                  class="text-gray-400 inline-flex items-center hover:text-white"
                >
                  {{ getNickname }}
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <!-- Profile dropdown panel -->
            <div
              v-if="dropdown"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                class="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 cursor-pointer"
                role="menuitem"
                >Your Profile</a>
              <a
                @click="logout(); dropdown = !dropdown"
                class="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-gray-700 cursor-pointer"
                role="menuitem"
                >Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu  -->
    <div v-if="menuDropdown" class="">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          :class="{ 'text-white bg-gray-900': $route.name == 'Home' }"
          >Home</router-link>
      </div>
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          to="/mu-servers"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
          :class="{ 'text-white bg-gray-900': $route.name == 'MU Servers' }"
          >MU Servers</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      menuDropdown: false,
      dropdown: false,
    };
  },
  computed: {
    ...mapGetters(['getUsername', 'getNickname']),
  },
  methods: {
    ...mapActions(['logout', 'isAuthenticated']),
  },
  updated(){
    this.isAuthenticated()
  }
};
</script>
