import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'virtual:windi.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import './style.css';

const app = createApp(App)
app.use(router)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}