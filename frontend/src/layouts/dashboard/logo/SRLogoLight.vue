<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const darkprimary = ref('rgb(var(--v-theme-darkprimary))');
</script>
<template>
  <div class="logo">
    <RouterLink to="/" aria-label="logo">
			<img src="@/assets/logos/Saints Rise (250 x 50 px).png" width="250" height="50" alt="Datacom">
    </RouterLink>
  </div>
</template>