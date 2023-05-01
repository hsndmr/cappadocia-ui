import Button from '../../../lib/components/Button/Button';
import PreviewCode from '../../components/PreviewCode/PreviewCode';

const OutlineButton = () => {
  return (
    <PreviewCode
      code={
        <div className="flex gap-2">
          <Button borderType="outline">Button</Button>
          <Button borderType="outline" color="light">
            Button
          </Button>
          <Button borderType="outline" color="gray">
            Button
          </Button>
          <Button borderType="outline" color="dark">
            Button
          </Button>
        </div>
      }
      title="Outline Button"
    />
  );
};

export default OutlineButton;
