// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Rattus Norvegicus',
			social: [{ icon: 'github', label: 'My Github', href: 'https://github.com/HopedCrown' }],
			sidebar: [
				{
					label: 'Information',
					autogenerate: { directory: 'info' },
				},
				{
					label: 'Sources',
					autogenerate: {directory: 'sources'}
				},
			],
		}),
	],
});
