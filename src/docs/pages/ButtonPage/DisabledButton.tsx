import Button from '../../../lib/components/Button/Button';
import PreviewCode from '../../components/PreviewCode/PreviewCode';

const DefaultButton = () => {
  return (
    <PreviewCode
      code={
        <div className="flex gap-2">
          <Button disabled={true}>Button</Button>
          <Button disabled={true} color="light">
            Button
          </Button>
          <Button disabled={true} color="gray">
            Button
          </Button>
          <Button disabled={true} color="dark">
            Button
          </Button>
        </div>
      }
      title="Disabled Button"
    />
  );
};

export default DefaultButton;
