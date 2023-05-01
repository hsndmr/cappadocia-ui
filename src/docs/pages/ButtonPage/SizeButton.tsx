import Button from '../../../lib/components/Button/Button';
import PreviewCode from '../../components/PreviewCode/PreviewCode';

const SizeButton = () => {
  return (
    <PreviewCode
      code={
        <div className="flex items-center gap-4">
          <div>
            <Button size="xl">XLarge</Button>
          </div>
          <div>
            <Button size="lg">Large</Button>
          </div>
          <div>
            <Button size="md">Medium</Button>
          </div>

          <div>
            <Button size="sm">Small</Button>
          </div>

          <div>
            <Button size="xs">XSmall</Button>
          </div>
        </div>
      }
      title="Size Button"
    />
  );
};

export default SizeButton;
