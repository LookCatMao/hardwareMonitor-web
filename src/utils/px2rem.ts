import { width } from "/@/utils/use/useAutoFit"

export function px2rem(px: number) {
	const scale = width.value / 1920
	return px * Math.min(scale, 10)
}
