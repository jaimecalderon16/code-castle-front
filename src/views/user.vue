<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useToast } from "../composables/useToast";
import { Input, Button, Textarea, Select, FileInput } from 'flowbite-vue'
import Head from '../components/Head.vue'
import Footer from '../components/Footer.vue'
import { AuthenticationStore } from '@/stores/AuthentiacationStore'
import { useAppStore } from '@/stores/useAppStore'
const authenticationStore = AuthenticationStore()
const appStore = useAppStore()
const toast = useToast();

const {user} = storeToRefs(authenticationStore) 
const {formulario, categories, tags} = storeToRefs(appStore) 
const disabled = ref(true);
const visualiceAppForm = ref(false);
const chip = ref('');
const app = ref({
    name: '',
});
const file = ref(null)

const addTag = () => {
    tags.value.push(chip.value)
    chip.value = '';
}

const remove = (item: number) => {
    tags.value.splice(tags.value.indexOf(item), 1)
}

const save = async() => {
    await appStore.save();
}

function checkFileExtension() {
        // Verificar la extensión del archivo
        if (file.value) {
            const allowedExtensions = ['png', 'jpg', 'jpeg', 'gif'];
            const extension = file.value.name.split('.').pop().toLowerCase();

            if (!allowedExtensions.includes(extension)) {
                // Log de error
                toast.toast("Error", "Error: El archivo debe ser de tipo PNG o JPG", "danger");

                file.value = null;
            }else{
                formulario.value.imgFile = file.value;
            }
        }
    }

onMounted(async () => {
    await appStore.listCategory()    
})

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
                    <Input v-model="formulario.application_name"  label="Nombre app:" placeholder="App"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="12" >
                    <FileInput v-model="file" label="Icono de la app" accept="image/png,image/jpeg" @change="checkFileExtension">
                        <p class="!mt-1 text-sm text-gray-500 dark:text-gray-300">
                        PNG, JPG (MAX. 800x400px).
                        </p>
                    </FileInput>
                </vs-col>
                
                <vs-col  vs-align="center" vs-w="12" >
                    <Textarea v-model="formulario.description" :rows="4" label="Descripción:" placeholder="App"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="5" class="mr-8">
                    <Input v-model="formulario.version"  label="Version" placeholder="1.12.1"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="6" >
                    <Input v-model="formulario.company"  label="Desarrolladora / Compañia" placeholder="Google LLC"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="5" class="mr-8">
                    <Input v-model="formulario.requirements"  label="Requisitos" placeholder="Android 8+"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="6" >
                    <Input v-model="formulario.size"  label="Tamaño" placeholder="889 MB"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="12" >
                    <Input v-model="formulario.download_link"  label="Link de descarga:" placeholder="https://link.com"  />
                </vs-col>
                <vs-col vs-align="center" vs-w="12" >
                    <Select v-model="formulario.categoria_id" :options="categories"  placeholder="Por favor seleccione una" label="Seleccione una categoría"  />
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
                        @click="remove(tags)"
                        v-for="chip in tags" closable close-icon="delete">
                        {{ chip }}
                    </vs-chip>
                    <Button @click="save()" color="green" style="margin: 1rem;">Guardar</Button>    
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