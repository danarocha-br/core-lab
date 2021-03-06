import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { withThemesProvider } from "themeprovider-storybook";
import { tokens } from "../src/styles/designTokens";

import theme from './theme';

import './reset.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    theme,
  },
});

addDecorator(withA11y);
addDecorator(withInfo);
addDecorator(centered);

const themes = [
  {
    name: 'Light',
    backgroundColor: tokens.background.light,
    tokens: {
        primary: tokens.primary.light,
      form: {
        background: tokens.form.light.background,
        shade: tokens.form.light.shade,
        text: tokens.form.light.text,
        border: tokens.form.light.border,
        placeholder: tokens.form.light.placeholder,
        error: tokens.form.light.error,
        textAddon: tokens.form.light.textAddon,
      },

    }
  },
  {
    name: 'Dark',
    backgroundColor: tokens.background.dark,
    tokens: {
      primary: tokens.primary.dark,
      form: {
        background: tokens.form.dark.background,
        shade: tokens.form.dark.shade,
        text: tokens.form.dark.text,
        border: tokens.form.dark.border,
        placeholder: tokens.form.dark.placeholder,
        error: tokens.form.dark.error,
        textAddon: tokens.form.dark.textAddon,
      },

    }
  }
]
addDecorator(withThemesProvider(themes));

// Import all stories
configure(require.context('../src', true, /\.stories\.(tsx)$/), module);
configure(require.context('../docs', true, /\.docs\.mdx$/), module);
