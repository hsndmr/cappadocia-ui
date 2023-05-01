import Button from '../../../lib/components/Button/Button';
import PreviewCode from '../../components/PreviewCode/PreviewCode';

const DefaultButton = () => {
  return (
    <PreviewCode
      code={
        <div className="flex gap-2">
          <Button>Button</Button>
          <Button color="light">Button</Button>
          <Button color="gray">Button</Button>
          <Button color="dark">Button</Button>
        </div>
      }
      title="Default Button"
    />
  );
};

export default DefaultButton;
