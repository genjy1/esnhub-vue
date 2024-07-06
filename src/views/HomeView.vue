<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const news = ref()

onMounted(async () => {
  try {
    axios
      .get('https://twisty-efficacious-archeology.glitch.me/news')
      .then((response) => (news.value = response.data))
  } catch (error) {
    console.warn(error)
  }
})
</script>

<template>
  <main class="w-4/5 mx-auto my-0 py-4 flex flex-col gap-4 items-center">
    <RouterLink
      :to="{ name: 'article', params: { id: article.id } }"
      v-for="article in news"
      :key="article.id"
      class="border-transparent p-4 rounded-xl md:w-3/5 flex flex-col gap-4 text-white font-display bg-zinc-800"
    >
      <h2 class="text-xl font-bold">{{ article.name }}</h2>
      <img :src="article.img" :key="article.id" alt="Article image" class="rounded-xl" />
      <p class="date-wrap">
        {{
          typeof article.date == 'string'
            ? new Date(article.date).toLocaleDateString('ru-RU')
            : new Date().toLocaleDateString('ru-RU')
        }}
      </p>
    </RouterLink>
  </main>
</template>
