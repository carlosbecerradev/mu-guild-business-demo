<template>
  <div class="mu-server">
    Mu server
    {{ this.$route.params.id}}
    {{ getCurrentMUServer }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCurrentMUServer']),
  },
  methods: {
    ...mapActions(['fetchMUServer']),
  },
  created(){
    this.fetchMUServer(this.$route.params.id)
  }
}
</script>
