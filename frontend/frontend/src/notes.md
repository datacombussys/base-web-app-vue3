**********Icons**********
***MDI Icons
MDI icon file: src/plugins/mdi-icon.ts

Copy
// if you want to use mdi new icon then add like this
import { mdiHome } from '@mdi/js';

export const icons = {
  home: mdiHome,
};
Copy
// Usage
<v-icon icon="$home"></v-icon> // Do not forgot to add $ syntax before icon name

***Ant Design Icons

import { PlusOutlined } from "@ant-design/icons-vue";

// usage
<PlusOutlined :style="{ fontSize: '20px' }" />



*** Logo ***
Edit @/layouts/dashboard/logo/LogoDark.vue or Light.vue


*** Typography ***
For Change Typography - Go to src/theme/config.ts

Config.ts
Copy
const config: ConfigProps = {
    Sidebar_drawer: true,
    Customizer_drawer: false,
    mini_sidebar: false,
    setHorizontalLayout: false, 
    actTheme: 'DefaultTheme',
    fontTheme: 'Public sans', // you can change it from here 1. Roboto 2. Inter 3. Poppins
    inputBg: false,
    boxed: false
};       


*** Theme Colors ***
location = @/theme
const DefaultTheme = {
  name: "DefaultTheme",
  dark: false,
  variables: {
    "border-color": "#f0f0f0",
    "carousel-control-size": 10,
    gradient: 'linear-gradient(250.38deg, #e6f4ff 2.39%, #69b1ff 34.42%, #1677ff 60.95%, #0958d9 84.83%, #002c8c 104.37%)',
    'card-shadow': '0px 1px 4px rgba(0, 0, 0, 0.08)'
  },
  colors: {
    primary: '#1677ff',
    secondary: '#8c8c8c',
    info: '#13c2c2',
    success: '#52c41a',
    accent: '#FFAB91',
    warning: '#faad14',
    error: '#ff4d4f',
    lightprimary: '#e6f4ff',
    lightsecondary: '#f5f5f5',
    lightsuccess: '#EAFCD4',
    lighterror: '#FFE7D3',
    lightwarning: '#FFF6D0',
    darkText: '#212121',
    lightText: '#8c8c8c',
    darkprimary: '#0958d9',
    darksecondary: '#7a7878',
    borderLight: '#e6ebf1',
    inputBorder: '#a1a1a5',
    containerBg: '#fafafb',
    surface: '#fff',
    'on-surface-variant': '#fff',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#f5f5f5',
    primary200: '#a1d2ff',
    secondary200: '#eeeeee'
  },
};


*** Theme Settings ***

How to Set Default Settings?
Config.ts
Copy
const config: ConfigProps = {
    Sidebar_drawer: true,
    Customizer_drawer: false,
    mini_sidebar: false,
    setHorizontalLayout: false, // Horizontal layout
    actTheme: 'DefaultTheme',
    fontTheme: 'Public sans',
    inputBg: false,
    boxed: false
};              
How to Set Dark Theme?
Config.ts
Copy
const config: ConfigProps = {
    Sidebar_drawer: true,
    Customizer_drawer: false,
    mini_sidebar: false,
    setHorizontalLayout: false, 
    actTheme: 'DarkDefaultTheme', // Change Dark theme as per your requirement
    fontTheme: 'Public sans',
    inputBg: false,
    boxed: true
};    
How to Set Horizontal  Layout?
Config.ts
Copy
const config: ConfigProps = {
    Sidebar_drawer: true,
    Customizer_drawer: false,
    mini_sidebar: false,
    setHorizontalLayout: true, // Change horizontal layout
    actTheme: 'DefaultTheme',
    fontTheme: 'Public sans',
    inputBg: false,
    boxed: true
};       
How to Set Minsidebar Layout?
Config.ts
Copy
const config: ConfigProps = {
    Sidebar_drawer: true,
    Customizer_drawer: false,
    mini_sidebar: true, // Change minisidebar layout
    setHorizontalLayout: false,
    actTheme: 'DefaultTheme',
    fontTheme: 'Public sans',
    inputBg: false,
    boxed: true
};       
How to unset Boxed Layout?
Config.ts
Copy
const config: ConfigProps = {
    Sidebar_drawer: true,
    Customizer_drawer: false,
    mini_sidebar: false, 
    setHorizontalLayout: false, 
    actTheme: 'DefaultTheme',
    fontTheme: 'Public sans',
    inputBg: false,
    boxed: false // Set False here
};       
How to Change Input Text Background?
Config.ts
Copy
const config: ConfigProps = {
    Sidebar_drawer: true,
    Customizer_drawer: false,
    mini_sidebar: false, 
    setHorizontalLayout: false, 
    actTheme: 'DefaultTheme',
    fontTheme: 'Public sans',
    inputBg: true, // Set True here
    boxed: true 
}; 



