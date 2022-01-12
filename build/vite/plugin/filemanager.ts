import { filemanager } from "vite-plugin-filemanager"
import type { Plugin } from "vite"
import pkg from "../../../package.json"

export function configFileManagerConfig(): Plugin {
	const { name } = pkg
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	return filemanager({
		source: "./dist/",
		destination: `./${name}-${year}${month}${day}${hour}${minute}.tar`
	}) as any
}
