<template>
  <footer class="bg-pink-300 text-black">
    <div class="container mx-auto px-6 py-10">
      <!-- Top section -->
      <div
        class="flex flex-col md:flex-row justify-between items-start border-b border-rose-700 pb-10 gap-10"
      >
        <!-- Email Subscription -->
        <div class="flex-1 text-left">
          <h2 class="text-3xl font-bold mb-4 text-black">
            Subscribe to Our Newsletter
          </h2>
          <p class="mb-6 text-black">
            Stay updated on new arrivals, special offers, and exclusive scents.
          </p>
          <div class="flex flex-col justify-between items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              class="p-3 rounded-lg w-full border border-pink-500 bg-pink-400 text-black placeholder-black outline-none"
            />
            <button
              class="px-6 py-3 rounded-lg border border-pink-600 text-pink-600 hover:bg-pink-700 hover:text-white cursor-pointer transition w-full font-bold"
            >
              Subscribe
            </button>
          </div>
        </div>

        <!-- About & Navigation -->
        <div class="flex-1 flex flex-col gap-8">
          <!-- Brand -->
          <div>
            <h2 class="text-2xl font-semibold text-black">Amoura</h2>
            <p class="mt-2 text-sm text-black max-w-sm">
              Discover timeless fragrances that define your style and leave a
              lasting impression.
            </p>
          </div>

          <!-- Navigation -->
          <nav class="flex flex-col md:flex-row gap-6 text-sm text-black">
            <router-link to="/" class="hover:text-black transition-colors"
              >Home</router-link
            >
            <router-link
              to="/collections"
              class="hover:text-black transition-colors"
              >Collections</router-link
            >
            <router-link to="/about" class="hover:text-black transition-colors"
              >About</router-link
            >
            <router-link to="/login" class="hover:text-black transition-colors"
              >Login</router-link
            >
          </nav>
        </div>
      </div>

      <!-- Bottom section -->
      <div
        class="flex flex-col md:flex-row justify-between items-center mt-5 text-sm text-black"
      >
        <p>&copy; 2025 Amoura. All rights reserved.</p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-black transition-colors"
            >Privacy Policy</a
          >
          <a href="#" class="hover:text-black transition-colors"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