*** Pina ***
Writing Getters & Action
Copy
export const useContactStore = defineStore({
  id: 'contact',
  state: (): contactType => ({
      contact: [],
      selectedContact: null
  }),
  getters: {},
  actions: {
      // Fetch contacts
      async fetchContacts() {
          try {
              const data = await axios.get('/api/contact/list');
              this.contact = data.data;
          } catch (error) {
              alert(error);
              console.log(error);
          }
      },
      // Fetch contacts
      async editContacts(contact: UserProfile) {
          try {
              const response = await axios.post('/api/contact/modify', contact);
              this.contact = response.data;
          } catch (error) {
              alert(error);
              console.log(error);
          }
      },
      // Fetch contacts
      async addContacts(contact: UserProfile) {
          try {
              const response = await axios.post('/api/contact/add', contact);
              this.contact = response.data;
          } catch (error) {
              alert(error);
              console.log(error);
          }
      },

      //select chat
      SelectContact(itemID: any) {
          this.selectedContact = itemID - 1;
      }
  }
});


*** Routing ***
import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuthStore } from '@/stores/auth';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/pages/maintenance/error/Error404.vue')
        },
        MainRoutes,
        AuthRoutes
    ]
});

router.beforeEach(async (to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/auth/login1'];
    const authRequired = !publicPages.includes(to.path);
    const auth: any = useAuthStore();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (authRequired && !auth.user) {
            auth.returnUrl = to.fullPath;
            return next('/auth/login1');
        } else next();
    } else {
        next();
    }
});


*** Authentication ***
Manage JWT Token based Authentication.

JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.

This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
How does it work?
Only authenticated users can access dashboard pages. If a user is not authenticated, the user is redirected to the login page.

Main.ts
Main.ts
Copy
import { fakeBackend } from '@/utils/helpers/fake-backend';
fakeBackend();
router.ts
router.ts
Copy
router.beforeEach(async (to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/auth/login1'];
    const authRequired = !publicPages.includes(to.path);
    const auth: any = useAuthStore();

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (authRequired && !auth.user) {
            auth.returnUrl = to.fullPath;
            return next('/auth/login1');
        } else next();
    } else {
        next();
    }
});

*** Skip Authentication ***
const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: false // Set to false
  },
  redirect: '/main/dashboard/default',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    // Other content here
  ]
};

export default MainRoutes;



*** AXIOS ***
axios.ts
axios.ts
Copy
import axios from '/utils/axios'; // 1. import axios
import pinia from 'pinia'; // 1.1. import pinia

export const useContactStore = defineStore({
  id: 'contact',
  state: (): contactType => ({
      contact: [],
      selectedContact: null
  }),
  getters: {},
  actions: {
      // Fetch contacts
      async fetchContacts() {
          try {
              const data = await axios.get('/api/contact/list'); // 2. change it to local service URL
              this.contact = data.data;
          } catch (error) {
              alert(error);
              console.log(error);
          }
      },
      // Fetch contacts
      async editContacts(contact: UserProfile) {
          try {
              const response = await axios.post('/api/contact/modify', contact);
              this.contact = response.data;
          } catch (error) {
              alert(error);
              console.log(error);
          }
      },
      // Fetch contacts
      async addContacts(contact: UserProfile) {
          try {
              const response = await axios.post('/api/contact/add', contact);
              this.contact = response.data;
          } catch (error) {
              alert(error);
              console.log(error);
          }
      },

      //select chat
      SelectContact(itemID: any) {
          this.selectedContact = itemID - 1;
      }
  }
});