import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/Introduction'
import Comments from '@/components/Comments'
import Official from '@/components/Official'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // routes: [{
  //   path: '/',
  //   redirect: '/Introduction'
  // }, {
  //   path: '/Introduction',
  //   name: 'Introduction',
  //   component: Introduction,
  //   children: [{
  //     path: '/Official',
  //     name: 'Official',
  //     component: Official
  //   }, {
  //     path: '/Comments',
  //     name: 'Comments',
  //     component: Comments
  //   }]
  // }]
  routes: [{
    path: '*',
    redirect: '/Introduction'
  },{
    path: '/Introduction',
    name: 'Introduction',
    component: Introduction
  }, {
    path: '/Comments',
    name: 'Comments',
    component: Comments
  },, {
    path: '/Official',
    name: 'Official',
    component: Official
  }]

})
