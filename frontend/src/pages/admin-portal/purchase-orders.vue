<template>
	<div class="flex justify-center">
		<div class="container">
				<!-- Main Container Row -->
				<div class="row">
					<!-- Main Content Left Area -->
					<div class="col-12">
						<div class="row mb-5">
							<div class="col-9">

							</div>
							<div class="col-3 text-right">
								<v-btn @click="openNewPOSheet" color="success">
									New Purchase Order
									<v-icon class="ml-3">mdi-pencil-plus</v-icon>
								</v-btn>
							</div>
						</div>
						<div class="row">
							<template>
								<v-card width="100%">
									<v-card-title>
										<div class="row">
											<div class="col-9">
												<div class="title">
													Purchase Orders
												</div>
											</div>
											<div class="col-3 text-right">

											</div>
										</div>

										<div>

										</div>
									</v-card-title>
									<template>
										<v-data-table
											:headers="headers"
											:items="desserts"
											:items-per-page="5"
											class="elevation-1"
										>
											<template v-slot:item.actions="{ item }">
												<v-icon
													class="mr-2"
													color="primary"
													@click="openViewPOSheet(item)"
												>
													mdi-eye
												</v-icon>
												<v-icon
													color="danger"
													@click="deleteItem(item)"
												>
													mdi-delete
												</v-icon>
											</template>

										</v-data-table>
									</template>
								</v-card>
							</template>
						</div>

					</div>
					<!-- END Main Content Left Area -->
				</div>
				<!-- END Main Container Row -->
		</div>
		<!-- Popup Component -->
		<newPurchaseOrderComponent
		ref="newPOComponentRef" />

		<viewPurchaseOrderComponent
		ref="viewPOComponentRef" />

	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import moment from 'moment'

// Components
import newPurchaseOrderComponent from '@/pages/admin-portal/components/new-po-component'
import viewPurchaseOrderComponent from '@/pages/admin-portal/components/view-po-component'

export default {
  name: 'adminManagePurchaseOrders',
  components: {
    newPurchaseOrderComponent,
    viewPurchaseOrderComponent
  },
  mixins: [

  ],
  props: {

  },
  data () {
    return {
      // Main Data

      // Datatable Data
      headers: [
        {
          align: 'center',
          text: 'PO #',
          value: 'number'
        },
        { align: 'center', text: 'Date', value: 'date' },
        { align: 'center', text: 'Vendor', value: 'vendor' },
        { align: 'center', text: 'Amount', value: 'amount' },
        { align: 'center', text: 'Status', value: 'status' },
        { align: 'center', text: 'Actions', value: 'actions', sortable: false }
      ],
      desserts: [
        {
          number: 'PO-12353',
          date: '06/12/2020',
          vendor: 'Musical Chairs',
          amount: '$25.00',
          status: 'Paid'
        },
        {
          number: 'PO-12353',
          date: '06/12/2020',
          vendor: 'Musical Chairs',
          amount: '$25.00',
          status: 'Paid'
        },
					 {
          number: 'PO-12353',
          date: '06/12/2020',
          vendor: 'Musical Chairs',
          amount: '$25.00',
          status: 'Paid'
        },
					 {
          number: 'PO-12353',
          date: '06/12/2020',
          vendor: 'Musical Chairs',
          amount: '$25.00',
          status: 'Paid'
        },
					 {
          number: 'PO-12353',
          date: '06/12/2020',
          vendor: 'Musical Chairs',
          amount: '$25.00',
          status: 'Paid'
        }

      ]

    }
  },
  methods: {
    testButton () {

    },
    openNewPOSheet () {
      this.$refs.newPOComponentRef.openPOSheet = true
    },
    openViewPOSheet (evt) {
      console.log('viewItem evt', evt)
      this.$refs.viewPOComponentRef.openPOSheet = true
    },
    deleteItem (evt) {
      console.log('deleteItem evt', evt)
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
