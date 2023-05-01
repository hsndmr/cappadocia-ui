import Button from '../../../lib/components/Button/Button';
import PreviewCode from '../../components/PreviewCode/PreviewCode';

const LoaderButton = () => {
  return (
    <PreviewCode
      code={
        <div className="flex items-center gap-4">
          <div>
            <Button isProcessing={true}>Button</Button>
          </div>
          <div>
            <Button borderType="outline" isProcessing={true}>
              Button
            </Button>
          </div>
        </div>
      }
      title="Loader Button"
    />
  );
};

export default LoaderButton;
