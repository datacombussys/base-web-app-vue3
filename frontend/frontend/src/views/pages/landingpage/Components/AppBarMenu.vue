<script setup lang="ts">
import { ref } from 'vue';
// icons
import { MenuOutlined, LineOutlined } from '@ant-design/icons-vue';

import Logo from '@/layouts/dashboard/logo/DatacomLogoDark.vue';
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay();
const drawer = ref(false);
</script>

<template>
  <v-app-bar elevation="0" flat height="95" class="border-bottom position-fixed" color="darkText" border="0">
    <v-container class="fill-height maxWidth">
      <div class="d-flex align-center ga-2 w-100">
        <Logo />
        <!---/Search part -->
        <v-spacer />
        <!-- ---------------------------------------------- -->
        <!---right part -->
        <!-- ---------------------------------------------- -->
        <template v-if="mdAndUp">
          <v-btn variant="text" to="/">Home</v-btn>
					<v-btn variant="text" to="/dashboard/default">Dashboard</v-btn>
          <v-btn variant="text" to="/components/buttons">Products</v-btn>
          <v-btn variant="text" href="https://codedthemes.gitbook.io/mantis-vuetify/">Pricing</v-btn>
          <v-btn variant="flat" color="primary" href="https://codedthemes.com/item/mantis-vue-admin-template/">Contact</v-btn>
        </template>
        <template v-else>
          <v-btn icon rounded="sm" variant="text" size="small" @click.stop="drawer = !drawer">
            <MenuOutlined :style="{ fontSize: '20px' }" />
          </v-btn>
        </template>
      </div>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="top" style="height: 210px" floating v-if="!mdAndUp">
    <v-list color="primary">
      <v-list-item to="/dashboard/default">
        <template v-slot:prepend>
          <LineOutlined />
        </template>

        <v-list-item-title class="ml-3">Dashboard</v-list-item-title>
      </v-list-item>
      <v-list-item to="/components/buttons">
        <template v-slot:prepend>
          <LineOutlined />
        </template>

        <v-list-item-title class="ml-3">Components</v-list-item-title>
      </v-list-item>
      <v-list-item to="https://codedthemes.gitbook.io/mantis-vuetify/">
        <template v-slot:prepend>
          <LineOutlined />
        </template>

        <v-list-item-title class="ml-3">Documentation</v-list-item-title>
      </v-list-item>
      <v-list-item to="https://store.vuetifyjs.com/products/mantis-vuetify-admin-template">
        <template v-slot:prepend>
          <LineOutlined />
        </template>

        <v-list-item-title class="ml-3">Purchase Now</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
