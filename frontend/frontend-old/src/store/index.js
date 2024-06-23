import { defineStore, storeToRefs } from 'pinia'
import {onMounted, ref} from 'vue'
import { mapStores } from 'pinia'

// Import store modules
import { useCounterStore } from './counter'

export const useStore = defineStore('store', {
	state: () => {
    return {
			name: "Ian"

    }
  },
	
	actions: {
		test() {
			console.log("Index store clicked");
		},
		property() {
			return "Property value here"
		}
	},
	
	getters: {
		GET_NAME(state) {
			return state.name
		}
	},

	onMounted() {
		console.log("Counyert has been loaded");
	}
	
  
})


