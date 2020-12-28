<template>
  <div class="flex items-center justify-center py-12 sm:px-6 lg:px-8">
    <div
      class="max-w-md w-full space-y-6 p-4 bg-white md:px-8 rounded-md shadow"
    >
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {{ getProfile.nickname }} Profile
        </h2>
      </div>
      <span class="sr-only">user account profile</span>
      <div class="overflow-hidden sm:rounded-md">
        <div class="py-4">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-full sm:col-span">
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-700"
                >Your Username</label
              >
              <div
                class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <div class="text-sm font-medium text-gray-900">
                  {{ getProfile.username }}
                </div>
              </div>
            </div>

            <div class="col-span-full sm:col-span relative">
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-700"
                >Your Nickname</label
              >
              <div
                class="overflow-hidden mt-1 flex w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <input
                  @input="validNickname($event.target.value)"
                  :value="getProfile.nickname"
                  type="text"
                  autocomplete="off"
                  class="block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
                <button
                  @click="changeUserAccountNickname"
                  class="ml-auto text-sm bg-indigo-600 py-1 px-3 text-white"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProfile"]),
  },
  methods: {
    ...mapActions(["fetchProfile", "validNickname", "changeUserAccountNickname"]),
  },
  created() {
    this.fetchProfile();
  },
};
</script>
