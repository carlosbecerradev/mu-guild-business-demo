<template>
  <div class="mu-server-modal">
    <div class="fixed inset-0 bg-gray-50">
      <div class="content">
        <button
          @click="
            toggleMUServerModal({
              name: getMUServerModal.currentName,
              action: getMUServerModal.currentAction,
            })
          "
          class="exit absolute right-0 top-0 w-10 h-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <MUServerNewOrder
          v-if="getMUServerModal.order.new"
        ></MUServerNewOrder>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MUServerNewOrder from "@/components/mu-server/MUServerNewOrder";

export default {
  computed: {
    ...mapGetters(["getMUServerModal"]),
  },
  methods: {
    ...mapActions(["toggleMUServerModal"]),
  },
  components: {
    MUServerNewOrder,
  },
};
</script>
