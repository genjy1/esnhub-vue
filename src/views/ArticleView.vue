<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const article = ref({})
const id = useRoute().params.id

onMounted(async () => {
  try {
    axios
      .get(`https://twisty-efficacious-archeology.glitch.me/news/${id}`)
      .then((response) => (article.value = response.data))
  } catch (error) {
    console.warn(error)
  }
})
</script>
<template>
  <main class="w-4/5 mx-auto my-0 py-4 px-4 font-display">
    <div class="wrapper w-5/6 mx-auto my-0 flex flex-col text-white bg-zinc-800 p-4 rounded-xl">
      <h1 class="font-extrabold text-3xl">{{ article.name }}</h1>
      <h2 class="my-4">{{ article.author }}</h2>
      <img :src="article.img" :key="article.id" alt="" class="w-screen mb-4 rounded-lg" />
      <p>{{ article.text }}</p>
    </div>
    <div class="form-wrapper w-5/6 mx-auto my-0 mt-4 text-white">
      <h3>Комментарии</h3>
      <form action="#" class="mt-4">
        <div class="input-group relative">
          <input
            type="text"
            name="message"
            id="messageInput"
            class="outline-none w-full bg-zinc-800 py-6 px-2 rounded-xl border-transparent h-12 transition-all focus:h-32 focus:border-2 focus:border-zinc-700"
          />
          <img
            src="../components/icons/sendmessage.svg"
            alt=""
            class="w-8 absolute top-2 right-4"
          />
        </div>
      </form>
    </div>
  </main>
</template>
