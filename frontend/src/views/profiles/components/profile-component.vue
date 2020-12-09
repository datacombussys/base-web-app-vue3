<template>
	<div class="flex justify-center">
		<div class="container mt-4">
				<!-- Main Container Row -->
				<div class="row">
					<!-- Main Content Area -->
					<div class="col-12 px-5">
						<DxScrollView
							:scroll-by-content="true"
							:scroll-by-thumb="true"
							show-scrollbar="onHover"
							height="90vh"
						>

							<!-- View Form Fields -->
							<template v-if="!editProfile">
								<v-card>
									<v-card-title>
										<div class="row">
											<div class="col-9">
												<div class="title">
													Profile Details
												</div>
											</div>
											<div class="col-3 text-right">
												<div class="offset-header-buttons">
													<v-btn class="mx-2" fab dark color="accent" @click="editProfile = !editProfile">
														<v-icon dark>mdi-pencil</v-icon>
													</v-btn>
												</div>
											</div>
										</div>
									</v-card-title>
									<!-- Form -->
									<template>

										<div class="p-5">
											<div class="row">
												<div class="header">
													Account Details
												</div>
											</div>

											<!-- User Details Slot -->
											<slot name="user-details" />

											<div class="row">
												<div class="header">
													Personal Details
												</div>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="field-title">
														First Name
													</div>
													<div class="field-content">
														{{ profileForm.first_name }}
													</div>
												</div>
												<div class="col-6">
													<div class="field-title">
														Last Name
													</div>
													<div class="field-content">
														{{ profileForm.last_name }}
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="field-title">
														Email Address
													</div>
													<div class="field-content">
														{{ profileForm.email }}
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-6">
													<div class="field-title">
														Phone
													</div>
													<div class="field-content">
														{{ profileForm.phone }}
													</div>
												</div>
												<div class="col-6">
													<div class="field-title">
														Fax
													</div>
													<div class="field-content">
														{{ profileForm.fax }}
													</div>
												</div>
											</div>
											<div class="row">
												<div class="header mt-5">
													Address Details
												</div>
											</div>
											<div class="row">
												<div class="col-8">
													<div class="field-title">
														Address
													</div>
													<div class="field-content">
														{{ profileForm.address }}
													</div>
												</div>
												<div class="col-4">
													<div class="field-title">
														Address 2
													</div>
													<div class="field-content">
														{{ profileForm.address2 }}
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-4">
													<div class="field-title">
														City
													</div>
													<div class="field-content">
														{{ profileForm.city }}
													</div>
												</div>
												<div class="col-4">
													<div class="field-title">
														State
													</div>
													<div class="field-content">
														{{ profileForm.state }}
													</div>
												</div>
												<div class="col-4">
													<div class="field-title">
														Zip Code
													</div>
													<div class="field-content">
													{{ profileForm.zip }}
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-12">
													<div class="field-title">
														About Me
													</div>
													<div class="field-content">
														{{ profileForm.bio }}
													</div>
												</div>
											</div>
											<div class="row justify-end">
												<div class="col-3 text-right">
													<v-btn
														color="error"
														class="mr-4"
														@click="reset"
													>
														Reset
													</v-btn>
												</div>
												<div class="col-3 text-right">
													<v-btn
														:disabled="!valid"
														color="success"
														class="mr-4"
														@click="submitForm"
													>
														Submit
													</v-btn>
												</div>
											</div>

										</div>
									</template>
									<!-- END Form -->
								</v-card>
							</template>
							<!-- Edit Form Fields -->
							<template v-else>
								<v-card>
									<v-card-title>
										<div class="row">
											<div class="col-9">
												<div class="title">
													Profile Details
												</div>
											</div>
											<div class="col-3 text-right">
												<div class="offset-header-buttons">
													<v-btn class="mx-2" fab dark color="accent" @click="editProfile = !editProfile">
														<v-icon dark>mdi-pencil</v-icon>
													</v-btn>
												</div>
											</div>
										</div>
									</v-card-title>
									<!-- Form -->
									<template>
										<div class="p-5">
											<v-form
												ref="teacherFormRef"
												v-model="valid"
												lazy-validation
											>
												<div class="row">
													<div class="header">
														Personal Details
													</div>
												</div>
												<div class="row">
													<div class="col-6">
														<v-text-field
															v-model="profileForm.first_name"

															label="First Name"
															required
														></v-text-field>
													</div>
													<div class="col-6">
														<v-text-field
															v-model="profileForm.last_name"
															:rules="nameRules"
															label="Last Name"
															required
														></v-text-field>
													</div>
												</div>
												<div class="row">
													<div class="col-12">
														<v-text-field
															v-model="profileForm.email"
															:rules="emailRules"
															label="E-mail"
															required
														></v-text-field>
													</div>
												</div>
												<div class="row">
													<div class="col-6">
														<v-text-field
															v-model="profileForm.phone"
															:rules="phoneRules"
															label="Phone"
															required
														></v-text-field>
													</div>
													<div class="col-6">
														<v-text-field
															v-model="profileForm.fax"
															:rules="phoneRules"
															label="Fax"
															required
														></v-text-field>
													</div>
												</div>
												<div class="row">
													<div class="header mt-5">
														Address Details
													</div>
												</div>
												<div class="row">
													<div class="col-8">
														<v-text-field
															v-model="profileForm.address"
															label="Address"
															required
														></v-text-field>
													</div>
													<div class="col-4">
														<v-text-field
															v-model="profileForm.address2"
															label="Address 2"
															required
														></v-text-field>
													</div>
												</div>
												<div class="row">
													<div class="col-4">
														<v-text-field
															v-model="profileForm.city"
															label="City"
															required
														></v-text-field>
													</div>
													<div class="col-4">
														<v-text-field
															v-model="profileForm.state"
															label="State"
															required
														></v-text-field>
													</div>
													<div class="col-4">
														<v-text-field
															v-model="profileForm.zip"
															label="Zip Code"
															required
														></v-text-field>
													</div>
												</div>
												<div class="row">
													<div class="col-12">
														<v-textarea
														label="Notes"
															name="Acocunt Notes"
															v-model="profileForm.notes"
														></v-textarea>
													</div>
												</div>
												<div class="row justify-end">
													<div class="col-3 text-right">
														<v-btn
															color="error"
															class="mr-4 w-full"
															@click="reset"
														>
															Reset
														</v-btn>
													</div>
													<div class="col-3 text-right">
														<v-btn
															color="success"
															class="mr-4 w-full"
															@click="submitForm"
														>
															Submit
														</v-btn>
													</div>
												</div>
											</v-form>
										</div>
									</template>
									<!-- END Form -->
								</v-card>
							</template>
						</DxScrollView>
					</div>
					<!-- END Main Content Area -->

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
  name: 'profileComponent',
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
      editProfile: false,

      // Form Data
      profileForm: {
        first_name: null,
        last_name: '',
        email: null,
        phone: null,
        fax: null,
        address: null,
        address2: null,
        city: null,
        state: null,
        zip: null,
        notes: null,
        students: ['Beth Jacobs', 'Eric Little', 'Ryanne Conners']
      }

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
