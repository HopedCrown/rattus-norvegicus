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
					collapsed: false,
					autogenerate: { directory: 'info'},
				},
				{
					label: 'Project — Information',
					collapsed: true,
					autogenerate: {directory: 'rubric'}
				},
				{
					label: 'Sources',
					collapsed: true,
					autogenerate: {directory: 'sources'}
				},
				{
					label: 'Citations',
					collapsed: true,
					autogenerate: {directory: 'refs'}
				}
			],
		}),
	],
});
