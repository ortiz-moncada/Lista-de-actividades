import { createApp } from 'vue'
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './style.css'
import App from './App.vue' // eslint-disable
import { router } from './routes/routes.js'
import { createPinia } from 'pinia'
import piniapluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
const  pinia = createPinia()
pinia.use (piniapluginPersistedstate)


app.use(Quasar, {
  plugins: {}, 
})
app.use(pinia)
app.use(router)
app.mount('#app')


