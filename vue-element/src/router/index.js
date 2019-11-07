import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Chart from '@/components/chart/Chart'
import Table from '@/components/table/Table'
import Form from '@/components/form/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/chart',
          name: 'Chart',
          component: Chart,
        },
        {
          path: '/table',
          name: 'Table',
          component: Table,
        },
        {
          path: '/form',
          name: 'Form',
          component: Form,
        },
      ]
    }
  ]
})
