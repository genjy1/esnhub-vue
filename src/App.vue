<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const isOpen = ref(false)
</script>

<template>
  <header class="border-b fixed backdrop-blur-sm w-full text-white">
    <div class="header__wrapper w-4/5 my-0 mx-auto h-full py-3 flex justify-between">
      <RouterLink
        class="font-bold hover:text-white font-display text-purple-500 transition drop-shadow-xl shadow-white"
        :to="{ name: 'news' }"
        >ESNHub
      </RouterLink>
      <nav class="hidden justify-between md:flex">
        <ul class="flex gap-4">
          <li>
            <RouterLink class="hover:text-purple-500 font-display transition" :to="{ name: 'news' }"
              >Новости</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="hover:text-purple-500 font-display transition"
              :to="{ name: 'articles' }"
              >Статьи</RouterLink
            >
          </li>
          <li>
            <RouterLink class="hover:text-purple-500 font-display transition">Турниры</RouterLink>
          </li>
          <li>
            <RouterLink class="hover:text-purple-500 font-display transition"
              >Статистика</RouterLink
            >
          </li>
          <li>
            <button
              class="font-display bg-purple-500 px-2 rounded hover:bg-purple-700 transition"
              @click="isOpen = true"
            >
              Войти
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div
    class="overlay fixed backdrop-blur h-full w-full font-display transition-all"
    v-show="isOpen"
  >
    <div
      class="modal w-80 my-0 mx-auto py-4 top-48 text-white flex flex-col bg-zinc-800 relative rounded-xl"
    >
      <header class="flex justify-between items-center w-4/5 mx-auto my-0">
        <h1 class="font-bold text-xl">ESNHub</h1>
        <button @click="isOpen = false">
          <svg
            width="34"
            height="35"
            viewBox="0 0 34 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.1317 26.3387L8.16118 9.36816"
              stroke="#6600CC"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M25.8388 9.36831L8.86829 26.3389"
              stroke="#6600CC"
              stroke-width="4"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </header>
      <form action="#" class="flex flex-col gap-y-4 items-center my-8">
        <input
          type="text"
          class="w-64 mb-8 mt-4 bg-zinc-600 outline-none px-4 py-2 rounded-md border-transparent focus:border-green-900"
        /><input
          type="text"
          class="w-64 mb-16 bg-zinc-600 outline-none px-4 py-2 rounded-md border-transparent focus:border-green-900"
        />
        <button type="submit" class="w-64 border px-8 py-2 rounded-lg font-display">Войти</button>
      </form>
    </div>
  </div>
  <RouterView class="pt-16" />
</template>
