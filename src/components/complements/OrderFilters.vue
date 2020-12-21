<template>
  <div class="">
    <div class="grid grid-cols-6 gap-y-2 gap-x-6 items-end">
      <div class="col-span-6 sm:col-span-2">
        <span>Iten name</span>
        <autocomplete-text
          :objectList="getItems"
          :objectProperty="'name'"
          :placeholder="'Item name'"
          :filterMethod="'includes'"
          @selected="filterDataByItemName($event.name)"
          ref="autocompleteTextComponent"
        ></autocomplete-text>
      </div>
      <div class="col-span-6 sm:col-span-2">
        <span>Iten category</span>
        <select
          v-model="itemCategoryName"
          @change="filterDataByItemCategoryName(itemCategoryName)"
          class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
        >
          <option
            v-for="itemCategory in getItemCategories"
            :key="itemCategory.id"
            :value="itemCategory.name"
          >
            {{ itemCategory.name }}
          </option>
        </select>
      </div>
      <div class="col-span-6 sm:col-span-1">
        <button
          @click="reset"
          class="mt-1 block w-full py-1 px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import AutocompleteText from "../form/AutocompleteText";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "order-filter",
  data() {
    return {
      filteredOrders: [],
      itemName: "",
      itemCategoryName: "",
    };
  },
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  components: { AutocompleteText },
  computed: {
    ...mapGetters(["getItems", "getItemCategories"]),
  },
  methods: {
    ...mapActions(["fetchItems", "fetchItemCategories"]),
    filterDataByItemName(itemName) {
      this.filteredOrders = this.orders.filter(
        (order) => order.item.name == itemName
      );
      this.resetItemCategorySelect();
    },
    filterDataByItemCategoryName(itemCategoryName) {
      this.filteredOrders = this.orders.filter(
        (order) => order.item.item_category.name == itemCategoryName
      );
      this.resetAutocompleteText();
    },
    reset() {
      this.resetAutocompleteText();
      this.resetItemCategorySelect();
      this.filteredOrders = this.orders;
      this.$emit("page:data", this.filteredOrders);
      this.$emit("page:update", 0);
    },
    resetAutocompleteText() {
      this.itemName = "";
      this.$refs.autocompleteTextComponent.reset();
    },
    resetItemCategorySelect() {
      this.itemCategoryName = "";
    },
  },
  created() {
    this.fetchItems();
    this.fetchItemCategories();
  },
  updated() {
    this.$emit("page:data", this.filteredOrders);
    this.$emit("page:update", 0);
  },
};
</script>
