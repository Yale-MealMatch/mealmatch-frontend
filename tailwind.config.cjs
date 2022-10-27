const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	daisyui: {
		themes: ["cupcake"]
	},

	plugins: [require('@tailwindcss/forms'), require("daisyui")]
};

module.exports = config;
