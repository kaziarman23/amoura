<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-200 text-gray-200 px-6"
  >
    <div class="text-center">
      <!-- Heroicon: Exclamation Triangle -->
      <ExclamationTriangleIcon class="w-20 h-20 mx-auto text-red-500 mb-6" />

      <h1 class="text-5xl font-bold text-black mb-4">404</h1>
      <p class="text-xl text-black mb-6">
        Oops! The page you are looking for does not exist.
      </p>

      <router-link
        to="/"
        class="inline-block bg-pink-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 hover:text-white transition-colors"
      >
        Go Back Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
</script>

<style scoped></style>
