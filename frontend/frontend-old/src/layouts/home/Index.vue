<template>

	<HomeView />
  

</template>

<script>

import HomeView from '@/layouts/home/View'
  export default {
    name: 'HomeLayout',

    components: {
			// HomeAppBar: () => import('@/layouts/home/AppBar'),
      // HomeSystemBar: () => import('@/layouts/home/SystemBar'),
			// HomeSettings: () => import('@/layouts/home/Settings'),
			// HomeFooter: () => import('@/layouts/home/Footer'),

      HomeView: HomeView,
    },
  }
</script>
