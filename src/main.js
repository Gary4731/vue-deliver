import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import 'amfe-flexible'
import router from './router'
import{ Button, Tabbar, TabbarItem, Icon} from 'vant'

//import 'vant/lib/index.css'

createApp(App).use(router).use(Button).use(Tabbar).use(TabbarItem).use(Icon).mount('#app')
