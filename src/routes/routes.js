import Tabla from "../components/Tabla.vue"
import Nuevo from "../components/Nuevo.vue"
import Editar from "../components/Editar.vue"
import { createRouter, createWebHashHistory } from "vue-router"





const routes =  [
    {path:"/", component: Tabla},
    {path:"/Nuevo", component:Nuevo},
    {path:"/Editar", component:Editar}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})