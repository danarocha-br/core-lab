import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'hotpink',
  colorSecondary: '#453EEB',

  appBg: '#1F2533',
  appContentBg: '#1F2533',
  appBorderColor: '#667AA3',
  appBorderRadius: 20,

  textColor: '#fff',
  fontBase: '"DM Sans", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: '#FBFCFF',
  barSelectedColor: '#ffffff',
  barBg: '#323D53',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Core Lab Docs',
  brandUrl: 'https://www.danarocha.com.br/',
});
