import { themes } from '@storybook/theming'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      autodocs: true,
      theme: themes.dark
    },
    backgrounds: {
      default: 'dark'
    },
  },
};

export default preview;
