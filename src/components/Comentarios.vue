<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {ref, onMounted, defineProps} from 'vue'
import { TheCard, Avatar, Textarea, Button  } from 'flowbite-vue'
import { useCommentStore } from '@/stores/useCommentStore'


import { useConfig } from '@/composables/useConfig'
const configUse = ref(useConfig())

const commentStore = useCommentStore()
const { formulario, comentsArray }= storeToRefs(commentStore);
onMounted(async()=> {
    await commentStore.ComentsList(props.appId)
})

const props = defineProps({
    appId: Number,
    appName: String
})

const saveComnet = async () => {
    await commentStore.save(props.appId)
}

function convertirFecha(fechaString) {
  // Crear un objeto de fecha a partir de la cadena de fecha
  const fecha = new Date(fechaString);

  // Obtener el día, mes y año
  const dia = fecha.getDate();
  const mes = obtenerNombreMes(fecha.getMonth() + 1); // Sumar 1 ya que los meses en JavaScript van de 0 a 11
  const año = fecha.getFullYear();

  // Crear la cadena de fecha en el formato deseado
  const fechaFormateada = `${dia} de ${mes} de ${año}`;

  return fechaFormateada;
}

function obtenerNombreMes(numeroMes) {
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];
  return meses[numeroMes - 1];
}

const message = ref() 
</script>
<template>
  <the-card class="Card" >
    <vs-row>
        <!-- Setion de comentarios -->
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
            <h5 class="titleC text-xl font-dm font-bold  mb-5 tracking-tight text-gray-900 dark:text-slate-100"> {{ `${comentsArray.length} COMENTARIOS EN "${props.appName}"` }}</h5>
            <span ></span>
        </vs-col>
        <!-- comentario -->
        <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12">
            <vs-row>
                <template v-for="comment in comentsArray">
                    <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="4" class="mb-4">
                        <Avatar :img="configUse.baseURL +  comment.user.img_path"></Avatar>
                    </vs-col>
                    <vs-col vs-type="flex" vs-justify="space-between" vs-align="start" vs-w="8" class="mb-4">
                      <vs-row>
                        <vs-col vs-type="flex" vs-justify="space-between" vs-align="start" vs-w="8">
                            <p class="font-dm text-2sm  font-bold text-slate-200 italic "><span class="text-cyan-600">{{ comment.user.name }}</span> <span> dice:</span></p>
                            <span class="text-sm font-dm font-bold text-slate-600"> {{ convertirFecha(comment.comment_date) }} </span>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="space-between" vs-align="start" vs-w="8">
                            <span class="font-dm text-2sm text-slate-300 ">{{ comment.comment }}</span>
                        </vs-col>
                      </vs-row>
                    </vs-col>
                </template>
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
                    <Textarea rows="4" v-model="formulario.comment" placeholder="Escribe tu mensaje..."  label="Comentario *" />
                </vs-col>
                <vs-col vs-type="flex" vs-justify="start" vs-align="center" vs-w="12" class="mt-4">
                    <Button gradient="green-blue" @click="saveComnet()">Publicar comentario</Button>
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