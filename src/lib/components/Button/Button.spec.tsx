import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('it should have button', () => {
    render(<Button>Button</Button>);
    expect(document.querySelector('button')).toBeInTheDocument();
  });
});
