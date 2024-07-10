import ButtonGroup from './button_group.html.twig';
import { twig } from '@sensiolabs/storybook-symfony-webpack5';

export default {
    title: 'ButtonGroup',
    id: 'button-group',
    argTypes: {
        compact: {
            control: {type: 'boolean'},
            description: "Permet de supprimer l'espacement entre les boutons",
            defaultValue: false,
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
    },
    render: (args) => ({
        components: {ButtonGroup}, // This is recommended so your component can be hot reloaded
        template: twig`
            <twig:button-group>
                <twig:button/>
                <twig:button/>
                <twig:button/>
            </twig:button-group>
        `
    })
};

export const Default = {}

export const WithChildren = {
    render: (args) => ({
        props: args,
        template: twig`
            <twig:button-group :compact="compact">
                <twig:button/>
            </twig:button-group>
        `,
    }),
    args: {
        compact: true,
    }
};