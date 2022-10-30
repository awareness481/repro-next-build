import { globalCss } from '@nextui-org/react';

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontStyle: 'normal',
      fontWeight: '100 800',
      fontFamily: 'Inter var',
      fontDisplay: 'optional',
      src: 'url("/asset/font/Inter.var.woff2") format("woff2")'
    }
  ],
  html: {
    $$scheme: '$colors$colorScheme',
    colorScheme: '$$scheme'
  },
  'div#__next > div[data-overlay-container="true"]:first-of-type': {
    d: 'flex',
    us: 'none',
    size: '100%',
    minHeight: '100vh',
    position: 'relative',
    flexFlow: 'column nowrap'
  },
  'html, body': {
    transitionProperty: 'background',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease'
  },
  'nav.nextui-navbar': {
    transitionProperty: 'box-shadow, background',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease'
  },
  'div.nextui-navbar-container': {
    background: 'none !important',
    backdropFilter: 'none !important',
    transition: 'none'
  },
  'label.nextui-switch-label': {
    p: 0,
    transition: 'none'
  },
  'div.nextui-switch': {
    transitionProperty: 'background, box-shadow',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease'
  },
  'span.nextui-switch-circle': {
    transitionProperty: 'color, background, transform, width',
    transitionDuration: '250ms, 250ms, 250ms, 200ms',
    transitionTimingFunction: 'ease'
  },
  '*.nextui-text': {
    transitionProperty: 'color',
    transitionDuration: '250ms',
    transitionTimingFunction: 'ease'
  },
  '*.nextui-link': {
    br: 'calc($xs / 1.4)'
  }
});
