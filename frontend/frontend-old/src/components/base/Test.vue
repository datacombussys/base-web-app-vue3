<template>
	<div>This is a base test!!!</div>
  <button @click="counter++">You clicked me {{ counter }} X times.</button>
</template>

<script>

export default {
	name: 'Test',
  data() {
    return {
      counter: 0
    }
  }
}
</script>
