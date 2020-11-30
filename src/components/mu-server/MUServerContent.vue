<template>
  <div class="mu-server-content">
    <div v-if="getMUServerNavigationListItemSelected == getMUServerNavigationList[0]">
      <MUServerOrders></MUServerOrders>
    </div>
    <div v-if="getMUServerNavigationListItemSelected == getMUServerNavigationList[1]">
      <MUServerMyOrders></MUServerMyOrders>
    </div>
    <div v-if="getMUServerNavigationListItemSelected == getMUServerNavigationList[2]">
      <MUServerOrderHistory></MUServerOrderHistory>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MUServerOrders from "@/components/mu-server/MUServerOrders";
import MUServerMyOrders from "@/components/mu-server/MUServerMyOrders";
import MUServerOrderHistory from "@/components/mu-server/MUServerOrderHistory";

export default {
  computed: {
    ...mapGetters([
      "getMUServerNavigationList",
      "getMUServerNavigationListItemSelected",
    ]),
  },
  components: {
    MUServerOrders,
    MUServerMyOrders,
    MUServerOrderHistory,
  },
};
</script>
