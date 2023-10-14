<script setup lang="ts">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink, TheCard, Rating, Avatar} from 'flowbite-vue'

const email = ref();
const password = ref();
</script>

<template>
    <div class="w-50">
        <the-card class="w-full">
            <Avatar style="margin: 0 auto;" size="xl" img="https://static.vecteezy.com/system/resources/previews/022/100/989/original/spotify-logo-transparent-free-png.png" class="mr-2.5" />
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Espotyfy</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              muisic
            </p>
                <Button color="default">
        <template #prefix>
            <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            </template>
        </Button>
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
