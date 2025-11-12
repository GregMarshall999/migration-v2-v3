import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { defineAsyncComponent } from 'vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('LazyToast', defineAsyncComponent(() => import('@components/ToastComp.vue')))

app.mount('#app')
