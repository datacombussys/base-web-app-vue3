<script setup lang="ts">
import { ref } from 'vue';
// icons
import { MenuOutlined, LineOutlined } from '@ant-design/icons-vue';

import Logo from '@/layouts/dashboard/logo/SRLogoLight.vue';

import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay();
const drawer = ref(false);
</script>

<template>
  <v-app-bar elevation="0" flat height="95" class="border-bottom position-fixed" color="secondary" border="0">
    <v-container class="fill-height maxWidth">
      <div class="d-flex align-center ga-2 w-100">
        <Logo />
        <!---/Search part -->
        <v-spacer />
        <!-- ---------------------------------------------- -->
        <!---right part -->
        <!-- ---------------------------------------------- -->
  
      </div>
    </v-container>
  </v-app-bar>


</template>
