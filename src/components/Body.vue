<script setup lang="ts">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, TheCard, Rating, Avatar} from 'flowbite-vue'

/* interface Aplicacion {
  imagen: string; // URL de la imagen
  nombre: string;
  descripcion: string;
  calificacion: number;
  urlDescarga: string;
}

const itemProps = defineProps({
    item: { type: Aplicacion, default: {
    imagen: 'https://ejemplo.com/imagen.jpg',
    nombre: 'Mi Aplicación',
    descripcion: 'Una breve descripción de la aplicación.',
    calificacion: 4.5,
    urlDescarga: 'https://ejemplo.com/descarga'
} },

})


const email = ref<string>();
const password = ref<string>(); */

</script>

<template>
    <div class="w-50">
        <the-card class="w-full">
            <Avatar style="margin: 0 auto;" size="xl" img="https://static.vecteezy.com/system/resources/previews/022/100/989/original/spotify-logo-transparent-free-png.png" class="mr-2.5" />
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Espotyfy</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              muisic
            </p>
            <Rating :rating="4" />
          </the-card>
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
