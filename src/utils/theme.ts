import { createSystem, defaultConfig } from '@chakra-ui/react';

const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: { value: '#3EF67D' },
        dark: { value: '#0B0E12' },
      },
    },
  },
});

export default theme;
