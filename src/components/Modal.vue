<script setup lang="ts">
import { defineProps, ref } from 'vue';
import {  TheCard, Rating, Button ,Avatar} from 'flowbite-vue'

const email = ref();
const password = ref();
</script>

<template>
    <div >
        <div class="block mt-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-6xl">
            <vs-row>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
                <vs-row>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <Avatar style="margin: 0 auto;" size="xl" img="https://static.vecteezy.com/system/resources/previews/022/100/989/original/spotify-logo-transparent-free-png.png" class="mr-2.5" />
              </vs-col>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <Button gradient="cyan-blue">
                    <template #prefix>
                        <font-awesome-icon icon="fa-solid fa-download" />
                    </template> Descargar Apk
                </Button>
              </vs-col>
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                <Rating :rating="4" />
              </vs-col>
            </vs-row>
              </vs-col>
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Espotyfy</h5>
                    <p class="ml-4 font-normal text-gray-700 dark:text-gray-400"> 14.2.0 </p>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
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
