<template>
  <div id="app">
    <div class="bg-gray-50 min-h-screen relative">
      <MainNavbar></MainNavbar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainNavbar from '@/components/main/MainNavbar'

export default {
  components: {
    MainNavbar,
  },
}
</script>
