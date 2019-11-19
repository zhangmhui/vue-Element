import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Chart from '@/components/chart/Chart'
import Table from '@/components/table/Table'
import TableBorder from '@/components/table/TableBorder'
import TableState from '@/components/table/tablestate'
import SpanMethod from '@/components/table/SpanMethod'
import SelectSingle from '@/components/table/SelectSingle'
import SelectMore from '@/components/table/SelectMore'
import OrderBy from '@/components/table/OrderBy'
import MoreTitle from '@/components/table/MoreTitle'

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
          path: '/moretitle',
          name: 'MoreTitle',
          component: MoreTitle,
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
          path: '/spanmethod',
          name: 'SpanMethod',
          component: SpanMethod,
        },
        {
          path: '/selectsingle',
          name: 'SelectSingle',
          component: SelectSingle,
        },
        {
          path: '/selectmore',
          name: 'SelectMore',
          component: SelectMore,
        },
        {
          path: '/orderby',
          name: 'OrderBy',
          component: OrderBy,
        },
      ]
    }
  ]
})
