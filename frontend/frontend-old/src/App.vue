<template>
		<!-- <header>
			<p>header section</p>

			<RouterView name="header"/>

		</header> -->

		<main>
			<p>Main section</p>
				
			<RouterView />
			<BaseTest />
			
			<BaseCard title="Hello There Y'All" text="Tgis is a sample card"/>

		</main>

		<!-- <aside>
			<p>aside section</p>

			<RouterView name="aside"/>
		</aside> -->

</template>


<script>

export default {
  name: 'App',
	metaInfo: {
		title: 'App',
		titleTemplate: '%s | Zero Pro',
		htmlAttrs: { lang: 'en' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
  components: {
    
  }
}

</script>

<style lang="sass">
  .extra-padding
    padding-bottom: 96px !important
    padding-top: 96px !important

    @media screen and (max-width: 959px)
      padding-top: 48px !important
      padding-bottom: 48px !important
</style>
