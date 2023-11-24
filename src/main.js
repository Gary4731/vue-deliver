import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import 'amfe-flexible'
import router from './router'
import{ Button, Tabbar, TabbarItem, Icon,Checkbox, CheckboxGroup, Locale, Dialog} from 'vant'
import store from './store'
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import enUS from 'vant/es/locale/lang/en-US';


//import 'vant/lib/index.css'

createApp(App).use(router).use(store).use(Checkbox).use(CheckboxGroup).use(Button).use(Tabbar).use(TabbarItem).use(Icon).mount('#app')
Locale.use('en-US', enUS);