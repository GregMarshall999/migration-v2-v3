import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' //import pour l'utilisation de Pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import { defineAsyncComponent } from 'vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia) // indiquer a vue que l'on utilise Pinia
app.use(router)

app.directive('endToast', {
    mounted(el, binding) {
        console.log('toast', binding.instance, el);

        setTimeout(() => {
            el.__vueParentComponent.exposed.endToast();
            //binding.instance.endToast();
        }, binding.value * 1000)
    }
});

app.component('LazyToast', defineAsyncComponent(() => import('@components/ToastComp.vue')))

app.mount('#app')
