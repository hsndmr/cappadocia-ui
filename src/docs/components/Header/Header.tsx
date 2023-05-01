import { MdLightMode, MdOutlineDarkMode } from 'react-icons/all';
import Button from '../../../lib/components/Button/Button';
import useDarkMode from '../../hooks/useDarkMode';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="sticky left-0 top-0 z-50 flex h-14 items-center justify-between border-b border-gray-100 px-4 dark:border-gray-900 dark:bg-gray-950">
      <h1 className="text-xl">Cappadocia UI</h1>
      <div className="flex justify-center">
        <div>
          <Button
            onClick={toggleDarkMode}
            color="gray"
            className="justify-center"
            radius="full"
            customSize={{
              button: 'w-7 h-7 p-1 text-xl',
            }}
          >
            {isDarkMode ? <MdLightMode /> : <MdOutlineDarkMode />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
