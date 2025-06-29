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
			description: 'Documentación oficial del Lenguaje de Programación Quetzal v0.0.1',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
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
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/AntaresGT/lenguaje-quetzal' 
				}
			],
			editLink: {
				baseUrl: 'https://github.com/AntaresGT/lenguaje-quetzal-documentacion/edit/main/',
			},
			favicon: '/favicon.ico',
			logo: {
				src: './src/assets/logo_lenguaje_quetzal.png',
				replacesTitle: false,
			},
			sidebar: [
				{
					label: 'Introducción',
					translations: {
						en: 'Introduction',
						id: 'Pengenalan',
						ja: '概要',
					},
					items: [
						{ 
							label: 'Bienvenido a Quetzal',
							translations: {
								en: 'Welcome to Quetzal',
								id: 'Selamat Datang di Quetzal',
								ja: 'ケツァルへようこそ',
							},
							slug: 'introduccion/bienvenido' 
						},
						{ 
							label: 'Instalación',
							translations: {
								en: 'Installation',
								id: 'Instalasi',
								ja: 'インストール',
							},
							slug: 'introduccion/instalacion' 
						},
						{ 
							label: 'Tu primer programa',
							translations: {
								en: 'Your first program',
								id: 'Program pertama Anda',
								ja: '最初のプログラム',
							},
							slug: 'introduccion/primer-programa' 
						},
					],
				},
				{
					label: 'Fundamentos',
					translations: {
						en: 'Fundamentals',
						id: 'Dasar-dasar',
						ja: '基礎',
					},
					items: [
						{
							label: 'Sintaxis básica',
							translations: {
								en: 'Basic syntax',
								id: 'Sintaks dasar',
								ja: '基本構文',
							},
							slug: 'fundamentos/sintaxis-basica'
						},
						{
							label: 'Tipos de datos',
							translations: {
								en: 'Data types',
								id: 'Tipe data',
								ja: 'データ型',
							},
							slug: 'fundamentos/tipos-datos'
						},
						{
							label: 'Variables y constantes',
							translations: {
								en: 'Variables and constants',
								id: 'Variabel dan konstanta',
								ja: '変数と定数',
							},
							slug: 'fundamentos/variables-constantes'
						},
						{
							label: 'Operadores',
							translations: {
								en: 'Operators',
								id: 'Operator',
								ja: '演算子',
							},
							slug: 'fundamentos/operadores'
						},
						{
							label: 'Comentarios',
							translations: {
								en: 'Comments',
								id: 'Komentar',
								ja: 'コメント',
							},
							slug: 'fundamentos/comentarios'
						},
					],
				},
				{
					label: 'Estructuras de control',
					translations: {
						en: 'Control structures',
						id: 'Struktur kontrol',
						ja: '制御構造',
					},
					items: [
						{
							label: 'Condicionales',
							translations: {
								en: 'Conditionals',
								id: 'Kondisional',
								ja: '条件文',
							},
							slug: 'control/condicionales'
						},
						{
							label: 'Bucles',
							translations: {
								en: 'Loops',
								id: 'Perulangan',
								ja: 'ループ',
							},
							slug: 'control/bucles'
						},
						{
							label: 'Control de flujo',
							translations: {
								en: 'Flow control',
								id: 'Kontrol alur',
								ja: 'フロー制御',
							},
							slug: 'control/flujo'
						},
					],
				},
				{
					label: 'Funciones',
					translations: {
						en: 'Functions',
						id: 'Fungsi',
						ja: '関数',
					},
					items: [
						{
							label: 'Definición de funciones',
							translations: {
								en: 'Function definition',
								id: 'Definisi fungsi',
								ja: '関数定義',
							},
							slug: 'funciones/definicion'
						},
						{
							label: 'Parámetros y argumentos',
							translations: {
								en: 'Parameters and arguments',
								id: 'Parameter dan argumen',
								ja: 'パラメータと引数',
							},
							slug: 'funciones/parametros'
						},
						{
							label: 'Funciones asíncronas',
							translations: {
								en: 'Asynchronous functions',
								id: 'Fungsi asinkron',
								ja: '非同期関数',
							},
							slug: 'funciones/asincronas'
						},
					],
				},
				{
					label: 'Estructuras de datos',
					translations: {
						en: 'Data structures',
						id: 'Struktur data',
						ja: 'データ構造',
					},
					items: [
						{
							label: 'Listas',
							translations: {
								en: 'Lists',
								id: 'Daftar',
								ja: 'リスト',
							},
							slug: 'datos/listas'
						},
						{
							label: 'Objetos JSON',
							translations: {
								en: 'JSON Objects',
								id: 'Objek JSON',
								ja: 'JSONオブジェクト',
							},
							slug: 'datos/json'
						},
						{
							label: 'Conversión de tipos',
							translations: {
								en: 'Type conversion',
								id: 'Konversi tipe',
								ja: '型変換',
							},
							slug: 'datos/conversion-tipos'
						},
					],
				},
				{
					label: 'Programación orientada a objetos',
					translations: {
						en: 'Object-oriented programming',
						id: 'Pemrograman berorientasi objek',
						ja: 'オブジェクト指向プログラミング',
					},
					items: [
						{
							label: 'Clases y objetos',
							translations: {
								en: 'Classes and objects',
								id: 'Kelas dan objek',
								ja: 'クラスとオブジェクト',
							},
							slug: 'oop/clases-objetos'
						},
						{
							label: 'Constructores',
							translations: {
								en: 'Constructors',
								id: 'Konstruktor',
								ja: 'コンストラクタ',
							},
							slug: 'oop/constructores'
						},
						{
							label: 'Modificadores de acceso',
							translations: {
								en: 'Access modifiers',
								id: 'Pengubah akses',
								ja: 'アクセス修飾子',
							},
							slug: 'oop/modificadores-acceso'
						},
					],
				},
				{
					label: 'Módulos y paquetes',
					translations: {
						en: 'Modules and packages',
						id: 'Modul dan paket',
						ja: 'モジュールとパッケージ',
					},
					items: [
						{
							label: 'Importar y exportar',
							translations: {
								en: 'Import and export',
								id: 'Impor dan ekspor',
								ja: 'インポートとエクスポート',
							},
							slug: 'modulos/importar-exportar'
						},
						{
							label: 'Organización de código',
							translations: {
								en: 'Code organization',
								id: 'Organisasi kode',
								ja: 'コード構成',
							},
							slug: 'modulos/organizacion'
						},
					],
				},
				{
					label: 'Manejo de errores',
					translations: {
						en: 'Error handling',
						id: 'Penanganan kesalahan',
						ja: 'エラーハンドリング',
					},
					items: [
						{
							label: 'Excepciones',
							translations: {
								en: 'Exceptions',
								id: 'Pengecualian',
								ja: '例外',
							},
							slug: 'errores/excepciones'
						},
						{
							label: 'Try-catch-finally',
							translations: {
								en: 'Try-catch-finally',
								id: 'Try-catch-finally',
								ja: 'Try-catch-finally',
							},
							slug: 'errores/try-catch'
						},
					],
				},
				{
					label: 'Entrada y salida',
					translations: {
						en: 'Input and output',
						id: 'Input dan output',
						ja: '入出力',
					},
					items: [
						{
							label: 'Consola',
							translations: {
								en: 'Console',
								id: 'Konsol',
								ja: 'コンソール',
							},
							slug: 'io/consola'
						},
						{
							label: 'Archivos',
							translations: {
								en: 'Files',
								id: 'File',
								ja: 'ファイル',
							},
							slug: 'io/archivos'
						},
					],
				},
				{
					label: 'Referencia',
					translations: {
						en: 'Reference',
						id: 'Referensi',
						ja: 'リファレンス',
					},
					items: [
						{
							label: 'Palabras reservadas',
							translations: {
								en: 'Reserved words',
								id: 'Kata kunci',
								ja: '予約語',
							},
							slug: 'referencia/palabras-reservadas'
						},
						{
							label: 'Funciones integradas',
							translations: {
								en: 'Built-in functions',
								id: 'Fungsi bawaan',
								ja: '組み込み関数',
							},
							slug: 'referencia/funciones-integradas'
						},
						{
							label: 'Gramática completa',
							translations: {
								en: 'Complete grammar',
								id: 'Tata bahasa lengkap',
								ja: '完全な文法',
							},
							slug: 'referencia/gramatica'
						},
					],
				},
				{
					label: 'Ejemplos',
					translations: {
						en: 'Examples',
						id: 'Contoh',
						ja: '例',
					},
					items: [
						{
							label: 'Ejemplos básicos',
							translations: {
								en: 'Basic examples',
								id: 'Contoh dasar',
								ja: '基本例',
							},
							slug: 'ejemplos/basicos'
						},
						{
							label: 'Proyectos de muestra',
							translations: {
								en: 'Sample projects',
								id: 'Proyek contoh',
								ja: 'サンプルプロジェクト',
							},
							slug: 'ejemplos/proyectos'
						},
						{
							label: 'Mejores prácticas',
							translations: {
								en: 'Best practices',
								id: 'Praktik terbaik',
								ja: 'ベストプラクティス',
							},
							slug: 'ejemplos/mejores-practicas'
						},
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: 'quetzal, programming language, lenguaje programación, rust, intérprete, español',
					},
				},
			],
		}),
	],
});
