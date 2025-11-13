import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' //import pour l'utilisation de Pinia

import App from './App.vue'
import router from './router'
import { defineAsyncComponent } from 'vue'

const app = createApp(App)

app.use(createPinia()) // indiquer a vue que l'on utilise Pinia
app.use(router)

app.component('LazyToast', defineAsyncComponent(() => import('@components/ToastComp.vue')))

app.mount('#app')
