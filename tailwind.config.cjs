/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",

	theme: {
		extend: {

			backgroundImage: {
				'background-cool': "url('/background.jpg')",

			},
			keyframes: {
				show: {
					'0%': {
						transform: 'translate(-200px,0)',
						opacity: "0"
					},
					'100%': {
						translate: 'translate(0px,0px)',
						opacity: "1"
					},
				},
				subTitle: {
					'0%': {
						transform: 'translate(200px,0)',
						opacity: "0"
					},
					'100%': {
						translate: 'translate(0px,0px)',
						opacity: "0.8"
					},
				},
				backgroundAnimate: {
					'0%': {
						transform: 'scale(1.1)',
					},
					'100%': {
						transform: 'scale(1.1)',
						transform: 'rotate(360deg)',
					}
				}
			},
			animation: {
				titleShow: 'show 1s ease-in-out forwards',
				subTitleShow: 'subTitle 1s ease-in-out forwards ',
				backgroundAnimate: 'backgroundAnimate 2s ease-in-out forwards',
			},


			colors: {
				primary: 'var(--aw-color-primary)',
				secondary: 'var(--aw-color-secondary)',
				accent: 'var(--aw-color-accent)',
				default: 'var(--aw-color-text-default)',
				muted: 'var(--aw-color-text-muted)',
				bg: {
					body: "rgb(var(--color-bg-body) / <alpha-value>)",
					code: "rgb(var(--color-bg-code) / <alpha-value>)",
					selection: "rgb(var(--color-bg-selection) / <alpha-value>)",
					card: "rgb(var(--color-bg-card) / <alpha-value>)",
				},
				text: {
					body: "rgb(var(--color-text-body) / <alpha-value>)",
					bold: "rgb(var(--color-text-bold) / <alpha-value>)",
					heading: "rgb(var(--color-text-heading) / <alpha-value>)",
					subHeading: "rgb(var(--color-text-sub-heading) / <alpha-value>)",
					muted: "rgb(var(--color-text-muted) / <alpha-value>)",
					code: "rgb(var(--color-text-code) / <alpha-value>)",
					link: "rgb(var(--color-text-link) / <alpha-value>)",
					selection: "rgb(var(--color-text-selection) / <alpha-value>)",
					subHeadingCard: "rgb(var(--color-text-sub-heading-card) / <alpha-value>)",
				},
				border: {
					code: "rgb(var(--color-border-code) / <alpha-value>)",
					card: "rgb(var(--color-card-border) / <alpha-value>)",
				},

			},
			fontFamily: {
				heading: ['FjallaOne'],
				body: ['Inter Regular', ...defaultTheme.fontFamily.sans],

			},
		},
	},
	plugins: [],

}
