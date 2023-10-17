import './assets/main.css'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vue-global-api'
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'


const pinia = createPinia()


const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Vuesax)

app.mount('#app')
