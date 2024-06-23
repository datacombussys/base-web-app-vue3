const AuthRoutes = {
  path: '/auth',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      name: 'Landingpage',
      path: '/',
      component: () => import('@/views/pages/landingpage/LandingPage.vue') // Main Landing Page
    },
    {
      name: 'ContactUs',
      path: '/pages/contact-us',
      component: () => import('@/views/pages/landingpage/ContactUs.vue')
    },
    {
      name: 'PrivacyPolicy',
      path: '/pages/privacy-policy',
      component: () => import('@/views/pages/landingpage/PrivacyPolicy.vue')
    },
    {
      name: 'FAQs',
      path: '/pages/faq',
      component: () => import('@/views/pages/landingpage/FAQs.vue')
    },
    {
      name: 'Login',
      path: '/auth/login1',
      component: () => import('@/views/authentication/auth1/LoginPage1.vue')
    },
    {
      name: 'Captcha',
      path: '/auth/login1',
      component: () => import('@/views/authentication/auth1/LoginPage1.vue')
    },
    {
      name: 'Register',
      path: '/auth/register1',
      component: () => import('@/views/authentication/auth1/RegisterPage1.vue')
    },
    {
      name: 'Forgot Password',
      path: '/auth/forgot-pwd1',
      component: () => import('@/views/authentication/auth1/ForgotPwd1.vue')
    },
    {
      name: 'Check Mail',
      path: '/auth/check-mail1',
      component: () => import('@/views/authentication/auth1/CheckMail1.vue')
    },
    {
      name: 'Reset Password',
      path: '/auth/reset-pwd1',
      component: () => import('@/views/authentication/auth1/ResetPwd1.vue')
    },
    {
      name: 'Code Verification',
      path: '/auth/code-verify1',
      component: () => import('@/views/authentication/auth1/CodeVerification1.vue')
    },
    {
      name: 'Coming Soon 1',
      path: '/pages/comingsoon1',
      component: () => import('@/views/pages/maintenance/comingsoon/Comingsoon1.vue')
    },
    {
      name: 'Under Construction',
      path: '/pages/construction',
      component: () => import('@/views/pages/underconstruction/UnderConstruction.vue')
    },
    {
      name: 'Error 404',
      path: '/pages/error',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    },
    {
      name: 'Error 500',
      path: '/pages/error500',
      component: () => import('@/views/pages/maintenance/error/Error500Page.vue')
    }
  ]
};

export default AuthRoutes;
