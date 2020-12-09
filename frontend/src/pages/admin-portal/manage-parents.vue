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
							<template>
								<v-card>
									<v-card-title>
										<div class="row">
											<div class="col-9">
												<div class="title">
													Add New Parent
												</div>
											</div>
											<div class="col-3 text-right">
												<div class="offset-header-buttons">
													<v-btn class="mx-2" fab dark color="accent">
														<v-icon dark>mdi-plus-thick</v-icon>
													</v-btn>

													<v-btn class="mx-2" fab dark color="accent">
														<v-icon dark>mdi-upload</v-icon>
													</v-btn>
												</div>

											</div>
										</div>

										<div>

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
															v-model="parentForm.first_name"
															:rules="nameRules"
															label="First Name"
															required
														></v-text-field>
													</div>
													<div class="col-6">
														<v-text-field
															v-model="parentForm.last_name"
															:rules="nameRules"
															label="Last Name"
															required
														></v-text-field>
													</div>
												</div>
												<div class="row">
													<div class="col-12">
														<v-text-field
															v-model="parentForm.email"
															:rules="emailRules"
															label="E-mail"
															required
														></v-text-field>
													</div>
												</div>
												<div class="row">
													<div class="col-6">
														<v-text-field
															v-model="parentForm.phone"
															:rules="phoneRules"
															label="Phone"
															required
														></v-text-field>
													</div>
													<div class="col-6">
														<v-text-field
															v-model="parentForm.fax"
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
															v-model="parentForm.address"
															label="Address"
															required
														></v-text-field>
													</div>
													<div class="col-4">
														<v-text-field
															v-model="parentForm.address2"
															label="Address 2"
															required
														></v-text-field>
													</div>
												</div>
												<div class="row">
													<div class="col-4">
														<v-text-field
															v-model="parentForm.city"
															label="City"
															required
														></v-text-field>
													</div>
													<div class="col-4">
														<v-text-field
															v-model="parentForm.state"
															label="State"
															required
														></v-text-field>
													</div>
													<div class="col-4">
														<v-text-field
															v-model="parentForm.zip"
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
															v-model="parentForm.notes"
														></v-textarea>
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
											</v-form>
										</div>

									</template>
									<!-- END Form -->
								</v-card>
							</template>
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
													Parent List
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
  name: 'adminManageParents',
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

      // Vuetify DataTable
      singleSelect: false,
      selected: [],
      search: '',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: true,
          value: 'id',
          width: '5%'
        },
        { text: 'Name', value: 'name', width: '20%' },
        { text: 'Title', value: 'title', width: '35%' },
        { text: 'Classes', value: 'classes', width: '20%' },
        { text: 'Students', value: 'students', width: '20%' }
      ],
      teachers: [
        {
          id: '1215451',
          name: 'Rosalyn Greene',
          title: 'First Grade Teacher',
          classes: 2,
          students: 45
        },
        {
          id: '2541256',
          name: 'Cheryl Parks',
          title: 'Third Grade Teacher',
          classes: 4,
          students: 105
        },
        {
          id: '1478542',
          name: 'Susan Davis',
          title: 'Fourth Grade Teacher',
          classes: 1,
          students: 12
        },
        {
          id: '9532654',
          name: 'Ellie Daniels',
          title: 'Substitute 3rd Grade',
          classes: 0,
          students: 0
        }

      ],

      // Form Data
      parentForm: {
        first_name: null,
        last_name: null,
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
