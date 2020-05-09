import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { withThemesProvider } from "themeprovider-storybook";
// import dark from '../src/themes/dark';

import theme from './theme';

import './reset.css';

addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    theme,
  },
});

addDecorator(withInfo);
addDecorator(centered);

const themes = [
  {
    name: 'Light',
    backgroundColor: '#fff',
    palette: {
      Base: {
        primary: '#453EEB',
      },
      Form: {
        backgroundColor: ' #ECF2FD',
        effectColor: ' #fff',
        fontColor: '#323D53',
        borderColor: 'rgba(194, 203, 219, .7)',
        placeholderColor: '#667AA3',
        opacityDisabled: 0.25,
        borderError: '#e25a66',
      },
      Common: {
        backgroundColor: '#1a213f',
        fontColor: '#808ab1',
        borderError: '#e25a66'
      },
    }
  },
  {
    name: 'Dark',
    backgroundColor: '#1F2533',
    palette: {
        Base: {
          primary: '#5577F0'
        },
      Form: {
        backgroundColor: '#323D53',
        effectColor: 'rgba(255, 255, 255, .1)',
        fontColor: '#fff',
        borderColor: 'rgba(255, 255, 255, .2)',
        placeholderColor: '#D4DBE8',
        opacityDisabled: 0.25,
        borderError: '#e25a66',
      },
      Common: {
        backgroundColor: '#1a213f',
        fontColor: '#808ab1',
        borderError: '#e25a66'
      },
    }
  }
]
addDecorator(withThemesProvider(themes));

// Import all stories
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
