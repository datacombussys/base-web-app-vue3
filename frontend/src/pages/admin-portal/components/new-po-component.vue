<template>
	<div>
		<sheetComponent
			:openSheet="openPOSheet"
			@closeSheet="closeSheet">
			<template v-slot:title>
				<div>
					Create Purchase Order
				</div>
			</template>

			<template v-slot:body>
				<div class="container">
					<div class="row gradient-bg justify-between">
						<div class="col-4 pl-4 pt-0 flex-grow-0">
							<v-img
								:src="require('@/assets/static/granite_mountain_logo.svg')"
								class="my-3 logo"
								position="left"
								contain
								height="90"
							/>
						</div>
						<div class="col-3 flex-grow">
							<div class="headline-4 font-bold">
								Purchase Order
							</div>
							<p>Number #: 111-234324</p>
							<p>Issue Date: 10/05/2020</p>
							<div class="row">
								<div class="title">Status:
									<v-chip
										class="m-2"
										label
										color="success"
									>
										OPEN
									</v-chip>
									</div>

							</div>

						</div>
					</div>
					<div class="row">
						<div class="col-6 text-left">
							<div class="title">Granite Mountain Charter School</div>
							<p>22300 W. Mountain Side Trail</p>
							<p>Los Angeles, CA. 92854</p>
							<p>(916) 496-2996</p>
						</div>
						<div class="col-6 text-left">
							<div class="title">Ship To:</div>
								<v-select
									:items="shippingLocations"
									label="Select Location"
									dense
									solo
									item-text="name"
								></v-select>
						</div>
					</div>
					<!-- Color Header Bar -->
					<div class="row mt-3 text-white bg-datacom text-center">
						<div class="col-6 p-0">
							<div class="title">SUPPLIER</div>
						</div>
						<div class="col-6 p-0">
							<div class="title">ADDRESS</div>
						</div>
					</div>
					<div class="row mt-4">
						<div class="col-6 p-0">
							<v-select
								:items="vendors"
								label="Select Supplier"
								dense
								solo
								item-text="name"
							></v-select>
						</div>
						<div class="col-6">

						</div>
					</div>
					<!-- Color Header Bar -->
					<div class="row text-white bg-datacom">
						<div class="col-4 p-0">
							<div class="title">SHIPPING METHOD</div>
						</div>
						<div class="col-4 p-0">
							<div class="title">TERMS</div>
						</div>
						<div class="col-4 p-0">
							<div class="title">DELIVERY DATE</div>
						</div>
					</div>
					<div class="row">
						<div class="col-4 p-0">
							<div class="cell pt-4 px-5 h-20">
								<v-select
									:items="deliveryOptions"
									label="Select Delivery"
									dense
									solo
									item-text="name"
								></v-select>
							</div>
						</div>
						<div class="col-4 p-0">
							<div class="cell pt-4 px-5 h-20">
								<v-select
									:items="availableTerms"
									label="Select Terms"
									dense
									solo
									item-text="name"
								></v-select>
							</div>
						</div>
						<div class="col-4 p-0">
							<div class="cell pt-4 px-5 h-20">
								<!-- Date Picker Field -->
								<template>
									<v-row>
										<v-col cols="12" class="py-0 px-6">
											<v-menu
												ref="delieveryDateMenuRef"
												v-model="delieveryDateMenu"
												:close-on-content-click="false"
												v-model:return-value="requestedDeliveryDate"
												transition="scale-transition"
												offset-y
												min-width="290px"
											>
												<template v-slot:activator="{ on, attrs }">
													<v-text-field
													class="p-1"
														v-model="computedDateFormatted"
														prepend-icon="mdi-calendar"
														readonly
														v-bind="attrs"
														v-on="on"
													></v-text-field>
												</template>
												<v-date-picker v-model="requestedDeliveryDate" :min="minAllwedDate" color="primary" scrollable>
													<v-spacer></v-spacer>
													<v-btn text color="primary" @click="delieveryDateMenu = false">Cancel</v-btn>
													<v-btn text color="primary" @click="$refs.delieveryDateMenuRef.save(requestedDeliveryDate)">OK</v-btn>
												</v-date-picker>
											</v-menu>
										</v-col>
									</v-row>
								</template>

							</div>
						</div>
					</div>

					<!-- Table for Items -->
					<table class="mt-5" style="width:100%">
						<tr class="bg-datacom text-white">
							<th style="width:20%;">NAME</th>
							<th style="width:10%;">CODE</th>
							<th style="width:20%;">DESC</th>
							<th style="width:10%;">QTY</th>
							<th style="width:10%;">UNIT</th>
							<th style="width:10%;">TOTAL</th>
							<th style="width:5%;"></th>
						</tr>
						<tr>
							<td colspan="2">
								<template>
									<div class="row px-3">
										<v-autocomplete
											@change="selectLineItem"
											:items="POItems"
											item-text="name"
											width="100px"
										>
										<!-- Slots -->
										<template v-slot:selection="data">
											<span class="flex justify-between">
												<span>{{ data.item.name }}</span>
												<span class="px-3">-</span>
												<span>{{ data.item.ISBN }}</span>
											</span>

										</template>

										<template v-slot:item="data">
											<template v-if="typeof data.item !== 'object'">
												<v-list-item-content v-text="data.item"></v-list-item-content>
											</template>
											<template v-else>
												<v-list-item-content>
													<div class="row">

														<v-list-item-title v-html="data.item.name"></v-list-item-title>
														<div class="text-sm">
															Code:
															<span>
																{{ data.item.ISBN }}
															</span>

														</div>
													</div>

												</v-list-item-content>
											</template>
										</template>

										</v-autocomplete>
									</div>

								</template>
							</td>
							<td class="text-center"></td>
							<td class="text-center">
								<vue-numeric-input
									v-model="lineItemQty"
									:min="1"
									:step="1"
									size="100px"
									class="qtyCounter"
									align="center"
									controlsType="plusminus"
									>
								 </vue-numeric-input>
							</td>
							<td class="text-center"></td>
							<td class="text-center"></td>
							<td class="text-center">
								<v-icon size="30" color="danger" @click="deleteLineItem">mdi-delete</v-icon>
							</td>
						</tr>
						<tr>
							<td colspan="7" class="text-left p-3 pl-5">
								<v-btn color="teal font-bold"> Add new row
									<v-icon right>mdi-plus-thick</v-icon>
								</v-btn>
							</td>
						</tr>
						<tr class="px-2">
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">SUBTOTAL</td>
							<td colspan="2" class="text-center px-2 font-semibold">$ 612.73</td>
						</tr>
						<tr>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">SALES TAX</td>
							<td colspan="2" class="text-center px-2 font-semibold">$ 49.00</td>
						</tr>
						<tr>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">SHIPPING</td>
							<td colspan="2" class="text-center px-2 font-semibold">$ 0.00</td>
						</tr>
						<tr>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">DISCOUNTS</td>
							<td colspan="2" class="text-center px-2 font-semibold">$ (43.25)</td>
						</tr>
						<tr>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">TOTAL</td>
							<td colspan="2" class="text-center px-2 font-semibold">$ 617.92</td>
						</tr>
					</table>

					<div class="row text-left">
						<div class="title">Notes:</div>
						<div class="col-9 border-2 p-3 h-40">
							<v-textarea
								solo
								name="input-7-4"
								v-model="notes"
							></v-textarea>
						</div>
					</div>

					<div class="row">
						<div class="col-6 flex justify-end px-5">
							<div class="font-bold text-lg px-4">
								<span class="row flex">
									<span>
										<v-checkbox
											v-model="approvePO"
										></v-checkbox>
									</span>
									<span class="flex items-center">
										Approve Purchase Order
									</span>
								</span>
							</div>
						</div>
						<div class="col-6 flex items-center">
							<div class="row">
								<div class="font-bold text-lg px-4">
									Today's Date
								</div>
								<div>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</div>
							</div>
						</div>
					</div>

					<div class="row p-10"></div>

				</div>

			</template>

		</sheetComponent>

	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import moment from 'moment'

