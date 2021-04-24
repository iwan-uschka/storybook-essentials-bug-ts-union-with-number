module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        // controls: false,
        // docs: false,
        // actions: false,
        // viewport: false,
        // backgrounds: false,
        // toolbars: false,
      },
    },
    "@storybook/preset-create-react-app",
  ],
};
