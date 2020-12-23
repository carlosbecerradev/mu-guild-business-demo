<template>
  <div id="app">
    <div class="bg-gray-50 min-h-screen flex flex-col">
      <main-navbar />
      <router-view />
      <main-footer class="mt-auto" />
    </div>
  </div>
</template>

<script>
import MainNavbar from "@/components/main/MainNavbar";
import MainFooter from "@/components/main/MainFooter";

export default {
  components: {
    MainNavbar,
    MainFooter,
  },
};
</script>
