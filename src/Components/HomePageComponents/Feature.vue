<template>
  <section class="h-screen bg-pink-200 flex items-center">
    <div
      class="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10"
    >
      <!-- Left Image -->
      <div class="md:w-1/2 flex justify-center">
        <img
          src="https://i.pinimg.com/736x/e9/10/fa/e910fa5f0b973b5eb3e974bb4b3c1815.jpg"
          alt="Feature Image"
          class="rounded-2xl shadow-lg w-3/4 md:w-1/2"
        />
      </div>

      <!-- Right Text & Features -->
      <div class="md:w-1/2 text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Why Choose <span class="text-pink-600">AMOURA</span>
        </h2>
        <p class="mb-8">
          Discover why our perfumes stand out with elegance, quality, and fast
          delivery. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, quas vitae animi similique qui aut odio voluptas rerum
          ipsa ipsum, saepe sunt esse delectus dicta obcaecati reiciendis magnam
          hic laboriosam?
        </p>

        <!-- Key Points -->
        <div class="space-y-6">
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z"
              />
            </svg>

            <div>
              <h3 class="font-semibold text-lg">Premium Quality</h3>
              <p class="text-gray-700 text-sm">
                Crafted with the finest ingredients sourced worldwide.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
                clipRule="evenodd"
              />
              <path
                d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z"
              />
            </svg>
            <div>
              <h3 class="font-semibold text-lg">Elegant Packaging</h3>
              <p class="text-gray-700 text-sm">
                Beautiful bottles perfect for your vanity or as a gift.
              </p>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 class="font-semibold text-lg">Fast Delivery</h3>
              <p class="text-gray-700 text-sm">
                Get your favorite fragrances delivered quickly and safely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
