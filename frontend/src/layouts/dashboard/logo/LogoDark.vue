<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const darkprimary = ref('rgb(var(--v-theme-darkprimary))');
import imageSaintsRise from '@/assets/logos/Saints Rise (250 x 50 px).png';
</script>

<template>
  <div class="logo">
    <RouterLink to="/dashboard/analytics" aria-label="logo">
      <v-img
			:width="250"
			aspect-ratio="16/9"
			cover
			:src="imageSaintsRise" />
    </RouterLink>
  </div>
</template>

