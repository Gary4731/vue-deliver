import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import 'amfe-flexible'
import router from './router'
import{ Button, Tabbar, TabbarItem, Icon} from 'vant'
import store from './store'
import 'vant/es/toast/style';
import { Checkbox, CheckboxGroup } from 'vant';



//import 'vant/lib/index.css'

createApp(App).use(router).use(store).use(Checkbox).use(CheckboxGroup).use(Button).use(Tabbar).use(TabbarItem).use(Icon).mount('#app')
