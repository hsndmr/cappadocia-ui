import Button from '../../../lib/components/Button/Button';
import PreviewCode from '../../components/PreviewCode/PreviewCode';

const PillButton = () => {
  return (
    <PreviewCode
      code={
        <div className="flex gap-2">
          <Button radius="full">Button</Button>
          <Button radius="full" color="light">
            Button
          </Button>
          <Button radius="full" color="gray">
            Button
          </Button>
          <Button radius="full" color="dark">
            Button
          </Button>
        </div>
      }
      title="Pill Button"
    />
  );
};

export default PillButton;
