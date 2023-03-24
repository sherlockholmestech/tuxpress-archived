/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"JetBrainsMono Nerd Font"', 'monospace'],
			},
			colors: {
				base: '#1e1e2e',
				text: '#cdd6f4',
				subtext1: '#bac2de',
				subtext0: '#a6adc8',
				accent: '#89b4fa',
				overlay2: '#9399b2',
				mantle: '#181825',
			},
			fontSize: {
				'paragraph': '10pt',
			}
		},
	},
	plugins: [],
}
