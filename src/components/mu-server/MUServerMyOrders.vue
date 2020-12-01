<template>
  <div class="mu-server-my-orders">
    <section class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-2">
      <h3
        class="sr-only inline-block mb-2 text-sm leading-6 font-medium text-indigo-600 text-left py-1"
      >
        Results
      </h3>

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div v-if="getMyMUServerOrders != []" class="flex flex-col">
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
                    <th
                      scope="col"
                      class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                      <span class="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="order in getMyMUServerOrders" :key="order.id">
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
                    <td
                      class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                    >
                      <div class="flex flex-col text-center gap-1">
                        <a
                          href="#"
                          class="rounded hover:bg-green-100 text-green-800"
                          >Finish</a
                        >
                        <a
                          href="#"
                          class="rounded hover:bg-yellow-100 text-yellow-800"
                          >Edit</a
                        >
                        <a
                          href="#"
                          class="rounded hover:bg-red-100 text-red-800"
                          >Delete</a
                        >
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import useTimeAgo from "@/helpers/time_ago";

export default {
  computed: {
    ...mapGetters(["getMyMUServerOrders", "getNickname"]),
  },
  methods: {
    ...mapActions(["fetchMUServerOrdersByMuServerIdAndUserAccountLoggedIn"]),
    useTimeAgo,
  },
  created() {
    this.fetchMUServerOrdersByMuServerIdAndUserAccountLoggedIn({
      mu_server_id: this.$route.params.id,
      user_account_nickname: this.getNickname,
    });
  },
};
</script>
