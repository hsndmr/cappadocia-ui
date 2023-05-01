import type { Preview } from '@storybook/react';
import './style.css';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      current: 'dark',
      darkClass: 'dark',
      stylePreview: true,
      classTarget: 'html',
    },
  },
};

export default preview;
