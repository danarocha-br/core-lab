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
  red: {
    100: '#F7D5D5',
    300: '#FFA69E',
    500: '#F78C85',
    700: '#EA6880',
    900: '#E5466C',
  },
  white: '#ffffff',
};

export const tokens = {
  primary: {
    light: colors.indigo[900],
    dark: colors.indigo[500],
  },
  background: {
    light: colors.white,
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
    },
    dark: {
      background: colors.gray[800],
      border: colors.gray[700],
      shade: colors.gray[700],
      error: colors.red[700],
      text: colors.white,
      placeholder: colors.gray[400],
    },
  },
};
