import NextLink from 'next/link';
import { Heart } from 'react-iconly';
import { Container, Navbar, Text, Link } from '@nextui-org/react';
import { StyledFooter } from './basic-layout.styles';
import type { FC, ReactNode } from 'react';

export const BasicLayout: FC<BasicLayoutProps> = (props: BasicLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Navbar
        maxWidth="sm"
        css={{
          us: 'none',
          background: '$$navbarBlurBackgroundColor',
          backdropFilter: 'saturate(180%) blur($$navbarBlur)'
        }}
      >
        <Navbar.Brand>
          <Text b css={{ fs: '$2xl', textGradient: '45deg, #FA7671 50%, #F45F7F 100%' }}>
            NextUI + Next.js
          </Text>
        </Navbar.Brand>
        <Navbar.Content css={{ ml: 'auto' }}>
          <Navbar.Link
            isExternal
            as={NextLink}
            color="secondary"
            css={{ gap: 'calc($xs / 2)' }}
            href="https://nextui.org"
            target="_blank"
          >
            NextUI
          </Navbar.Link>
          <Navbar.Link
            isExternal
            as={NextLink}
            color="secondary"
            css={{ gap: 'calc($xs / 2)' }}
            href="https://nextjs.org"
            target="_blank"
          >
            Next.js
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <Container
        sm
        as="main"
        css={{ py: '$xl', flex: '1', zIndex: '$2', position: 'relative' }}
      >
        {children}
      </Container>
      <StyledFooter>
        <Text span className="nextui-text">
          Made with
          <Heart set="bold" primaryColor="var(--nextui-colors-error)" />
          by
          <Link
            isExternal
            as={NextLink}
            color="secondary"
            href="https://github.com/tianenpang"
            target="_blank"
          >
            Tianen Pang
          </Link>
        </Text>
      </StyledFooter>
    </>
  );
};

interface BasicLayoutProps {
  children?: ReactNode;
}
