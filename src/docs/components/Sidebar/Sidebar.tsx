import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Button from '../../../lib/components/Button/Button';
import { routes } from '../../routes';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside
      style={{}}
      className="fixed left-0 top-14 h-screen w-60 overflow-y-auto overflow-x-hidden border-r border-gray-100 p-4 dark:border-gray-900 dark:bg-gray-950"
    >
      <ul className="">
        {routes.map(({ path, title }) => (
          <li key={path} className="mb-3">
            <Button
              to={path}
              as={Link}
              color="gray"
              size="md"
              href={path}
              className={path === pathname ? '!bg-gray-200 dark:!bg-gray-800' : ''}
            >
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
