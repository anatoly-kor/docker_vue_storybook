import MyButton from '../components/MyButton.vue';


export default { title: 'Buttons'}

export const sumbit_button = () => ({
    components: { MyButton },
    template: '<my-button></my-button>'
})

export const test_button = () => ({
    components: { MyButton },
    template: '<my-button>Test</my-button>'
})

// Second way
import { storiesOf } from '@storybook/vue';

storiesOf('Button 2', module)
  .add('default', () => ({
    components: { MyButton },
    template: '<my-button>Default</my-button>'
  }))