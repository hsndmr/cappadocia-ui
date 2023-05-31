import { render } from '@testing-library/react';
import React from 'react';
import { it } from 'vitest';
import UseRefComponent from '../../../test-components/UseRefComponent';
describe('useForwardRef', () => {
  it('should forward refs', function () {
    const ref = React.createRef<HTMLDivElement>();
    render(<UseRefComponent ref={ref} />);
    expect(ref.current?.textContent).toBe('Test');
  });
});
