const path = require('path');

module.exports = {
  stories: [
    '../docs/Intro.stories.mdx',
    '../docs/Flowchart.stories.tsx',
    // '../docs/Sequence.stories.mdx',
    // '../docs/ClassDiagram.stories.mdx',
    // '../docs/StateDiagram.stories.mdx',
    // '../docs/GanttChart.stories.mdx',
    // '../docs/PieChart.stories.mdx',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
  webpackFinal: config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            reportFiles: ['docs/**/*.{ts|tsx}'],
          },
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, '..'),
    });
    return config;
  },
};
