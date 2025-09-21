/** @type {import('tailwindcss').Config} */
export default {
  	"content": [
    		"./src/**/*.{js,jsx,ts,tsx}"
  	],
  	"theme": {
    		"extend": {
      			"colors": {
        				"gray": {
          					"100": "#fafafa",
          					"200": "#27272a",
          					"300": "#18181b",
          					"400": "rgba(255, 255, 255, 0.6)",
          					"500": "rgba(255, 255, 255, 0.25)"
        				},
        				"darkgray": "#a1a1aa",
        				"darkslategray": {
          					"100": "#3f3f46",
          					"200": "#2b3a5c"
        				},
        				"whitesmoke": {
          					"100": "#f8fafc",
          					"200": "rgba(248, 250, 252, 0)"
        				},
        				"white": "#fff",
        				"sandybrown": "#fdba74",
        				"lightskyblue": "#93c5fd",
        				"goldenrod": "#fcd34d",
        				"lightgray": "#d4d4d8",
        				"mediumpurple": "#818cf8",
        				"dimgray": "#71717a"
      			},
      			"fontFamily": {
        				"manrope": "Manrope",
        				"dm-sans": "DM Sans"
      			}
    		}
  	},
  	"corePlugins": {
    		"preflight": false
  	}
}