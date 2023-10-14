<script setup lang="ts">
import { TheCard, Input, Button  } from 'flowbite-vue'

const email = ref();
const password = ref();
</script>

<template>
    <div class="w-80" style="margin: 0 auto;">
      <the-card>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Login</h5>
        <Input type="email" v-model="email" placeholder="your@email.com" label="Correo" />
        <Input type="password" v-model="password" placeholder="password" label="Contraseña" />
        <Button class="mt-3">Entrar</Button>
      </the-card>
    </div>
</template>
