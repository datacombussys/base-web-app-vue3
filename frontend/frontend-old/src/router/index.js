// Imports
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/components/HelloWorld.vue'
import test from '@/test.vue'

import testView from '@/views/home/Index.vue'


// const routes = [
//   { path: '/', component: HomeView },
// ]

const routes = [
	{
		path: '/',
		component: () => import('@/layouts/home/View.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: testView,
			},
		]
	}
]

// const routes = [
// 	{
// 		path: '/',
// 		component: () => import('@/layouts/home/Index.vue'),
// 		children: [
// 			{
// 				path: '',
// 				name: 'Home',
// 				component: () => import('@/views/home/Index.vue'),
// 			},
			// {
			// 	path: '',
			// 	name: 'Home',
			// 	component: () => import('@/components/HelloWorld.vue'),
			// },
			// {
			// 	path: 'about',
			// 	name: 'About',
			// 	component: () => import('@/views/about/Index.vue'),
			// 	meta: { src: require('@/assets/about.jpg') },
			// },
			// {
			// 	path: 'contact-us',
			// 	name: 'Contact',
			// 	component: () => import('@/views/contact-us/Index.vue'),
			// 	meta: { src: require('@/assets/contact.jpg') },
			// },
			// {
			// 	path: 'pro',
			// 	name: 'Pro',
			// 	component: () => import('@/views/pro/Index.vue'),
			// 	meta: { src: require('@/assets/pro.jpg') },
			// },
			// {
			// 	path: '*',
			// 	name: 'FourOhFour',
			// 	component: () => import('@/views/404/Index.vue'),
			// },
// 		],
// 	},
// ];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})



// Vue.use(Router)

// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   scrollBehavior: (to, from, savedPosition) => {
//     if (to.hash) return { selector: to.hash }
//     if (savedPosition) return savedPosition

//     return { x: 0, y: 0 }
//   },

// })

export default router
