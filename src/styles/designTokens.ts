export const colors = {
  gray: {
    100: '#FBFCFF',
    200: '#ECF2FD',
    300: '#DAE5FB',
    400: '#C6D4F1',
    500: '#B4C6E9',
    600: '#8FA2C7',
    700: '#4C5E80',
    800: '#364159',
    900: '#1F2533',
  },
  indigo: {
    100: '#F0E3ED',
    300: '#EE99EF',
    500: '#D17EF1',
    700: '#A261F3',
    900: '#4740F2',
  },
  green: {
    100: '#D5F7EF',
    300: '#AEF0DD',
    500: '#89E8CB',
    700: '#66E1B7',
    900: '#45D9A3',
  },
  blue: {
    100: '#9EE6F7',
    300: '#80DAF5',
    500: '#63CEF3',
    700: '#46BFF0',
    900: '#2AB0EE',
  },
  red: {
    100: '#F7D5D5',
    300: '#FFA69E',
    500: '#F78C85',
    700: '#E85A7C',
    900: '#E12D58',
  },
  white: '#ffffff',
};

export const textSizes = {
  xs: '.75rem',
  sm: '.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xxl: '1.5rem',
  xxxl: '1.875rem',
  xxxxl: '2.25rem',
  xxxxxl: '3rem',
};

export const tokens = {
  primary: {
    light: colors.indigo[900],
    dark: colors.indigo[500],
  },
  background: {
    light: colors.gray[100],
    dark: colors.gray[900],
  },
  form: {
    light: {
      background: colors.gray[200],
      border: colors.gray[300],
      shade: colors.white,
      error: colors.red[900],
      text: colors.gray[900],
      placeholder: colors.gray[700],
      textAddon: colors.gray[700],
    },
    dark: {
      background: colors.gray[800],
      border: colors.gray[700],
      shade: colors.gray[700],
      error: colors.red[700],
      text: colors.white,
      placeholder: colors.gray[400],
      textAddon: colors.gray[500],
    },
    sizeSmall: {
      inputTextSize: textSizes.sm,
      placeholderTextSize: textSizes.sm,
    },
    sizeDefault: {
      inputTextSize: textSizes.base,
      placeholderTextSize: textSizes.base,
    },
  },
};
