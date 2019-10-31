import { configure } from '@storybook/vue';


configure(require.context('../src/stories', true, /\.js$/), module);
