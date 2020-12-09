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
							<p>Attn: Leslie Boyd</p>
							<p>leslie@granitemountain.edu</p>
							<p>22300 W. Mountain Side Trail</p>
							<p>Los Angeles, CA. 92854</p>
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
					<div class="row">
						<div class="col-6 p-0">
							<div class="title">
									Schoolastic Books
							</div>
							<p>Attn: Billing Department</p>
							<p>(714) 425-3550</p>
						</div>
						<div class="col-6">
							<p>13050 W. Waterfront St</p>
							<p>Anaheim, CA. 92806</p>
						</div>
					</div>
					<!-- Color Header Bar -->
					<div class="row mt-3 text-white bg-datacom">
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
							<div class="cell">Electronically</div>
						</div>
						<div class="col-4 p-0">
							<div class="cell">Net 30</div>
						</div>
						<div class="col-4 p-0">
							<div class="cell">12/05/2020</div>
						</div>
					</div>

					<!-- Table for Items -->
					<table class="mt-5" style="width:100%">
						<tr class="bg-datacom text-white">
							<th>NAME</th>
							<th>CODE</th>
							<th>DESC</th>
							<th>QTY</th>
							<th>UNIT</th>
							<th>TOTAL</th>
						</tr>
						<tr>
							<td class="text-left px-2">Modern Science</td>
							<td class="text-left px-2">ISBN: 3423423</td>
							<td class="text-left px-2">8th Grade Science Book</td>
							<td class="text-center px-2">12</td>
							<td class="text-center px-2">49.95</td>
							<td class="text-center px-2">599.40</td>
						</tr>
						<tr>
							<td class="text-left px-2">The Elephant and the Tree</td>
							<td class="text-left px-2">ISBN: 3423423</td>
							<td class="text-left px-2">Story about an Elephant...</td>
							<td class="text-center px-2">1</td>
							<td class="text-center px-2">13.33</td>
							<td class="text-center px-2">13.33</td>
						</tr>
						<tr>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">SUBTOTAL</td>
							<td class="text-center px-2 font-semibold">$ 612.73</td>
						</tr>
						<tr>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">SALES TAX</td>
							<td class="text-center px-2 font-semibold">$ 49.00</td>
						</tr>
						<tr>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">SHIPPING</td>
							<td class="text-center px-2 font-semibold">$ 0.00</td>
						</tr>
						<tr>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">DISCOUNTS</td>
							<td class="text-center px-2 font-semibold">$ (43.25)</td>
						</tr>
						<tr>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="no-border"></td>
							<td class="right pr-3 no-border font-semibold">TOTAL</td>
							<td class="text-center px-2 font-semibold">$ 617.92</td>
						</tr>
					</table>

					<div class="row text-left">
						<div class="title">Notes:</div>
						<div class="col-9 border-2 p-3">
							<p>Please Send 2 copies of invoices</p>
							<p>Please notify us immediately if you are unable to ship as specified</p>
							<p>Send all corresponsence to name(s) listed above</p>
						</div>
					</div>
					<div class="row">
						<div class="col-6">
							<div class="row">
								<div class="font-bold text-lg px-4">
									Approved by:
								</div>
								<div>Martha Stewart</div>
							</div>
							<div class="row">
								<div class="font-bold text-lg px-4">
									Approved on:
								</div>
								<div>10/23/2020</div>
							</div>
						</div>

					</div>

					<div class="p-10 m-10">

					</div>

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
  name: 'viewPurchaseOrderComponent',
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
      openPOSheet: false

    }
  },
  methods: {
    testButton () {

    },
    closeSheet (evt) {
      console.log('evt', evt)
      this.openPOSheet = evt
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