// Components
import sheetComponent from '@/components/popups/sheet-component'

export default {
  name: 'newPurchaseOrderComponent',
  components: {
    sheetComponent
  },
  mixins: [

  ],
  props: {

  },
  data () {
    return {
      // Main Data
      openPOSheet: false,

      shippingLocations: [
        { id: 1, name: 'Corp Office' },
        { id: 2, name: 'Los Angeles' }
      ],
      vendors: [
        { id: 1, name: 'Schoolastic Books' },
        { id: 2, name: 'Office Max' }
      ],
      deliveryOptions: [
        { id: 1, name: 'Ground' },
        { id: 2, name: '3-5 Day Priority' },
        { id: 2, name: 'Overnight Express' }
      ],
      availableTerms: [
        { id: 1, name: 'Cash on Delivery' },
        { id: 2, name: 'Payment in Advance' },
        { id: 3, name: 'Net 10' },
        { id: 4, name: 'Net 30' },
        { id: 5, name: 'Net 60' },
        { id: 6, name: 'Net 90' },
        { id: 7, name: '2/10 Net 30' }
      ],
      delieveryDateMenu: false,
      requestedDeliveryDate: new Date().toISOString().substr(0, 10),
      minAllwedDate: new Date().toISOString().substr(0, 10),

      // Purchase Order Line Items
      selectedItems: [],
      lineItems: [
        { id: 1, name: 'Cash on Delivery' },
        { id: 2, name: 'Payment in Advance' },
        { id: 3, name: 'Net 10' },
        { id: 4, name: 'Net 30' },
        { id: 5, name: 'Net 60' },
        { id: 6, name: 'Net 90' },
        { id: 7, name: '2/10 Net 30' }
      ],
      POItems: [
        { id: 1, name: 'Science Book', ISBN: '234-234343' },
        { id: 2, name: 'English Book', ISBN: '543-345435' },
        { id: 3, name: 'Math Book', ISBN: '345-6456456' },
        { id: 4, name: 'Art Book', ISBN: '676-7657567' },
        { id: 5, name: 'Science Book', ISBN: '234-234343' },
        { id: 6, name: 'English Book', ISBN: '543-345435' },
        { id: 7, name: 'Math Book', ISBN: '345-6456456' },
        { id: 8, name: 'Art Book', ISBN: '676-7657567' },
        { id: 9, name: 'Science Book', ISBN: '234-234343' },
        { id: 10, name: 'English Book', ISBN: '543-345435' },
        { id: 11, name: 'Math Book', ISBN: '345-6456456' },
        { id: 12, name: 'Art Book', ISBN: '676-7657567' },
        { id: 13, name: 'Science Book', ISBN: '234-234343' },
        { id: 14, name: 'English Book', ISBN: '543-345435' },
        { id: 15, name: 'Math Book', ISBN: '345-6456456' },
        { id: 16, name: 'Art Book', ISBN: '676-7657567' }
      ],
      // Numeric Input Component
      lineItemQty: 1,

      notes: null,
      approvePO: null

    }
  },
  methods: {
    testButton () {

    },
    closeSheet (evt) {
      console.log('evt', evt)
      this.openPOSheet = evt
    },
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    selectLineItem (evt) {
      console.log('selectLineItem evt', evt)
      this.selectedItems.push(evt)
    },
    deleteLineItem (evt) {
      console.log('deleteLineItem evt', evt)
    }

  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
    computedDateFormatted () {
      return this.formatDate(this.requestedDeliveryDate)
    }

  },
  mounted () {

  }
}
</script>
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";
.gradient-bg {
	background-image: linear-gradient(to top, rgba(255,0,0,0), rgb(231, 231, 231));
}
.logo {
	opacity: 0.4;
}
.cell {
	border: solid black 1px;
}
table {
	tr {
		td {
			text-align: right;
		}
	}
}
th {
	padding: 5px 0px;
	font-size:$base-font-size*1.2;
	font-family: Roboto, sans-serif;
	font-weight: 500;
}
td {
  border: 1px solid black;
}
.no-border {
	border: none;
}

</style>
