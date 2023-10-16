import './assets/main.css'

import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vue-global-api'
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
library.add(faDownload)

const pinia = createPinia()


const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.use(Vuesax)

app.mount('#app')
