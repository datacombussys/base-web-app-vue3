import axios from 'axios'
import { router } from '@/routes'

export const Auth = {
  namespace: true,
  name: 'auth',
  state: {
    userLogin: null,
    userProfile: {},
    isAuthenticated: false
  },
  mutations: {
    SET_USER_LOGIN (state, payload) {
      console.log('SET_USER_LOGIN payload', payload)
      state.userLogin = payload
      state.isAuthenticated = true
      console.log('SET_USER_LOGIN Payload', payload)
      localStorage.setItem('user', JSON.stringify(payload))
      localStorage.setItem('expiration', 604800)
    },
    SET_USER_PROFILE (state, payload) {
      state.userProfile = payload
    },
    LOG_OUT_USER (state, payload) {
      state.isAuthenticated = false
      state.userProfile = {}
      state.userLogin = null
      console.log('REMOVE_TOKEN Payload')
      localStorage.removeItem('expiration')
      localStorage.removeItem('user')
      // location.reload();
    },
    FIND_LOGIN_PROFILE (state) {
      var user = JSON.parse(localStorage.getItem('user'))
      if (user != null) {
        state.userLogin = user
        state.isAuthenticated = true
      } else {

      }
    }
  },
  actions: {
    async preFetchLogin ({ dispatch, commit, state, rootState }, credentials) {
      const user = await dispatch('findUserInLocalStorage')
      console.log('user', user)

      if (user) {
        commit('SET_USER_LOGIN', user)
        const userProfile = await dispatch('GETUserProfileById', user)
        if (userProfile) {
          console.log('userProfile', userProfile)
          commit('SET_USER_PROFILE', userProfile)
        }
        // rootState.Notifications.isLoadPanelVisible = false
      } else {
        await dispatch('loadAllData')
        // rootState.Notifications.isLoadPanelVisible = false
      }
    },
    findUserInLocalStorage ({ dispatch, commit, state }) {
      return new Promise(async (resolve, reject) => {
        commit('FIND_LOGIN_PROFILE')
        return resolve(state.userLogin)
      })
    },

    async login ({ dispatch, commit, state, rootState }, credentials) {
      console.log('credentials', credentials)

      axios.post('/django/login/', credentials).then(async response => {
        console.log('response', response)
        if (response.status === 200) {
          console.log('Login response.data', response.data)
          commit('SET_USER_LOGIN', response.data)

          const UserObj = await dispatch('GETUserProfileById', { id: response.data.id })
          console.log('UserObj', UserObj)
          commit('SET_USER_PROFILE', UserObj)

          console.group('router', router)
          // console.group("this.$route", this.$route)
          router.push('/admin').catch(error => {
            console.error('Logging in Navigation error', error)
          })
        }
      }).catch(error => {
        console.log('Error Logging In', error.response)
        error.type = 'Login Unsuccessful'
        // dispatch("updateNotification", error.response);
      })
    },
    logout ({ dispatch, commit, store }) {
      commit('LOG_OUT_USER')
    }
  },
  getters: {
    IS_AUTHENTICATED (state) {
      return state.isAuthenticated
    }
  }
}
