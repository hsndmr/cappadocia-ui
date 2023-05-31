import ButtonPage from './pages/ButtonPage/ButtonPage';
import TextInputPage from './pages/TextInputPage/TextInputPage';

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
  {
    path: '/text-input',
    title: 'TextInput',
    component: TextInputPage,
  },
];

export { routes };
