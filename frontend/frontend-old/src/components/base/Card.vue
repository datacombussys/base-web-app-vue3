<template>
  <div>
		<div>showing card</div>
		<v-card :title="title" :text="subtitle" class="mb-8 blue"></v-card>
		<v-card
        color="blue-darken-3"
        :variant="variant"
        class="mx-auto"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">
              variant
            </div>
            <div class="text-h6 mb-1">
              Headline
            </div>
            <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn>
            Button
          </v-btn>
        </v-card-actions>
      </v-card>

<!-- 
    <v-card
      :height="height"
      :width="width"
      class="mb-4 blue"
      flat
      tile
      v-bind="$attrs"

      @click="$emit('click')"
    >
      <slot />
    </v-card> -->

    <!-- <BaseTitle
      v-if="title"
      :title="title"
      class="text-uppercase"
      size="subtitle-1"
      space="0"
    />

    <BaseSubtitle
      v-if="subtitle"
      :title="subtitle"
    /> -->
  </div>
</template>

<script>

  export default {
    name: 'BaseCard',

		data() {
			return{
				color: 'blue',
				variant: 'outlined'
			}
		},

    inheritAttrs: false,

    props: {
      height: [Number, String],
      width: [Number, String],
      subtitle: String,
      title: String,
    },
  }
</script>
