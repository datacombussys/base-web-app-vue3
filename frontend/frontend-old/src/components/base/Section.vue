<template>
<div>
	Section
</div>
<v-btn>Click me</v-btn>
  <section
    v-bind="$attrs"
    :style="styles"
    v-on="$listeners"
  >
    <slot />
  </section>
</template>

<script>
  // Components

  export default {
    name: 'BaseSection',

    mixins: [],

    // props: {
    //   space: {
    //     type: [Number, String],
    //     default: 96,
    //   },
    // },

    // computed: {
    //   styles () {
    //     const space = this.$vuetify.breakpoint.mdAndUp
    //       ? this.space
    //       : this.space / 2

    //     return {
    //       ...this.measurableStyles,
    //       padding: `${space}px 0`,
    //     }
    //   },
    // },
  }
</script>
