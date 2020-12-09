<template>
	<div class="flex justify-center">
		<profileComponent>
			<template slot="user-details">
				<div>
					This is the admin account display page
				</div>
			</template>
		</profileComponent>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import moment from 'moment'

// Components
import profileComponent from '@/views/profiles/components/profile-component'

export default {
  name: 'adminProfile',
  components: {
    profileComponent
  },
  mixins: [
  ],
  props: {

  },
  data () {
    return {
      // Main Data

    }
  },
  methods: {
    testButton () {

    }

  },
  computed: {
    ...mapState([]),
    ...mapGetters([])

  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">

</style>
