<script setup lang="ts">
import {ref} from 'vue'
import { TheCard, Avatar, Textarea, Button  } from 'flowbite-vue'

const message = ref() 
</script>
<template>
  <the-card class="Card" >
    <vs-row>
        <!-- Setion de comentarios -->
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
            <h5 class="titleC text-xl font-dm font-bold  mb-5 tracking-tight text-gray-900 dark:text-slate-100">15 COMENTARIOS EN "WHATSAPP PLUS"</h5>
            <span ></span>
        </vs-col>
        <!-- comentario -->
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="4">
                    <Avatar img="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"></Avatar>
                </vs-col>
                <vs-col vs-type="flex" vs-justify="space-between" vs-align="start" vs-w="8">
                  <vs-row>
                    <vs-col vs-type="flex" vs-justify="space-between" vs-align="start" vs-w="8">
                        <p class="font-dm text-2sm  font-bold text-slate-200 italic "><span class="text-cyan-600">Jaime andres</span> <span> dice:</span></p>
                        <span class="text-sm font-dm font-bold text-slate-600">18 de julio de 2022 a las 6:38 PM</span>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="space-between" vs-align="start" vs-w="8">
                        <span class="font-dm text-2sm text-slate-300 ">Es muy buena y me gusta mucho porque puedo ber los estados eliminados y mensajes</span>
                    </vs-col>
                  </vs-row>
                </vs-col>
            </vs-row>
        </vs-col>

        <!-- setion para hacer comentario -->
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
            <h5 class="titleC text-xl font-dm font-bold  mb-5 tracking-tight text-gray-900 dark:text-slate-100">DEJA TU RESPUESTA</h5>
            <span ></span>
        </vs-col>
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
            <vs-row>
                <vs-col vs-w="12">
                    <Textarea rows="4" placeholder="Escribe tu mensaje..." v-model="message" label="Comentario *" />
                </vs-col>
                <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12" class="mt-4">
                    <Button gradient="green-blue">Publicar comentario</Button>
                </vs-col>
            </vs-row>
        </vs-col>
    </vs-row>
  </the-card>
</template>

<style scoped>
.Card{
    max-width: 90% !important;
}
.titleC{
    position: relative;
}
.titleC::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 45px;
    height: 5px;
    background: #1bbc9b;
    border-radius: 1px;
}

.titleC::before {
    content: '';
    position: absolute;
    width: calc(100% + 50px);
    border-bottom: 1px solid #1a0a3b;
    bottom: -3px;
    left: -25px;
}
</style>