// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				es: 'Lenguaje Quetzal',
				en: 'Quetzal Language',
				id: 'Bahasa Quetzal',
				ja: 'ケツァル語',
			},
			defaultLocale: 'es',
			locales: {
				es: {
					label: 'Español',
					lang: 'es',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
				id: {
					label: 'Bahasa Indonesia',
					lang: 'id',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				}
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AntaresGT/lenguaje-quetzal' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
