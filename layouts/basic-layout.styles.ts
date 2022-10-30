import { styled } from '@nextui-org/react';

export const StyledFooter = styled('footer', {
  m: 'auto',
  pt: '$md',
  pb: '$xl',
  us: 'none',
  zIndex: '$2',
  position: 'relative',
  span: {
    d: 'inline-flex',
    jc: 'center',
    ai: 'center',
    gap: 'calc($xs / 2)'
  }
});
