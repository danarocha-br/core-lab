import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: 'hotpink',
  colorSecondary: '#453EEB',

  appBg: '#1F2533',
  appContentBg: '#1F2533',
  appBorderColor: '#667AA3',
  appBorderRadius: 20,
  appTextColor: '#FBFCFF',

  textColor: '#FBFCFF',
  fontBase: '"DM Sans", sans-serif',
  fontCode: 'monospace',

  // Toolbar default and active colors
  barTextColor: '#DAE5FB',
  barSelectedColor: '#fff',
  barBg: '#323D53',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Core Lab Docs',
  brandUrl: 'https://www.danarocha.com.br/',
});
