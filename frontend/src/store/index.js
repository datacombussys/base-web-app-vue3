import { createStore } from 'vuex'

import { Auth } from './auth/auth'
import { Users } from './users/users'
import { Notifications } from '@/store/notifications/notifications'

export default createStore({
  modules: {
    Auth,
    Users,
    Notifications
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  }
})
