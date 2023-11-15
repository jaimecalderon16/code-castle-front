<script setup lang="ts" type="component">
import {ref} from 'vue'
import { Button , Input } from 'flowbite-vue'
import { useAppStore } from '@/stores/useAppStore'
const appStore = useAppStore();
const nameApp = ref('')

const searchApp = async () => {
  await appStore.search({name: nameApp.value})
}
</script>

<template>
<div class="containerHeadSecundari">
<div class="main">
  <span class="first-span">¡Explora un universo</span>
  <span class="third-span"> de aplicaciones</span>
  <span class="second-span">más allá de lo convencional!</span>
</div>
<div class="mt-5 w-full">
    <Input v-model="nameApp"  size="lg" placeholder="Ingresa la aplicación que deseas buscar." label="Search">
    <template #prefix>
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </template>
    <template #suffix>
      <Button @click="searchApp()" gradient="pink-orange">Search</Button>
    </template>
</Input>
</div>
</div>

</template>

<style scoped>
 .containerHeadSecundari{
    max-width: 100vw;
    width: 90vw;
    height: 100vh;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.div-2::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 50%;
  border-left: 2px solid white;
}

.div-3::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 50%;
  border-left: 2px solid white;
}

.div-4::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 50%;
  border-left: 2px solid white;
}

.nav-div div:hover {
  background: whitesmoke;
  color: black;
}

.div-1:hover + .div-2::before {
  border-left: none;
}

.div-2:hover + .div-3::before {
  border-left: none;
}

.div-2:hover::before {
  border-left: none;
}

.div-3:hover + .div-4::before {
  border-left: none;
}

.div-3:hover::before {
  border-left: none;
}

.div-4:hover::before {
  border-left: none;
}

.main {
  width: 60%;
  height: 50%;
  margin: 10px;
  font-family: "neontubes";
  font-size: 6rem;
  white-space: nowrap;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}


.main .first-span {
  font-size: 4.5rem;
  color: #ffd9e2;
  text-shadow: 0 0 0 transparent, 0 0 10px #ff003c,
    0 0 20px rgba(255, 0, 60, 0.5), 0 0 40px #ff003c, 0 0 100px #ff003c,
    0 0 200px #ff003c, 0 0 300px #ff003c, 0 0 500px #ff003c, 0 0 1000px #ff003c;
  animation: blink 4s infinite alternate;
}
.main .third-span {
  font-size: 4rem;
  color: #ffd9e2;
  text-shadow: 0 0 0 transparent, 0 0 10px #ff003c,
    0 0 20px rgba(255, 0, 60, 0.5), 0 0 40px #ff003c, 0 0 100px #ff003c,
    0 0 200px #ff003c, 0 0 300px #ff003c, 0 0 500px #ff003c, 0 0 1000px #ff003c;
  animation: blink 4s infinite alternate;
}

.main .second-span {
  font-size: 3.5rem;
  color: #d4eaff;
  text-shadow: 0 0 0 transparent, 0 0 10px #2695ff,
    0 0 20px rgba(38, 149, 255, 0.5), 0 0 40px #2695ff, 0 0 100px #2695ff,
    0 0 200px #2695ff, 0 0 300px #2695ff, 0 0 500px #2695ff;
}

@-webkit-keyframes buzz {
  70% {
    opacity: 0.8;
  }
}

@keyframes buzz {
  70% {
    opacity: 0.8;
  }
}
@-webkit-keyframes blink {
  40% {
    opacity: 1;
  }
  42% {
    opacity: 0.8;
  }
  43% {
    opacity: 1;
  }
  45% {
    opacity: 0.2;
  }
  46% {
    opacity: 1;
  }
}
@keyframes blink {
  40% {
    opacity: 1;
  }
  42% {
    opacity: 0.8;
  }
  43% {
    opacity: 1;
  }
  45% {
    opacity: 0.2;
  }
  46% {
    opacity: 1;
  }
}

@media screen and (max-width: 992px) {
  .main .first-span {
    font-size: 4rem;
  }
  .main .second-span {
    font-size: 4rem;
  }
}

@media screen and (max-width: 600px) {
  .nav-div {
    width: 100%;
  }
  .main .first-span {
    font-size: 3rem;
  }
  .main .second-span {
    font-size: 3rem;
  }
}

</style>
