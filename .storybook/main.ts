const path = require('path');

module.exports = {
  stories: [
    '../docs/Intro.stories.mdx',
    '../docs/Customizing.stories.mdx',
    // '../docs/Flowchart.stories.tsx',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
        actions: false,
      },
    },
  ],
  webpackFinal: (config: any) => {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, '..'),
    });
    return config;
  },
};
