<template>
  <footer class="bg-gray-900 text-gray-400">
    <div class="container mx-auto px-6 py-10">
      <!-- Top section -->
      <div
        class="flex justify-between items-start border-b border-gray-700 pb-10"
      >
        <!-- Email -->
        <div class="text-left">
          <h2 class="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p class="mb-6">
            Stay updated on new arrivals, special offers, and exclusive scents.
          </p>
          <div class="flex flex-col justify-between items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              class="p-3 rounded-lg text-white w-full border border-gray-700"
            />
            <button
              class="bg-white text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white hover:cursor-pointer transition w-full font-bold"
            >
              Subscribe
            </button>
          </div>
        </div>

        <!-- About -->
        <div class="flex flex-col items-start justify-between gap-5">
          <!-- Brand -->
          <div class="text-center md:text-left">
            <h2 class="text-2xl font-semibold text-white">Amoura</h2>
            <p class="mt-2 text-sm text-gray-400 max-w-sm">
              Discover timeless fragrances that define your style and leave a
              lasting impression.
            </p>
          </div>

          <!-- Navigation -->
          <nav class="flex flex-col md:flex-row gap-6 text-sm text-gray-400">
            <a href="#" class="hover:text-white transition-colors">Home</a>
            <a href="#" class="hover:text-white transition-colors">Shop</a>
            <a href="#" class="hover:text-white transition-colors">About</a>
            <a href="#" class="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>

      <!-- Bottom section -->
      <div
        class="flex flex-col md:flex-row justify-between items-center mt-5 text-sm"
      >
        <p>&copy; 2025 Amoura. All rights reserved.</p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition-colors"
            >Privacy Policy</a
          >
          <a href="#" class="hover:text-white transition-colors"
            >Terms of Service</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
