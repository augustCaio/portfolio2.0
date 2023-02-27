/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'sans':'Ubuntu, sans-serif'
			},
			colors:{
				'dark-purple-caio':'#282A36',
				'medium-purple-caio':'#44475A',
				'hover-pink':'#FF79C6',
				'office-white':'#F8F8F2',
				'green-caio':'#50FA7B',
				'yellow-caio':'#F1FA8C',
				'light-purple-caio':'#BD93F9',
			}
		},
	},
	plugins: [],
}
