import "../src/app.css";

/** @type { import('@storybook/svelte').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "light",
          value: "#f0f0f0",
        },
        {
          name: "dark",
          value: "#242424",
        },
      ],
    },
  },
};

export default preview;
