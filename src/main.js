// import './assets/main.css'

import { createApp } from 'vue'
// 引入 VeeValidate 元件跟功能
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
// 引入 VeeValidate 的驗證規則
import * as AllRules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import { createPinia } from 'pinia'
// import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/all.scss'
import 'bootstrap'
import Loading from 'vue-loading-overlay'

import App from './App.vue'
import router from './router'
import { date } from './methods/filter.js'
const app = createApp(App)

// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')
// 將【自訂方法】設定所有頁面都能使用，不用每頁都寫
// app.config.globalProperties.$【自訂義】
// 只需要輸入 $filters.data() 就可以執行發法
app.config.globalProperties.$filters = {
  date
}

app.use(createPinia())
app.use(router)

app.component('VueLoading', Loading)
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
