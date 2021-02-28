import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import routes from './routes';

const routesWithComponents = {
  home: {
    ...routes.home,
    component: HomePage,
  },

  login: {
    ...routes.login,
    component: LoginPage,
  },

  logout: {
    ...routes.logout,
    component: LogoutPage,
  },
};

export default routesWithComponents;
