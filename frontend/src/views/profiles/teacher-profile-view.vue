<template>
	<div class="flex justify-center">
		<profileComponent>
			<template slot="user-details">
				<div class="row">
					<div class="col-6">
						<div class="field-title">
							Account Balance
						</div>
						<div class="field-content">
							$13,000
						</div>

					</div>
					<div class="col-6">

					</div>
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
  name: 'teacherProfile',
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
