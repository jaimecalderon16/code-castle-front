import './assets/main.css'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'vue-global-api'
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'

import { markRaw } from 'vue'

const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Vuesax)

app.mount('#app')
