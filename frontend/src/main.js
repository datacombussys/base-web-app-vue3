import Vue, { createApp, h } from 'vue'
import App from './App.vue'
import { router } from '@/routes'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'

//Vuetify
import Vuetify from 'vuetify'

//Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Numeric Input
import VueNumericInput from 'vue-numeric-input'

// Fonts
import '@/assets/fonts/fonts.css'

// Icons
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

// Dev Express
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'

// Custom CSS
import '@/assets/css/main.css'
import '@/assets/scss/main.scss'

// Lodash
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
require('@/routes/route-guards')
// Vue.use(VueNumericInput)
// Vue Moment
// Vue.use(require('vue-moment'))
// Vue.use(VueLodash, { lodash: lodash })

// Axios
require('@/js/axios')



createApp({
  vuetify,
  render: () => h(App)
}).use(router).use(store)
.use(VueNumericInput)
.use(require('vue-moment'))
.use(VueLodash, { lodash: lodash })
.use(Vuetify)
.use(VueAxios, axios)
.mount('#app')
