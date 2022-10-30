import { createTheme } from '@nextui-org/react';

const fonts = {
  sans: [
    '"SF Pro Rounded"',
    '"Inter var"',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ].join(', ')
};

const lightTheme = createTheme({
  type: 'light',
  className: 'light-theme',
  theme: {
    fonts,
    colors: {
      colorScheme: 'light'
    }
  }
});

const darkTheme = createTheme({
  type: 'dark',
  className: 'dark-theme',
  theme: {
    fonts,
    colors: {
      colorScheme: 'dark'
    }
  }
});

export const theme = {
  defaultTheme: 'system',
  enableColorScheme: false,
  value: {
    dark: darkTheme.className,
    light: lightTheme.className
  }
};
