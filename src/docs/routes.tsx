import ButtonPage from './pages/ButtonPage/ButtonPage';

export interface RouteProps {
  path: string;
  component: React.FC;
  title: string;
}

const routes: RouteProps[] = [
  {
    path: '/',
    title: 'Button',
    component: ButtonPage,
  },
];

export { routes };
