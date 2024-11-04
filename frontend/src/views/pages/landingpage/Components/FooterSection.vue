<script setup lang="ts">
import { ref, shallowRef } from 'vue';

// icons
import { InstagramOutlined, TwitterOutlined, GooglePlusOutlined, SendOutlined } from '@ant-design/icons-vue';

// assets

import LogoFooter from '@/assets/logos/Saints Rise (250 x 50 px).png';
import imageDashboard from '@/assets/images/landing/img-footer.png';

// to-do link add
const list1 = shallowRef([
  {
    name: 'Blog',
    link: 'https://blog.mantisdashboard.io/'
  },

]);
const list2 = shallowRef([
  {
    name: 'License',
    link: 'https://store.vuetifyjs.com/pages/licensing-information'
  },

]);
const list3 = shallowRef([
  {
    name: 'CodeIgniter',
    link: 'https://codedthemes.com/item/mantis-codeigniter-admin-template/'
  },

]);
const list4 = shallowRef([
  {
    name: 'Berry React Material',
    link: 'http://mui.com/store/previews/berry-react-material-admin/'
  },

]);
const icons = ref([InstagramOutlined, TwitterOutlined, GooglePlusOutlined]);
</script>

<template>
  <v-footer class="bg-dark text-white py-md-2 py-3 main-footer">
    
          <v-row class="justify-center">
            <!-- <v-col lg="4" cols="12">
              <div class="contactDetails pr-lg-6">
                <img :src="LogoFooter" alt="logo" />
                <p class="mt-4 text-h6">
                  Since 2017, More than 50K+ Developers trust the Saints Rise Digital Product. Mantis Vue is Manage under their Experienced
                  Team Players.
                </p>
              </div>
            </v-col> -->
            <v-col lg="2" md="3" cols="6" class="py-1">
              <div class="d-flex flex-column footer-list">
                <a href="mailto:info@saintsrise.com">Send email</a>
              </div>
            </v-col>

          
          </v-row>

  </v-footer>
  <div class="sub-footer text-white py-4">
    <v-container class="py-0">
      <v-row class="align-center">
        <v-col sm="6">
          <h6 class="text-subtitle-2 text-lightText mb-0">Saints Rise</h6>
        </v-col>
  
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.bg-dark {
  background: #1f1f1f;
}
.footer-list {
  a {
    color: rgb(var(--v-theme-secondary));
    &:hover {
      color: rgb(var(--v-theme-primary));
      text-decoration: none;
    }
    + a {
      margin-top: 10px;
      @media (max-width: 991px) {
        margin-top: 10px;
      }
    }
  }
}
.sub-footer {
  background: #141414;
	position: relative;
	width: 100%;
	bottom: 0px;

	.v-container:not(.v-container--fluid) {
	max-width: 1500px;
  }
}

.main-footer {
	min-height: 40px;
  .v-container:not(.v-container--fluid) {
    max-width: 1500px;
		min-height: 40px;
  }
}


</style>
