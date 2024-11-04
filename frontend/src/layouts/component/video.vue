<script setup lang="ts">
import { ref } from 'vue';
import video from '@/assets/videos/FinalV2.mp4'


import 'video.js/dist/video-js.css'

</script>

<template>
	<v-container>
		<v-row class="text-dark pt-3">
			
		</v-row>
		<v-row>
			<video-player
			autoplay
			:src="video"
			poster=""
			controls
			preload
			:loop="true"
			:volume="0.05"
			:width="250"
			:height="550"
			/>


		</v-row>
	</v-container>


</template>
