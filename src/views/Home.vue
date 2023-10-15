<script setup lang="ts">
import Head from '../components/Head.vue'
import Body from '../components/app.vue'
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

</script>

<template>
    <div style="width: 100%;">
    <Head></Head>
    <div class="containerListApss">
      <vs-row >
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3" v-for="item in appsArray">
          <Body :item="item" ></Body>
        </vs-col>
      </vs-row>
    </div>
    <Button gradient="purple-blue" outline>Purple to blue</Button>

    <modal></modal>
  </div>
</template>
<style scoped>
.containerListApss{
  padding-top: 10rem;
  width: 55rem;
}

</style>