<template>
  <div class="mu-server-orders">
    <section class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <span class="sr-only">Filters</span>
      <order-filters
        :orders="getMUServerOrders"
        @page:data="UPDATE_DATA"
        @page:update="updatePage"
      ></order-filters>
    </section>
    <section class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-2">
      <h3
        class="sr-only inline-block mb-2 text-sm leading-6 font-medium text-indigo-600 text-left py-1"
      >
        Results
      </h3>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div v-if="getMUServerOrders != []" class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-4 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 border">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      By
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Observation
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="order in getPagination.page" :key="order.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="">
                          <div class="text-sm font-medium text-gray-900">
                            {{ order.item.name }}
                            <span>+{{ order.item_level }}</span>
                          </div>
                          <div class="text-sm text-gray-500">
                            {{ order.item_options.name }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ order.user_account.nickname }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ useTimeAgo(order.created) }}
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-500">
                      <p class="m-0 overflow-auto max-h-20 flex items-baseline">
                        {{ order.observation }}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="pt-2 pb-5">
          <pagination
            :totalElements="getPagination.data.length"
            :currentPage="getPagination.currentPage"
            :elementsPerPage="getPagination.elementsPerPage"
            @page:update="updatePage"
          >
          </pagination>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import useTimeAgo from "@/helpers/time_ago";
import Pagination from "../complements/Pagination.vue";
import OrderFilters from "../complements/OrderFilters";

export default {
  components: { Pagination, OrderFilters },
  computed: {
    ...mapGetters(["getMUServerOrders", "getPagination"]),
  },
  methods: {
    ...mapMutations(["UPDATE_DATA"]),
    ...mapActions([
      "fetchMUServerOrdersByMuServerId",
      "createPage",
      "updatePage",
    ]),
    useTimeAgo,
  },
  beforeMount() {
    this.updatePage(0);
  },
  created() {
    this.fetchMUServerOrdersByMuServerId(this.$route.params.id);
    this.UPDATE_DATA(this.getMUServerOrders);
  },
};
</script>
