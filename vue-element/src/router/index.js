import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Chart from '@/components/chart/Chart'
import Table from '@/components/table/Table'
import TableBorder from '@/components/table/TableBorder'
import TableState from '@/components/table/tablestate'

import StanderWidth from '@/components/table/StanderWidth'
import StanderHeight from '@/components/table/StanderHeight'
import Transfer from '@/components/tansfer/Transfer'

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
          path: '/tableborder',
          name: 'TableBorder',
          component: TableBorder,
        },
        {
          path: '/tablestate',
          name: 'TableState',
          component: TableState,
        },
        {
          path: '/standerheight',
          name: 'StanderHeight',
          component: StanderHeight,
        },
        {
          path: '/standerwidth',
          name: 'StanderWidth',
          component: StanderWidth,
        },
        {
          path: '/form',
          name: 'Form',
          component: Form,
        },
        {
          path: '/transfer',
          name: 'Transfer',
          component: Transfer,
        },
        {
          path: '/transfer',
          name: 'Transfer',
          component: Transfer,
        },
      ]
    }
  ]
})
