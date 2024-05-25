<script setup lang="ts">
import { ref, onMounted,computed } from 'vue'
import { storeToRefs } from 'pinia'


import Head from '../components/Head.vue'
import Footer from '../components/Footer.vue'
import app from '../components/app.vue'
import subHead from '../components/subHead.vue'

import { useAppStore } from '@/stores/useAppStore'
const appStore = useAppStore()

const {arrayApps} = storeToRefs(appStore) 

const page = ref(1);
const pageSize = ref(8);
  onMounted(async () => {
    await appStore.AppList(false);
  })

  
  const totalPages =  computed(() => {
      return Math.ceil(arrayApps.value.length / pageSize.value);
})

  const displayedApps =  computed(() => {
      const startIndex = (page.value - 1) * pageSize.value;
      const endIndex = startIndex + pageSize.value;
      return arrayApps.value.slice(startIndex, endIndex);
  })

console.log(totalPages);

</script>

<template>
    <div style="width: 100%;">
    <Head></Head>
    <section class="hero">
        <div class="dark"></div>
        <div class="text-container">
            <h1>
                ¡Todos los videojuegos son gratis!
            </h1>
        </div>
        <div class="container-img">
            <img src="/herovideogames.jpg" alt="">
        </div>
    </section>
    <div class="containerListApss">
      <vs-row >
        <vs-divider  position="left"> <span class="text-xl font-dm  tracking-tight text-gray-900 dark:text-slate-300">Juegos</span></vs-divider>
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12" >
          <h3 class="text-4xl font-dm  tracking-tight text-gray-900 dark:text-slate-300">Video Juegos gratis!</h3>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12" >
          <p class="text-gray-600 mb-1 font-dm dark:text-gray-300">Descarga Videojuegos de todos los tipos <span class="text-cyan-500">bajos recursos</span>,<span class="text-cyan-500"> Medios recursos</span>, y más</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12" >
          <span class="font-bold text-gray-600 mb-4  font-dm dark:text-gray-300">¡Todas tus Videojuegos favoritos están aquí!</span>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="3" :key="(page - 1) * pageSize + index" v-for="(item, index) in displayedApps">
          <app :item="item" ></app>
        </vs-col>
      </vs-row>
      <vs-pagination  v-model="page" :total="totalPages"  />
    </div>
    
    <Footer></Footer>
  </div>
</template>
<style scoped>
.containerListApss{
  padding-top: 7rem;
  margin: 0 auto;
  width: 55rem;
}

.hero{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center
}

.container-img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -2;
}

.dark{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #11182793;
    z-index: -1;
}

.text-container{
    text-align: center
}

.text-container h1{
    font-size: 4.5rem;
    color: white;
}

.container-img img{
    object-fit: cover;
    width: 100%;
    height: 100%
}

</style>