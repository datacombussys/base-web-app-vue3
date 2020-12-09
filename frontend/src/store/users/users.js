export const Users = {
  namespace: true,
  name: 'users',
  state: {

  },
  mutations: {

  },
  actions: {
    // GET User Profile By Id
    GETUserProfileById ({ commit, dispatch, rootState }, payload) {
      console.log('GETUserProfileById')
      return new Promise(async (resolve, reject) => {
        try {
          console.log('GETUserProfileById payload', payload)
          const endpoint = 'user/?id='
          const type = 'Get User Profile'
          const response = await apiRoutes.GETProfileById(dispatch, rootState, payload, endpoint, type)
          if (response.status === 200) {
            console.log('GETUserProfileById response', response)
            commit('SET_USER_PROFILE', response.data[0])
            return resolve(response.data[0])
          } else {
            return reject({ message: response })
          }
        } catch (error) {
          return reject(error)
        }
      }).catch(error => {
        console.log('error', error)
        if (error.response) {
          console.log('error.response', error.response)
          // dispatch('updateNotification', error.response);
          return reject(error)
        }
      })
    }

  },
  getters: {

  }
}
