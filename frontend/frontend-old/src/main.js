import './assets/main.css'
import { createApp } from 'vue'
import { createPinia, setMapStoreSuffix } from 'pinia'
setMapStoreSuffix('')

import App from './App.vue'
import router from './router'
import '@/plugins'

// Vuetify
// Vuetify Documentation https://vuetifyjs.com
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})


// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'


// Auto register global components
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context('@/components/base', true, /\.vue$/)
console.log("requireComponent main", requireComponent);

const register = (App) => {
	for (const file of requireComponent.keys()) {
		const componentConfig = requireComponent(file)
		const name = file
			.replace(/index.js/, '')
			.replace(/^\.\//, '')
			.replace(/\.\w+$/, '')
		const componentName = upperFirst(camelCase(name))
	
		App.component(`Base${componentName}`, componentConfig.default || componentConfig)
	}
};


export const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueAxios, axios)

// Register components
register(app)

app.mount('#app')




console.log("App in mina", App);






