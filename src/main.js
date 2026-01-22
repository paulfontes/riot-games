import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js' // or .bundle.js for all features including Popper.js

const app = createApp(App)

app.use(router)

app.mount('#app')
