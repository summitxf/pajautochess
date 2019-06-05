import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'home-page',
      component: require('@/components/HomePage').default,
      props: (route) => ({
        heros: route.query.heros
      })
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
