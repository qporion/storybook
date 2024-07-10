import type { StorybookConfig } from "@sensiolabs/storybook-symfony-webpack5";

const config: StorybookConfig = {
    stories: ["../templates/components/**/*.stories.[tj]s", "../templates/components/**/*.mdx"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        '@storybook/addon-a11y',
    ],
    framework: {
        name: "@sensiolabs/storybook-symfony-webpack5",
        options: {
            // 👇 Here configure the framework
            symfony: {
                server: 'http://host.docker.internal:8001',
                proxyPaths: [
                    '/assets',
                ],
                additionalWatchPaths: [
                    'assets',
                    'templates'
                ]
            }
        },
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
