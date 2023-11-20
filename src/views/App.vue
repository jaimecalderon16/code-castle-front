<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { Input, Button, Textarea, Select } from 'flowbite-vue'
import Head from '../components/Head.vue'
import Footer from '../components/Footer.vue'
import { AuthenticationStore } from '@/stores/AuthentiacationStore'
import { useAppStore } from '@/stores/useAppStore'
import Modal from '../components/Modal.vue'
import Comentarios from '../components/Comentarios.vue'
const authenticationStore = AuthenticationStore()
const appStore = useAppStore()
const {user} = storeToRefs(authenticationStore) 
const {app} = storeToRefs(appStore) 

const route = useRoute()
const appId = ref<number>();
appId.value = route.query.id

onMounted(async() => {
  await appStore.findApp(appId.value)
  console.log(app.value, 'asdasdsadsadsadsad');
  
})

</script>

<template>
    <div style="width: 100%;">
    <Head></Head>
    <vs-row style="margin: 4rem 0;">
        <modal :item="app"></modal>
        <Comentarios :app-id="appId" :app-name="'App'"></Comentarios>
    </vs-row>
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