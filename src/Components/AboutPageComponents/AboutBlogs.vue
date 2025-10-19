<template>
  <section
    class="py-16 px-6 min-h-screen"
  >
    <!-- Header -->
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="text-4xl font-bold text-rose-900 mb-2 tracking-wide">
        Perfume Insights & Stories
      </h2>
      <p class="text-lg">
        Explore our curated blogs about fragrances, luxury scents, and our
        Auréme Parfums collection.
      </p>
    </div>

    <!-- Blog Grid -->
    <div
      class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto"
    >
      <div
        v-for="blog in blogs"
        :key="blog.id"
        class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 flex flex-col"
      >
        <img
          :src="blog.image"
          :alt="blog.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-5 flex flex-col flex-1">
          <h3 class="text-base font-semibold text-rose-900 mb-2 line-clamp-2">
            {{ blog.title }}
          </h3>
          <p class="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
            {{ blog.excerpt }}
          </p>
          <div class="flex justify-between items-center text-xs text-gray-500">
            <span>By {{ blog.author }}</span>
            <span>{{ blog.date }}</span>
          </div>
          <button
            class="mt-4 bg-rose-700 text-white py-2 rounded-xl hover:bg-rose-800 transition cursor-pointer"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import data from "../../../public/BlogData.json";

const blogs = ref(data);
</script>

<style scoped>
/* Optional line clamping */
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
