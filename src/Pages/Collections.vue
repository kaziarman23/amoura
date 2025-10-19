<template>
  <section class="py-10 px-6 bg-pink-200 min-h-screen">
    <div class="max-w-7xl mx-auto text-center mb-10">
      <h2 class="text-4xl font-bold text-rose-900 mb-2 tracking-wide">
        Our Collection
      </h2>
      <p class="text-rose-600 text-lg">
        Discover timeless elegance — crafted for every mood and moment.
      </p>
    </div>

    <!-- Product Grid -->
    <div
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
    >
      <div
        v-for="item in products"
        :key="item.id"
        class="bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300 p-5 w-full max-w-xs"
      >
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-56 object-cover rounded-xl mb-4"
        />

        <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {{ item.title }}
        </h3>

        <p class="text-sm text-gray-500 line-clamp-3 mb-3">
          {{ item.description }}
        </p>

        <div class="flex justify-between items-center">
          <span class="text-rose-700 font-semibold text-lg">
            ${{ item.price }}
          </span>
          <span
            class="flex items-center text-yellow-500 text-sm font-medium gap-1"
          >
            ⭐ {{ item.rating?.rate }}
          </span>
        </div>

        <button
          class="mt-4 w-full bg-rose-700 text-white py-2 rounded-lg hover:bg-rose-800 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Products from "../../public/Products.json";

const products = ref(Products);
</script>

<style scoped>
/* Optional line clamping for titles and descriptions */
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
