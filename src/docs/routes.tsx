import ButtonPage from './pages/ButtonPage/ButtonPage';
import HomePage from './pages/HomePage';

export interface RouteProps {
  path: string;
  component: React.FC;
  title: string;
}

const routes: RouteProps[] = [
  {
    path: '/',
    title: 'Home',
    component: HomePage,
  },
  {
    path: '/button',
    title: 'Button',
    component: ButtonPage,
  },
];

export { routes };
