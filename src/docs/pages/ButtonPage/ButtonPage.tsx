import DefaultButton from './DefaultButton';
import DisabledButton from './DisabledButton';
import LoaderButton from './LoaderButton';
import OutlineButton from './OutlineButton';
import PillButton from './PillButton';
import SizeButton from './SizeButton';

const ButtonPage = () => {
  return (
    <div className="flex w-full flex-col gap-12">
      <DefaultButton />
      <OutlineButton />
      <SizeButton />
      <PillButton />
      <LoaderButton />
      <DisabledButton />
    </div>
  );
};

export default ButtonPage;
