import { Preview } from '@sensiolabs/storybook-symfony-webpack5';
import '../assets/bootstrap.js'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
