import { render } from '@testing-library/react';
import { it } from 'vitest';
import Button from './Button';
describe('Button', () => {
  it('it should have button', () => {
    render(<Button>Button</Button>);
    expect(document.querySelector('button')).toBeInTheDocument();
  });
});
