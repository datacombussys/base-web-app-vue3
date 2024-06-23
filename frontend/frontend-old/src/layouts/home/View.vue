<template>
	<h2>This is a test first</h2>

	<TestComponent />
	<RouterView />

	<h2>This is a test after</h2>

</template>

<script>

  export default {
    name: 'BaseView',
		mounted() {
			console.log("View mounted no sections");
		}
  }
</script>
