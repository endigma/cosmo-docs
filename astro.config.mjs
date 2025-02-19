// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'WunderGraph',
        logo: {
            src: './src/assets/wundergraph-logo.svg',
            replacesTitle: true,
        },
        customCss: [
            "./src/styles/custom.css"
        ],
        social: {
            github: 'https://github.com/wundergraph/cosmo',
            discord: 'https://discord.gg/Jjmc8TC'
        },
        components: {
            Sidebar: "./src/components/Sidebar.astro",
        },
        sidebar: [
            'index',
            'architecture',
            'enterprise',
            'self-hosted',
            {
                label: 'Tutorial',
                autogenerate: { directory: 'tutorial', collapsed: true },
            },
            {
                label: 'Getting Started',
                autogenerate: { directory: 'getting-started', collapsed: true },
            },
            {
                label: 'Concepts',
                autogenerate: { directory: 'concepts', collapsed: true },
            },
            {
                label: 'Federation',
                autogenerate: { directory: 'federation', collapsed: true },
            },
            {
                label: 'CLI',
                autogenerate: { directory: 'cli', collapsed: true },
            },
            {
                label: 'Studio',
                autogenerate: { directory: 'studio', collapsed: true },
            },
            {
                label: 'Router',
                autogenerate: { directory: 'router', collapsed: true },
            },
            {
                label: 'Control Plane',
                autogenerate: { directory: 'control-plane', collapsed: true },
            },
            {
                label: 'Deployments and Hosting',
                autogenerate: { directory: 'deployments-and-hosting', collapsed: true },
            },

        ],
		}), markdoc({ allowHTML: true })],
});