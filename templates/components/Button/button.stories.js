import Button from './button.html.twig';
import {expect, fn, userEvent, waitFor, within} from '@storybook/test';

export default {
    component: Button,
    argTypes: {
        variant: {
            options: ['primary', 'alternative'],
            control: {type: 'radio'},
        },
        size: {
            options: ['lg', 'md'],
            control: {type: 'radio'},
        },
    }
}


export const Default = {
    args: {
        variant: 'primary',
        size: 'md',
        click: fn(),
        mouseover: fn(),
    },
    play: async ({ canvasElement}) => {
        const canvas = within(canvasElement);

        const button = canvas.getByRole('button');

        await userEvent.hover(button);

        await waitFor(() => expect(button).toHaveStyle('display: none'));

        await userEvent.click(button);

        await waitFor(() => expect(button).toHaveStyle('background-color: #b300ff'));
    }
}