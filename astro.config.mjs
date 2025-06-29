// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Lenguaje Quetzal',
			description: 'Documentación oficial del Lenguaje de Programación Quetzal',
			logo: {
				src: './src/assets/logo_lenguaje_quetzal.png',
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
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/AntaresGT/lenguaje-quetzal' },
				{ icon: 'external', label: 'AntaresGT', href: 'https://antaresgt.com' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Inicio',
					items: [
						{ label: 'Introducción', link: '/introduccion/' },
						{ label: 'Instalación', link: '/instalacion/' },
						{ label: 'Primeros pasos', link: '/primeros-pasos/' },
					],
				},
				{
					label: 'Fundamentos',
					items: [
						{ label: 'Sintaxis básica', link: '/fundamentos/sintaxis-basica/' },
						{ label: 'Tipos de datos', link: '/fundamentos/tipos-datos/' },
						{ label: 'Variables', link: '/fundamentos/variables/' },
						{ label: 'Operadores', link: '/fundamentos/operadores/' },
						{ label: 'Comentarios', link: '/fundamentos/comentarios/' },
					],
				},
				{
					label: 'Estructuras de control',
					items: [
						{ label: 'Condicionales', link: '/control/condicionales/' },
						{ label: 'Bucles', link: '/control/bucles/' },
						{ label: 'Excepciones', link: '/control/excepciones/' },
					],
				},
				{
					label: 'Funciones y objetos',
					items: [
						{ label: 'Funciones', link: '/funciones/definicion/' },
						{ label: 'Funciones asíncronas', link: '/funciones/asincronas/' },
						{ label: 'Objetos y clases', link: '/objetos/clases/' },
						{ label: 'Módulos', link: '/objetos/modulos/' },
					],
				},
				{
					label: 'Características avanzadas',
					items: [
						{ label: 'Listas', link: '/avanzado/listas/' },
						{ label: 'JSON nativo', link: '/avanzado/json/' },
						{ label: 'Conversiones de tipos', link: '/avanzado/conversiones/' },
						{ label: 'Entrada y salida', link: '/avanzado/entrada-salida/' },
					],
				},
				{
					label: 'Ejemplos',
					items: [
						{ label: 'Ejemplos básicos', link: '/ejemplos/basicos/' },
						{ label: 'Ejemplos avanzados', link: '/ejemplos/avanzados/' },
						{ label: 'Proyectos completos', link: '/ejemplos/proyectos/' },
					],
				},
				{
					label: 'Herramientas',
					items: [
						{ label: 'Extensión VS Code', link: '/herramientas/vscode/' },
						{ label: 'Compilador', link: '/herramientas/compilador/' },
					],
				},
				{
					label: 'Referencia',
					items: [
						{ label: 'Palabras reservadas', link: '/referencia/palabras-reservadas/' },
						{ label: 'API completa', link: '/referencia/api/' },
						{ label: 'Sintaxis completa', link: '/referencia/sintaxis/' },
					],
				},
			],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
