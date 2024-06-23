<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const primary = ref('rgb(var(--v-theme-primary))');
const darkprimary = ref('rgb(var(--v-theme-darkprimary))');
</script>
<template>
  <div class="logo">
    <RouterLink to="/" aria-label="logo">
			<img src="@/assets/logos/datacom/DatacomLogoWhite120x40.png" width="240" height="80" alt="Datacom">
    </RouterLink>
  </div>
</template>
