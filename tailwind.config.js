module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				red: '#330505',
				'body-text': '#FAF9F3',
				grey: '#AB7777',
				'kechup-stroke': '#9A0707',
				'ketchup-color': '#D45252',
				orange: '#F8A11E',
				'secondary-white': '#FDF1C4',
				'secondary-yellow': '#FFE897',
				black: '#330505'
			},
			boxShadow: {
				logo: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
			},
			backgroundImage: {
				gradient: "url('src/assets/images/icons/background-gradient.svg')",
				'ketcup-splash': "url('src/assets/images/ketcup splash.png')",
				'ketcup-splash-2': "url('src/assets/images/ketcup splash 2.png')",
				'mickael-jackson-dog':
					"url('src/assets/images/gan0nd0rf_Mickael_Jackson_dog_74192ce6-4987-49e6-94f9-a8535c0f9e9d.png')"
			},
			fontFamily: {
				Baloo: 'Baloo',
				Anek: 'Anek'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
