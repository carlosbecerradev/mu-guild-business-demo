<template>
  <div class="mu-server-navigation">
    <nav class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4">
      <div v-if="getMUServerNavigationList != null" class="flex space-x-4">
        <a
          v-for="(item, index) of getMUServerNavigationList"
          :key="index"
          @click="changeMUServerNavigationListItem(item)"
          class="px-3 py-2 transition duration-500 ease-in-out cursor-pointer text-sm font-medium text-black border-b-2 border-white hover:border-indigo-600"
          :class="{ 'border-indigo-600': (getMUServerNavigationListItemSelected == item) }"
          >{{ item }}</a
        >
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getMUServerNavigationList", "getMUServerNavigationListItemSelected"]),
  },
  methods: {
    ...mapActions(["changeMUServerNavigationListItem", "setInitialMUServerNavigationListItemSelected"]),
  },
  created(){
    this.setInitialMUServerNavigationListItemSelected()
  }
};
</script>
