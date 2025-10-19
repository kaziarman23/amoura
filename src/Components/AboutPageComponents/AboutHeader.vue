<template>
  <div class="py-10 flex flex-col items-center gap-16">
    <div
      class="relative max-w-4xl mx-auto rounded-3xl text-center p-10 animate-fade-in bg-rose-50 shadow-lg"
    >
      <h2 class="text-6xl font-bold text-rose-900 mb-2 tracking-wide">
        About Us
      </h2>
      <p class="text-lg italic mb-6">The Essence of Elegance</p>
      <p class="text-base leading-relaxed text-gray-700">
        At <span class="font-semibold text-rose-900">Amoura Parfums</span>, we
        craft timeless fragrances that embody sophistication, passion, and
        individuality. Each scent is meticulously designed to awaken emotion and
        capture the art of fine perfumery.
      </p>
    </div>

    <!-- Detail Cards -->
    <div class="flex flex-col md:flex-row gap-10 max-w-5xl w-full justify-center px-4">
      <!-- Card 1 -->
      <div
        class="bg-rose-50 rounded-3xl shadow-lg p-8 flex-1 text-center hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
      >
        <h3 class="text-2xl font-bold text-rose-900 mb-3">Our Vision</h3>
        <p class="text-gray-700 text-left leading-relaxed">
          To redefine the world of fragrance by blending artistry, passion, and
          innovation, creating perfumes that leave unforgettable impressions.
        </p>
      </div>

      <!-- Card 2 -->
      <div
        class="bg-rose-50 rounded-3xl shadow-lg p-8 flex-1 text-center hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
      >
        <h3 class="text-2xl font-bold text-rose-900 mb-3">Our Commitment</h3>
        <p class="text-gray-700 text-left leading-relaxed">
          Using the finest ingredients and meticulous craftsmanship, we ensure
          every bottle embodies elegance, quality, and timeless appeal.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}
</style>
