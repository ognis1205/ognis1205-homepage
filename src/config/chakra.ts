/**
 * @fileoverview Defines ChakraUI config.
 * @copyright Shingo OKAWA 2022
 */
import * as Chakra from '@chakra-ui/react';
import * as ChakraThemeTools from '@chakra-ui/theme-tools';

// https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = ChakraThemeTools.createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

export const Theme = Chakra.extendTheme({
  breakpoints,
  // https://chakra-ui.com/docs/theming/theme#typography
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  // https://chakra-ui.com/docs/theming/theme#config
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});
