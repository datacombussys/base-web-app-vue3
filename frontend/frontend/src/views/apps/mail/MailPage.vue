<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import MailSidebar from '@/components/apps/mail/MailSidebar.vue';
import MailListing from '@/components/apps/mail/MailListing.vue';

// icons
import { MenuOutlined } from '@ant-design/icons-vue';

const page = ref({ title: 'Mail Page' });
const { lgAndUp } = useDisplay();
const breadcrumbs = ref([
  {
    title: 'Applications',
    disabled: false,
    href: '#'
  },
  {
    title: 'Mail',
    disabled: true,
    href: '#'
  }
]);
const toggleSide = ref(false);
const sDrawer = ref(false);
</script>
<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>

  <v-row>
    <v-col v-if="!toggleSide && lgAndUp" class="d-flex align-stretch mailSidebar pr-md-0">
      <v-card variant="outlined" class="bg-surface br-0">
        <perfect-scrollbar style="height: calc(100vh - 60px)">
          <v-card-text class="pa-5">
            <MailSidebar />
          </v-card-text>
        </perfect-scrollbar>
      </v-card>
    </v-col>
    <v-col class="d-flex align-stretch overflow-auto pl-md-0">
      <v-card variant="outlined" class="bg-surface bl-0">
        <!---Toggle Button For mobile-->
        <v-btn icon @click="sDrawer = !sDrawer" variant="text" rounded class="d-lg-none d-md-flex d-sm-flex">
          <MenuOutlined />
        </v-btn>

        <div>
          <MailListing @s-Toggle="toggleSide = !toggleSide" />
        </div>
      </v-card>
    </v-col>
  </v-row>

  <v-navigation-drawer temporary v-model="sDrawer" width="300" top v-if="!lgAndUp">
    <perfect-scrollbar style="height: calc(100vh - 100px)">
      <v-card-text class="pa-5"> <MailSidebar /> </v-card-text>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>
<style lang="scss">
.br-0 {
  @media (min-width: 960px) {
    border-right: none;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
}
.bl-0 {
  @media (min-width: 960px) {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
}

.custom-main {
  margin: 0;
}
.mailSidebar {
  max-width: 350px;
}
</style>
