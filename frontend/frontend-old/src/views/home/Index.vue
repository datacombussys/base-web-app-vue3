
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home-Home',

    metaInfo: { title: 'Home' },

    extends: View,

    mixins: [
      LoadSections([
        'Info',
				// '404'
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },

		mounted() {
			console.log("views/.home/ created executed");
			// console.log("this.components", this.components);
		},
		created() {

		}
  }
</script>
