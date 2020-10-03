import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { layout: 'main' }
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
		meta: { layout: 'empty' }
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import(/* webpackChunkName: "register" */ '../views/register.vue'),
		meta: { layout: 'empty' }
	},
	{
		path: '/docs',
		name: 'Docs',
		// route level code-splitting
		// this generates a separate chunk (docs.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "docs" */ '../views/Docs.vue'),
		children: [
			{
				path: '/',
				name: 'main',
				component: () => import(/* webpackChunkName: "docs-main" */ '../views/docs/main.vue'),
				meta: { layout: 'main' }
			},
			{
				path: 'new',
				name: 'new',
				component: () => import(/* webpackChunkName: "docs-new" */ '../views/docs/new.vue'),
				meta: { layout: 'main' }
			},
			{
				path: 'settings',
				name: 'settings',
				component: () => import(/* webpackChunkName: "docs-settings" */ '../views/docs/settings.vue'),
				meta: { layout: 'main' }
			},
			{
				path: 'js',
				name: 'js',
				component: () => import(/* webpackChunkName: "docs-js" */ '../views/docs/js.vue'),
				meta: { layout: 'main' }
			},
			{
				path: 'php',
				name: 'php',
				component: () => import(/* webpackChunkName: "docs-php" */ '../views/docs/php.vue'),
				meta: { layout: 'main' }
			},
			{
				path: 'vue',
				name: 'vue',
				component: () => import(/* webpackChunkName: "docs-vue" */ '../views/docs/vue.vue'),
				meta: { layout: 'main' }
			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	linkActiveClass: 'active'
})

export default router
