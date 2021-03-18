// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/global.css'
import VueGtag from "vue-gtag"
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if(onResolve || onReject)
   return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

VueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if( onResolve || onReject) 
    return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueRouter)

  head.link.push({
    rel:'stylesheet',
    href: 'https://use.typekit.net/epg5rsz.css'
  });

  Vue.use(VueGtag, {
    config: { id: "UA-143256811-2" }
  });
}
