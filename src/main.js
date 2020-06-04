// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { Button, Select, Option } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/** 国际化 */
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zh from './i18n/langs/zh'
import en from './i18n/langs/en'

Vue.use(VueI18n)
// 准备翻译的语言环境信息
const messages = {
  zh: {
    ...zh,
    ...zhLocale
  },
  en: {
    ...en,
    ...enLocale
  }
}
// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'en', // 设置地区
  messages
})

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
