<template>
<div>sdlfmdlfnvldk</div>
  <section :id="id">
    <v-row no-gutters>
      <v-col cols="12">
				<p>loading sections now</p>
				<div>
					{{sections}}
				</div>

				<div>
					{{seccomponents}}
				</div>
				<component :is="Info"></component>

        <!-- <component
          :is="`${section}`"
          v-for="section in sections"
          :key="section"
        /> -->
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'BaseView',

    props: {
      id: {
        type: String,
        default: 'view',
      },
    },

    data: () => ({ 
			sections: [],
			seccomponents: []

		}),
		mounted() {
			console.log("View mounted this.sections", this.sections);
		}
  }
</script>
