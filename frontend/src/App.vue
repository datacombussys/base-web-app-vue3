<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
			<template>
				<v-img
					:src="require('./assets/static/granite_mountain_logo.svg')"
					class="my-3"
					contain
					height="60"
				/>
			</template>

        <div class="headline-4">
					Granite Mountain Charter School
				</div>

      <v-spacer></v-spacer>

			<v-menu
				v-if="Auth.isAuthenticated"
				v-model="showMenu"
				absolute
				offset-y
				style="max-width: 600px"
			>
				<template v-slot:activator="{ on, attrs }">
					<v-card
						rounded="circle"
						img="https://randomuser.me/api/portraits/women/81.jpg"
						height="50"
						width="50"
						v-bind="attrs"
						v-on="on"
					></v-card>
				</template>

				<v-list>
					<v-list-item
						v-for="(item, index) in items"
						:key="index"
						:to="item.path"
					>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			<div v-else>
				<v-btn to="/login" color="info">
					Login
					<v-icon class="ml-3">mdi-login</v-icon>
				</v-btn>
			</div>

    </v-app-bar>

		<!--No Drawer Content-->

    <v-main>
			<router-view
				@navHome="navHome">
			</router-view>

      <router-view name="main">
				<slot name="leftDrawer"/>
			</router-view>

			<template v-if="showDrawer" slot:leftDrawer>
				<v-navigation-drawer
					v-model="drawer"
					v-model:mini-variant="mini"
					permanent
					app
					expand-on-hover
					dark
				>
					<router-view :onDrawer="mini" name="left"></router-view>
				</v-navigation-drawer>
			</template>

    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    // Main Data
    currentRoute: null,
    // Drawer
    mini: true,
    drawer: true,
    showMenu: false,
    items: [
      { title: 'Profile', path: '/profile/admin' },
      { title: 'Notifications' },
      { title: 'Messages' },
      { title: 'Logout' }
    ]
  }),
  methods: {
    testButton () {
      console.log('this.currentRoute', this.currentRoute)
      console.log('this.$route', this.$route)
    },
    navHome (evt) {
      console.log('navHome', evt)
      this.currentRoute = 'Home'
    },
    userMenuClick (evt) {
      console.log('userMenuClick', evt)
      if (evt.target.textContent === 'Log Out') {
        this.$store.dispatch('logout')
        this.$router.push('/')
      } else {
        this.testButton()
      }
    },
    changeCurrentRoute () {
      this.currentRoute = this.$router.name
    }

  },
  computed: {
    ...mapState(['Auth']),
    ...mapGetters([]),
    showDrawer () {
      switch (this.currentRoute) {
        case 'Home':
          return false
          break
        case 'Shopping Cart':
          return false
          break
        case 'Login':
          return false
          break
      }
      return true
    }

  },
  watch: {
    '$route.name': function (data) {
      console.log('watch data from $router', data)
      this.changeCurrentRoute()
    }
  },
  beforeCreate () {

  },
  async mounted () {
    this.currentRoute = this.$route.name
    console.log('mounted this.$route.name', this.$route.name)
  }
}
</script>

<style lang="scss" scoped>
.portrait {
	border-radius: 30px;
}
</style>
