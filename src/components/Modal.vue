<script setup lang="ts">

import { defineProps,ref } from 'vue';
import {  Badge , Rating, Button ,Avatar} from 'flowbite-vue'
import { useConfig } from '@/composables/useConfig'
const configUse = ref(useConfig())

import { useAppStore } from '@/stores/useAppStore'
const appStore = useAppStore()


interface Aplicacion {
  id: string,
  imagen: string; // URL de la imagen
  nombre: string;
  descripcion: string;
  version: string;
  calificacion: number;
  company: string;
  actualizacion: string,
  tamaño: string,
  requerimientos: string,
  descargas: string,
  urlDescarga: string;
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
      actualizacion: '14 de octubre de 2023',
      descargas: '500.000.000+',
      tamaño: '161.25 MB',
      requerimientos: 'Android 5.0+',
      urlDescarga: 'https://spotify.uptodown.com/android/post-download/109645749',
    })
  }
});

console.log(props.item, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
const downloadApp= (link) => {
  appStore.saveDownload(props.item.id);
  window.open(link, '_blank')
}

</script>

<template>
    <div >
        <div class="block mt-5 p-4 mb-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-6xl">
            <vs-row>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                <vs-row>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                      <Avatar style="margin: 0 auto;" size="xl" :img="configUse.baseURL + props.item.imagen" class="mr-2.5" />
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" class="mt-3">
                      <Button @click="downloadApp(props.item.urlDescarga)" gradient="cyan-blue">
                          <template #prefix>
                            <img  src="/download.svg"/>
                          </template> Descargar Apk
                      </Button>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                      <Rating :rating="4" />
                    </vs-col>
                  </vs-row>
              </vs-col>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
                <vs-row>
                  <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{{ props.item.nombre }}</h5>
                        <p class="ml-4 font-normal text-gray-700 dark:text-gray-400"> 14.2.0 </p>
                    </vs-col>
                  <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                    <Badge v-for="tag in props.item.tags" type="green">{{ tag.name }}</Badge>
                  </vs-col>
                  <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                    <vs-row class="mt-3">
                      <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="4">
                        <vs-row class="mt-3">
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <p class="font-dm  text-gray-900 dark:text-white"> <b> Desarrollador:</b></p> 
                          </vs-col>
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <span class="font-dm text-sm  text-gray-700 dark:text-gray-300">  {{ props.item.company}} </span> 
                          </vs-col>
                        </vs-row>
                      </vs-col>
                      <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="4">
                        <vs-row class="mt-3">
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <p class="font-dm  text-gray-900 dark:text-white"> <b> Actualización:</b></p> 
                          </vs-col>
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <span class="font-dm text-sm  text-gray-700 dark:text-gray-300">  {{ props.item.actualizacion}} </span> 
                          </vs-col>
                        </vs-row>
                      </vs-col>
                      <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="4">
                        <vs-row class="mt-3">
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <p class="font-dm  text-gray-900 dark:text-white"> <b> Tamaño:</b></p> 
                          </vs-col>
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <span class="font-dm text-sm  text-gray-700 dark:text-gray-300">  {{ props.item.tamaño}} </span> 
                          </vs-col>
                        </vs-row>
                      </vs-col>
                      <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="4">
                        <vs-row class="mt-3">
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <p class="font-dm  text-gray-900 dark:text-white"> <b> Versión:</b></p> 
                          </vs-col>
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <span class="font-dm text-sm  text-gray-700 dark:text-gray-300">  {{ props.item.version}} </span> 
                          </vs-col>
                        </vs-row>
                      </vs-col>
                      <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="4">
                        <vs-row class="mt-3">
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <p class="font-dm  text-gray-900 dark:text-white"> <b> Requerimientos:</b></p> 
                          </vs-col>
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <span class="font-dm text-sm  text-gray-700 dark:text-gray-300">  {{ props.item.requerimientos}} </span> 
                          </vs-col>
                        </vs-row>
                      </vs-col>
                      <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="4">
                        <vs-row class="mt-3">
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <p class="font-dm  text-gray-900 dark:text-white"> <b> Descargas:</b></p> 
                          </vs-col>
                          <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
                            <span class="font-dm text-sm  text-gray-700 dark:text-gray-300">  {{ props.item.descargas}} </span> 
                          </vs-col>
                        </vs-row>
                      </vs-col>
                    </vs-row>
                  </vs-col>
                </vs-row>
              </vs-col>
            </vs-row>
        </div>

    </div>
</template>

<style scoped>
 .head{
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;   
}
</style>
