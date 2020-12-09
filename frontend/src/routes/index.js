import { createRouter } from 'vue-router'

import Home from '../views/Home'
import Login from '../views/login-view'
import leftDrawer from '@/components/navigation/left-drawer-component'

// Superuser pages
import superUserDashboard from '@/pages/superuser-portal/dashboard'
import superUserManageAdmin from '@/pages/superuser-portal/manage-admin'

// Admin pages
import adminDashboard from '@/pages/admin-portal/dashboard'
import adminManageTeachers from '@/pages/admin-portal/manage-teachers'
import adminManageParents from '@/pages/admin-portal/manage-parents'
import adminManageStudents from '@/pages/admin-portal/manage-students'
import adminPurchaseOrders from '@/pages/admin-portal/purchase-orders'
import adminManageVendors from '@/pages/admin-portal/manage-vendors'
import adminSettings from '@/pages/admin-portal/settings'

// Parent pages
import parentDashboard from '@/pages/parent-portal/dashboard'
import newOrder from '@/pages/parent-portal/new-order'
import orderHistory from '@/pages/parent-portal/order-history'

// Teacher pages
import teacherDashboard from '@/pages/teacher-portal/dashboard'
import approveOrders from '@/pages/teacher-portal/approve-orders'

// Vendor pages
import vendorDashboard from '@/pages/vendor-portal/dashboard'
import inventoryList from '@/pages/vendor-portal/vendor-catalog'

// Student pages
import studentDashboard from '@/pages/student-portal/dashboard'

// Products and Services
import productsServices from '@/pages/products-services/manage-products'

// Shopping Cart
import shoppingCart from '@/pages/shopping-cart/website'

// Profile Pages
import adminProfile from '@/views/profiles/admin-profile-view'
import teacherProfile from '@/views/profiles/teacher-profile-view'
import parentProfile from '@/views/profiles/parent-profile-view'

// Email View
// import emailView from '@/views/emails/email'



const router = createRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/secured',
      name: 'Secured',
      component: Login
    },
    // Superuser Pages
    {
      path: '/superuser',
      name: 'superuser',
      meta: { requiresAuth: true },
      components: {
        main: superUserDashboard,
        left: leftDrawer
      }
    },

    {
      path: '/superuser/admin',
      name: 'superuser-admin',
      meta: { requiresAuth: true },
      components: {
        main: superUserManageAdmin,
        left: leftDrawer
      }
    },
    // Admin Pages
    {
      path: '/admin',
      name: 'admin',
      meta: { requiresAuth: true },
      components: {
        main: adminDashboard,
        left: leftDrawer
      }
    },
    {
      path: '/admin/vendors',
      name: 'admin-vendors',
      meta: { requiresAuth: true },
      components: {
        main: adminManageVendors,
        left: leftDrawer
      }
    },
    {
      path: '/admin/teachers',
      name: 'admin-teachers',
      meta: { requiresAuth: true },
      components: {
        main: adminManageTeachers,
        left: leftDrawer
      }
    },
    {
      path: '/admin/parents',
      name: 'admin-parents',
      meta: { requiresAuth: true },
      components: {
        main: adminManageParents,
        left: leftDrawer
      }
    },
    {
      path: '/admin/students',
      name: 'admin-students',
      meta: { requiresAuth: true },
      components: {
        main: adminManageStudents,
        left: leftDrawer
      }
    },
    {
      path: '/admin/POs',
      name: 'admin-POs',
      meta: { requiresAuth: true },
      components: {
        main: adminPurchaseOrders,
        left: leftDrawer
      }
    },
    {
      path: '/admin/vendors',
      name: 'admin-vendors',
      meta: { requiresAuth: true },
      components: {
        main: adminManageVendors,
        left: leftDrawer
      }
    },
    {
      path: '/admin/settings',
      name: 'admin-settings',
      meta: { requiresAuth: true },
      components: {
        main: adminSettings,
        left: leftDrawer
      }
    },
    // teacher Pages
    {
      path: '/teacher',
      name: 'teacher',
      meta: { requiresAuth: true },
      components: {
        main: teacherDashboard,
        left: leftDrawer
      }
    },
    {
      path: '/teacher/aprove',
      name: 'approve-orders',
      meta: { requiresAuth: true },
      components: {
        main: approveOrders,
        left: leftDrawer
      }
    },
    // Parent Pages
    {
      path: '/parent',
      name: 'parent',
      meta: { requiresAuth: true },
      components: {
        main: parentDashboard,
        left: leftDrawer
      }
    },
    {
      path: '/order',
      name: 'order',
      meta: { requiresAuth: true },
      components: {
        main: newOrder,
        left: leftDrawer
      }
    },
    {
      path: '/order-history',
      name: 'order-history',
      meta: { requiresAuth: true },
      components: {
        main: orderHistory,
        left: leftDrawer
      }
    },
    // Vendor Pages
    {
      path: '/vendor',
      name: 'vendor',
      meta: { requiresAuth: true },
      components: {
        main: vendorDashboard,
        left: leftDrawer
      }
    },
    {
      path: '/vendor/catalog',
      name: 'vendor-catalog',
      meta: { requiresAuth: true },
      components: {
        main: inventoryList,
        left: leftDrawer
      }
    },
    // Student Pages
    {
      path: '/student',
      name: 'student',
      meta: { requiresAuth: true },
      components: {
        main: studentDashboard,
        left: leftDrawer
      }
    },
    // Porducts and Services (Inventory)
    {
      path: '/products-services',
      name: 'products-services',
      meta: { requiresAuth: true },
      components: {
        main: productsServices,
        left: leftDrawer
      }
    },
    // Shopping Cart
    {
      path: '/shopping-cart',
      name: 'Shopping Cart',
      meta: { requiresAuth: false },
      component: shoppingCart
    },
    // User Profile Pages
    {
      path: '/profile/admin',
      name: 'profile-admin',
      meta: { requiresAuth: true },
      components: {
        main: adminProfile,
        left: leftDrawer
      }
    },
    {
      path: '/profile/teacher',
      name: 'profile-teacher',
      meta: { requiresAuth: true },
      components: {
        main: teacherProfile,
        left: leftDrawer
      }
    },
    {
      path: '/profile/parent',
      name: 'profile-parent',
      meta: { requiresAuth: true },
      components: {
        main: parentProfile,
        left: leftDrawer
      }
    }
    // Email View
    // {
    //   path: '/email',
    //   name: 'email',
    //   meta: { requiresAuth: true },
    //   components: {
    //     main: emailView,
    //     left: leftDrawer
    //   }
    // }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('store.getters.IS_AUTHENTICATED', store.getters.IS_AUTHENTICATED)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Load User from Local Storage
    store.dispatch('preFetchLogin')

    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.IS_AUTHENTICATED) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export { router }