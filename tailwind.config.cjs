const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				error: colors.red
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
