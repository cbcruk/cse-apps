import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

const app = createApp(App)

app.use(store).use(router).mount('#app')
