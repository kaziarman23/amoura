<template>
  <div class="min-h-screen flex items-center justify-center bg-pink-200">
    <div
      class="w-full max-w-md bg-rose-50 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
    >
      <h2 class="text-3xl font-bold mb-6 text-center text-rose-900">
        Welcome Back
      </h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- Email -->
        <div>
          <label class="block text-gray-700 mb-2 font-medium" for="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="you@example.com"
            class="w-full px-4 py-2 border rounded-lg outline-none"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password -->
        <div class="relative">
          <label class="block text-black mb-2 font-medium" for="password">
            Password
          </label>
          <div class="flex justify-between items-center border rounded-lg p-1">
            <input
              id="password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="••••••••"
              class="w-full px-4 py-2 outline-none pr-10"
            />
            <!-- Eye Icon -->
            <button
              type="button"
              @click="togglePassword"
              class="inset-y-0 flex items-center text-gray-500 hover:text-black"
            >
              <svg
                v-if="showPassword"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.03-10-9s4.477-9 10-9c1.003 0 1.977.147 2.875.422m3.46 3.302C20.453 7.456 22 9.892 22 11.5c0 2.705-3.582 7.5-10 7.5-1.54 0-3.003-.217-4.365-.625m7.24-7.24a3 3 0 11-4.24-4.24m7.24 7.24L3 3"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-.12.37-.26.733-.42 1.086M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>

          <p v-if="errors.password" class="text-red-500 text-sm mt-1">
            {{ errors.password }}
          </p>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-pink-600 text-white font-semibold py-2 rounded-lg hover:bg-pink-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loading" class="animate-pulse">Logging in...</span>
          <span v-else>Login</span>
        </button>
      </form>

      <p class="mt-6 text-center text-gray-600">
        Don’t have an account?
        <a href="#" class="text-pink-500 hover:underline font-medium">
          Sign up
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const errors = ref({});
const loading = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const validate = () => {
  errors.value = {};
  if (!email.value) {
    errors.value.email = "Email is required.";
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
    errors.value.email = "Invalid email address.";
  }

  if (!password.value) {
    errors.value.password = "Password is required.";
  } else if (password.value.length < 6) {
    errors.value.password = "Password must be at least 6 characters.";
  }

  return Object.keys(errors.value).length === 0;
};

const handleLogin = async () => {
  if (!validate()) return;

  loading.value = true;
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert(`✅ Logged in successfully as ${email.value}`);
    email.value = "";
    password.value = "";
  } catch {
    alert("❌ Login failed. Try again.");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
input:focus {
  transition: all 0.2s ease-in-out;
}
</style>
