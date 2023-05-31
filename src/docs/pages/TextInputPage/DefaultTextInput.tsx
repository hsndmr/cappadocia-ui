import TextInput from '../../../lib/components/TextInput/TextInput';
import PreviewCode from '../../components/PreviewCode/PreviewCode';

const DefaultTextInput = () => {
  return (
    <PreviewCode
      title="Default"
      code={
        <div className="flex flex-col gap-4">
          <TextInput label="Default" />
        </div>
      }
    />
  );
};

export default DefaultTextInput;
