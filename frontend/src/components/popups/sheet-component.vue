<template>
	<div class="flex justify-center">
		<template>
			<div class="text-center">
				<v-bottom-sheet fullscreen v-model="openSheet">
					<v-sheet class="text-center" height="100vh">
						<div class="row bg-primary">
							<div class="col-9 text-left flex items-center px-5">
								<div class="headline-5 text-white">
									<slot name="title"/>
								</div>
							</div>
							<div class="col-3 h-16 flex items-center justify-end pr-5">
								<v-btn
									icon
									color="white"
									@click="closeSheet"
								>
									<v-icon size="60">mdi-close-circle-outline</v-icon>
								</v-btn>
							</div>
						</div>
						<DxScrollView
							:scroll-by-content="true"
							:scroll-by-thumb="true"
							show-scrollbar="onHover"
						>
							<div class="flex justify-center">
								<slot name="body"/>
							</div>
						</DxScrollView>

					</v-sheet>
				</v-bottom-sheet>
			</div>
		</template>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import moment from 'moment'

// Devexpress
import { DxScrollView } from 'devextreme-vue/scroll-view'

export default {
  name: 'sheetComponent',
  components: {
    DxScrollView
  },
  mixins: [

  ],
  props: {
    openSheet: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      // Main Data

    }
  },
  methods: {
    testButton () {

    },
    closeSheet () {
      this.$emit('closeSheet', false)
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
