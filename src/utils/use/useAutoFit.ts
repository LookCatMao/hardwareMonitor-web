import { ref } from "vue"

export const width = ref(960)
export const height = ref(540)
export const onload = ref(false)

// TODO: 有概率出现宽度模式与高度模式瞬时切换的BUG
// TODO: 原生分辨率作为配置项引入
// TODO: rem2px小于12时发出警告
export function calcSize() {
	const wrapperWidth = width.value
	const wrapperHeight = height.value
	const widthScale = window.innerWidth / wrapperWidth
	const heightScale = window.innerHeight / wrapperHeight
	if (wrapperWidth * widthScale <= window.innerWidth && wrapperHeight * widthScale <= window.innerHeight) {
		// 使用宽度比例作为计算基准
		width.value = wrapperWidth * widthScale
		height.value = wrapperHeight * widthScale
	} else {
		// 使用高度比例作为计算基准
		width.value = wrapperWidth * heightScale
		height.value = wrapperHeight * heightScale
	}
	const scale = width.value / 1920
	document.documentElement.style.fontSize = 16 * Math.min(scale, 10) + "px"
	onload.value = true
}
