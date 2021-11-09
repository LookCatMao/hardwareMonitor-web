module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gradientColorStops: {
				titleGradientFrom: "rgb(31,224,246,.2)",
				titleGradientTo: "rgb(19,35,43,.0)"
			},
			backgroundColor: {
				base: "#0f201f"
			},
			borderColor: {
				base: "#088988"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
