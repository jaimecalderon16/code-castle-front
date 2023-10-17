<script setup lang="ts">
import { ref } from 'vue'
import Head from '../components/Head.vue'
import Footer from '../components/Footer.vue'
import app from '../components/app.vue'
import Comentarios from '../components/Comentarios.vue'
import subHead from '../components/subHead.vue'
import { TheCard, Input, Button  } from 'flowbite-vue'
import Modal from '../components/Modal.vue'


const appsArray = [{
      imagen: 'https://static.vecteezy.com/system/resources/previews/006/541/759/original/spotify-logo-on-white-background-free-vector.jpg',
      nombre: 'Spotify',
      descripcion: 'Espotyfy, tu plataforma musical favorita. Explora millones de canciones, descubre nuevos artistas y crea listas de reproducción personalizadas. Disfruta de recomendaciones adaptadas a tu gusto y conecta con amigos. ¡Tu experiencia musical perfecta en un solo lugar!',
      version: '10.14',
      calificacion: 4.5,
      company: 'Spotify Technology S.A',
      urlDescarga: 'https://spotify.uptodown.com/android/post-download/109645749'
    },
    {
    imagen: 'https://img.freepik.com/vector-premium/icono-redes-sociales-instagram-logotipo-degradado-redes-sociales_197792-4682.jpg',
    nombre: 'Instagram',
    descripcion: 'Captura y comparte momentos de tu vida con Instagram. Publica fotos y videos, descubre nuevas cuentas y sigue a amigos y celebridades. Sé parte de una comunidad creativa y visual.',
    version: '15.2.0',
    calificacion: 5.8,
    company: 'Meta Platforms, Inc.',
    urlDescarga: 'https://instagram.com/download'
  },
  {
    imagen: 'https://static.vecteezy.com/system/resources/previews/021/491/992/original/whatsapp-logo-tansparent-free-png.png',
    nombre: 'WhatsApp',
    descripcion: 'Mantente conectado con amigos y familiares en todo el mundo con WhatsApp. Envía mensajes, realiza llamadas y videollamadas gratuitas, comparte fotos y archivos de forma segura.',
    version: '2.22.0',
    calificacion: 3.6,
    company: 'Meta Platforms, Inc.',
    urlDescarga: 'https://whatsapp.com/download'
  },
  {
    imagen: 'https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png',
    nombre: 'YouTube',
    descripcion: 'Descubre y reproduce videos de todo el mundo con YouTube. Desde música y entretenimiento hasta tutoriales y vlogs, encuentra contenido que te apasione y suscríbete a tus canales favoritos.',
    version: '16.4.0',
    calificacion: 4.7,
    company: 'Google LLC',
    urlDescarga: 'https://youtube.com/download'
  },
  {
    imagen: 'https://fotografias.lasexta.com/clipping/cmsimages01/2023/07/24/99A6058D-B4B9-47A6-9DDD-624AAFDD5349/nuevo-logotipo-twitter-ahora-llamada_104.jpg?crop=750,750,x277,y0&width=1200&height=1200&optimize=low&format=webply',
    nombre: 'X',
    descripcion: 'Únete a la conversación global con Twitter. Comparte tus pensamientos en tweets, sigue a personas interesantes y mantente al tanto de las últimas noticias y tendencias.',
    version: '8.3.1',
    calificacion: 2.2,
    company: 'Twitter, Inc.',
    urlDescarga: 'https://twitter.com/download'
  },
  {
    imagen: 'https://c0.klipartz.com/pngpicture/200/830/gratis-png-google-map-logo-google-maps-navegacion-ubicacion.png',
    nombre: 'Google Maps',
    descripcion: 'Navega el mundo con Google Maps. Encuentra direcciones, descubre lugares cercanos, revisa reseñas y fotos de negocios, y obtén información en tiempo real sobre el tráfico.',
    version: '10.12.0',
    calificacion: 1.9,
    company: 'Google LLC',
    urlDescarga: 'https://maps.google.com/download'
  }
  ]

const currentx = ref(1)
</script>

<template>
    <div style="width: 100%;">
    <Head></Head>
      <subHead></subHead>
    <div class="containerListApss">
      <vs-row >
        <vs-divider  position="left"> <span class="text-xl font-dm  tracking-tight text-gray-900 dark:text-slate-300">Apps</span></vs-divider>
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12" >
          <h3 class="text-4xl font-dm  tracking-tight text-gray-900 dark:text-slate-300">¡Aplicaciones gratis!</h3>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12" >
          <p class="text-gray-600 mb-1 font-dm dark:text-gray-300">Descarga aplicaciones para ver <span class="text-cyan-500">películas</span>,<span class="text-cyan-500"> descargar videos</span>, y más</p>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12" >
          <span class="font-bold text-gray-600 mb-4  font-dm dark:text-gray-300">¡Todas tus Apps favoritas están aquí!</span>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" :key="index" vs-w="3" v-for="(item, index) in appsArray">
          <app :item="item" ></app>
        </vs-col>
      </vs-row>
      <vs-pagination  v-model="page" :length="20" />
    </div>
    <Comentarios></Comentarios>
    <modal></modal>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.containerListApss{
  padding-top: 7rem;
  margin: 0 auto;
  width: 55rem;
}

</style>