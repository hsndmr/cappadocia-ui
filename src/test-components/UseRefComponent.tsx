import { forwardRef } from 'react';
import useForwardRef from '../lib/hooks/useForwardRef/useForwardRef';

const UseRefComponent = forwardRef<HTMLDivElement>((_, ref) => {
  const targetRef = useForwardRef(ref);
  return <div ref={targetRef}>Test</div>;
});

export default UseRefComponent;
