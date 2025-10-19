<template>
  <header
    class="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-200 text-black"
  >
    <div class="container mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Brand -->
      <router-link
        to="/"
        class="text-2xl font-extrabold text-pink-600 tracking-wide"
      >
        AMOURA
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-bold">
        <router-link
          to="/"
          class="hover:text-pink-600 transition-colors"
          :class="{ 'text-pink-600': $route.path === '/' }"
          >Home</router-link
        >
        <router-link
          to="/collections"
          class="hover:text-pink-600 transition-colors"
          :class="{ 'text-pink-600': $route.path === '/collections' }"
          >Collections</router-link
        >
        <router-link
          to="/about"
          class="hover:text-pink-600 transition-colors"
          :class="{ 'text-pink-600': $route.path === '/about' }"
          >About</router-link
        >
        <router-link
          to="/login"
          class="hover:text-pink-600 transition-colors"
          :class="{ 'text-pink-600': $route.path === '/login' }"
          >Login</router-link
        >
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden focus:outline-none hover:text-white transition-colors"
        aria-label="Toggle menu"
      >
        <Bars3Icon v-if="!menuOpen" class="w-7 h-7" />
        <XMarkIcon v-else class="w-7 h-7" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <nav
        v-if="menuOpen"
        class="md:hidden bg-gray-800 text-gray-300 px-6 py-4 space-y-3 border-t border-gray-700"
      >
        <router-link
          to="/"
          class="block hover:text-white transition-colors"
          @click="menuOpen = false"
          >Home</router-link
        >
        <router-link
          to="/collections"
          class="block hover:text-white transition-colors"
          @click="menuOpen = false"
          >Collections</router-link
        >
        <router-link
          to="/about"
          class="block hover:text-white transition-colors"
          @click="menuOpen = false"
          >About</router-link
        >
        <router-link
          to="/login"
          class="block hover:text-white transition-colors"
          @click="menuOpen = false"
          >Login</router-link
        >
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const menuOpen = ref(false);
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
