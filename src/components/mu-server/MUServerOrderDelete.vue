<template>
  <div
    class="min-h-screen new-order flex items-center justify-center py-12 sm:px-6 lg:px-8"
  >
    <div
      class="max-w-md w-full space-y-8 p-4 bg-white md:px-8 rounded-md shadow"
    >
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          Are you really sure to delete this order?
        </h2>
      </div>
      <span class="sr-only">delete order</span>
      <div class="overflow-hidden sm:rounded-md">
        <div class="pb-4">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 text-center">
              <div class="text-sm font-medium text-gray-900">
                {{ getCurrentOrder.item.name }}
                <span>+{{ getCurrentOrder.item_level }}</span>
              </div>
              <div class="text-sm text-gray-500">
                {{ getCurrentOrder.item_options.name }}
              </div>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <button
                @click="deleteOrder"
                type="submit"
                class="flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Yes
              </button>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <button
                @click="resetMUServerModal"
                type="submit"
                class="flex w-full justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-500 border border-transparent hover:border-indigo-600"
              >
                No
              </button>
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
    ...mapGetters(["getCurrentOrder", "getMUServerModal"]),
  },
  methods: {
    ...mapActions(["fetchOrder", "resetMUServerModal", "deleteOrder"]),
  },
  created() {
    this.fetchOrder(this.getMUServerModal.order_id);
  },
};
</script>
