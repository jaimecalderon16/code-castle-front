<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Input, Button, Textarea, Select } from 'flowbite-vue'
import Head from '../components/Head.vue'
import Footer from '../components/Footer.vue'
import { AuthenticationStore } from '@/stores/AuthentiacationStore'
import { useAppStore } from '@/stores/useAppStore'
const authenticationStore = AuthenticationStore()
const appStore = useAppStore()
const {user} = storeToRefs(authenticationStore) 
const {formulario, categories} = storeToRefs(appStore) 
const disabled = ref(true);
const visualiceAppForm = ref(false);
const chip = ref('');
const chips = ref(['vuejs','asdss']);
const app = ref({
    name: '',
});

const addTag = () => {
    chips.value.push(chip.value)
    chip.value = '';
}

const remove = (item: number) => {
      chips.value.splice(chips.value.indexOf(item), 1)
}

</script>

<template>
    <div style="width: 100%;">
    <Head></Head>
    <vs-row style="margin: 4rem 0;">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <vs-avatar size="90px" :src="user.image"/>
        </vs-col>
        <vs-col vs-type="flex"  vs-justify="center" vs-align="center" vs-w="12" >
            <Button @click="disabled = false" color="yellow" style="margin: 1rem;">Editar</Button>
            <Button @click="authenticationStore.logout()" color="red">Cerrar sesión</Button>
        </vs-col>

        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <Input v-model="user.name" :disabled="disabled"  label="Nombre:" placeholder="Nombre Apellido"  />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <Input v-model="user.email" :disabled="disabled"  label="Correo:" placeholder="user@email.com" />
        </vs-col>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
            <Input v-model="user.phone" :disabled="disabled"  label="Telefono:" placeholder="1213012365" />
        </vs-col>
    </vs-row>
    <vs-row>
        <vs-col vs-type="flex"  vs-justify="end" vs-align="center" vs-w="12" >
            <Button @click="visualiceAppForm = !visualiceAppForm" color="green" style="margin: 1rem;">Nueva app</Button>
        </vs-col>
        
        <vs-col vs-type="flex"  vs-justify="center" vs-align="center" vs-w="12" >
            <vs-col v-if="visualiceAppForm" vs-type="flex"  vs-justify="center" vs-align="center" vs-w="8" class="mb-8">
            <vs-row>
                <vs-col vs-align="center" vs-w="12" >
                    <Input v-model="formulario.name"  label="Nombre app:" placeholder="App"  />
                </vs-col>
                
                <vs-col  vs-align="center" vs-w="12" >
                    <Textarea v-model="formulario.description" :rows="4" label="Descripción:" placeholder="App"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="12" >
                    <Input v-model="formulario.download_link"  label="Link de descarga:" placeholder="https://link.com"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="12" >
                    <Select v-model="formulario.download_link" :options="categories"  placeholder="Por favor seleccione una" label="Seleccione una categoría"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="12" >
                    <vs-col vs-align="center" vs-w="8" >
                        <Input v-model="chip"  label="Etiquetas:" placeholder="Gratis apk"  size="sm"/>
                    </vs-col>
                    <vs-col  vs-type="flex" vs-justify="center" vs-align="end" vs-w="4" style="height: 100%;">
                        <Button @click="addTag()" color="green" >Agregar etiqueta</Button>        
                    </vs-col>
                </vs-col>
                <vs-col class="mt-4" vs-align="center" vs-w="12" >
                        <vs-chip
                        color="#8799AF"
                        :key="chip"
                        @click="remove(chip)"
                        v-for="chip in chips" closable close-icon="delete">
                        {{ chip }}
                    </vs-chip>
                </vs-col>
            </vs-row>
        </vs-col>
    </vs-col>

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