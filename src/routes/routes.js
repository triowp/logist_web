import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import Login from '../auth/authorization/Login';
import Register from '../auth/registration/Register';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/catalog',
    component: Catalog,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];