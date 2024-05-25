<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { TheCard, Avatar, Rating } from 'flowbite-vue';
import { useConfig } from '@/composables/useConfig'
const configUse = ref(useConfig())

const urlBase = configUse.value.baseURL
interface Aplicacion {
  img_path: string; // URL de la imagen
  name: string;
  description: string;
  version: string;
  qualification: number;
  user_id: string;
  download_link: string;
}

const props = defineProps({
  item: {
    type: Object as () => Aplicacion,
    default: () => ({
      id: '',
      imagen: 'https://static.vecteezy.com/system/resources/previews/006/541/759/original/spotify-logo-on-white-background-free-vector.jpg',
      nombre: 'Spotify',
      descripcion: 'Espotyfy, tu plataforma musical favorita. Explora millones de canciones, descubre nuevos artistas y crea listas de reproducción personalizadas. Disfruta de recomendaciones adaptadas a tu gusto y conecta con amigos. ¡Tu experiencia musical perfecta en un solo lugar!',
      version: '10.14',
      calificacion: 4.5,
      company: 'Spotify Technology S.A',
      urlDescarga: 'https://spotify.uptodown.com/android/post-download/109645749'
    })
  }
});

const email = ref<string>('');
const password = ref<string>('');

</script>

<template>
  <div>
  <RouterLink :to="{path: 'app', query: {id: props.item.id}}">
    <the-card class="w-full mb-3" >
      <Avatar style="margin: 0 auto;" size="xl" :img="urlBase + props.item.img_path" class="mr-2.5" />
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ props.item.name }}</h5>
      <p class="font-sans text-gray-600 dark:text-gray-500">Version: {{ props.item.version }}</p>
      <p class="font-normal text-gray-800 dark:text-gray-400">{{ props.item.comapy }}</p>
      <Rating :rating="props.item.calificacion" />
    </the-card>
  </RouterLink>
</div>
</template>

<style scoped>
.head {
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
}
</style>
