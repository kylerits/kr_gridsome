// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Velocity from 'velocity-animate'

import DefaultLayout from '~/layouts/Default.vue'

import VueRellax from 'vue-rellax'

import VanillaTilt from 'vanilla-tilt'

export default function (Vue, {router, head, isClient}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueRellax)

  Vue.directive('tilt', (el, binding) => {
    VanillaTilt.init(el, Object.assign({}, binding.value))
  })

  // Populate Head
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/kwg0fbi.css'
  })
}
