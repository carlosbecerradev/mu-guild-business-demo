<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 sm:px-6 lg:px-8"
  >
    <div
      class="max-w-md w-full space-y-8 p-4 bg-white md:px-8 rounded-md shadow"
    >
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          New Order
        </h2>
      </div>
      <span class="sr-only">order form</span>
      <form @submit.prevent="newOrder(order)">
        <div class="overflow-hidden sm:rounded-md">
          <div class="py-4">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6">
                <label class="block text-sm font-medium text-gray-700"
                  >Item Name</label
                >
                <AutocompleteText
                  :objectList="getItems"
                  :objectProperty="'name'"
                  :placeholder="'black dragon set'"
                  :filterMethod="'includes'"
                  @selected="order.item = $event"
                ></AutocompleteText>
              </div>

              <div class="col-span-6 sm:col-span-2">
                <label class="block text-sm font-medium text-gray-700"
                  >Item Level</label
                >
                <input
                  v-model="order.itemLevel"
                  type="number"
                  placeholder="0"
                  min="0"
                  value="0"
                  class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label class="block text-sm font-medium text-gray-700"
                  >Item Options</label
                >
                <select
                  v-model="order.itemOptions"
                  class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  <option
                    :value="itemOptions"
                    v-for="itemOptions in getItemOptionsList"
                    :key="itemOptions.id"
                  >
                    {{ itemOptions.name }}
                  </option>
                </select>
              </div>

              <div class="col-span-6 sm:col-span">
                <label class="block text-sm font-medium text-gray-700"
                  >Observation</label
                >
                <textarea
                  v-model="order.observation"
                  type="text"
                  placeholder="I need it"
                  class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                </textarea>
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
import AutocompleteText from "@/components/form/AutocompleteText";

export default {
  data() {
    return {
      order: {
        item: {},
        itemLevel: 0,
        itemOptions: {},
        observation: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getItems", "getItemOptionsList"]),
  },
  methods: {
    ...mapActions([
      "fetchItems",
      "fetchAllItemOptions",
      "newOrder",
      "resetMUServerModal",
    ]),
  },
  created() {
    this.fetchItems();
    this.fetchAllItemOptions();
  },
  components: {
    AutocompleteText,
  },
};
</script>
