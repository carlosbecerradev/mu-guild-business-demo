<template>
  <div class="home">
    <section class="relative h-96">
      <img
        class="h-full w-full object-cover object-top"
        src="../assets/mu-bg/mu-bg-1.jpg"
      />
      <div
        class="absolute inset-0 w-full h-full bg-indigo-600 opacity-40"
      ></div>
      <div class="absolute inset-0 flex flex-col justify-center items-center">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 my-6 text-center">
          <p
            class="text-4xl sm:text-7xl font-extrabold text-white font-serif tracking-wider"
          >
            Guild Name
          </p>
          <p
            class="text-4xl sm:text-7xl font-extrabold text-white font-serif tracking-wider"
          >
            Guild Name
          </p>
          <p
            class="text-4xl sm:text-7xl font-extrabold text-white font-serif tracking-wider"
          >
            Guild Name
          </p>
        </div>
      </div>
    </section>
    <nav class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
        <span>News</span>
      </div>
    </nav>
    <section class="my-4">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="grid grid-cols-8 gap-6">
          <div class="col-span-8 sm:col-span-5 md:col-span-6">
            <div class="">
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-6">
                  <div class="p-4 bg-white shadow-sm">
                    <div class="title text-lg font-bold border-b mb-4">
                      New 1
                    </div>
                    <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6">
                  <div class="p-4 bg-white shadow-sm">
                    <div class="title text-lg font-bold border-b mb-4">
                      New 2
                    </div>
                    <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div class="col-span-12 md:col-span-6">
                  <div class="p-4 bg-white shadow-sm">
                    <div class="title text-lg font-bold border-b mb-4">
                      New 3
                    </div>
                    <p class="text-sm">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <aside class="Ads my-5">
              <a href="https://gamesdonequick.com" target="_blank">
                <img src="https://i.imgur.com/A5gttc8.png" alt="" />
              </a>
            </aside>
          </div>
          <aside class="hidden sm:block sm:col-span-3 md:col-span-2">
            <section class="p-4 mb-4 shadow-sm bg-white">
              <div class="members">
                <div
                  class="mb-4 border-b text-center text-lg font-bold text-indigo-600"
                >
                  Members
                </div>
                <div class="max-h-80 overflow-y-auto text">
                  <p
                    v-for="(user, index) in getAllUserAccountsDto"
                    :key="index"
                    class="mb-0 py-1 text-sm"
                  >
                    {{ user.nickname }}
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getAllUserAccountsDto"]),
  },
  methods: {
    ...mapActions(["fetchAllUserAccountsDto"]),
  },
  created() {
    this.fetchAllUserAccountsDto();
  },
};
</script>
