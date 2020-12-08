<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 sm:px-6 lg:px-8"
  >
    <div
      class="max-w-md w-full space-y-8 p-4 bg-white md:px-8 rounded-md shadow"
    >
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Finish Order
        </h2>
      </div>
      <span class="sr-only">order form</span>
      <form @submit.prevent="finishOrder(orderHistoryItem)">
        <div class="overflow-hidden sm:rounded-md">
          <div class="py-4">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span">
                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-700"
                  >Order</label
                >
                <div
                  class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  <div class="text-sm font-medium text-gray-900">
                    {{ getCurrentOrder.item.name }}
                    <span>+{{ getCurrentOrder.item_level }}</span>
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ getCurrentOrder.item_options.name }}
                  </div>
                  <div class="text-sm text-gray-500">
                    {{ useTimeAgo(getCurrentOrder.created) }}
                  </div>
                </div>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label class="block text-sm font-medium text-gray-700"
                  >Guild mate</label
                >
                <select
                  v-model="orderHistoryItem.guildMate"
                  required
                  class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  <option
                    :value="userAccountDto.nickname"
                    v-for="userAccountDto in getAllUserAccountsDto"
                    :key="userAccountDto.id"
                  >
                    {{ userAccountDto.nickname }}
                  </option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first_name"
                  class="block text-sm font-medium text-gray-700"
                  >Price</label
                >
                <input
                  type="text"
                  v-model="orderHistoryItem.price"
                  placeholder="2kk coins"
                  class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span">
                <label class="block text-sm font-medium text-gray-700"
                  >Observation</label
                >
                <textarea
                  v-model="orderHistoryItem.observation"
                  type="text"
                  placeholder="It was free"
                  class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                ></textarea>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <button
                  type="submit"
                  class="flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Confirm
                </button>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <button
                  @click="resetMUServerModal"
                  type="submit"
                  class="flex w-full justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-500 border border-transparent hover:border-indigo-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import useTimeAgo from "@/helpers/time_ago";

export default {
  data() {
    return {
      orderHistoryItem: {
        guildMate: "",
        price: "0",
        observation: "",
      },
    };
  },
  computed: {
    ...mapGetters([
      "getCurrentOrder",
      "getMUServerModal",
      "getAllUserAccountsDto",
    ]),
  },
  methods: {
    ...mapActions([
      "fetchOrder",
      "fetchAllUserAccountsDto",
      "resetMUServerModal",
      "finishOrder",
    ]),
    useTimeAgo,
  },
  created() {
    this.fetchOrder(this.getMUServerModal.order_id);
    this.fetchAllUserAccountsDto();
  },
};
</script>
