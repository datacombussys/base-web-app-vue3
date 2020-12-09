<template>
	<div class="flex justify-center">
		<div class="container mt-4">
				<!-- Main Container Row -->
				<div class="row">
					<div class="col-12">
						<v-tabs>
							<v-tab>Add / Edit</v-tab>
							<v-tab>Inventory Database</v-tab>
							<!-- Tab One - Form -->
							<v-tab-item>
								<div class="row">
									<div class="col-12">
										<DxScrollView
											:scroll-by-content="true"
											:scroll-by-thumb="true"
											show-scrollbar="onHover"
											height="80vh"
										>
											<template>
												<v-card>
													<v-card-title>
														<div class="row">
															<div class="col-9">
																<div class="title">
																	Add New Product / Service
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
															<div class="header">
																Product Record
															</div>
															<div class="row">
																<div class="col-6">
																	Date Added: {{ inventoryForm.date_added }}
																</div>
																<div class="col-6">
																	Product ID: {{ inventoryForm.product_id }}
																</div>
															</div>
															<div class="row">
																<div class="col-6">
																	Qty Available: {{ inventoryForm.qty_available }}
																</div>
																<div class="col-6">
																	Image: {{ inventoryForm.image }}
																</div>
															</div>
															<v-form
																ref="teacherFormRef"
																v-model="valid"
																lazy-validation
															>
																<div class="row">
																	<div class="header">
																		General Details
																	</div>
																</div>
																<div class="row">
																	<div class="col-6">
																		<v-text-field
																			v-model="inventoryForm.name"
																			:rules="nameRules"
																			label="Name"
																			required
																		></v-text-field>
																	</div>
																	<div class="col-6">
																		<v-select
																			v-model="inventoryForm.vendor_obj"
																			:items="vendors"
																			label="Vendor"
																			required
																		></v-select>
																	</div>
																</div>
																<div class="row">
																	<div class="col-12">
																		<v-text-field
																			v-model="inventoryForm.manufacturer"
																			label="Manufacturer"
																		></v-text-field>
																	</div>
																</div>
																<div class="row">
																	<div class="col-6">
																		<v-text-field
																			v-model="inventoryForm.model"
																			label="Model"
																		></v-text-field>
																	</div>
																	<div class="col-6 flex justify-center items-center">
																		<v-switch
																		class="m-0"
																			v-model="inventoryForm.is_service"
																			label="Service"
																		></v-switch>
																	</div>
																</div>

																<div class="row">
																	<div class="header mt-5">
																		Pricing Details
																	</div>
																</div>
																<div class="row">
																	<div class="col-6">
																		<v-text-field
																			v-model="inventoryForm.purchase_price"
																			label="Purchase Price"
																		></v-text-field>
																	</div>
																	<div class="col-6">
																		<v-text-field
																			v-model="inventoryForm.list_price"
																			label="List Price"
																			required
																		></v-text-field>
																	</div>
																</div>

																<div class="row">
																	<div class="header mt-5">
																		Id's and Barcodes
																	</div>
																</div>
																<div class="row">
																	<div class="col-6">
																		<div class="row">
																			<div class="col-6">
																				<v-text-field
																					v-model="inventoryForm.sku"
																					label="SKU"
																				></v-text-field>
																			</div>
																			<div class="col-6">
																				<div class="sku-font">
																					123456789
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col-6">
																		<div class="row">
																			<div class="col-6">
																				<v-text-field
																					v-model="inventoryForm.isbn"
																					label="ISBN"
																				></v-text-field>
																			</div>
																			<div class="col-6">
																				<div class="isbn-font">
																					123456789
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="row">
																	<div class="col-6">
																		<div class="row">
																			<div class="col-6">
																				<v-text-field
																					v-model="inventoryForm.ean"
																					label="EAN"
																				></v-text-field>
																			</div>
																			<div class="col-6">
																				<div class="ean-font">
																					123456789
																				</div>
																			</div>
																		</div>

																	</div>
																	<div class="col-6">
																		<div class="row">
																			<div class="col-6">
																				<v-text-field
																					v-model="inventoryForm.upc"
																					label="UPC"
																				></v-text-field>
																			</div>
																			<div class="col-6">
																				<div class="upc-font">
																					123456UPC
																				</div>
																			</div>
																		</div>
																	</div>
																</div>

																<div class="row">
																	<div class="header mt-5">
																		Shipping Details
																	</div>
																</div>
																<div class="row">
																	<div class="col-6">
																		<v-text-field
																			v-model="inventoryForm.weight"
																			label="Weight"
																		></v-text-field>
																	</div>
																	<div class="col-6">
																		<v-text-field
																			v-model="inventoryForm.width"
																			label="Width"
																			required
																		></v-text-field>
																	</div>
																</div>
																<div class="row">
																	<div class="col-6">
																		<v-text-field
																			v-model="inventoryForm.height"
																			label="Height"
																		></v-text-field>
																	</div>
																	<div class="col-6">
																		<v-text-field
																			v-model="inventoryForm.depth"
																			label="Depth"
																			required
																		></v-text-field>
																	</div>
																</div>

																<div class="row">
																	<div class="header mt-5">
																		Additional Information
																	</div>
																</div>
																<div class="row">
																	<div class="col-12">
																		<v-textarea
																			v-model="inventoryForm.description"
																			label="Description"
																		></v-textarea>
																	</div>
																	<div class="col-12">
																		<v-textarea
																			v-model="inventoryForm.specifications"
																			label="Specifications"
																			required
																		></v-textarea>
																	</div>
																</div>

																<!-- Buttons -->
																<div class="row justify-end">
																	<div class="col-3 text-right">
																		<v-btn
																			color="error"
																			large
																			class="mr-4 w-full"
																			@click="reset"
																		>
																			Reset
																		</v-btn>
																	</div>
																	<div class="col-3 text-right">
																		<v-btn
																			large
																			:disabled="!valid"
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
								</div>
							</v-tab-item>
							<!-- Tab Two - Database -->
							<v-tab-item>
								<div class="row">
									<div class="col-12">
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
																	Product and Services List
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
								</div>
							</v-tab-item>
						</v-tabs>
					</div>

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
  name: 'addEditProductsServices',
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

      vendors: [
        'Pianos Unlimited',
        'The Book Barn',
        'Creative Outlet'
      ],

      // Form Data
      inventoryForm: {
        Xid: null,
        Xdate_added: null,
        vendor: null,
        Xvendor_obj: null,
        Xname: null,
        Xmanufacturer: null,
        Xmodel: null,
        Xdescription: null,
        Xspecifications: null,
        Xpurchase_price: null,
        Xlist_price: null,
        Xsales_price: null,
        Xproduct_id: null,
        Xsku: null,
        Xisbn: null,
        Xupc: null,
        Xean: null,
        weight: null,
        width: null,
        height: null,
        depth: null,
        is_service: false,
        reorder_level: null,
        qty_available: null,
        category: null,
        image: null,
        file: null,
        is_active: false
      }

    }
  },
  methods: {
    testButton () {

    },
    addItem () {
      var newForm = JSON.parse(JSON.stringify(this.inventoryForm))

      console.log('newForm', newForm)
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
