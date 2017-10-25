import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6dd2392d = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _78bc77bb = () => import('../pages/new.vue' /* webpackChunkName: "pages/new" */).then(m => m.default || m)
const _3f7397d8 = () => import('../pages/ask.vue' /* webpackChunkName: "pages/ask" */).then(m => m.default || m)
const _1fbc0e6a = () => import('../pages/jobs.vue' /* webpackChunkName: "pages/jobs" */).then(m => m.default || m)
const _3b284bf2 = () => import('../pages/show.vue' /* webpackChunkName: "pages/show" */).then(m => m.default || m)
const _2d1fb36b = () => import('../pages/user/_id.vue' /* webpackChunkName: "pages/user/_id" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _6dd2392d,
			name: "index"
		},
		{
			path: "/new",
			component: _78bc77bb,
			name: "new"
		},
		{
			path: "/ask",
			component: _3f7397d8,
			name: "ask"
		},
		{
			path: "/jobs",
			component: _1fbc0e6a,
			name: "jobs"
		},
		{
			path: "/show",
			component: _3b284bf2,
			name: "show"
		},
		{
			path: "/user/:id?",
			component: _2d1fb36b,
			name: "user-id"
		}
    ],
    fallback: false
  })
}
