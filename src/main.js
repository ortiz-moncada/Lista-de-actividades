import { createApp } from 'vue'
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './style.css'
import App from './App.vue' // eslint-disable
import { router } from './routes/routes.js'
import { createPinia } from 'pinia'
import piniapluginPersistedstate from 'pinia-plugin-persistedstate'


const  pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

pinia.use (piniapluginPersistedstate)

app.use(Quasar, {
    plugins: {}, 
  })

app.mount('#app')


