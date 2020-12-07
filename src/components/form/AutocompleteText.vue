<template>
  <div class="relative">
    <input
      v-model="text"
      @input="search"
      type="text"
      autocomplete="off"
      :placeholder="placeholder"
      :required="isRequired"
      class="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
    />

    <div
      v-if="filteredList != []"
      class="absolute bg-white top-full w-full rounded max-h-32 overflow-y-auto shadow"
    >
      <div
        @click="selectItem(item)"
        v-for="(item, index) in filteredList"
        :key="index"
        class="cursor-pointer hover:bg-indigo-600 hover:text-white px-3"
      >
        <span>{{ item[objectProperty] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      filteredList: [],
      selected: {},
    };
  },
  props: {
    objectList: {
      type: Array,
      required: true,
    },
    objectProperty: {
      type: String,
      required: true,
    },
    filterMethod: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    isRequired: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    search() {
      // validate text
      if (this.text.trim() == "") {
        this.clearFilteredList();
        return;
      }
      // validate object property
      if (typeof this.objectList[0][this.objectProperty] !== "string") {
        console.log("Your 'objectProperty' is not a 'string' value");
        return;
      }
      // filter list
      this.filteredList = this.objectList.filter((object) =>
        object[this.objectProperty]
          .toLowerCase()
          [this.filterMethod](this.text.toLowerCase())
      );
    },
    selectItem(item) {
      this.text = item[this.objectProperty];
      this.selected = item;
      this.clearFilteredList();
      this.$emit("selected", this.selected);
    },
    clearFilteredList() {
      this.filteredList = [];
    },
  },
};
</script>
