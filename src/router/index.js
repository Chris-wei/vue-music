import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
    routes: [
      {
          path: '/',
          component : resolve => require.ensure([], () => resolve(require('@/pages/Home.vue')), 'Home'),
          name: 'Home',
		  redirect : '/recom',
		  children : [
			  { path : '/recom' , component : resolve => require.ensure([], () => resolve(require('@/components/Recom.vue')), 'Recom') },
			  { path : '/toplist' , component : resolve => require.ensure([], () => resolve(require('@/components/Toplist.vue')), 'Toplist') },
			  { path : '/search' , component : resolve => require.ensure([], () => resolve(require('@/components/Search.vue')), 'Search') }
		  ]
      }
    ]
})
