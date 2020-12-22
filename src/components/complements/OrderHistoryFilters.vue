<template>
  <div class="">
    <div class="grid grid-cols-6 gap-y-2 gap-x-6 items-end">
      <div class="col-span-6 sm:col-span-2">
        <span class="text-sm text-gray-600">By Item name</span>
        <autocomplete-text
          :objectList="getItems"
          :objectProperty="'name'"
          :placeholder="'Red Dragon Set'"
          :filterMethod="'includes'"
          @selected="filterDataByItemName($event.name)"
          ref="autocompleteTextComponent"
        ></autocomplete-text>
      </div>
      <div class="col-span-6 sm:col-span-2">
        <span class="text-sm text-gray-600">By Item category</span>
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
      <div class="col-span-6 sm:col-span-2">
        <span class="text-sm text-gray-600">By Guild Mate</span>
        <select
          v-model="guildMateNickname"
          @change="filterDataByGuildMateNickname(guildMateNickname)"
          class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
        >
          <option
            v-for="guildMate in getAllUserAccountsDto"
            :key="guildMate.id"
            :value="guildMate.nickname"
          >
            {{ guildMate.nickname }}
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
      filteredOrderHistory: [],
      itemCategoryName: "",
      guildMateNickname: "",
    };
  },
  props: {
    orderHistory: {
      type: Array,
      required: true,
    },
  },
  components: { AutocompleteText },
  computed: {
    ...mapGetters(["getItems", "getItemCategories", "getAllUserAccountsDto"]),
  },
  methods: {
    ...mapActions([
      "fetchItems",
      "fetchItemCategories",
      "fetchAllUserAccountsDto",
    ]),
    filterDataByItemName(itemName) {
      this.filteredOrderHistory = this.orderHistory.filter(
        (orderHistoryElement) => orderHistoryElement.order.item.name == itemName
      );
      this.resetItemCategorySelect();
      this.resetGuildMateNicknameSelect();
      this.$emit("page:data", this.filteredOrderHistory);
      this.$emit("page:update", 0);
    },
    filterDataByItemCategoryName(itemCategoryName) {
      this.filteredOrderHistory = this.orderHistory.filter(
        (orderHistoryElement) =>
          orderHistoryElement.order.item.item_category.name == itemCategoryName
      );
      this.resetAutocompleteText();
      this.resetGuildMateNicknameSelect();
      this.$emit("page:data", this.filteredOrderHistory);
      this.$emit("page:update", 0);
    },
    filterDataByGuildMateNickname(guildMateNickname) {
      this.filteredOrderHistory = this.orderHistory.filter(
        (orderHistoryElement) =>
          orderHistoryElement.guild_mate.nickname == guildMateNickname
      );
      this.resetAutocompleteText();
      this.resetItemCategorySelect();
      this.$emit("page:data", this.filteredOrderHistory);
      this.$emit("page:update", 0);
    },
    reset() {
      this.resetAutocompleteText();
      this.resetItemCategorySelect();
      this.resetGuildMateNicknameSelect();
      this.filteredOrderHistory = this.orderHistory;
      this.$emit("page:data", this.filteredOrderHistory);
      this.$emit("page:update", 0);
    },
    resetAutocompleteText() {
      this.$refs.autocompleteTextComponent.reset();
    },
    resetItemCategorySelect() {
      this.itemCategoryName = "";
    },
    resetGuildMateNicknameSelect() {
      this.guildMateNickname = "";
    },
  },
  created() {
    this.fetchItems();
    this.fetchItemCategories();
    this.fetchAllUserAccountsDto();
  },
};
</script>
