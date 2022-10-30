import { useCallback, useMemo } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();

  const isDark = useMemo<boolean>(() => {
    return Boolean(theme === 'dark');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  return { theme, isDark, toggleTheme };
};
