<template>
	<div class="flex justify-center">
		<div class="container mt-4">
				<!-- Main Container Row -->
				<div class="row">
					<!-- Main Content Left Area -->
					<div class="col-6 px-5">
						<DxScrollView
							:scroll-by-content="true"
							:scroll-by-thumb="true"
							show-scrollbar="onHover"
							height="90vh"
						>

						</DxScrollView>
					</div>
					<!-- END Main Content Left Area -->
					<!-- Right Panel -->
					<div class="col-6 px-5">
						<DxScrollView
							:scroll-by-content="true"
							:scroll-by-thumb="true"
							show-scrollbar="onHover"
							height="90vh"
						>
							<template>
								<v-card>
									<v-card-title class="mb-1">
										<div class="row">
											<div class="col-6">
												<div class="title">
													Vendor List
												</div>
											</div>
											<div class="col-6 flex items-center">
												<v-text-field
													class="m-0 p-0"
													color="teal"
													dark
													v-model="search"
													append-icon="mdi-magnify"
													label="Search"
													single-line
													:single-select="singleSelect"
													hide-details
												></v-text-field>
											</div>
										</div>
									</v-card-title>
									<div v-if="selected.length === 1" class="row justify-end">
										<div class="col-2">
											<v-btn small class="m-2" fab dark color="accent" @click="deleteItem">
													<v-icon dark>mdi-trash-can-outline</v-icon>
												</v-btn>
										</div>
									</div>
									<v-data-table
										v-model="selected"
										:headers="headers"
										:items="teachers"
										:search="search"
										item-key="name"
										show-select
										class="elevation-1"
									>
									</v-data-table>

								</v-card>
							</template>
						</DxScrollView>

					</div>
					<!-- END Right Panel -->
				</div>
				<!-- END Main Container Row -->
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import moment from 'moment'

// Devexpress
import { DxScrollView } from 'devextreme-vue/scroll-view'

// Mixins
import { FormMixins } from '@/mixins/form-mixins'

export default {
  name: 'adminManageVendors',
  components: {
    DxScrollView
  },
  mixins: [
    FormMixins
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
