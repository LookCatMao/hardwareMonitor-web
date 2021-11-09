// import { baseSize } from "@/utils/rem"

export function px2rem(px: number) {
	const scale = document.documentElement.clientWidth / 1024
	return px * Math.min(scale, 10)
}
