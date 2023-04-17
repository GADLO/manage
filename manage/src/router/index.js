import Vue from 'vue'
import Router from 'vue-router'
import ManageIndex from "../components/ManageIndex";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ManageIndex',
      component: ManageIndex
    }
  ]
})
