import vue from "@vitejs/plugin-vue"
import legacy from "@vitejs/plugin-legacy"
import { defineConfig } from "vite"
import { resolve } from "path"
import { VitePWA } from "vite-plugin-pwa"

function pathResolve(dir: string) {
	return resolve(process.cwd(), ".", dir)
}

export default defineConfig({
	server: {
		port: 5000,
		host: true
	},
	plugins: [
		vue(),
		VitePWA({
			manifest: {
				short_name: "Vite",
				name: "Vite",
				display: "fullscreen"
			}
		}),
		legacy({
			targets: ["defaults", "not IE 11"]
		})
	],
	optimizeDeps: {
		include: ["echarts-liquidfill", "echarts"]
	},
	resolve: {
		alias: [
			// /@/xxxx => src/xxxx
			{
				find: /@\//,
				replacement: pathResolve("src") + "/"
			},
			// @/xxxx => src/xxxx
			{
				find: "@",
				replacement: pathResolve("src") + "/"
			},
			// /#/xxxx => types/xxxx
			{
				find: /#\//,
				replacement: pathResolve("types") + "/"
			}
			// ['@vue/compiler-sfc', '@vue/compiler-sfc/dist/compiler-sfc.esm-browser.js'],
		]
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	}
})
