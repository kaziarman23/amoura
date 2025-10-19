<template>
  <div class="font-sans">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Footer from "./Components/SharedPageComponents/Footer.vue";
import Navbar from "./Components/SharedPageComponents/Navbar.vue";
</script>
