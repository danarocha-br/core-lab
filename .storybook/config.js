import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';

import theme from './theme';

import './reset.css';

addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'dark', value: '#1F2533', default: true },
    { name: 'light', value: '#FBFCFF' },
  ],
  options: {
    theme,
  },
});

addDecorator(withInfo);
addDecorator(centered);

// Import all stories
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
