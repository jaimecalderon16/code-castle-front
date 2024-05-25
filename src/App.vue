<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { usePreloadStore } from '@/stores/usePreloadStore';
import { Spinner } from 'flowbite-vue'
const preload = usePreloadStore()
</script>

<template>
<div v-if="preload.isLoading" class="conainerLoading" >
        <Spinner size="12" />
    </div>
<RouterView ></RouterView>

</template>

<style >
.conainerLoading{
    position: fixed;
    display: flex;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
