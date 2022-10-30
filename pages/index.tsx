import { Grid, Text, Switch } from '@nextui-org/react';
import { useTheme } from '@hooks';
import { Moon, Sun } from '@components';
import type { NextPage } from 'next';

const IndexPage: NextPage = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Grid.Container
      css={{
        m: 'auto',
        w: 'fit-content',
        ai: 'center',
        gap: '$xl',
        flexFlow: 'column nowrap'
      }}
    >
      <Grid>
        <Text h2 className="nextui-text">
          Hi there
        </Text>
      </Grid>
      <Grid css={{ dflex: 'center', gap: '$sm' }}>
        <Text span className="nextui-text">
          Toggle Theme
        </Text>
        <Switch
          className="nextui-switch-label"
          size="lg"
          color="secondary"
          checked={isDark}
          iconOn={<Moon />}
          iconOff={<Sun />}
          onChange={() => toggleTheme()}
        />
      </Grid>
    </Grid.Container>
  );
};

export default IndexPage;
