
<template>
	<div class="flex justify-center">
		<div class="container">
			<!-- Main Container Row -->
			<div class="row">
				<!-- Main Content Left Area -->
				<div class="col-12">

					<template>
						<v-expansion-panels>
							<v-expansion-panel>
								<v-expansion-panel-header>Main Account</v-expansion-panel-header>
								<v-expansion-panel-content>
									<DxScrollView
										:scroll-by-content="true"
										:scroll-by-thumb="true"
										show-scrollbar="onHover"
										height="80vh"
									>
										<div class="flex justify-center">
											<div style="max-width:1800px;">
												<v-row class="w-full">
													<div class="headline-4 mb-2">
														Corporate / Billing Address
													</div>
												</v-row>
												<v-row class="w-full">
													<v-col class="py-0" cols="12" md="9">
														<v-text-field
															label="Address"
															outlined
														></v-text-field>
													</v-col>
													<v-col class="py-0" cols="12" md="3">
														<v-text-field
															label="Address 2"
															outlined
														></v-text-field>
													</v-col>
												</v-row>
												<v-row>
													<v-col class="py-0" cols="12" md="4">
														<v-text-field
															label="City"
															outlined
														></v-text-field>
													</v-col>
													<v-col class="py-0" cols="12" md="4">
														<v-text-field
															label="State"
															outlined
														></v-text-field>
													</v-col>
													<v-col class="py-0" cols="12" md="4">
														<v-text-field
															label="Zip Code"
															outlined
														></v-text-field>
													</v-col>
												</v-row>
												<v-row>
													<v-col class="py-0" cols="12" md="6">
														<v-text-field
															label="Phone"
															outlined
														></v-text-field>
													</v-col>
													<v-col class="py-0" cols="12" md="6">
														<v-text-field
															label="Fax"
															outlined
														></v-text-field>
													</v-col>
												</v-row>
												<v-row>
													<v-col class="py-0" cols="12" md="6">
														<v-text-field
															label="Web Address"
															outlined
														></v-text-field>
													</v-col>
													<v-col class="py-0" cols="12" md="6">
														<v-text-field
															label="Main Email"
															outlined
														></v-text-field>
													</v-col>
												</v-row>
												<v-row>
													<v-col class="py-0" cols="12">
														<v-file-input
															label="School Logo"
															outlined
															prepend-icon="mdi-camera"></v-file-input>
													</v-col>

												</v-row>

												<div class="headline-4 mb-2">
													Billing Contact
												</div>
												<v-row>
													<v-col class="py-0" cols="12" md="6">
														<v-text-field
															label="Phone"
															outlined
														></v-text-field>
													</v-col>
													<v-col class="py-0" cols="12" md="6">
														<v-text-field
															label="Email"
															outlined
														></v-text-field>
													</v-col>
												</v-row>
												<div class="headline-4 mb-2">
													Shipping Contact
												</div>
												<v-row>
													<v-col class="py-0" cols="12" md="6">
														<v-text-field
															label="Phone"
															outlined
														></v-text-field>
													</v-col>
													<v-col class="py-0" cols="12" md="6">
														<v-text-field
															label="Email"
															outlined
														></v-text-field>
													</v-col>
												</v-row>

												<v-row>
													<v-col class="flex justify-end" cols="12">
														<v-btn class="mx-3 text-gray-900" color="warning">
															Clear
														</v-btn>
														<v-btn class="mx-3" color="success">
															Save
														</v-btn>
													</v-col>
												</v-row>

											</div>
										</div>
									</DxScrollView>
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-header>Teacher Settings</v-expansion-panel-header>
								<v-expansion-panel-content>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-header>Parent Settings</v-expansion-panel-header>
								<v-expansion-panel-content>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-header>Student Settings</v-expansion-panel-header>
								<v-expansion-panel-content>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-header>Vendor Settings</v-expansion-panel-header>
								<v-expansion-panel-content>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-header>Inventory Settings</v-expansion-panel-header>
								<v-expansion-panel-content>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-header>Purchase Order Settings</v-expansion-panel-header>
								<v-expansion-panel-content>
									<div class="row">
										<v-col col="12" md="6">
											<v-checkbox
												label="Auto Complete Purchase Orders"
											></v-checkbox>
										</v-col>
										<v-col col="12" md="6">
											<v-checkbox
												label="Require Admin Approval"
											></v-checkbox>
										</v-col>
									</div>
								</v-expansion-panel-content>
							</v-expansion-panel>

							<v-expansion-panel>
								<v-expansion-panel-header>Permissions</v-expansion-panel-header>
								<v-expansion-panel-content>
									<div class="row">
										<v-col col="12" md="6">
											<v-select
												v-model="selectedAdminUsers"
												:items="adminUsersList"
												chips
												multiple
												label="Admin Users"
											></v-select>
										</v-col>
									</div>
								</v-expansion-panel-content>
							</v-expansion-panel>

						</v-expansion-panels>
					</template>

				</div>
				<!-- END Main Content Left Area -->
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

export default {
  name: 'schoolSettings',
  components: {
    DxScrollView
  },
  mixins: [

  ],
  props: {

  },
  data () {
    return {
      // Main Data
      selectedAdminUsers: [
        'Julia Peterson'
      ],
      adminUsersList: [
        'Julia Peterson',
        'Mike Roberts',
        'Allison Gardner',
        'Louise Ellis'
      ]

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
