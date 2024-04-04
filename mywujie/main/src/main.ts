import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { startApp, preloadApp } from 'Wujie'
import Wujie from 'wujie-vue3'
import './assets/main.css'

const app = createApp(App)

// startApp({ name: 'vue3', url: 'http://localhost:5174/', el: "#app" })
// startApp({ name: 'react', url: 'http://localhost:5175/', el: "#app" })
// startApp({name,url,el})

app.use(router).use(Wujie)

app.mount('#app')

// preloadApp({ name: 'vue3', url: 'http://localhost:5174/', exec: true })
// preloadApp({ name: 'react', url: 'http://localhost:5175/', exec: true })
