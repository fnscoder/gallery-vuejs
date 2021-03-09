import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Photos from '../views/Photos';
import Admin from '../views/Admin';

import Login from '../components/Login';
import Register from '../components/Register';
import Users from '../components/Users';
import PhotoAdd from '../components/PhotoAdd';
import PhotoDetail from '../components/PhotoDetail';
import PhotoComment from '../components/PhotoComment';

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},{
  path: '/login',
  name: 'Login',
  component: Login
},{
  path: '/register',
  name: 'Register',
  component: Register,
},{
  path: '/admin',
  name: 'Admin',
  component: Admin,
},{
  path: '/users',
  name: 'Users',
  component: Users,
},{
  path: '/photos',
  name: 'Photos',
  component: Photos,
},{
  path: '/photos/add',
  name: 'PhotoAdd',
  component: PhotoAdd,
},{
  path: '/photos/:id/detail',
  name: 'PhotoDetail',
  component: PhotoDetail,
},{
  path: '/photos/:id/comment',
  name: 'PhotoComment',
  component: PhotoComment,
}]

const router = new Router({
  base: process.env.BASE_URL,
  routes
});

export default router;