import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import theme from './theme';

import './reset.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: [
    { name: 'dark', value: '#e3e3e3', default: true },
    { name: 'light', value: '#6786' },
  ],
  options: {
    theme,
  },
});

addDecorator(withInfo);
addDecorator(centered);

// Import all stories
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
