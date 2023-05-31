import type { ForwardedRef } from 'react';
import { useEffect, useRef } from 'react';

const useForwardRef = <T>(ref: ForwardedRef<T>) => {
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    if (!ref) {
      return;
    }

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};

export default useForwardRef;
