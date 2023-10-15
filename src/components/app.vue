<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { TheCard, Avatar, Rating } from 'flowbite-vue';


interface Aplicacion {
  imagen: string; // URL de la imagen
  nombre: string;
  descripcion: string;
  version: string;
  calificacion: number;
  company: string;
  urlDescarga: string;
}

const props = defineProps({
  item: {
    type: Object as () => Aplicacion,
    default: () => ({
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
    <the-card class="w-full">
      <Avatar style="margin: 0 auto;" size="xl" :img="props.item.imagen" class="mr-2.5" />
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ props.item.nombre }}</h5>
      <p class="font-sans text-gray-600 dark:text-gray-500">{{ props.item.version }}</p>
      <p class="font-normal text-gray-800 dark:text-gray-400">{{ props.item.company }}</p>
      <Rating :rating="props.item.calificacion" />
    </the-card>
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
